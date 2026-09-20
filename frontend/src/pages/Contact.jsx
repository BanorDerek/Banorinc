import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const info = [
  { icon: 'mapPin', title: 'Location', body: 'Plot 10CC Bosun Adekoya Street, Lekki, Lagos, Nigeria' },
  { icon: 'phone', title: 'Phone', body: '+234 817 002 8278', href: 'tel:+2348170028278' },
  { icon: 'mail', title: 'Email', body: 'info@banorinc.com', href: 'mailto:info@banorinc.com' },
  { icon: 'clock', title: 'Working Hours', body: 'Mon – Fri, 9am to 5pm' },
]

const initialForm = { name: '', email: '', phone: '', company: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    try {
      // ✅ USE YOUR DOMAIN - NOT LOCALHOST
      const response = await fetch('https://www.banorinc.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: data.message })
        setForm(initialForm)
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Reveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span><span>Contact Us</span>
            </div>
            <h1>Contact Us</h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 520, marginTop: 14 }}>
              Send us your RFQ or question — our team responds promptly, usually within one
              business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <div className="eyebrow">Get In Touch</div>
            <h2>We&rsquo;d love to hear from you</h2>
            <p>
              Whether it&rsquo;s a Request for Quote, a partnership enquiry, or a question about
              our services — reach us directly using the details below.
            </p>
            <div className="contact-info-list">
              {info.map((item) => (
                <div className="contact-info-item" key={item.title}>
                  <span className="contact-info-item__icon"><Icon name={item.icon} size={18} /></span>
                  <div>
                    <h4>{item.title}</h4>
                    {item.href ? <a href={item.href}><p>{item.body}</p></a> : <p>{item.body}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Doe" />
                </div>
                <div className="field">
                  <label htmlFor="email">Your Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="phone">Your Phone Number (Optional)</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+234 000 000 0000" />
                </div>
                <div className="field">
                  <label htmlFor="company">Your Company (Optional)</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company name" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="Request for Quote" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell us about your requirement..." />
              </div>
              <button type="submit" className="btn btn--primary btn--arrow" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p className="form-status" style={{ 
                  color: status.type === 'success' ? 'green' : 'red',
                  marginTop: '10px',
                  padding: '10px',
                  borderRadius: '4px',
                  background: status.type === 'success' ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)',
                }}>
                  {status.message}
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <div className="container">
          <div className="map-frame">
            <iframe
              title="Banorinc SCS location"
              loading="lazy"
              src="https://www.google.com/maps?q=Plot+10CC+Bosun+Adekoya+Street,+Lekki,+Lagos,+Nigeria&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  )
}