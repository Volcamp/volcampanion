import { Link, useParams } from 'react-router-dom'
import { useConferenceData } from '../hooks/DataContext'
import { categoryColor, formatDayLabel, speakersForTalk } from '../data/selectors'
import { feedbackUrl } from '../data/openfeedback'
import { AppBar } from '../components/AppBar'
import { FavoriteButton } from '../components/FavoriteButton'
import { SpeakerAvatar } from '../components/SpeakerAvatar'
import { Loader, ErrorState, EmptyState } from '../components/States'

export function TalkDetail() {
  const { talkId } = useParams()
  const { data, loading, error, speakerById, reload } = useConferenceData()

  if (loading) return <Loader />
  if (error || !data) return <ErrorState message={error?.message ?? 'Données indisponibles'} onRetry={reload} />

  const talk = data.talks.find((t) => t.id === talkId)
  if (!talk) {
    return (
      <>
        <AppBar title="Talk" back />
        <EmptyState>Ce talk est introuvable.</EmptyState>
      </>
    )
  }

  const speakers = speakersForTalk(talk, speakerById)
  const feedback = feedbackUrl(data.edition, talk)

  return (
    <>
      <AppBar title="Talk" back />
      <article className="talk-detail">
        <div className="talk-detail__meta">
          {talk.category && (
            <span className="chip" style={{ background: categoryColor(talk.category), color: '#fff' }}>
              {talk.category}
            </span>
          )}
          {talk.format && <span className="chip">{talk.format}</span>}
        </div>
        <h1 className="talk-detail__title">{talk.title}</h1>

        <div className="talk-detail__facts">
          <span>📅 {formatDayLabel(talk.day)}</span>
          {talk.timeStart && (
            <span>🕒 {talk.timeStart}{talk.timeEnd ? ` – ${talk.timeEnd}` : ''}</span>
          )}
          {talk.room && <span>📍 {talk.room}</span>}
        </div>

        {speakers.length > 0 && (
          <div className="talk-detail__speakers">
            {speakers.map((s) => (
              <Link key={s.id} to={`/speakers/${s.id}`} className="speaker-inline">
                <SpeakerAvatar speaker={s} size={40} />
                <span>{s.name}</span>
              </Link>
            ))}
          </div>
        )}

        <FavoriteButton talkId={talk.id} variant="full" />

        {talk.abstractHtml && (
          <div className="prose talk-detail__abstract" dangerouslySetInnerHTML={{ __html: talk.abstractHtml }} />
        )}

        {feedback && (
          <a className="btn btn--primary btn--block" href={feedback} target="_blank" rel="noopener noreferrer">
            Donner mon avis ↗
          </a>
        )}
      </article>
    </>
  )
}
