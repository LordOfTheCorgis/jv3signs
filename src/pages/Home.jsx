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
        <div className="container">
          <p className="hero__eyebrow">Custom Sign Shop</p>
          <h1 className="hero__heading">Custom Signs, Banners &amp; More</h1>
          <p className="hero__sub">
            Every order is made to order. Tell us what you need and we'll make it happen.
          </p>
          <div className="hero__ctas">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <Link to="/gallery" className="btn-ghost">See Our Work</Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <div className="about-strip">
        <div className="about-strip__inner">
          <span className="accent-label">About JV3 Signs</span>
          <p className="about-strip__text">
            JV3 Signs is a home-based custom shop built on word-of-mouth and repeat customers.
            Every order gets personal, hands-on attention from start to finish, no middlemen,
            no templates you can't change, no rush fees hidden in the fine print. You talk to
            the person making your sign.
          </p>
        </div>
      </div>

      {/* What we make */}
      <section className="what-we-make">
        <div className="container">
          <div className="what-we-make__header">
            <div>
              <span className="accent-label">What We Make</span>
              <h2 className="what-we-make__heading">A Few Things We Do</h2>
            </div>
            <Link to="/services" className="what-we-make__link">View all services →</Link>
          </div>
          <div className="services-preview">
            {previewServices.map(({ Icon, name, desc }) => (
              <div key={name} className="service-card">
                <div className="service-card__icon"><Icon /></div>
                <div className="service-card__name">{name}</div>
                <div className="service-card__desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="container">
        <div className="cta-banner">
          <h2 className="cta-banner__heading">Ready to get started?</h2>
          <p className="cta-banner__sub">
            Every project is custom, reach out and we'll figure out the details together.
          </p>
          <Link to="/contact" className="btn-primary">Request a Quote</Link>
        </div>
      </div>
    </div>
  )
}
