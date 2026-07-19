import { Link } from 'react-router-dom'
import { AppBar } from '../components/AppBar'

export function NotFound() {
  return (
    <>
      <AppBar title="Introuvable" />
      <div className="center-state">
        <img src={`${import.meta.env.BASE_URL}img/not-found/vol.png`} alt="" width={140} height={140} />
        <p>Cette page n'existe pas.</p>
        <Link className="btn btn--primary" to="/">
          Retour au programme
        </Link>
      </div>
    </>
  )
}
