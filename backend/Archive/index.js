// index.js
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per IP
  message: { error: 'Too many requests, please try again later.' }
})

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'https://www.banorinc.com',
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Contact form route
app.post('/api/contact', limiter, async (req, res) => {
  const { name, email, phone, company, subject, message } = req.body

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Banorinc SCS Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Subject: ${subject}
        Message: ${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.status(200).json({ 
      message: 'Your message has been sent successfully! We\'ll get back to you shortly.' 
    })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' })
})

// Serve static files if React build is in the same directory
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})