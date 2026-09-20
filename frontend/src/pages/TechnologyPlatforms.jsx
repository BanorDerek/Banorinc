import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import bluetidyLogo from '../assets/images/bluetidy.png'

const platforms = [
  {
    name: 'Blue Tidy',
    tagline: 'Property Cleaning Platform',
    image: bluetidyLogo,
    description: 'A technology-powered platform connecting property hosts with professional cleaners, making property management simpler and more efficient.',
    features: [
      'Connect with professional cleaners',
      'Simplify property management',
      'Streamline cleaning operations',
      'Trusted and verified service providers',
    ],
    link: 'https://bluetidy.com',
    external: true,
    gradient: 'linear-gradient(135deg, #0a192f 0%, #162d5a 100%)',
  },
  // Future platforms can be added here
]

export default function TechnologyPlatforms() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Reveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span>
              <Link to="/service">Solutions</Link><span>/</span>
              <span>Technology Platforms</span>
            </div>
            <h1>Technology Platforms</h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 520, marginTop: 14 }}>
              Building technology-powered platforms that connect people, simplify operations, and solve real problems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Our Platforms</div>
            <h2>Technology solutions built for real-world challenges</h2>
            <p style={{ maxWidth: 660, lineHeight: '1.8' }}>
              We develop technology platforms designed to simplify complex processes, 
              connect people with services, and create lasting value for users.
            </p>
          </Reveal>

          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div
                  style={{
                    background: p.gradient || '#f8f9fa',
                    borderRadius: '20px',
                    padding: 'clamp(32px, 4vw, 48px)',
                    color: p.external ? '#fff' : '#0a192f',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative circles */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      background: 'rgba(65, 105, 225, 0.08)',
                      right: '-60px',
                      top: '-80px',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'rgba(65, 105, 225, 0.06)',
                      left: '-40px',
                      bottom: '-60px',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      {/* Blue Tidy Logo */}
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          background: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <img 
                          src={p.image} 
                          alt={`${p.name} logo`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            padding: '6px',
                          }}
                        />
                      </div>
                      <div>
                        <h3 style={{ 
                          color: p.external ? '#fff' : '#0a192f', 
                          margin: 0,
                          fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                        }}>
                          {p.name}
                        </h3>
                        <div style={{ 
                          color: p.external ? '#7ea1ff' : '#4169E1',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                        }}>
                          {p.tagline}
                        </div>
                      </div>
                    </div>

                    <p style={{ 
                      color: p.external ? '#dbe4f2' : '#4a5568',
                      maxWidth: 600,
                      lineHeight: '1.8',
                      fontSize: '1.05rem',
                    }}>
                      {p.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                      {p.features.map((feature, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: p.external ? 'rgba(255,255,255,0.08)' : 'rgba(65, 105, 225, 0.08)',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            color: p.external ? '#dbe4f2' : '#4a5568',
                            fontSize: '0.85rem',
                          }}
                        >
                          <span style={{ color: '#4169E1' }}>✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '28px' }}>
                      {p.external ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-block',
                            background: '#fff',
                            color: '#0a192f',
                            padding: '14px 32px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f0f0f0'
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#fff'
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          Explore {p.name} →
                        </a>
                      ) : (
                        <Link
                          to={p.link}
                          style={{
                            display: 'inline-block',
                            background: '#1a2a6c',
                            color: '#fff',
                            padding: '14px 32px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#2a3a8c'
                            e.currentTarget.style.transform = 'translateY(-2px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#1a2a6c'
                            e.currentTarget.style.transform = 'translateY(0)'
                          }}
                        >
                          Learn More →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Future Platforms */}
          <Reveal style={{ marginTop: '48px' }}>
            <div
              style={{
                background: '#f8f9fa',
                borderRadius: '16px',
                padding: '40px 32px',
                border: '2px dashed #cbd5e1',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🚀</div>
              <h3 style={{ color: '#0a192f', marginBottom: '8px' }}>More Platforms Coming</h3>
              <p style={{ color: '#4a5568', maxWidth: 500, margin: '0 auto', lineHeight: '1.7' }}>
                We're continuously developing new technology platforms designed to solve 
                practical problems in emerging markets.
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  color: '#1a2a6c',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Partner With Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ paddingBottom: 96, paddingTop: 40 }}>
        <Reveal className="cta-banner">
          <div>
            <h2>Have a platform idea? Let's build it together.</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 0 }}>
              We're always looking for new opportunities to create value through technology.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary btn--arrow" style={{ background: 'var(--white)', color: 'var(--navy)' }}>
            Get in Touch
          </Link>
        </Reveal>
      </section>
    </>
  )
}