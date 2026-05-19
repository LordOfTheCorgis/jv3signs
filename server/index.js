import express from 'express'
import { Resend } from 'resend'

const app = express()
const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL   = process.env.TO_EMAIL            // his email address
const FROM_EMAIL = process.env.FROM_EMAIL          // e.g. noreply@jv3signs.com (must be a verified Resend domain)
const PORT       = process.env.PORT || 3001

app.use(express.json())

// Only allow requests from the site's own origin in production
app.use((req, res, next) => {
  const origin = req.headers.origin
  const allowed = process.env.ALLOWED_ORIGIN
  if (allowed && origin !== allowed) {
    return res.status(403).json({ error: 'Forbidden' })
  }
  if (origin) res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: 'Name and email are required.' })
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    reply_to: email.trim(),
    subject: `New quote request from ${name.trim()}`,
    text: [
      `Name:    ${name.trim()}`,
      `Email:   ${email.trim()}`,
      `Phone:   ${phone?.trim() || 'Not provided'}`,
      ``,
      `Message:`,
      message?.trim() || '(no message)',
    ].join('\n'),
  })

  if (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }

  res.json({ ok: true })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
