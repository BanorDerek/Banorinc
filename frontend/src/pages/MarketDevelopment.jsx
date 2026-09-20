import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const capabilities = [
  {
    icon: 'globe',
    title: 'Market Entry Strategy',
    body: 'We develop comprehensive market entry strategies that include market research, competitive analysis, and targeted positioning.',
  },
  {
    icon: 'trending',
    title: 'OEM Representation',
    body: 'Partnering with Original Equipment Manufacturers to identify new markets for existing or new products and services.',
  },
  {
    icon: 'network',
    title: 'Partner Network',
    body: 'Building strategic partnerships with local and international businesses to create new opportunities and drive growth.',
  },
  {
    icon: 'chartLine',
    title: 'Growth Strategy',
    body: 'Developing data-driven growth strategies that identify new segments, optimize market positioning, and maximize ROI.',
  },
]

export default function MarketDevelopment() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Reveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span>
              <Link to="/service">Solutions</Link><span>/</span>
              <span>Market Development</span>
            </div>
            <h1>Market Development</h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 520, marginTop: 14 }}>
              Identifying new opportunities, developing new markets, and driving growth across sectors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="eyebrow">Business Growth</div>
            <h2>Driving growth through strategic market development</h2>
            <p>
              We partner with OEMs and businesses to identify new opportunities, 
              develop new markets, and drive growth across sectors.
            </p>
            <p>
              Our market development approach combines deep industry knowledge with 
              strategic thinking to create sustainable growth strategies for our partners.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link to="/contact" className="btn btn--primary btn--arrow">
                Partner With Us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ImageSlot
              src="/assets/about/operations.png"
              alt="Market development"
              ratio="4/3"
              icon="trending"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Capabilities</div>
            <h2 style={{ textAlign: 'center' }}>How we drive growth</h2>
          </Reveal>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '24px',
            marginTop: '32px',
          }}>
            {capabilities.map((c, i) => (
              <Reveal as="div" key={c.title} delay={i * 80}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px 24px',
                    border: '1px solid #e8ecf2',
                    height: '100%',
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
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      background: 'rgba(65, 105, 225, 0.1)',
                      color: '#1a2a6c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon name={c.icon} size={24} />
                  </div>
                  <h3 style={{ color: '#0a192f', fontSize: '1.1rem', marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ color: '#4a5568', lineHeight: '1.7', margin: 0 }}>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Why Partner With Us</div>
            <h2 style={{ textAlign: 'center' }}>Strategic growth partners</h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '32px' }}>
            {[
              { title: 'Deep Industry Knowledge', desc: 'Understanding of multiple sectors including Oil & Gas, Telecoms, and Manufacturing.' },
              { title: 'OEM Relationships', desc: 'Strong partnerships with Original Equipment Manufacturers across industries.' },
              { title: 'Market Intelligence', desc: 'Data-driven insights to identify new opportunities and markets.' },
              { title: 'Strategic Execution', desc: 'Proven ability to execute growth strategies that deliver results.' },
            ].map((item, i) => (
              <Reveal as="div" key={i} delay={i * 60}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ 
                    fontSize: '28px', 
                    marginBottom: '12px',
                    color: '#4169E1',
                  }}>✦</div>
                  <h4 style={{ color: '#0a192f', marginBottom: '6px', fontSize: '1rem' }}>{item.title}</h4>
                  <p style={{ color: '#4a5568', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ paddingBottom: 96, paddingTop: 40 }}>
        <Reveal className="cta-banner">
          <div>
            <h2>Ready to grow your market?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 0 }}>
              Let's explore how we can help you identify new opportunities and drive growth.
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