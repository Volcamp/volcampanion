import { formatDayShort } from '../data/selectors'

interface Props {
  days: string[]
  active: string
  onChange: (day: string) => void
}

export function DayTabs({ days, active, onChange }: Props) {
  if (days.length < 2) return null
  return (
    <div className="day-tabs" role="tablist" aria-label="Jours de la conférence">
      {days.map((day, i) => (
        <button
          key={day}
          role="tab"
          aria-selected={day === active}
          className={`day-tab ${day === active ? 'is-active' : ''}`}
          onClick={() => onChange(day)}
        >
          <span className="day-tab__n">Jour {i + 1}</span>
          <span className="day-tab__d">{formatDayShort(day)}</span>
        </button>
      ))}
    </div>
  )
}
