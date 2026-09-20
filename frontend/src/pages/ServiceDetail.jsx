import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

// Import images directly
import procurementImg from '../assets/services/procurement.png'
import consultingImg from '../assets/services/consulting.png'
import oemImg from '../assets/services/oem-representation.png'
import consortiumsImg from '../assets/services/consortiums.png'

const services = {
  procurement: {
    title: 'Procurement and Supply',
    icon: 'box',
    image: procurementImg,
    intro:
      'At Banorinc, our procurement and supply services start with receiving a request for a quote. We source both locally and internationally to provide the best quotes that guarantee value for money. Our strategic approach ensures that all your supply needs are met with the highest standards of quality and efficiency.',
    sectionTitle: 'Our Process',
    sectionBody:
      'We conduct thorough market research, assess suppliers, and perform a detailed cost-benefit analysis to ensure our clients receive the best deals. From procurement planning and sourcing, to negotiation and final delivery, we handle everything to ensure a seamless supply chain experience.',
    benefitsTitle: 'Key Benefits',
    benefits: [
      'Cost-effective solutions',
      'Wide network of trusted suppliers',
      'Comprehensive market analysis',
      'High-quality procurement management',
    ],
  },
  consulting: {
    title: 'Consulting Services',
    icon: 'chartLine',
    image: consultingImg,
    intro:
      'Our consulting services at Banorinc include advanced data analytics to provide business intelligence, process optimisation, and strategic modelling. We aim to smoothen supply chain operations, optimise resources, and enhance business outcomes for our clients.',
    sectionTitle: 'Our Approach',
    sectionBody:
      'We leverage cutting-edge technology to analyse data, identify trends, and provide actionable insights. Our expert team works closely with clients to develop customised strategies that drive efficiency and foster growth.',
    benefitsTitle: 'Key Offerings',
    benefits: [
      'Data analytics & business intelligence',
      'Supply chain optimisation',
      'Process improvement models',
      'Strategic business consulting',
    ],
  },
  'oem-representation': {
    title: 'OEM Representation',
    icon: 'globe',
    image: oemImg,
    intro:
      'Banorinc specialises in representing Original Equipment Manufacturers (OEMs) in new markets. We create tailored marketing campaigns designed to position your products as trusted alternatives in new regions. Our primary focus is on sectors like Oil and Gas, but we are equipped to handle a broad range of industries.',
    sectionTitle: 'Market Penetration Strategy',
    sectionBody:
      'We develop comprehensive market entry strategies that include market research, brand positioning, and targeted advertising. Our goal is to ensure that your product captures a significant market share and builds lasting customer relationships.',
    benefitsTitle: 'Key Offerings',
    benefits: [
      'Market analysis and entry strategy',
      'Brand positioning and campaign management',
      'Customer relationship management',
      'Product lifecycle support',
    ],
  },
  consortiums: {
    title: 'Consortiums',
    icon: 'network',
    image: consortiumsImg,
    intro:
      'Banorinc provides a platform for businesses to form consortiums, facilitating collaboration for procurement and logistics. By pooling resources, businesses can achieve economies of scale, reduce costs, and improve efficiency.',
    sectionTitle: 'Our Platform',
    sectionBody:
      'Our platform allows businesses to indicate interest in joining consortiums, find suitable partners, and engage in collaborative projects. We also offer support in consortium management, ensuring that all members work together seamlessly towards common goals.',
    benefitsTitle: 'Key Benefits',
    benefits: [
      'Access to a wide network of potential partners',
      'Cost savings through economies of scale',
      'Improved supply chain efficiency',
      'Comprehensive consortium management support',
    ],
  },
}

const order = ['procurement', 'consulting', 'oem-representation', 'consortiums']

export default function ServiceDetail() {
  const { slug } = useParams()
  const data = services[slug]

  if (!data) return <Navigate to="/service/supply-chain" replace />

  const currentIndex = order.indexOf(slug)
  
  // Get previous and next with loop
  const prevIndex = (currentIndex - 1 + order.length) % order.length
  const nextIndex = (currentIndex + 1) % order.length
  const prevSlug = order[prevIndex]
  const nextSlug = order[nextIndex]
  const prev = services[prevSlug]
  const next = services[nextSlug]

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Reveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/service/supply-chain">Supply Chain</Link>
              <span>/</span>
              <span>{data.title}</span>
            </div>
            <div className="detail-hero__row">
              <div className="detail-hero__icon"><Icon name={data.icon} size={26} /></div>
              <h1>{data.title}</h1>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <Reveal>
            <p className="detail-intro">{data.intro}</p>

            <h2>{data.sectionTitle}</h2>
            <p>{data.sectionBody}</p>

            <h2>{data.benefitsTitle}</h2>
            <ul className="benefit-list">
              {data.benefits.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 70}>
                  <span className="benefit-list__check"><Icon name="check" size={15} /></span>
                  {b}
                </Reveal>
              ))}
            </ul>

            <Link to="/contact" className="btn btn--primary btn--arrow" style={{ marginTop: 12 }}>
              Discuss Your Requirement
            </Link>
          </Reveal>

          <Reveal delay={140} className="detail-art">
            <ImageSlot src={data.image} alt={data.title} ratio="4/3" icon={data.icon} />
          </Reveal>
        </div>
      </section>

      {/* Navigation - Previous and Next with loop */}
      <section className="container" style={{ paddingBottom: 96 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}>
          {/* Previous */}
          <Reveal as="div" delay={80}>
            <Link 
              to={`/service/${prevSlug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '24px 28px',
                background: '#f8f9fa',
                borderRadius: '12px',
                border: '1px solid #e8ecf2',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                justifyContent: 'flex-start',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e8ecf2'
                e.currentTarget.style.transform = 'translateX(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8f9fa'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div style={{
                fontSize: '1.5rem',
                color: '#1a2a6c',
              }}>←</div>
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#64748b',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>Previous</div>
                <div style={{
                  color: '#0a192f',
                  fontWeight: 600,
                  fontSize: '1rem',
                }}>{prev.title}</div>
              </div>
            </Link>
          </Reveal>

          {/* Next */}
          <Reveal as="div" delay={80}>
            <Link 
              to={`/service/${nextSlug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '24px 28px',
                background: '#f8f9fa',
                borderRadius: '12px',
                border: '1px solid #e8ecf2',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                justifyContent: 'flex-end',
                textAlign: 'right',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e8ecf2'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8f9fa'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#64748b',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>Next</div>
                <div style={{
                  color: '#0a192f',
                  fontWeight: 600,
                  fontSize: '1rem',
                }}>{next.title}</div>
              </div>
              <div style={{
                fontSize: '1.5rem',
                color: '#1a2a6c',
              }}>→</div>
            </Link>
          </Reveal>
        </div>

        {/* Back to all services */}
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link 
            to="/service/supply-chain"
            style={{
              color: '#64748b',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#1a2a6c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
          >
            ← Back to all Supply Chain services
          </Link>
        </div>
      </section>
    </>
  )
}