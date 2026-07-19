import type { Break, BreakKind } from '../data/types'
import type { TalkTiming } from '../data/selectors'

const ICON: Record<BreakKind, string> = {
  welcome: '☕🥐',
  pause: '☕',
  lunch: '🍽️',
  party: '🎉',
}

export function BreakRow({ brk, timing }: { brk: Break; timing?: TalkTiming }) {
  // Lunch overlaps with lightning talks, so its "end" is fuzzy — don't show it.
  const showEnd = brk.timeEnd && brk.kind !== 'lunch'
  const past = timing === 'past'
  return (
    <section className={`agenda__break agenda__break--${brk.kind} ${past ? 'is-past' : ''}`}>
      <div className="agenda__time">{brk.timeStart}</div>
      <div className="break-banner">
        <span className="break-banner__icon" aria-hidden="true">
          {ICON[brk.kind]}
        </span>
        <span className="break-banner__title">{brk.title}</span>
        {showEnd && <span className="break-banner__time">jusqu'à {brk.timeEnd}</span>}
      </div>
    </section>
  )
}
