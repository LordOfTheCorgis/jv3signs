import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">JV3 SIGNS</span>
        <ul className="footer__links">
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <span className="footer__copy">© 2025 JV3Signs</span>
      </div>
    </footer>
  )
}
