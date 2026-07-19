#!/usr/bin/env node
/**
 * Volcampanion data generator.
 *
 * Pulls the public Volcamp Jekyll content (talks, speakers, config) from
 * github.com/Volcamp/volcamp.github.io and produces a single JSON bundle that
 * the PWA fetches at runtime. No backend, no database — the conference content
 * is the source of truth.
 *
 * Run with: npm run generate-data
 */
import matter from 'gray-matter'
import { marked } from 'marked'
import sharp from 'sharp'
import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO = 'Volcamp/volcamp.github.io'
const BRANCH = 'master'
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`
const TREE_API = `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`
const IMAGE_BASE = 'https://www.volcamp.io/asset/images/speakers'

const EDITION_YEAR = 2026
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = resolve(ROOT, 'public', 'data', 'volcamp-2026.json')
const SPEAKER_IMG_DIR = resolve(ROOT, 'public', 'img', 'speakers')
const AVATAR_SIZE = 192

/** GitHub token (optional) lifts the 60 req/h unauthenticated rate limit in CI. */
const GH_HEADERS = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : {}

async function fetchText(url, headers = {}) {
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`GET ${url} → ${res.status} ${res.statusText}`)
  return res.text()
}

async function fetchJson(url, headers = {}) {
  return JSON.parse(await fetchText(url, headers))
}

/** Run promise-returning tasks with a small concurrency cap. */
async function mapLimit(items, limit, fn) {
  const out = new Array(items.length)
  let i = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++
      out[idx] = await fn(items[idx], idx)
    }
  })
  await Promise.all(workers)
  return out
}

/** Minimal parser for the flat top-level keys we need out of _config.yml. */
function readConfigValue(yaml, key) {
  const re = new RegExp(`^${key}\\s*:\\s*(.+?)\\s*$`, 'm')
  const m = yaml.match(re)
  if (!m) return undefined
  return m[1].replace(/^['"]|['"]$/g, '').trim()
}

/** Fold accents + case so the fragile talk↔speaker name join is resilient. */
function normalizeName(name) {
  return String(name)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

/** "01/10/2026" → "2026-10-01". */
function slotToIsoDay(slot) {
  if (!slot) return ''
  const [dd, mm, yyyy] = String(slot).split('/')
  if (!dd || !mm || !yyyy) return ''
  return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`
}

/** "10h15" → 615 (minutes since midnight); used for chronological sorting. */
function timeToMinutes(time) {
  const m = String(time || '').match(/(\d{1,2})\s*h\s*(\d{2})?/i)
  if (!m) return Number.MAX_SAFE_INTEGER
  return Number(m[1]) * 60 + Number(m[2] || 0)
}

/** Fix known typos / inconsistent room names in the source data. */
const ROOM_FIXES = { Showrom: 'Showroom' }
function normalizeRoom(room) {
  const r = String(room || '').trim()
  return ROOM_FIXES[r] || r
}

/** Decode the few HTML entities used in the agenda include. */
function decodeEntities(s) {
  return String(s)
    .replace(/&eacute;/g, 'é')
    .replace(/&egrave;/g, 'è')
    .replace(/&agrave;/g, 'à')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/<[^>]+>/g, '')
    .trim()
}

/** Map the break's CSS class to a semantic kind (drives the UI icon). */
function breakKind(cssClass) {
  const c = cssClass.toLowerCase()
  if (c.includes('ptidej')) return 'welcome'
  if (c.includes('dej')) return 'lunch'
  if (c.includes('party')) return 'party'
  return 'pause'
}

/**
 * Breaks (accueil café, pauses, déjeuner, soirée) aren't in `_talks/` — they're
 * hardcoded in the Jekyll agenda include. Each is a full-width `<td class="break …">`
 * row whose start time is the preceding `<td class="schedule">` cell and whose end
 * time is the next one. Two day sections are marked by `{{ site.day1/2 }}`.
 */
function parseBreaks(html, days) {
  const breaks = []
  let dayIdx = -1
  let curTime = ''
  let pending = []
  for (const line of html.split('\n')) {
    if (line.includes('{{ site.day1 }}')) {
      dayIdx = 0
      curTime = ''
      pending = []
    } else if (line.includes('{{ site.day2 }}')) {
      dayIdx = 1
      curTime = ''
      pending = []
    }

    const sched = line.match(/class="schedule"[^>]*>\s*(\d{1,2}h\d{2})/)
    if (sched) {
      for (const p of pending) p.timeEnd = sched[1]
      pending = []
      curTime = sched[1]
      continue
    }

    const brk = line.match(/class="break([^"]*)"[^>]*>\s*<h3>(.*?)<\/h3>/i)
    if (brk && dayIdx >= 0 && days[dayIdx] && curTime) {
      const entry = {
        id: `break-${days[dayIdx]}-${curTime}`,
        day: days[dayIdx],
        title: decodeEntities(brk[2]),
        kind: breakKind(brk[1]),
        timeStart: curTime,
        timeEnd: '',
        startMinutes: timeToMinutes(curTime),
        endMinutes: 0,
      }
      breaks.push(entry)
      pending.push(entry)
    }
  }
  for (const b of breaks) {
    b.endMinutes = b.timeEnd ? timeToMinutes(b.timeEnd) : b.startMinutes
  }
  breaks.sort((a, b) => a.day.localeCompare(b.day) || a.startMinutes - b.startMinutes)
  return breaks
}

function cleanHandle(value) {
  if (!value) return undefined
  const v = String(value).trim()
  if (!v || v.toLowerCase() === 'none') return undefined
  return v
}

async function mdToHtml(markdown) {
  return (await marked.parse(markdown || '', { async: true })).trim()
}

/**
 * Download each speaker photo once and store a small local WebP avatar, so the
 * app serves tiny same-origin images (cacheable by the service worker, fast,
 * offline-friendly) instead of full-resolution photos from volcamp.io.
 * Rewrites `photoUrl` to the local path; on failure keeps the remote URL.
 */
async function optimizePhotos(speakers) {
  await mkdir(SPEAKER_IMG_DIR, { recursive: true })
  let ok = 0
  await mapLimit(speakers, 8, async (sp) => {
    if (!sp.photoUrl || !sp.photoUrl.startsWith('http')) return
    try {
      const res = await fetch(sp.photoUrl)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      await sharp(buf)
        .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: 'cover', position: sharp.strategy.attention })
        .webp({ quality: 78 })
        .toFile(resolve(SPEAKER_IMG_DIR, `${sp.id}.webp`))
      sp.photoUrl = `img/speakers/${sp.id}.webp`
      ok++
    } catch {
      /* keep the remote URL as a fallback */
    }
  })
  return ok
}

async function main() {
  console.log('→ Listing repository tree…')
  const tree = await fetchJson(TREE_API, GH_HEADERS)
  const paths = tree.tree.filter((n) => n.type === 'blob').map((n) => n.path)
  const talkPaths = paths.filter((p) => p.startsWith('_talks/') && p.endsWith('.md'))
  const speakerPaths = paths.filter((p) => p.startsWith('_speakers/') && p.endsWith('.md'))
  console.log(`  found ${talkPaths.length} talks, ${speakerPaths.length} speakers`)

  console.log('→ Reading _config.yml…')
  const configYaml = await fetchText(`${RAW}/_config.yml`)
  const edition = {
    name: readConfigValue(configYaml, 'name') || `Volcamp ${EDITION_YEAR}`,
    year: EDITION_YEAR,
    openFeedbackUrl: readConfigValue(configYaml, 'openfeedback-url') || '',
    website: readConfigValue(configYaml, 'url') || 'https://www.volcamp.io',
    cfpUrl: readConfigValue(configYaml, 'cfp-url') || '',
    ticketUrl: readConfigValue(configYaml, 'ticket-url') || '',
    days: [],
  }

  console.log('→ Fetching speakers…')
  const speakerFiles = await mapLimit(speakerPaths, 12, async (path) => ({
    path,
    text: await fetchText(`${RAW}/${path}`),
  }))

  const speakers = []
  const nameToId = new Map()
  for (const { path, text } of speakerFiles) {
    const { data, content } = matter(text)
    const id = path.replace('_speakers/', '').replace(/\.md$/, '')
    const name = (data.title || id).trim()
    const photo = cleanHandle(data.photo)
    speakers.push({
      id,
      name,
      photoUrl: photo ? `${IMAGE_BASE}/${photo}` : '',
      bioHtml: await mdToHtml(content),
      twitter: cleanHandle(data.twitter),
      github: cleanHandle(data.github),
      linkedin: cleanHandle(data.linkedin),
    })
    nameToId.set(normalizeName(name), id)
  }
  speakers.sort((a, b) => a.name.localeCompare(b.name, 'fr'))

  console.log('→ Optimizing speaker photos…')
  const optimized = await optimizePhotos(speakers)
  console.log(`  optimized ${optimized}/${speakers.length} avatars → ${AVATAR_SIZE}px webp`)

  console.log('→ Fetching talks…')
  const talkFiles = await mapLimit(talkPaths, 12, async (path) => ({
    path,
    text: await fetchText(`${RAW}/${path}`),
  }))

  const unmatched = new Set()
  const talks = []
  for (const { path, text } of talkFiles) {
    const { data, content } = matter(text)
    const id = (data.name || path.replace('_talks/', '').replace(/\.md$/, '')).trim()
    const rawSpeakers = Array.isArray(data.speakers)
      ? data.speakers
      : data.speakers
        ? [data.speakers]
        : []
    const speakerIds = []
    for (const raw of rawSpeakers) {
      const match = nameToId.get(normalizeName(raw))
      if (match) speakerIds.push(match)
      else unmatched.add(String(raw).trim())
    }
    talks.push({
      id,
      title: (data.title || '').trim(),
      format: (data.format || '').trim(),
      category: (data.category || '').trim(),
      room: normalizeRoom(data.room),
      day: slotToIsoDay(data.slot),
      timeStart: String(data.time_start || '').trim(),
      timeEnd: String(data.time_end || '').trim(),
      startMinutes: timeToMinutes(data.time_start),
      endMinutes: timeToMinutes(data.time_end),
      abstractHtml: await mdToHtml(content),
      speakerIds,
    })
  }

  // Derive the distinct conference days (chronological) from the talks.
  edition.days = [...new Set(talks.map((t) => t.day).filter(Boolean))].sort()

  talks.sort(
    (a, b) =>
      a.day.localeCompare(b.day) ||
      a.startMinutes - b.startMinutes ||
      a.room.localeCompare(b.room, 'fr'),
  )

  console.log('→ Fetching breaks (agenda include)…')
  let breaks = []
  try {
    const agendaHtml = await fetchText(`${RAW}/_includes/agenda3track.html`)
    breaks = parseBreaks(agendaHtml, edition.days)
  } catch (err) {
    console.warn('⚠ could not parse breaks:', err.message)
  }

  const bundle = { edition, speakers, talks, breaks }

  await mkdir(dirname(OUT), { recursive: true })
  await writeFile(OUT, JSON.stringify(bundle, null, 2) + '\n', 'utf8')

  console.log('\n✔ Wrote', OUT)
  console.log(`  edition:  ${edition.name} (${edition.days.join(', ')})`)
  console.log(`  talks:    ${talks.length}`)
  console.log(`  breaks:   ${breaks.length}`)
  console.log(`  speakers: ${speakers.length}`)
  console.log(`  openFeedbackUrl: ${edition.openFeedbackUrl || '(none)'}`)
  if (unmatched.size) {
    console.warn(
      `\n⚠ ${unmatched.size} talk speaker name(s) had no matching speaker file (kept out of speakerIds):`,
    )
    for (const n of [...unmatched].sort()) console.warn(`    - ${n}`)
  }
}

main().catch((err) => {
  console.error('✖ generate-data failed:', err)
  process.exit(1)
})
