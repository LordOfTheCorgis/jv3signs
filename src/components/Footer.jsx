import { Link } from 'react-router-dom'
import { IconFacebook, IconInstagram } from './Icons.jsx'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-col">
          <Link to="/" className="footer__brand-link" aria-label="JV3 Signs — home">
            <img src="/brand/logo-light.png" alt="JV3 Signs" className="footer__logo footer__logo--light" />
            <img src="/brand/logo-dark.png" alt="" aria-hidden="true" className="footer__logo footer__logo--dark" />
          </Link>
          <p className="footer__tagline">Custom signs, banners &amp; more — handmade in Louisiana, shipped anywhere.</p>
        </div>

        <ul className="footer__links">
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="footer__social">
          <span className="footer__social-label">Follow along — coming soon</span>
          <div className="footer__social-icons">
            <span className="footer__social-icon is-soon" title="Facebook — coming soon" aria-label="Facebook, coming soon">
              <IconFacebook />
            </span>
            <span className="footer__social-icon is-soon" title="Instagram — coming soon" aria-label="Instagram, coming soon">
              <IconInstagram />
            </span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copy">© 2026 JV3 Signs · All rights reserved</span>
      </div>
    </footer>
  )
}
