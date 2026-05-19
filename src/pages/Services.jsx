import { Link } from 'react-router-dom'
import { IconCoroplast, IconAluminum, IconBanner, IconSticker, IconCustom, IconBulk } from '../components/Icons.jsx'
import '../styles/services.css'

const services = [
  {
    Icon: IconCoroplast,
    name: 'Coroplast Signs',
    desc: 'Lightweight, weather-resistant corrugated plastic signs. Great for yard signs, real estate listings, political campaigns, and events.',
  },
  {
    Icon: IconAluminum,
    name: 'Aluminum Signs',
    desc: 'Durable, professional-grade metal signs built for long-term outdoor use. Ideal for businesses, parking, and permanent installations.',
  },
  {
    Icon: IconBanner,
    name: 'Vinyl Banners',
    desc: 'Large-format banners for events, grand openings, storefronts, and more. Available in a wide range of sizes.',
  },
  {
    Icon: IconSticker,
    name: 'Stickers & Decals',
    desc: 'Custom-cut stickers and decals in any shape or size. Great for branding, vehicles, products, and giveaways.',
  },
  {
    Icon: IconCustom,
    name: 'Custom Orders',
    desc: "Don't see exactly what you need? Just ask. If we can print it, cut it, or mount it, we'll figure it out with you.",
  },
  {
    Icon: IconBulk,
    name: 'Bulk Orders',
    desc: 'Need a lot? Volume work is welcome. Reach out with your quantity and we can discuss turnaround and pricing.',
  },
]

export default function Services() {
  return (
    <div className="services-page">
      <div className="container">
        <div className="services-page__hero">
          <span className="accent-label">What We Make</span>
          <h1 className="services-page__heading">Our Services</h1>
          <p className="services-page__intro">
            Every order is built custom. Browse what we offer and reach out to get a quote.
            No prices listed, every job is different, and we'd rather give you an accurate
            number than a guess.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ Icon, name, desc }) => (
            <div key={name} className="svc-card">
              <div className="svc-card__icon"><Icon /></div>
              <div className="svc-card__name">{name}</div>
              <p className="svc-card__desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2 className="services-cta__heading">Don't see exactly what you need?</h2>
          <p className="services-cta__sub">Just ask, we'll see what we can do.</p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </div>
    </div>
  )
}
