import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [open])

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
          JV3 SIGNS<span className="nav__logo-dot" />
        </Link>

        <button
          className={`nav__hamburger${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav__links${open ? ' open' : ''}`}>
          {[
            { to: '/gallery', label: 'Gallery' },
            { to: '/services', label: 'Services' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
