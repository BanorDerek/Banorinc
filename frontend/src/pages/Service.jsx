import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

// Import Blue Tidy logo
import bluetidyLogo from '../assets/images/bluetidy.png'

// ============================================================
// BANORINC SERVICES — Across all businesses
// ============================================================
const services = [
  {
    slug: 'supply-chain',
    icon: 'layers',
    title: 'Supply Chain Solutions',
    tag: 'BanorInc SCS',
    body: 'Sustainable procurement and logistics connecting Oil & Gas, Telecoms, Marine, Manufacturing and Banking clients to the right products, partners and value — On Time, In Full.',
    link: '/service/supply-chain',
  },
  {
    slug: 'technology-platforms',
    icon: 'refresh',
    title: 'Technology Platforms',
    tag: 'Innovations',
    body: 'Building technology-powered platforms that simplify operations — connecting property hosts with professional cleaners through an intuitive, efficient platform.',
    link: '/service/technology-platforms',
  },
  {
    slug: 'product-innovation',
    icon: 'bulb',
    title: 'Product Innovation',
    tag: 'R&D',
    body: 'Developing new products and solutions designed to solve practical problems in emerging markets — from concept to market launch.',
    link: '/contact',
  },
  {
    slug: 'market-development',
    icon: 'trending',
    title: 'Market Development',
    tag: 'Business Growth',
    body: 'Partnering with OEMs and businesses to identify new opportunities, develop new markets, and drive growth across sectors.',
    link: '/service/market-development',
  },
]

export default function Service() {
  return (
    <>
      {/* ============================================================
          HERO — COMPANY-WIDE
      ============================================================ */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Reveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span><span>Solutions</span>
            </div>
            <h1>Our Solutions</h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 620, marginTop: 14 }}>
              From supply chain to technology platforms — our solutions are built
              to solve real problems across industries and markets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          BANORINC SOLUTIONS OVERVIEW
      ============================================================ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Our Solutions</div>
            <h2>Solutions across the BanorInc. group</h2>
            <p>Each of our businesses delivers practical solutions designed for real-world challenges.</p>
          </Reveal>

          <div className="service-grid" style={{ marginTop: '32px' }}>
            {services.map((s, i) => (
              <Reveal as="div" className="service-card" key={s.title} delay={i * 80}>
                <div className="service-card__icon"><Icon name={s.icon} size={24} /></div>
                <div className="eyebrow" style={{ fontSize: '0.7rem', color: '#4169E1', marginBottom: '4px' }}>
                  {s.tag}
                </div>
                <h3 style={{ marginTop: '4px' }}>{s.title}</h3>
                <p>{s.body}</p>
                <Link to={s.link} className="btn btn--outline btn--arrow">
                  Learn More →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED: TECHNOLOGY PLATFORMS
      ============================================================ */}
      <section className="section section--alt" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                background: 'linear-gradient(135deg, #0a192f 0%, #162d5a 100%)',
                borderRadius: '20px',
                padding: 'clamp(40px, 6vw, 56px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'rgba(65, 105, 225, 0.1)',
                  right: '-80px',
                  bottom: '-100px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(65, 105, 225, 0.08)',
                  left: '-40px',
                  top: '-60px',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="eyebrow" style={{ color: '#4169E1' }}>
                  Featured Solution
                </div>
                <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 3vw, 2.8rem)', marginBottom: '12px' }}>
                  Technology Platforms
                </h2>
                <p style={{ color: '#dbe4f2', maxWidth: 660, lineHeight: '1.8', fontSize: '1.05rem' }}>
                  We build technology-powered platforms that connect people and simplify operations.
                </p>

                <div style={{ 
                  background: 'rgba(255,255,255,0.06)', 
                  borderRadius: '12px', 
                  padding: '24px',
                  marginTop: '20px',
                  maxWidth: '500px',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    {/* Blue Tidy Logo - Using imported image */}
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <img 
                        src={bluetidyLogo} 
                        alt="Blue Tidy Logo" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '4px',
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>
                        Blue Tidy
                      </div>
                      <div style={{ color: '#7ea1ff', fontSize: '0.85rem' }}>
                        Property Cleaning Platform
                      </div>
                    </div>
                  </div>
                  <p style={{ color: '#dbe4f2', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                    A technology-powered platform connecting property hosts with professional cleaners, 
                    making property management simpler and more efficient.
                  </p>
                </div>

                <Link
                  to="/service/technology-platforms"
                  style={{
                    display: 'inline-block',
                    background: '#fff',
                    color: '#0a192f',
                    padding: '14px 32px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    marginTop: '24px',
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
                  Explore All Platforms →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SCS SECTION — COMPRESSED
      ============================================================ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">BanorInc SCS</div>
            <h2>Supply Chain Solutions</h2>
            <p>
              Our supply chain division delivers sustainable procurement and logistics
              services to Oil & Gas, Telecoms, Marine, Manufacturing and Banking clients.
            </p>
          </Reveal>

          <ImageSlot
            src="/assets/services/service-banner.png"
            alt="Banorinc SCS services in the field"
            ratio="21/6"
            icon="box"
            className="page-banner"
            style={{ marginTop: '32px' }}
          />

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link
              to="/service/supply-chain"
              className="btn btn--primary btn--arrow"
              style={{ background: '#1a2a6c', color: '#fff' }}
            >
              Explore All SCS Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT'S NEXT — FIXED CENTERING
      ============================================================ */}
      <section className="section section--alt" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <Reveal className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>What's Next</div>
            <h2 style={{ textAlign: 'center' }}>Building what comes next</h2>
            <p style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>
              We're continuously exploring new opportunities and developing products
              designed to solve practical problems in emerging markets.
            </p>
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <Link
                to="/contact"
                className="btn btn--primary btn--arrow"
                style={{ background: '#1a2a6c', color: '#fff' }}
              >
                Partner With Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SCS RFQ CTA — FIXED CENTERING
      ============================================================ */}
      <section className="container" style={{ paddingBottom: 96, paddingTop: 40 }}>
        <Reveal className="cta-banner" style={{
          background: 'linear-gradient(120deg, #12306e 0%, #081b3f 100%)',
          borderRadius: '16px',
          padding: '56px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap',
          color: '#ffffff',
        }}>
          <div>
            <div className="eyebrow" style={{ color: '#7ea1ff', justifyContent: 'flex-start' }}>
              BanorInc SCS
            </div>
            <h2 style={{ color: '#ffffff', margin: '4px 0 8px', fontSize: 'clamp(24px, 3vw, 30px)' }}>
              Ready to send us your next RFQ?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', margin: 0 }}>
              Let's get you the best value, fast.
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
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff'
            }}
          >
            Contact Us →
          </Link>
        </Reveal>
      </section>
    </>
  )
}