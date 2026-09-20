import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import StatsBar from '../components/StatsBar.jsx'

// Import images
import pillar1 from '../assets/images/pillar-1.png'
import pillar2 from '../assets/images/pillar-2.png'
import pillar3 from '../assets/images/pillar-3.png'
import pillar4 from '../assets/images/pillar-4.png'

// SCS Pillars
const pillars = [
  {
    icon: 'compass',
    title: 'Versatility',
    body: 'Our expertise cuts across several sectors, from Oil and Gas to Telecoms, enabling prompt response to your RFQs.',
    image: pillar1,
  },
  {
    icon: 'layers',
    title: 'Added Value Services',
    body: 'We do not just Purchase to Pay — we build in additional services to offer you greater value for the money spent.',
    image: pillar2,
  },
  {
    icon: 'badge',
    title: 'OEM Representation',
    body: 'Partnering with various OEMs to identify new markets for existing or new products and services.',
    image: pillar3,
  },
  {
    icon: 'target',
    title: 'Key Performance Indicators',
    body: 'Our KPIs measure our ability to deliver the Right Quantity and Right Quality, to the Right Place, at the Right Time.',
    image: pillar4,
  },
]

// SCS Services - These link to Service Detail pages
const scsServices = [
  {
    slug: 'procurement',
    icon: 'box',
    title: 'Procurement and Supply',
    tag: 'BanorInc SCS',
    body: 'It starts with receiving a Request for Quote. We source locally and internationally to provide the best quote that guarantees value for money.',
    link: '/service/procurement',
  },
  {
    slug: 'consulting',
    icon: 'chartLine',
    title: 'Consulting',
    tag: 'BanorInc SCS',
    body: 'Our offerings include comprehensive data analytics to provide business intelligence and models that smoothen supply chain operations.',
    link: '/service/consulting',
  },
  {
    slug: 'oem-representation',
    icon: 'globe',
    title: 'OEM Representation',
    tag: 'BanorInc SCS',
    body: 'We create market campaigns for new products in new markets, offering our clients trusted alternatives — with a focus on Oil and Gas and beyond.',
    link: '/service/oem-representation',
  },
  {
    slug: 'consortiums',
    icon: 'network',
    title: 'Consortiums',
    tag: 'BanorInc SCS',
    body: 'Banorinc provides a platform where an entity can indicate interest and find partners to form consortiums for purchase or logistics.',
    link: '/service/consortiums',
  },
]

// SCS Values
const values = [
  {
    icon: 'pin',
    title: 'Local Sourcing',
    body: 'We source locally for products before venturing international, supporting local businesses and enabling growth of the wider economy.',
    image: '/assets/images/value-1.png',
  },
  {
    icon: 'bars',
    title: 'Aggregate Demand',
    body: 'Our services aggregate demand and support our customers to do the same — providing value for money while preserving the environment.',
    image: '/assets/images/value-2.png',
  },
  {
    icon: 'heart',
    title: 'Corporate Social Responsibility',
    body: 'Engaging with the grassroots through various empowerment projects to improve their standard of living.',
    image: '/assets/images/value-3.png',
  },
  {
    icon: 'bulb',
    title: 'Innovation',
    body: 'Adding value by promoting innovative brands, meeting the rising need to be competitive both globally and domestically.',
    image: '/assets/images/value-4.png',
  },
  {
    icon: 'trending',
    title: 'Market Development',
    body: 'Partnering with OEMs to develop new markets in emerging economies and identify new segments for existing products.',
    image: '/assets/images/value-5.png',
  },
  {
    icon: 'refresh',
    title: 'Continuous Improvement',
    body: 'Continuously improving our business processes to build a brand that stays relevant to the industry and to our profitability goals.',
    image: '/assets/images/value-6.png',
  },
]

// Sectors
const sectors = [
  {
    title: 'Energy and Power Generation',
    icon: 'bolt',
    body: 'From low-kVA to HHP generators, transformers, solar panels, meters, power cables, circuit breakers, speed governors and excitation transformers.',
  },
  {
    title: 'Oil and Gas',
    icon: 'droplet',
    body: 'On/offshore safety equipment, tubulars, OCTG, pipes & fittings, electrical and mechanical instrumentation, air compressors, gas & steam turbines.',
  },
  {
    title: 'Telecommunication',
    icon: 'signal',
    body: 'Electrical and network equipment from communication satellites to radios, devices, transmission lines, switches, fibre-optic cables and routers.',
  },
  {
    title: 'Construction',
    icon: 'building',
    body: 'Safety equipment like suspended scaffolding and fall protection, doors, and international sourcing of exotic furniture.',
  },
  {
    title: 'Marine',
    icon: 'anchor',
    body: 'Steel wire ropes, fibre ropes, webbing slings, rigging screws and turnbuckles, eye sockets, anchors and vessel engines.',
  },
  {
    title: 'Manufacturing',
    icon: 'gear',
    body: 'From indirect to direct buys — bolts and nuts, equipment parts and more. Our technical team can suggest alternatives that meet your specification.',
  },
]

// Process Steps
const process = [
  {
    step: 'Source',
    icon: 'compass',
    body: 'Receiving the RFQ is the first step. We ensure specifications are clear and concise to reduce lead times.',
  },
  {
    step: 'Bid',
    icon: 'trending',
    body: 'We respond to RFQs promptly with the best prices, and share supplier pricing where possible.',
  },
  {
    step: 'Purchase',
    icon: 'badge',
    body: 'Within 24 hours of receiving a Purchase Order, payment is made to ensure timely delivery.',
  },
  {
    step: 'Deliver',
    icon: 'box',
    body: 'Client orders are delivered to their desired location within agreed lead times — On Time, In Full.',
  },
]

export default function SupplyChain() {
  return (
    <>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Reveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span>
              <Link to="/service">Solutions</Link><span>/</span>
              <span>Supply Chain</span>
            </div>
            <h1>BanorInc SCS</h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 520, marginTop: 14 }}>
              Sustainable Supply Chain Solutions for Nigeria&rsquo;s Core Industries
            </p>
            <div style={{ 
              marginTop: '16px', 
              display: 'flex', 
              gap: '12px', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <span style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#7ea1ff',
                background: 'rgba(255,255,255,0.08)',
                padding: '6px 16px',
                borderRadius: '20px',
                letterSpacing: '0.06em',
              }}>
                Source · Bid · Purchase · Deliver
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          INTRODUCTION
      ============================================================ */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="eyebrow">Who We Are</div>
            <h2>Supply Chain Solutions for Core Industries</h2>
            <p>
              BanorInc SCS connects Oil &amp; Gas, Telecoms, Marine, Manufacturing 
              and Banking clients to the right products, right partners and the 
              right price — On Time, In Full.
            </p>
            <p>
              With a team of experienced supply chain professionals, our core strength 
              lies in our ability to source extensively and negotiate favourable prices 
              — bringing our clients the best value for money.
            </p>
            <div style={{ marginTop: '16px' }}>
              <Link to="/contact" className="btn btn--primary btn--arrow">
                Send an RFQ
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ImageSlot
              src="/assets/about/who-we-are.png"
              alt="Banorinc SCS team at work"
              ratio="4/3"
              icon="badge"
            />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SCS SERVICES - NEW SECTION (Links to Service Detail)
      ============================================================ */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Services</div>
            <h2 style={{ textAlign: 'center' }}>Supply Chain Solutions</h2>
            <p style={{ textAlign: 'center' }}>
              Explore our comprehensive supply chain services designed to meet your business needs.
            </p>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px',
              marginTop: '48px',
            }}
          >
            {scsServices.map((s, i) => (
              <Reveal
                as="div"
                key={s.slug}
                delay={i * 80}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '32px',
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
                <div className="service-card__icon">
                  <Icon name={s.icon} size={24} />
                </div>
                <div
                  className="eyebrow"
                  style={{
                    fontSize: '0.7rem',
                    color: '#4169E1',
                    marginBottom: '4px',
                  }}
                >
                  {s.tag}
                </div>
                <h3 style={{ marginTop: '4px', color: '#0a192f' }}>{s.title}</h3>
                <p style={{ color: '#4a5568', lineHeight: '1.7' }}>{s.body}</p>
                <Link
                  to={s.link}
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
                  Read More →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PILLARS
      ============================================================ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Why BanorInc SCS</div>
            <h2 style={{ textAlign: 'center' }}>Built around value, reliability and performance.</h2>
          </Reveal>

          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal as="div" className="pillar" key={p.title} delay={i * 80}>
                <div style={{
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div className="pillar__icon"><Icon name={p.icon} size={22} /></div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS
      ============================================================ */}
      <section className="container" style={{ padding: '60px 0' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              BanorInc SCS at a Glance
            </div>
          </div>
        </Reveal>
        <StatsBar />
      </section>

      {/* ============================================================
          VALUES
      ============================================================ */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Approach</div>
            <h2 style={{ textAlign: 'center' }}>What drives BanorInc SCS</h2>
            <p style={{ textAlign: 'center' }}>
              Identifying inefficiencies and implementing solutions that consider 
              people, the environment and long-term value.
            </p>
          </Reveal>

          <div className="value-grid">
            {values.map((v, i) => (
              <Reveal as="div" className="value-card" key={v.title} delay={i * 60}>
                <div style={{
                  width: '100%',
                  height: '160px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  marginBottom: '14px',
                }}>
                  <img
                    src={v.image}
                    alt={v.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div className="value-card__icon"><Icon name={v.icon} size={20} /></div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTORS
      ============================================================ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Where We Deliver</div>
            <h2 style={{ textAlign: 'center' }}>Sectors We Serve</h2>
            <p style={{ textAlign: 'center' }}>Our sourcing expertise cuts across various sectors.</p>
          </Reveal>

          <div className="sector-grid">
            {sectors.map((s, i) => (
              <Reveal as="div" className="sector-card" key={s.title} delay={i * 60}>
                <div className="sector-card__icon"><Icon name={s.icon} size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS
      ============================================================ */}
      <section className="section section--alt">
        <div className="container process">
          <Reveal className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>The Route</div>
            <h2 style={{ textAlign: 'center' }}>Our Procurement Process</h2>
          </Reveal>

          <div className="process__line">
            {process.map((p) => (
              <div className="process__stop" key={p.step}><Icon name={p.icon} size={15} /></div>
            ))}
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <Reveal as="div" className="process-card" key={p.step} delay={i * 90}>
                <h3>{i + 1}. {p.step}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}
      <section className="container" style={{ paddingBottom: 96, paddingTop: 40 }}>
        <Reveal className="cta-banner">
          <div>
            <h2>Ready to send us your next RFQ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 0 }}>
              Let's get you the best value, fast.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary btn--arrow" style={{ background: 'var(--white)', color: 'var(--navy)' }}>
            Contact Us
          </Link>
        </Reveal>
      </section>
    </>
  )
}