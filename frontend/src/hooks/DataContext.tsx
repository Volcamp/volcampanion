import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { loadConferenceData } from '../data/loader'
import { buildSpeakerMap } from '../data/selectors'
import type { ConferenceData, Speaker } from '../data/types'

interface DataState {
  data: ConferenceData | null
  loading: boolean
  error: Error | null
  offline: boolean
  speakerById: Map<string, Speaker>
  reload: () => void
}

const DataContext = createContext<DataState | null>(null)

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ConferenceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [offline, setOffline] = useState(false)
  const [nonce, setNonce] = useState(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    loadConferenceData()
      .then((res) => {
        if (cancelled) return
        setData(res.data)
        setOffline(res.offline)
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err : new Error(String(err)))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [nonce])

  const speakerById = useMemo(
    () => (data ? buildSpeakerMap(data) : new Map<string, Speaker>()),
    [data],
  )

  const value = useMemo<DataState>(
    () => ({ data, loading, error, offline, speakerById, reload: () => setNonce((n) => n + 1) }),
    [data, loading, error, offline, speakerById],
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useConferenceData(): DataState {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useConferenceData must be used within a DataProvider')
  return ctx
}
