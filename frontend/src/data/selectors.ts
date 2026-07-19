import type { Break, ConferenceData, Speaker, Talk } from './types'

/** A group of talks sharing the same start time, within a day. */
export interface TimeSlot {
  timeStart: string
  startMinutes: number
  talks: Talk[]
}

export interface DaySchedule {
  day: string
  label: string
  slots: TimeSlot[]
}

const DAY_FMT = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

/** "2026-10-01" → "jeudi 1 octobre". */
export function formatDayLabel(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return DAY_FMT.format(new Date(Date.UTC(y, m - 1, d)))
}

/** "2026-10-01" → "jeu. 1" for compact day tabs. */
const SHORT_FMT = new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric' })
export function formatDayShort(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return SHORT_FMT.format(new Date(Date.UTC(y, m - 1, d)))
}

/** Talks for one day grouped into chronological time slots (talks pre-sorted). */
export function scheduleForDay(talks: Talk[], day: string): TimeSlot[] {
  const dayTalks = talks
    .filter((t) => t.day === day)
    .sort(
      (a, b) => a.startMinutes - b.startMinutes || a.room.localeCompare(b.room, 'fr'),
    )
  const slots: TimeSlot[] = []
  for (const talk of dayTalks) {
    const last = slots[slots.length - 1]
    if (last && last.startMinutes === talk.startMinutes) last.talks.push(talk)
    else slots.push({ timeStart: talk.timeStart, startMinutes: talk.startMinutes, talks: [talk] })
  }
  return slots
}

/** Distinct talk categories (themes), Keynote last, then alphabetical. */
export function distinctCategories(talks: Talk[]): string[] {
  const set = new Set(talks.map((t) => t.category).filter(Boolean))
  return [...set].sort((a, b) => {
    if (a === 'Keynote') return 1
    if (b === 'Keynote') return -1
    return a.localeCompare(b, 'fr')
  })
}

export type TalkTiming = 'past' | 'live' | 'upcoming'

type Timed = { day: string; startMinutes: number; endMinutes: number }

/** Where a talk/break sits relative to "now" (todayIso = local ISO day, nowMinutes = minutes since midnight). */
export function talkTiming(item: Timed, todayIso: string, nowMinutes: number): TalkTiming {
  if (item.day < todayIso) return 'past'
  if (item.day > todayIso) return 'upcoming'
  if (item.endMinutes <= nowMinutes) return 'past'
  if (item.startMinutes <= nowMinutes) return 'live'
  return 'upcoming'
}

/** A row in the agenda: either a group of concurrent talks or a full-width break. */
export type AgendaRow =
  | { kind: 'slot'; startMinutes: number; slot: TimeSlot }
  | { kind: 'break'; startMinutes: number; brk: Break }

/** Merge talk slots and breaks of a day into one chronological list. */
export function buildDayRows(slots: TimeSlot[], breaks: Break[]): AgendaRow[] {
  const rows: AgendaRow[] = [
    ...slots.map((slot): AgendaRow => ({ kind: 'slot', startMinutes: slot.startMinutes, slot })),
    ...breaks.map((brk): AgendaRow => ({ kind: 'break', startMinutes: brk.startMinutes, brk })),
  ]
  // Stable-ish: on equal start time, show talks before the break banner.
  return rows.sort(
    (a, b) => a.startMinutes - b.startMinutes || (a.kind === 'break' ? 1 : 0) - (b.kind === 'break' ? 1 : 0),
  )
}

export function buildSpeakerMap(data: ConferenceData): Map<string, Speaker> {
  return new Map(data.speakers.map((s) => [s.id, s]))
}

export function speakersForTalk(talk: Talk, byId: Map<string, Speaker>): Speaker[] {
  return talk.speakerIds.map((id) => byId.get(id)).filter((s): s is Speaker => Boolean(s))
}

export function talksForSpeaker(speakerId: string, talks: Talk[]): Talk[] {
  return talks
    .filter((t) => t.speakerIds.includes(speakerId))
    .sort((a, b) => a.day.localeCompare(b.day) || a.startMinutes - b.startMinutes)
}

/** Deterministic colour per talk category (drives the agenda accent stripe). */
const CATEGORY_COLORS: Record<string, string> = {
  Keynote: '#f4a259',
  'Lang & Frameworks': '#6fc660',
  'Data & AI': '#4c9be6',
  'DevOps & Cloud': '#5b8def',
  'Archi, Perf et Sécu': '#e05a76',
  'UX/UI': '#c06fd4',
  'Sustainable IT': '#2fb28a',
  Découverte: '#f0c419',
}
const FALLBACK_COLORS = ['#6fc660', '#5b8def', '#f4a259', '#c06fd4', '#e05a76', '#2fb28a']

export function categoryColor(category: string): string {
  if (CATEGORY_COLORS[category]) return CATEGORY_COLORS[category]
  let hash = 0
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) | 0
  return FALLBACK_COLORS[Math.abs(hash) % FALLBACK_COLORS.length]
}
