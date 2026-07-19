import { NavLink } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'
import { TAB_ICONS } from '../data/icons'

const ITEMS = [
  { to: '/', label: 'Programme', icon: TAB_ICONS.programme, end: true },
  { to: '/speakers', label: 'Speakers', icon: TAB_ICONS.speakers, end: false },
  { to: '/favorites', label: 'Favoris', icon: TAB_ICONS.favoris, end: false },
  { to: '/infos', label: 'Infos', icon: TAB_ICONS.infos, end: false },
]

export function BottomNav() {
  const { count } = useFavorites()
  return (
    <nav className="bottom-nav" aria-label="Navigation principale">
      {ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) => `bottom-nav__item ${isActive ? 'is-active' : ''}`}
        >
          <span className="bottom-nav__icon" aria-hidden="true">
            <img className="bottom-nav__img" src={item.icon} alt="" width={30} height={30} />
            {item.to === '/favorites' && count > 0 && (
              <span className="bottom-nav__badge">{count}</span>
            )}
          </span>
          <span className="bottom-nav__label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
