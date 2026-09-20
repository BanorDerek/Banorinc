import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import StatsBar from '../components/StatsBar.jsx'
import ClientsGrid from '../components/ClientsGrid.jsx'
import Icon from '../components/Icon.jsx'

// Hero images - ES Module imports
import hero1 from '../assets/images/hero-1.png'
import hero2 from '../assets/images/hero-2.png'
import hero3 from '../assets/images/hero-3.png'
import hero4 from '../assets/images/hero-4.png'

// Business images
import pillar1 from '../assets/images/pillar-1.png'
import pillar2 from '../assets/images/pillar-2.png'
import pillar3 from '../assets/images/pillar-3.png'
import pillar4 from '../assets/images/pillar-4.png'
import clientsBg from '../assets/images/clients-bg.png'
import bluetidy from '../assets/images/bluetidy.png'
import ctaBg from '../assets/images/cta-bg.png'

// Hero slider
const heroSlides = [
  {
    image: hero1,
    alt: 'BanorInc businesses and solutions'
  },
  {
    image: hero2,
    alt: 'Technology and products'
  },
  {
    image: hero3,
    alt: 'Innovation across industries'
  },
  {
    image: hero4,
    alt: 'Building for the future'
  }
]

// Business highlights
const businessPillars = [
  {
    icon: 'layers',
    title: 'Supply Chain Solutions',
    body: 'Sustainable supply chain solutions connecting Oil & Gas, Telecoms, Marine, Manufacturing and Banking clients to the right products and partners.',
    image: pillar1,
    alt: 'Supply chain solutions',
    link: '/service/supply-chain'
  },
  {
    icon: 'refresh',
    title: 'Technology Platforms',
    body: 'Building technology-powered platforms that simplify operations and connect people to services — like Blue Tidy for property cleaning.',
    image: bluetidy,
    alt: 'Technology platforms',
    link: '/service/technology-platforms'
  },
  {
    icon: 'bulb',
    title: 'Product Innovation',
    body: 'Continuously developing new products and solutions designed to solve practical problems in emerging markets.',
    image: pillar3,
    alt: 'Product innovation',
    link: '/contact'
  },
  {
    icon: 'trending',
    title: 'Market Development',
    body: 'Partnering with OEMs and businesses to develop new markets, identify opportunities, and drive growth across sectors.',
    image: pillar4,
    alt: 'Market development',
    link: '/service/market-development'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <>
      {/* =========================================================
          HERO — BANORINC. PARENT COMPANY
      ========================================================== */}
      <section
        className="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 0,
            }}
          />
        ))}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(10, 25, 47, 0.78)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '12px',
            zIndex: 3,
          }}
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #fff',
                background: currentSlide === index ? '#4169E1' : 'transparent',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            padding: '10px 16px',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.4)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            padding: '10px 16px',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.4)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
          aria-label="Next slide"
        >
          ›
        </button>

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            paddingTop: '20px',
            paddingBottom: '80px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <Reveal>
            <div
              className="eyebrow"
              style={{
                color: '#4169E1',
                letterSpacing: '0.12em',
                fontSize: '0.9rem',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              BanorInc. — Technology · Solutions · Products
            </div>

            <h1
              style={{
                color: '#fff',
                maxWidth: '900px',
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                lineHeight: '1.15',
              }}
            >
              Building{' '}
              <em
                style={{
                  color: '#4169E1',
                  fontStyle: 'normal',
                }}
              >
                businesses and products
              </em>{' '}
              that solve real problems
            </h1>

            <p
              className="lead"
              style={{
                color: '#e0e0e0',
                maxWidth: '720px',
                fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
                lineHeight: '1.8',
              }}
            >
              BanorInc. builds and operates technology-driven businesses that create 
              practical value — from sustainable supply chain solutions to platforms 
              that simplify everyday life.
            </p>

            <div
              className="hero__actions"
              style={{
                marginTop: '2rem',
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <Link
                to="/about"
                style={{
                  background: '#1a2a6c',
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(26, 42, 108, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2a3a8c'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(26, 42, 108, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1a2a6c'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(26, 42, 108, 0.3)'
                }}
              >
                About BanorInc.
              </Link>

              <a
                href="#businesses"
                style={{
                  color: '#fff',
                  border: '2px solid rgba(255,255,255,0.3)',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4169E1'
                  e.currentTarget.style.background = 'rgba(65, 105, 225, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Explore Our Businesses ↓
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO — BUSINESS OVERVIEW
      ========================================================== */}
      <section
        id="businesses"
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
              What We Do
            </div>

            <h2 style={{ color: '#0a192f', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              We build solutions across industries
            </h2>

            <p style={{ color: '#4a5568', maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
              Each of our businesses is designed to solve practical problems and 
              create lasting value for customers and communities.
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
            {businessPillars.map((pillar, index) => {
              const isComingSoon = pillar.title === 'Product Innovation'
              
              return (
                <Reveal
                  as="div"
                  key={pillar.title}
                  delay={index * 80}
                  style={{
                    background: '#f8f9fa',
                    borderRadius: '16px',
                    padding: '40px 32px',
                    border: isComingSoon ? '2px dashed #cbd5e1' : '1px solid #e8ecf2',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
                    if (isComingSoon) {
                      e.currentTarget.style.borderColor = '#4169E1'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    if (isComingSoon) {
                      e.currentTarget.style.borderColor = '#cbd5e1'
                    }
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: '100%',
                      height: '200px',
                      overflow: 'hidden',
                      borderRadius: '10px',
                      marginBottom: '20px',
                      background: '#e8ecf2',
                    }}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
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

                  {/* Icon */}
                  <div style={{ color: '#4169E1', marginBottom: '12px' }}>
                    <Icon name={pillar.icon} size={28} />
                  </div>

                  {/* Tag */}
                  <div
                    className="eyebrow"
                    style={{
                      color: isComingSoon ? '#f59e0b' : '#4169E1',
                      marginBottom: '4px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {isComingSoon ? 'Coming Soon' : pillar.title === 'Technology Platforms' ? 'Powered by BanorInc.' : 'BanorInc'}
                  </div>

                  {/* Title */}
                  <h3 style={{ 
                    color: '#0a192f', 
                    fontSize: '1.4rem', 
                    marginBottom: '12px',
                    marginTop: '2px',
                  }}>
                    {pillar.title}
                  </h3>

                  {/* Body */}
                  <p style={{ 
                    color: '#4a5568', 
                    lineHeight: '1.7',
                    flex: 1,
                    marginBottom: '20px',
                  }}>
                    {pillar.body}
                  </p>

                  {/* Link */}
                  {pillar.link.startsWith('http') ? (
                    <a
                      href={pillar.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#1a2a6c',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.3s ease, gap 0.3s ease',
                        marginTop: 'auto',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#4169E1'
                        e.currentTarget.style.gap = '12px'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1a2a6c'
                        e.currentTarget.style.gap = '6px'
                      }}
                    >
                      Explore {pillar.title} →
                    </a>
                  ) : (
                    <Link
                      to={pillar.link}
                      style={{
                        color: '#1a2a6c',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.3s ease, gap 0.3s ease',
                        marginTop: 'auto',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#4169E1'
                        e.currentTarget.style.gap = '12px'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1a2a6c'
                        e.currentTarget.style.gap = '6px'
                      }}
                    >
                      Learn More →
                    </Link>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SCS HIGHLIGHT
      ========================================================== */}
      <section
        className="section"
        style={{
          background: '#f8f9fa',
          padding: '60px 20px',
        }}
      >
        <div className="container">
          <Reveal>
            <div
              className="eyebrow"
              style={{
                color: '#4169E1',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              BanorInc SCS
            </div>

            <h2
              style={{
                color: '#0a192f',
                maxWidth: '800px',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              }}
            >
              Sustainable Supply Chain Solutions
            </h2>

            <p
              style={{
                color: '#4a5568',
                maxWidth: '760px',
                fontSize: 'clamp(1rem, 1.1vw, 1.1rem)',
                lineHeight: '1.8',
              }}
            >
              BanorInc SCS connects Oil & Gas, Telecoms, Marine, Manufacturing 
              and Banking clients to the right products, right partners and the 
              right price — On Time, In Full.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginTop: '32px',
              }}
            >
              {[
                'Versatility across sectors',
                'Added value services',
                'OEM representation',
                'KPI-driven delivery'
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: '#fff',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <span style={{ color: '#4169E1', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ color: '#0a192f', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <Link
                to="/service/supply-chain"
                style={{
                  background: '#1a2a6c',
                  color: '#fff',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-block',
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
                Explore SCS Services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          STATS — COMPANY-WIDE
      ========================================================== */}
      <section className="container" style={{ padding: '60px 20px' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
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
              BanorInc. at a Glance
            </div>
          </div>
        </Reveal>

        <StatsBar />
      </section>

      {/* =========================================================
          BLUE TIDY FEATURE
      ========================================================== */}
      <section
        className="section"
        style={{
          background: '#f8f9fa',
          padding: '60px 20px',
        }}
      >
        <div className="container">
          <Reveal>
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: 'clamp(40px, 6vw, 64px)',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid #e8ecf2',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              {/* Left Content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div
                  className="eyebrow"
                  style={{
                    color: '#4169E1',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  Powered by BanorInc.
                </div>

                <h2 style={{ color: '#0a192f', marginBottom: '16px' }}>
                  Meet Blue Tidy
                </h2>

                <p
                  style={{
                    color: '#4a5568',
                    fontSize: 'clamp(1rem, 1.1vw, 1.1rem)',
                    lineHeight: '1.8',
                    marginBottom: '24px',
                  }}
                >
                  Blue Tidy is a technology-powered platform built to simplify 
                  property cleaning operations by connecting hosts with 
                  professional cleaners.
                </p>

                <a
                  href="https://bluetidy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#1a2a6c',
                    color: '#ffffff',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#2a3a8c'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(26, 42, 108, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a2a6c'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Explore Blue Tidy →
                </a>
              </div>

              {/* Right Image */}
              <div
                style={{
                  position: 'relative',
                  height: '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: `url(${bluetidy}) center/cover no-repeat`,
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CLIENTS
      ========================================================== */}
      <section
        className="section"
        style={{
          backgroundImage: `url(${clientsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(10, 25, 47, 0.92)',
            zIndex: 1,
          }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Reveal className="section-head section-head--center" style={{ color: '#fff' }}>
            <div
              className="eyebrow"
              style={{
                color: '#4169E1',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '0.85rem',
                fontWeight: 600,
                justifyContent: 'center',
              }}
            >
              Our Clients & Partners
            </div>

            <h2 style={{ color: '#fff', textAlign: 'center' }}>Trusted by industry leaders</h2>

            <p style={{ color: '#e0e0e0', maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
              We partner with businesses across multiple sectors to deliver 
              excellence and drive growth.
            </p>
          </Reveal>

          <ClientsGrid />
        </div>
      </section>

      {/* =========================================================
          WHAT'S NEXT
      ========================================================== */}
      <section
        className="section"
        style={{
          background: '#f8f9fa',
          padding: '60px 20px',
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
              What's Next
            </div>

            <h2 style={{ color: '#0a192f', textAlign: 'center' }}>
              Building what comes next
            </h2>

            <p style={{ color: '#4a5568', maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
              BanorInc. is continuously developing new products and exploring 
              opportunities to create technology-driven solutions for emerging 
              markets.
            </p>

            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <Link
                to="/contact"
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
                Partner With Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SCS RFQ CTA
      ========================================================== */}
      <section
        className="container"
        style={{
          paddingBottom: 96,
          paddingTop: 40,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Reveal
          className="cta-banner"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            padding: '56px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            color: '#ffffff',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10, 25, 47, 0.88)',
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              flex: 1,
            }}
          >
            <div
              className="eyebrow"
              style={{
                color: '#7ea1ff',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              BanorInc SCS
            </div>

            <h2
              style={{
                color: '#fff',
                marginBottom: '4px',
                fontSize: 'clamp(24px, 3vw, 30px)',
              }}
            >
              Have an RFQ? Let's get you the best value, fast.
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.72)', margin: 0 }}>
              Let's get you the best value, fast.
            </p>
          </div>

          <Link
            to="/contact"
            style={{
              position: 'relative',
              zIndex: 2,
              background: '#fff',
              color: '#0a192f',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              display: 'inline-block',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
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
            Get Started Today →
          </Link>
        </Reveal>
      </section>
    </>
  )
}