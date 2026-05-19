import { useState } from 'react'
import '../styles/contact.css'

const INITIAL = { name: '', email: '', phone: '', message: '' }

function validate(fields) {
  const errs = {}
  if (!fields.name.trim()) errs.name = 'Name is required.'
  if (!fields.email.trim()) {
    errs.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errs.email = 'Enter a valid email address.'
  }
  return errs
}

export default function Contact() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          message: fields.message,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setSubmitError(data?.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Could not send your message. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-page__hero">
          <span className="accent-label">Let's Work Together</span>
          <h1 className="contact-page__heading">Get in Touch</h1>
          <p className="contact-page__sub">
            Send a quick message and we'll reach out to talk through the details.
          </p>
        </div>

        <div className="contact-layout">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h2 className="contact-success__heading">Thanks! We'll be in touch soon.</h2>
                <p className="contact-success__sub">
                  Got your message, we'll reach out to go over the details.
                </p>
              </div>
            ) : (
              <form className="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name<span className="req">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form-control${errors.name ? ' error' : ''}`}
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-control"
                      placeholder="(555) 000-0000"
                      value={fields.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email<span className="req">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control${errors.email ? ' error' : ''}`}
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">What are you looking for?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-control"
                    placeholder="Give us a general idea of what you need, we'll take it from there."
                    value={fields.message}
                    onChange={handleChange}
                  />
                </div>

                {submitError && (
                  <p className="form-submit-error">{submitError}</p>
                )}

                <button type="submit" className="form-submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="contact-info">
            <h2 className="contact-info__heading">How It Works</h2>
            <div className="how-it-works">
              <div className="hiw-step">
                <div className="hiw-step__num">1</div>
                <p className="hiw-step__text">Send a message with a general idea of what you need.</p>
              </div>
              <div className="hiw-step">
                <div className="hiw-step__num">2</div>
                <p className="hiw-step__text">We'll reach out by text or email to talk through the details and pricing.</p>
              </div>
              <div className="hiw-step">
                <div className="hiw-step__num">3</div>
                <p className="hiw-step__text">Your custom order gets made and delivered or arranged for pickup.</p>
              </div>
            </div>
            <p className="contact-info__note">
              No office, no storefront, just personal hands-on service for every order.
            </p>
            {/* Uncomment and fill in when ready:
            <div className="contact-info__links">
              <a href="tel:+15550000000" className="contact-info__link">(555) 000-0000</a>
              <a href="mailto:hello@jv3signs.com" className="contact-info__link">hello@jv3signs.com</a>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  )
}
