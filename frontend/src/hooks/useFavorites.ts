import { useCallback, useEffect, useState } from 'react'
import { FAVORITES_KEY } from '../data/config'

function read(): string[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

/**
 * Favorites are just an array of talk ids in localStorage. Any component using
 * this hook stays in sync via a window event, including across tabs.
 */
export function useFavorites() {
  const [ids, setIds] = useState<string[]>(read)

  useEffect(() => {
    const sync = () => setIds(read())
    window.addEventListener('favorites-changed', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('favorites-changed', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const persist = useCallback((next: string[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next))
    setIds(next)
    window.dispatchEvent(new Event('favorites-changed'))
  }, [])

  const toggle = useCallback(
    (talkId: string) => {
      const current = read()
      persist(
        current.includes(talkId) ? current.filter((id) => id !== talkId) : [...current, talkId],
      )
    },
    [persist],
  )

  const has = useCallback((talkId: string) => ids.includes(talkId), [ids])

  return { ids, has, toggle, count: ids.length }
}
