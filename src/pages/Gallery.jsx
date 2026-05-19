import { Link } from 'react-router-dom'
import { galleryItems } from '../data/gallery.js'
import '../styles/gallery.css'

export default function Gallery() {
  return (
    <div className="gallery-page">
      <div className="container">
        <div className="gallery-page__hero">
          <span className="accent-label">Past Work</span>
          <h1 className="gallery-page__heading">What We've Made</h1>
          <p className="gallery-page__sub">
            Real projects for real people. Every piece below was built custom, reach out to start yours.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-card">
              {item.image ? (
                <img
                  src={item.image}
                  alt={`${item.what} for ${item.client}`}
                  className="gallery-card__img"
                  loading="lazy"
                />
              ) : (
                <div className="gallery-card__img-placeholder">Photo Coming Soon</div>
              )}
              <div className="gallery-card__body">
                <p className="gallery-card__client">{item.client}</p>
                <p className="gallery-card__what">{item.what}</p>
                {item.desc && <p className="gallery-card__desc">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-cta-bar">
        <span>Like what you see?</span>
        <Link to="/contact">Request a Quote →</Link>
      </div>
    </div>
  )
}
