import { useParams } from 'react-router-dom'
import { useConferenceData } from '../hooks/DataContext'
import { speakersForTalk, talksForSpeaker } from '../data/selectors'
import { AppBar } from '../components/AppBar'
import { SpeakerAvatar } from '../components/SpeakerAvatar'
import { SocialLinks } from '../components/SocialLinks'
import { TalkCard } from '../components/TalkCard'
import { Loader, ErrorState, EmptyState } from '../components/States'

export function SpeakerDetail() {
  const { speakerId } = useParams()
  const { data, loading, error, speakerById, reload } = useConferenceData()

  if (loading) return <Loader />
  if (error || !data) return <ErrorState message={error?.message ?? 'Données indisponibles'} onRetry={reload} />

  const speaker = data.speakers.find((s) => s.id === speakerId)
  if (!speaker) {
    return (
      <>
        <AppBar title="Speaker" back />
        <EmptyState>Ce speaker est introuvable.</EmptyState>
      </>
    )
  }

  const talks = talksForSpeaker(speaker.id, data.talks)

  return (
    <>
      <AppBar title="Speaker" back />
      <div className="speaker-detail__head">
        <SpeakerAvatar speaker={speaker} size={96} />
        <h1 className="speaker-detail__name">{speaker.name}</h1>
        <SocialLinks speaker={speaker} />
      </div>

      {speaker.bioHtml && (
        <div className="prose speaker-detail__bio" dangerouslySetInnerHTML={{ __html: speaker.bioHtml }} />
      )}

      {talks.length > 0 && (
        <>
          <p className="section-title">Ses talks</p>
          <div className="agenda__talks">
            {talks.map((talk) => (
              <TalkCard key={talk.id} talk={talk} speakers={speakersForTalk(talk, speakerById)} showTime />
            ))}
          </div>
        </>
      )}
    </>
  )
}
