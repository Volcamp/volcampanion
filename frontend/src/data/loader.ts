import { DATA_CACHE, DATA_URL } from './config'
import type { ConferenceData } from './types'

export interface LoadResult {
  data: ConferenceData
  /** true when the network failed and we served a cached copy. */
  offline: boolean
}

/**
 * Network-first load of the conference bundle so the app syncs on every open,
 * with a Cache Storage fallback so it still works offline. The vite-plugin-pwa
 * service worker also caches this response, but we keep an explicit cache here
 * so the fallback works even before the SW has activated (and in dev).
 */
export async function loadConferenceData(): Promise<LoadResult> {
  try {
    const res = await fetch(DATA_URL, { cache: 'no-cache' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = (await res.json()) as ConferenceData
    void cacheResponse(data)
    return { data, offline: false }
  } catch (networkErr) {
    const cached = await readCache()
    if (cached) return { data: cached, offline: true }
    throw networkErr
  }
}

async function cacheResponse(data: ConferenceData): Promise<void> {
  if (!('caches' in globalThis)) return
  try {
    const cache = await caches.open(DATA_CACHE)
    await cache.put(
      DATA_URL,
      new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }),
    )
  } catch {
    /* best-effort: private mode / quota */
  }
}

async function readCache(): Promise<ConferenceData | null> {
  if (!('caches' in globalThis)) return null
  try {
    const cache = await caches.open(DATA_CACHE)
    const hit = await cache.match(DATA_URL)
    return hit ? ((await hit.json()) as ConferenceData) : null
  } catch {
    return null
  }
}
