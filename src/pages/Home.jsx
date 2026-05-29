import { Link } from 'react-router-dom'
import { IconCoroplast, IconAluminum, IconBanner } from '../components/Icons.jsx'
import '../styles/home.css'

const previewServices = [
  {
    Icon: IconCoroplast,
    name: 'Coroplast Signs',
    desc: 'Lightweight, weather-resistant signs for yards, real estate, events, and more.',
  },
  {
    Icon: IconAluminum,
    name: 'Aluminum Signs',
    desc: 'Durable, professional-grade metal signs built for long-term outdoor use.',
  },
  {
    Icon: IconBanner,
    name: 'Vinyl Banners',
    desc: 'Large-format custom banners, perfect for events, storefronts, and promotions.',
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="accent-label">Est. · Custom Sign Shop</span>
            <h1 className="hero__heading display">
              Signs, banners<br />
              <span className="hero__heading-amp">&amp;</span> the rest.
            </h1>
            <p className="hero__sub">
              Every order is made to order. Tell us what you need and we&apos;ll make it happen.
              No templates, no middlemen, no surprise fees.
            </p>
            <div className="hero__ctas">
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
              <Link to="/gallery" className="btn-ghost">See Our Work →</Link>
            </div>
          </div>

          <aside className="hero__plate" aria-hidden="true">
            <div className="hero__plate-tag">No. 01</div>
            <div className="hero__plate-big">JV3</div>
            <div className="hero__plate-divider" />
            <div className="hero__plate-row"><span>Made</span><span>By Hand</span></div>
            <div className="hero__plate-row"><span>Built</span><span>To Order</span></div>
            <div className="hero__plate-row"><span>Run</span><span>Locally</span></div>
            <div className="hero__plate-stamp">Custom · Signs</div>
          </aside>
        </div>
      </section>

      {/* About strip */}
      <section className="about-strip">
        <div className="container about-strip__inner">
          <span className="accent-label">About JV3 Signs</span>
          <p className="about-strip__text">
            JV3 Signs is a home-based custom shop built on word-of-mouth and repeat customers.
            Every order gets personal, hands-on attention from start to finish. No middlemen,
            no templates you can&apos;t change, no rush fees hidden in the fine print.
            You talk to the person making your sign.
          </p>
        </div>
      </section>

      {/* What we make */}
      <section className="what-we-make">
        <div className="container">
          <div className="what-we-make__header">
            <div>
              <span className="accent-label">What We Make</span>
              <h2 className="what-we-make__heading display">A Few Things We Do</h2>
            </div>
            <Link to="/services" className="what-we-make__link">View all services →</Link>
          </div>
          <div className="services-preview">
            {previewServices.map(({ Icon, name, desc }, i) => (
              <article key={name} className="service-card">
                <div className="service-card__top">
                  <span className="service-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="service-card__icon"><Icon /></div>
                </div>
                <h3 className="service-card__name display">{name}</h3>
                <p className="service-card__desc">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner: bold sign block */}
      <section className="cta-banner-wrap">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__inner">
              <span className="cta-banner__eyebrow">Ready when you are</span>
              <h2 className="cta-banner__heading display">Let&apos;s build something.</h2>
              <p className="cta-banner__sub">
                Every project is custom. Reach out and we&apos;ll figure out the details together.
              </p>
              <Link to="/contact" className="btn-primary cta-banner__btn">Request a Quote</Link>
            </div>
            <div className="cta-banner__corner cta-banner__corner--tl" />
            <div className="cta-banner__corner cta-banner__corner--tr" />
            <div className="cta-banner__corner cta-banner__corner--bl" />
            <div className="cta-banner__corner cta-banner__corner--br" />
          </div>
        </div>
      </section>
    </div>
  )
}
