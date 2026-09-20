import Reveal from './Reveal.jsx'
import { useState, useEffect } from 'react'

const clients = [
  { name: 'Achorom', file: '/assets/clients/achorom.png' },
  { name: 'AA Designs and Development', file: '/assets/clients/aa-designs.png' },
  { name: 'Portwest', file: '/assets/clients/portwest.png' },
  { name: 'Green House Solution', file: '/assets/clients/greenhouse.png' },
  { name: 'Valley Ridge', file: '/assets/clients/valley-ridge.png' },
  { name: 'Unknown', file: '/assets/clients/unknown.jpeg' },
]

export default function ClientsGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length)
  }

  // Previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length)
  }

  // Get visible logos (show 5 at a time for wider display)
  const getVisibleLogos = () => {
    const items = []
    const total = clients.length
    
    // Show 5 logos at a time (wider display)
    const visibleCount = 5
    const halfCount = Math.floor(visibleCount / 2)
    
    for (let i = -halfCount; i <= halfCount; i++) {
      const index = (currentIndex + i + total) % total
      items.push({
        ...clients[index],
        position: i,
        isCenter: i === 0,
      })
    }
    
    return items
  }

  const visibleLogos = getVisibleLogos()

  return (
    <div 
      className="clients-slider"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%', // Full width
        margin: '0 auto',
        padding: '40px 60px', // Added horizontal padding for arrows
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '16px',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        transition: 'all 0.5s ease',
        minHeight: '100px',
        width: '100%',
      }}>
        {visibleLogos.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: client.isCenter ? '1.6' : '1',
              opacity: client.isCenter ? 1 : 0.4,
              transform: client.isCenter ? 'scale(1.15)' : 'scale(0.85)',
              transition: 'all 0.5s ease',
              padding: '0 15px',
              minWidth: client.isCenter ? '180px' : '120px',
            }}
          >
            <img
              src={client.file}
              alt={client.name}
              style={{
                maxWidth: '100%',
                maxHeight: client.isCenter ? '80px' : '50px',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                transition: 'all 0.5s ease',
                filter: client.isCenter ? 'none' : 'grayscale(100%)',
                opacity: client.isCenter ? 1 : 0.5,
              }}
              onError={(e) => {
                console.log(`Failed to load: ${client.name}`)
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(65, 105, 225, 0.2)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff',
          fontSize: '1.8rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(65, 105, 225, 0.4)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(65, 105, 225, 0.2)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(65, 105, 225, 0.2)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff',
          fontSize: '1.8rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(65, 105, 225, 0.4)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(65, 105, 225, 0.2)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '30px',
      }}>
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.2)',
              background: index === currentIndex ? '#4169E1' : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}