import { Link } from 'react-router-dom'
import type { Speaker, Talk } from '../data/types'
import { categoryColor, type TalkTiming } from '../data/selectors'
import { FavoriteButton } from './FavoriteButton'

interface Props {
  talk: Talk
  speakers: Speaker[]
  showTime?: boolean
  timing?: TalkTiming
}

export function TalkCard({ talk, speakers, showTime = false, timing }: Props) {
  const names = speakers.map((s) => s.name).join(', ')
  const cls = ['talk-card', 'card', timing ? `talk-card--${timing}` : ''].filter(Boolean).join(' ')
  return (
    <Link
      to={`/talks/${talk.id}`}
      className={cls}
      style={{ '--accent': categoryColor(talk.category) } as React.CSSProperties}
    >
      <span className="talk-card__accent" aria-hidden="true" />
      <div className="talk-card__body">
        <div className="talk-card__meta">
          {timing === 'live' && <span className="live-badge">● En cours</span>}
          {showTime && talk.timeStart && <span className="talk-card__time">{talk.timeStart}</span>}
          <span className="chip talk-card__room">{talk.room}</span>
          {talk.category && <span className="talk-card__cat">{talk.category}</span>}
        </div>
        <h3 className="talk-card__title">{talk.title}</h3>
        {names && <p className="talk-card__speakers">{names}</p>}
      </div>
      <FavoriteButton talkId={talk.id} />
    </Link>
  )
}
