import { Link } from 'react-router-dom'
import '../styles/notfound.css'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="container notfound__inner">
        <span className="accent-label">Lost?</span>
        <div className="notfound__code display">404</div>
        <h1 className="notfound__heading display">This one got lost in the shop.</h1>
        <p className="notfound__sub">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
          back to something useful.
        </p>
        <div className="notfound__ctas">
          <Link to="/" className="btn-primary">Back Home</Link>
          <Link to="/contact" className="btn-ghost">Request a Quote →</Link>
        </div>
      </div>
    </div>
  )
}
