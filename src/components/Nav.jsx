import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconSun, IconMoon } from './Icons.jsx'
import '../styles/nav.css'

function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const t = document.documentElement.getAttribute('data-theme')
    if (t === 'light' || t === 'dark') return t
  }
  return 'light'
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [open])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch { /* ignore */ }
  }

  const isDark = theme === 'dark'

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" onClick={() => setOpen(false)} aria-label="JV3 Signs — home">
          <img src="/brand/logo-light.png" alt="JV3 Signs" className="nav__logo-img nav__logo-img--light" />
          <img src="/brand/logo-dark.png" alt="" aria-hidden="true" className="nav__logo-img nav__logo-img--dark" />
        </Link>

        <div className="nav__right">
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

          <button
            className="nav__theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <IconSun /> : <IconMoon />}
          </button>

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
        </div>
      </div>
    </nav>
  )
}
