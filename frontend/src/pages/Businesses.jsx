import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const businesses = [
  {
    slug: 'scs',
    name: 'BanorInc SCS',
    tagline: 'Supply Chain Solutions',
    icon: 'layers',
    description: 'Sustainable supply chain solutions connecting Oil & Gas, Telecoms, Marine, Manufacturing and Banking clients to the right products, partners and value — On Time, In Full.',
    link: '/scs',
    color: '#f8f9fa',
    textColor: '#0a192f',
    status: 'Active',
    statusColor: '#22c55e'
  },
  {
    slug: 'blue-tidy',
    name: 'Blue Tidy',
    tagline: 'Technology Platform',
    icon: 'refresh',
    description: 'A technology-powered platform connecting property hosts with professional cleaners while simplifying cleaning operations and property management.',
    link: 'https://bluetidy.com',
    color: '#0a192f',
    textColor: '#fff',
    status: 'Active',
    statusColor: '#22c55e'
  },
  {
    slug: 'coming-soon',
    name: 'New Products',
    tagline: 'In Development',
    icon: 'bulb',
    description: 'We are continuously exploring new opportunities and developing technology products designed to solve practical problems in emerging markets.',
    link: '/contact',
    color: '#f8f9fa',
    textColor: '#0a192f',
    status: 'Coming Soon',
    statusColor: '#f59e0b'
  }
]

export default function Businesses() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Reveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span><span>Businesses</span>
            </div>
            <h1>Our Businesses</h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 520, marginTop: 14 }}>
              Each of our businesses is built to solve specific problems and create lasting value for customers and communities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '32px' 
          }}>
            {businesses.map((b, i) => (
              <Reveal as="div" key={b.slug} delay={i * 100}>
                <div style={{
                  background: b.color,
                  borderRadius: '16px',
                  padding: '40px 32px',
                  color: b.textColor,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: b.status === 'Coming Soon' ? '2px dashed #cbd5e1' : '1px solid #e8ecf2',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  
                  {/* Status Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: b.statusColor,
                    background: b.color === '#0a192f' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: b.statusColor,
                    }} />
                    {b.status}
                  </div>

                  {/* Icon */}
                  <div style={{ 
                    marginBottom: '20px',
                    color: b.color === '#0a192f' ? '#4169E1' : '#1a2a6c',
                  }}>
                    <Icon name={b.icon} size={36} />
                  </div>
                  
                  {/* Tagline */}
                  <div style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: b.color === '#0a192f' ? '#4169E1' : '#4169E1',
                    marginBottom: '6px'
                  }}>
                    {b.tagline}
                  </div>
                  
                  {/* Name */}
                  <h2 style={{ 
                    color: b.textColor, 
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    marginBottom: '16px',
                    fontWeight: 700,
                  }}>
                    {b.name}
                  </h2>
                  
                  {/* Description */}
                  <p style={{ 
                    color: b.color === '#0a192f' ? '#dbe4f2' : '#4a5568',
                    lineHeight: '1.8',
                    flex: 1,
                    marginBottom: '28px',
                    fontSize: '1rem',
                  }}>
                    {b.description}
                  </p>
                  
                  {/* Link */}
                  {b.link.startsWith('http') ? (
                    <a 
                      href={b.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: b.color === '#0a192f' ? '#4169E1' : '#1a2a6c',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '1rem',
                        transition: 'gap 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '14px'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '8px'
                      }}
                    >
                      Explore {b.name} →
                    </a>
                  ) : (
                    <Link 
                      to={b.link}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: b.color === '#0a192f' ? '#4169E1' : '#1a2a6c',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '1rem',
                        transition: 'gap 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '14px'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '8px'
                      }}
                    >
                      Explore {b.name} →
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Additional Information */}
          <Reveal style={{ marginTop: '60px', textAlign: 'center' }}>
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '48px 32px',
              border: '1px solid #e8ecf2',
            }}>
              <h3 style={{ color: '#0a192f', marginBottom: '12px' }}>
                Interested in partnering with us?
              </h3>
              <p style={{ color: '#4a5568', maxWidth: '600px', margin: '0 auto 24px', lineHeight: '1.7' }}>
                Whether you're looking for supply chain solutions, technology platforms, or 
                want to explore new products — we'd love to hear from you.
              </p>
              <Link 
                to="/contact" 
                className="btn btn--primary btn--arrow"
                style={{
                  background: '#1a2a6c',
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2a3a8c'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(26, 42, 108, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1a2a6c'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Get in Touch →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}