import { useEffect } from 'react'
import { categoryColor } from '../data/selectors'

interface Props {
  open: boolean
  onClose: () => void
  search: string
  onSearch: (value: string) => void
  categories: string[]
  selected: Set<string>
  onToggleCategory: (category: string) => void
  onClear: () => void
  resultCount: number
}

export function FilterSheet({
  open,
  onClose,
  search,
  onSearch,
  categories,
  selected,
  onToggleCategory,
  onClear,
  resultCount,
}: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div className={`sheet-root ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="sheet-overlay" onClick={onClose} />
      <div className="sheet" role="dialog" aria-modal="true" aria-label="Filtres">
        <div className="sheet__handle" />
        <div className="sheet__head">
          <h2 className="sheet__title">Filtres</h2>
          <button type="button" className="sheet__close" aria-label="Fermer" onClick={onClose}>
            ✕
          </button>
        </div>

        <label className="sheet__label" htmlFor="filter-search">
          Recherche
        </label>
        <input
          id="filter-search"
          className="search"
          type="search"
          placeholder="Nom d'un talk ou d'un·e speaker…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />

        <p className="sheet__label">Thèmes</p>
        <div className="sheet__chips">
          {categories.map((cat) => {
            const active = selected.has(cat)
            const color = categoryColor(cat)
            return (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${active ? 'is-active' : ''}`}
                aria-pressed={active}
                style={
                  active
                    ? { background: color, borderColor: color, color: '#fff' }
                    : { borderColor: color }
                }
                onClick={() => onToggleCategory(cat)}
              >
                <span className="filter-chip__dot" style={{ background: color }} aria-hidden="true" />
                {cat}
              </button>
            )
          })}
        </div>

        <div className="sheet__foot">
          <button type="button" className="btn" onClick={onClear}>
            Réinitialiser
          </button>
          <button type="button" className="btn btn--primary" onClick={onClose}>
            Voir {resultCount} talk{resultCount > 1 ? 's' : ''}
          </button>
        </div>
      </div>
    </div>
  )
}
