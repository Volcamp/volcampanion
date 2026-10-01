import { useState } from 'react'
import { useConferenceData } from '../hooks/DataContext'
import { formatDayLabel } from '../data/selectors'
import { TAB_ICONS } from '../data/icons'
import { AppBar } from '../components/AppBar'
import { Loader } from '../components/States'

const CLEVER_LOGO =
  'https://www.clever-cloud.com/app/themes/Starter/assets/img/brand-assets/logo_on_white.svg'

const LINK_ICON: Record<string, string> = {
  'Site officiel': '🌐',
  Billetterie: '🎟️',
}

export function Infos() {
  const { data, loading } = useConferenceData()
  const [logoOk, setLogoOk] = useState(true)
  if (loading) return <Loader />

  const edition = data?.edition
  const title = edition ? `${edition.name} ${edition.year}` : 'Volcamp'
  const rooms = data
    ? [...new Set(data.talks.map((t) => t.room).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b, 'fr'),
      )
    : []

  const links = [
    edition?.website && { label: 'Site officiel', url: edition.website },
    edition?.ticketUrl && { label: 'Billetterie', url: edition.ticketUrl },
  ].filter(Boolean) as { label: string; url: string }[]

  return (
    <>
      <AppBar title="Infos" icon={TAB_ICONS.infos} />

      <section className="hero">
        <div className="hero__badge">
          <img src={`${import.meta.env.BASE_URL}img/volcampanion.png`} alt="Volcampanion" />
        </div>
        <h1 className="hero__title">{title}</h1>
        {edition && edition.days.length > 0 && (
          <p className="hero__dates">{edition.days.map((d) => formatDayLabel(d)).join(' · ')}</p>
        )}
        <p className="hero__venue">📍 Hall32 — Clermont-Ferrand</p>
      </section>

      <div className="link-grid">
        {links.map((l) => (
          <a key={l.label} className="link-tile card" href={l.url} target="_blank" rel="noopener noreferrer">
            <span className="link-tile__icon" aria-hidden="true">
              {LINK_ICON[l.label] ?? '🔗'}
            </span>
            <span className="link-tile__label">{l.label}</span>
            <span className="link-tile__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>

      {/* Truffade Quest — the mini-game on the Volcamp booth */}
      <section className="card info-card game-card">
        <img
          className="game-card__mascot"
          src={`${import.meta.env.BASE_URL}img/volcampanion-truffade.webp`}
          alt="Le Volcampanion et sa truffade"
          loading="lazy"
        />
        <div className="info-card__head">
          <span className="info-card__emoji" aria-hidden="true">
            🎮
          </span>
          <div>
            <h2 className="info-card__title">Truffade Quest</h2>
            <p className="info-card__subtitle">Le mini-jeu du stand Volcamp</p>
          </div>
        </div>
        <p className="game-card__pitch">
          Aide le Volcampanion à récolter les 8 ingrédients de la truffade dans la chaîne des
          Puys, puis passe à la poêle. Une partie dure 3 à 4 minutes.
        </p>
        <ul className="game-card__prizes">
          <li>
            <span className="game-card__rank game-card__rank--gold">1er</span>
            <span>
              <strong>2 places pour Volcamp 2027</strong> + 1 magnet
              <span className="game-card__byof">BYOF · Bring Your Own Friend</span>
            </span>
          </li>
          <li>
            <span className="game-card__rank game-card__rank--silver">2e</span>
            <span>
              <strong>1 place pour Volcamp 2027</strong> + 1 magnet
            </span>
          </li>
          <li>
            <span className="game-card__rank game-card__rank--bronze">3→5</span>
            <span>
              <strong>1 magnet collector</strong>
            </span>
          </li>
        </ul>
        <p className="game-card__ceremony">🏆 Remise des prix chaque jour à 15h30</p>
      </section>

      {/* Venue / room plan */}
      <section className="card info-card">
        <div className="info-card__head">
          <span className="info-card__emoji" aria-hidden="true">
            🗺️
          </span>
          <div>
            <h2 className="info-card__title">Plan des salles</h2>
            <p className="info-card__subtitle">Hall32</p>
          </div>
        </div>
        {rooms.length > 0 && (
          <div className="info-card__rooms">
            {rooms.map((r) => (
              <span key={r} className="chip">
                {r}
              </span>
            ))}
          </div>
        )}
        <img
          className="info-card__plan"
          src={`${import.meta.env.BASE_URL}img/plan2024.jpg`}
          alt="Plan des salles du Hall32"
          loading="lazy"
        />
        <p className="info-card__note">
          Un vestiaire est également présent à l'entrée, non loin de l'accueil.
        </p>
      </section>

      {/* Hosting credit */}
      <section className="card info-card info-card--center">
        <div className="info-card__head info-card__head--center">
          <span className="info-card__emoji" aria-hidden="true">
            ❤️
          </span>
          <div>
            <h2 className="info-card__title">Hébergement</h2>
            <p className="info-card__subtitle">Propulsé par Clever Cloud</p>
          </div>
        </div>
        {logoOk && (
          <a href="https://www.clever-cloud.com" target="_blank" rel="noopener noreferrer">
            <img
              className="info-card__clever"
              src={CLEVER_LOGO}
              alt="Clever Cloud"
              onError={() => setLogoOk(false)}
            />
          </a>
        )}
        <p className="info-card__note">
          Un grand merci à Clever Cloud d'héberger Volcampanion pendant toute la durée de
          l'évènement.
        </p>
      </section>

      <p className="info-footnote">
        Application officielle de la conférence Volcamp. Les données sont synchronisées depuis le
        contenu public du site Volcamp à chaque ouverture — vos favoris restent sur cet appareil.
      </p>
    </>
  )
}
