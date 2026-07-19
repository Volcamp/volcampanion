import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useConferenceData } from '../hooks/DataContext'
import { useFavorites } from '../hooks/useFavorites'
import { formatDayLabel, speakersForTalk } from '../data/selectors'
import { TAB_ICONS } from '../data/icons'
import { AppBar } from '../components/AppBar'
import { TalkCard } from '../components/TalkCard'
import { Loader, ErrorState } from '../components/States'
import type { Talk } from '../data/types'

export function Favorites() {
  const { data, loading, error, speakerById, reload } = useConferenceData()
  const { ids } = useFavorites()

  const byDay = useMemo(() => {
    if (!data) return []
    const favSet = new Set(ids)
    const favTalks = data.talks
      .filter((t) => favSet.has(t.id))
      .sort((a, b) => a.day.localeCompare(b.day) || a.startMinutes - b.startMinutes || a.room.localeCompare(b.room, 'fr'))
    const groups = new Map<string, Talk[]>()
    for (const t of favTalks) {
      const list = groups.get(t.day) ?? []
      list.push(t)
      groups.set(t.day, list)
    }
    return [...groups.entries()]
  }, [data, ids])

  if (loading) return <Loader />
  if (error || !data) return <ErrorState message={error?.message ?? 'Données indisponibles'} onRetry={reload} />

  return (
    <>
      <AppBar title="Mes favoris" icon={TAB_ICONS.favoris} />
      {byDay.length === 0 ? (
        <div className="empty">
          <p>Vous n'avez pas encore de favori.</p>
          <p>
            Parcourez le <Link to="/">programme</Link> et touchez l'étoile ☆ d'un talk pour l'ajouter.
          </p>
        </div>
      ) : (
        byDay.map(([day, talks]) => (
          <section key={day}>
            <p className="section-title">{formatDayLabel(day)}</p>
            <div className="agenda__talks">
              {talks.map((talk) => (
                <TalkCard key={talk.id} talk={talk} speakers={speakersForTalk(talk, speakerById)} showTime />
              ))}
            </div>
          </section>
        ))
      )}
    </>
  )
}
