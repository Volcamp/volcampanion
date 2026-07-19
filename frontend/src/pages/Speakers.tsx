import { useMemo, useState } from 'react'
import { useConferenceData } from '../hooks/DataContext'
import { TAB_ICONS } from '../data/icons'
import { AppBar } from '../components/AppBar'
import { SpeakerCard } from '../components/SpeakerCard'
import { Loader, ErrorState, EmptyState } from '../components/States'

export function Speakers() {
  const { data, loading, error, reload } = useConferenceData()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!data) return []
    const q = query.trim().toLowerCase()
    if (!q) return data.speakers
    return data.speakers.filter((s) => s.name.toLowerCase().includes(q))
  }, [data, query])

  if (loading) return <Loader />
  if (error || !data) return <ErrorState message={error?.message ?? 'Données indisponibles'} onRetry={reload} />

  return (
    <>
      <AppBar title="Speakers" icon={TAB_ICONS.speakers} />
      <input
        className="search"
        type="search"
        placeholder="Rechercher un·e speaker…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Rechercher un speaker"
      />
      {filtered.length === 0 ? (
        <EmptyState>Aucun speaker trouvé.</EmptyState>
      ) : (
        <div className="speaker-grid">
          {filtered.map((s) => (
            <SpeakerCard key={s.id} speaker={s} />
          ))}
        </div>
      )}
    </>
  )
}
