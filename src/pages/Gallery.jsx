import { Link } from 'react-router-dom'
import { galleryItems } from '../data/gallery.js'
import '../styles/gallery.css'

export default function Gallery() {
  return (
    <div className="gallery-page">
      <div className="container">
        <header className="gallery-page__hero">
          <span className="accent-label">Past Work</span>
          <h1 className="gallery-page__heading display">What We&apos;ve Made</h1>
          <p className="gallery-page__sub">
            Real projects for real people. Every piece below was built custom.
            Reach out to start yours.
          </p>
        </header>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <article key={item.id} className="gallery-card">
              <div className="gallery-card__media">
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
                <span className="gallery-card__num">No. {String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="gallery-card__body">
                <span className="gallery-card__what">{item.what}</span>
                <p className="gallery-card__client">{item.client}</p>
                {item.desc && <p className="gallery-card__desc">{item.desc}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="gallery-cta">
        <div className="container">
          <div className="gallery-cta__panel">
            <div className="gallery-cta__text">
              <span className="gallery-cta__eyebrow">Ready to order?</span>
              <h2 className="gallery-cta__heading display">Like what you see?</h2>
              <p className="gallery-cta__sub">
                Every piece here was made to order. Yours is next — tell us what you have in mind.
              </p>
            </div>
            <Link to="/contact" className="gallery-cta__btn">
              Request a Quote <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
