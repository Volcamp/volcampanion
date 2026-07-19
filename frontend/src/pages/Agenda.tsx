import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useConferenceData } from '../hooks/DataContext'
import {
  buildDayRows,
  distinctCategories,
  formatDayLabel,
  scheduleForDay,
  speakersForTalk,
  talkTiming,
} from '../data/selectors'
import type { Talk } from '../data/types'
import { minutesOfDay, toIsoDay, useNow } from '../hooks/useNow'
import { usePersistentState } from '../hooks/usePersistentState'
import { TAB_ICONS } from '../data/icons'
import { AppBar } from '../components/AppBar'
import { DayTabs } from '../components/DayTabs'
import { FilterSheet } from '../components/FilterSheet'
import { TalkCard } from '../components/TalkCard'
import { BreakRow } from '../components/BreakRow'
import { Loader, ErrorState, OfflineBanner, EmptyState } from '../components/States'

export function Agenda() {
  const { data, loading, error, offline, speakerById, reload } = useConferenceData()
  const days = data?.edition.days ?? []
  const now = useNow()
  const todayIso = toIsoDay(now)
  const nowMinutes = minutesOfDay(now)

  const [activeDay, setActiveDay] = useState<string | null>(null)
  const [search, setSearch] = usePersistentState('volcamp.agenda.search', '')
  const [selectedCats, setSelectedCats] = usePersistentState<string[]>(
    'volcamp.agenda.categories',
    [],
  )
  const selected = useMemo(() => new Set(selectedCats), [selectedCats])
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Default to today's day during the conference, otherwise the first day.
  const defaultDay = days.includes(todayIso) ? todayIso : (days[0] ?? '')
  const day = activeDay ?? defaultDay
  const isToday = day === todayIso

  const categories = useMemo(() => (data ? distinctCategories(data.talks) : []), [data])

  const matches = useCallback(
    (talk: Talk) => {
      if (selected.size > 0 && !selected.has(talk.category)) return false
      const q = search.trim().toLowerCase()
      if (!q) return true
      const names = speakersForTalk(talk, speakerById)
        .map((s) => s.name)
        .join(' ')
      return `${talk.title} ${names}`.toLowerCase().includes(q)
    },
    [search, selected, speakerById],
  )

  const slots = useMemo(
    () => (data ? scheduleForDay(data.talks.filter(matches), day) : []),
    [data, day, matches],
  )
  const resultCount = useMemo(() => slots.reduce((n, s) => n + s.talks.length, 0), [slots])

  const activeFilterCount = selected.size + (search.trim() ? 1 : 0)
  const hasFilters = activeFilterCount > 0

  // Interleave breaks with talk slots — but hide them while filtering.
  const rows = useMemo(() => {
    const dayBreaks = !hasFilters && data ? data.breaks.filter((b) => b.day === day) : []
    return buildDayRows(slots, dayBreaks)
  }, [slots, data, day, hasFilters])

  // First row (of today) that hasn't fully ended yet — the auto-scroll anchor.
  const firstUpcomingIndex = useMemo(() => {
    if (!isToday) return -1
    return rows.findIndex((row) =>
      row.kind === 'slot'
        ? row.slot.talks.some((t) => talkTiming(t, todayIso, nowMinutes) !== 'past')
        : talkTiming(row.brk, todayIso, nowMinutes) !== 'past',
    )
  }, [rows, isToday, todayIso, nowMinutes])

  // Auto-scroll to the current point in the programme, once per visit to today.
  const anchorRef = useRef<HTMLElement | null>(null)
  const scrolledForDay = useRef<string | null>(null)
  useEffect(() => {
    if (!isToday || firstUpcomingIndex <= 0) return
    if (scrolledForDay.current === day) return
    if (!anchorRef.current) return
    scrolledForDay.current = day
    anchorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [isToday, firstUpcomingIndex, day, rows])

  const toggleCategory = useCallback(
    (cat: string) => {
      setSelectedCats((prev) =>
        prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
      )
    },
    [setSelectedCats],
  )

  const clearFilters = useCallback(() => {
    setSearch('')
    setSelectedCats([])
  }, [setSearch, setSelectedCats])

  if (loading) return <Loader />
  if (error || !data) return <ErrorState message={error?.message ?? 'Données indisponibles'} onRetry={reload} />

  return (
    <>
      <AppBar title="Programme" icon={TAB_ICONS.programme} />
      {offline && <OfflineBanner />}
      <DayTabs days={days} active={day} onChange={setActiveDay} />

      <div className="agenda-toolbar">
        <p className="section-title agenda-toolbar__day">{formatDayLabel(day)}</p>
        <button
          type="button"
          className={`filter-toggle ${hasFilters ? 'is-active' : ''}`}
          onClick={() => setFiltersOpen(true)}
          aria-haspopup="dialog"
        >
          <span aria-hidden="true">⚙</span>
          Filtrer
          {activeFilterCount > 0 && <span className="filter-toggle__badge">{activeFilterCount}</span>}
        </button>
      </div>

      {hasFilters && (
        <div className="active-filters">
          {[...selected].map((cat) => (
            <button
              key={cat}
              type="button"
              className="chip active-filters__chip"
              onClick={() => toggleCategory(cat)}
              aria-label={`Retirer le filtre ${cat}`}
            >
              {cat} ✕
            </button>
          ))}
          {search.trim() && (
            <button
              type="button"
              className="chip active-filters__chip"
              onClick={() => setSearch('')}
              aria-label="Effacer la recherche"
            >
              « {search.trim()} » ✕
            </button>
          )}
        </div>
      )}

      {rows.length === 0 ? (
        <EmptyState>
          {hasFilters
            ? 'Aucun talk ne correspond à votre recherche pour cette journée.'
            : 'Aucun talk pour cette journée.'}
        </EmptyState>
      ) : (
        <div className="agenda">
          {rows.map((row, index) => {
            const isAnchor = index === firstUpcomingIndex
            const prev = rows[index - 1]
            const showSep = index > 0 && row.kind === 'slot' && prev?.kind === 'slot'
            const key = row.kind === 'slot' ? `slot-${row.slot.timeStart}` : row.brk.id
            const timing = isToday
              ? talkTiming(
                  row.kind === 'slot' ? row.slot.talks[0] : row.brk,
                  todayIso,
                  nowMinutes,
                )
              : undefined
            return (
              <Fragment key={key}>
                {showSep && <div className="agenda__sep" aria-hidden="true" />}
                {isAnchor && index > 0 && (
                  <div className="now-marker" aria-hidden="true">
                    <span>Maintenant</span>
                  </div>
                )}
                {row.kind === 'break' ? (
                  <section ref={isAnchor ? anchorRef : undefined}>
                    <BreakRow brk={row.brk} timing={timing} />
                  </section>
                ) : (
                  <section
                    className="agenda__slot"
                    ref={isAnchor ? anchorRef : undefined}
                  >
                    <div className="agenda__time">{row.slot.timeStart}</div>
                    <div className="agenda__talks">
                      {row.slot.talks.map((talk) => (
                        <TalkCard
                          key={talk.id}
                          talk={talk}
                          speakers={speakersForTalk(talk, speakerById)}
                          timing={isToday ? talkTiming(talk, todayIso, nowMinutes) : undefined}
                        />
                      ))}
                    </div>
                  </section>
                )}
              </Fragment>
            )
          })}
        </div>
      )}

      <FilterSheet
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        search={search}
        onSearch={setSearch}
        categories={categories}
        selected={selected}
        onToggleCategory={toggleCategory}
        onClear={clearFilters}
        resultCount={resultCount}
      />
    </>
  )
}
