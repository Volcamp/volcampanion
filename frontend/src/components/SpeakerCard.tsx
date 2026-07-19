import { Link } from 'react-router-dom'
import type { Speaker } from '../data/types'
import { SpeakerAvatar } from './SpeakerAvatar'

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Link to={`/speakers/${speaker.id}`} className="speaker-card card">
      <SpeakerAvatar speaker={speaker} size={56} />
      <span className="speaker-card__name">{speaker.name}</span>
    </Link>
  )
}
