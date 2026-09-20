import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

// Import images
import pillar1 from '../assets/images/pillar-1.png'
import bluetidy from '../assets/images/bluetidy.png'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Reveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span><span>About</span>
            </div>
            <h1>About BanorInc.</h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 520, marginTop: 14 }}>
              We build technology-driven businesses and products that solve real-world challenges.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="eyebrow">Who We Are</div>
            <h2>A parent company building solutions across industries</h2>
            <p>
              BanorInc. started as a supply chain company, but we've evolved. Today, we're a 
              parent company that builds and operates technology-driven businesses designed to 
              solve practical problems in emerging markets.
            </p>
            <p>
              From sustainable supply chain solutions to technology platforms that simplify 
              everyday life — each of our businesses is built to create lasting value for 
              customers, partners, and communities.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link to="/service" className="btn btn--outline btn--arrow">
                Explore Our Solutions
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ImageSlot
              src="/assets/about/parent-company.png"
              alt="BanorInc businesses"
              ratio="4/3"
              icon="building"
            />
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          WHAT WE BUILD — SECTION
      ========================================================== */}
      <section
        className="section"
        style={{
          background: '#fff',
          padding: '80px 20px',
        }}
      >
        <div className="container">
          <Reveal className="section-head section-head--center">
            <div
              className="eyebrow"
              style={{
                justifyContent: 'center',
                color: '#4169E1',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              What We Build
            </div>

            <h2 style={{ color: '#0a192f', textAlign: 'center' }}>
              Businesses and products that create value
            </h2>

            <p style={{ color: '#4a5568', maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
              Each of our businesses is designed to solve practical problems and 
              create lasting value for customers and communities.
            </p>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
              marginTop: '48px',
            }}
          >
            {/* SCS Card */}
            <Reveal
              as="div"
              delay={80}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e8ecf2',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: '220px',
                  background: `url(${pillar1}) center/cover no-repeat`,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    padding: '20px',
                    background: 'linear-gradient(0deg, rgba(8,27,63,0.7) 0%, transparent 100%)',
                  }}
                >
                  <div
                    style={{
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    BanorInc SCS
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div style={{ padding: '28px 32px 32px' }}>
                <h3 style={{ color: '#0a192f', fontSize: '1.4rem', marginBottom: '12px' }}>
                  Supply Chain Solutions
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  Sustainable supply chain solutions for Oil & Gas, Telecoms, Marine, 
                  Manufacturing and Banking clients — connecting them to the right 
                  products, partners and value.
                </p>
                <Link
                  to="/service/supplychain"
                  style={{
                    color: '#1a2a6c',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '16px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#4169E1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#1a2a6c')}
                >
                  Learn More →
                </Link>
              </div>
            </Reveal>

            {/* Blue Tidy Card */}
            <Reveal
              as="div"
              delay={160}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e8ecf2',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: '220px',
                  background: `url(${bluetidy}) center/cover no-repeat`,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    padding: '20px',
                    background: 'linear-gradient(0deg, rgba(8,27,63,0.7) 0%, transparent 100%)',
                  }}
                >
                  <div
                    style={{
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Technology Platform
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div style={{ padding: '28px 32px 32px' }}>
                <h3 style={{ color: '#0a192f', fontSize: '1.4rem', marginBottom: '12px' }}>
                  Blue Tidy
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  A technology-powered platform connecting property hosts with 
                  professional cleaners, making property management simpler and 
                  more efficient.
                </p>
                <a
                  href="https://bluetidy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#1a2a6c',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '16px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#4169E1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#1a2a6c')}
                >
                  Explore Blue Tidy →
                </a>
              </div>
            </Reveal>

            {/* Coming Soon Card */}
            <Reveal
              as="div"
              delay={240}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px dashed #cbd5e1',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = '#4169E1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#cbd5e1'
              }}
            >
              {/* Image - Gradient placeholder with icon */}
              <div
                style={{
                  height: '220px',
                  background: 'linear-gradient(135deg, #e8edfa 0%, #f0f4ff 100%)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '56px',
                    opacity: 0.6,
                  }}
                >
                  🚀
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    padding: '20px',
                    background: 'linear-gradient(0deg, rgba(8,27,63,0.7) 0%, transparent 100%)',
                  }}
                >
                  <div
                    style={{
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Coming Soon
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div style={{ padding: '28px 32px 32px' }}>
                <h3 style={{ color: '#0a192f', fontSize: '1.4rem', marginBottom: '12px' }}>
                  More Products
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  New products and solutions currently in development. We're continuously 
                  exploring opportunities to create technology-driven solutions for 
                  emerging markets.
                </p>
                <Link
                  to="/contact"
                  style={{
                    color: '#1a2a6c',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '16px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#4169E1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#1a2a6c')}
                >
                  Partner With Us →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA BANNER
      ========================================================== */}
      <section className="container" style={{ paddingBottom: 96, paddingTop: 60 }}>
        <Reveal 
          className="cta-banner"
          style={{
            background: 'linear-gradient(120deg, #12306e 0%, #081b3f 100%)',
            borderRadius: '16px',
            padding: '56px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            color: '#ffffff',
          }}
        >
          <div>
            <h2 style={{ color: '#ffffff', margin: 0, fontSize: 'clamp(24px, 3vw, 30px)' }}>
              Ready to partner with us?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', margin: '8px 0 0' }}>
              Let's build something great together.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="btn btn--primary" 
            style={{ 
              background: '#ffffff', 
              color: '#081b3f',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f0f0f0'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get in Touch →
          </Link>
        </Reveal>
      </section>
    </>
  )
}