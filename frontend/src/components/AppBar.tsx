import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  back?: boolean
  icon?: string
}

export function AppBar({ title, back = false, icon }: Props) {
  const navigate = useNavigate()
  return (
    <header className="app-bar">
      {back && (
        <button
          type="button"
          className="app-bar__back"
          aria-label="Retour"
          onClick={() => navigate(-1)}
        >
          ‹
        </button>
      )}
      {icon && <img className="app-bar__icon" src={icon} alt="" width={30} height={30} />}
      <span className="app-bar__title">{title}</span>
    </header>
  )
}
