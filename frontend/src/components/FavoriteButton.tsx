import { useFavorites } from '../hooks/useFavorites'

interface Props {
  talkId: string
  variant?: 'icon' | 'full'
}

export function FavoriteButton({ talkId, variant = 'icon' }: Props) {
  const { has, toggle } = useFavorites()
  const active = has(talkId)
  const label = active ? 'Retirer des favoris' : 'Ajouter aux favoris'

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggle(talkId)
  }

  if (variant === 'full') {
    return (
      <button
        type="button"
        className={`btn btn--block fav-btn ${active ? 'fav-btn--on' : ''}`}
        aria-pressed={active}
        onClick={onClick}
      >
        <span aria-hidden="true">{active ? '★' : '☆'}</span>
        {active ? 'Dans mes favoris' : 'Ajouter aux favoris'}
      </button>
    )
  }

  return (
    <button
      type="button"
      className={`fav-star ${active ? 'fav-star--on' : ''}`}
      aria-label={label}
      aria-pressed={active}
      title={label}
      onClick={onClick}
    >
      {active ? '★' : '☆'}
    </button>
  )
}
