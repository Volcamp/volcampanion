import { useEffect, useState } from 'react'

/** `?now=2026-10-02T14:30` overrides the clock (QA / demo of the live agenda). */
function readOverride(): Date | null {
  if (typeof window === 'undefined') return null
  const raw = new URLSearchParams(window.location.search).get('now')
  if (!raw) return null
  const d = new Date(raw)
  return Number.isNaN(d.getTime()) ? null : d
}

/** Current time, refreshed every `intervalMs` so "past / live" states stay live. */
export function useNow(intervalMs = 60_000): Date {
  const override = readOverride()
  const [now, setNow] = useState(() => override ?? new Date())
  useEffect(() => {
    if (override) return
    const id = setInterval(() => setNow(new Date()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs, override])
  return override ?? now
}

/** Local date as an ISO day string (YYYY-MM-DD), matching Talk.day. */
export function toIsoDay(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function minutesOfDay(date: Date): number {
  return date.getHours() * 60 + date.getMinutes()
}
