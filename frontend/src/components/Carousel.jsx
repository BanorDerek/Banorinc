import { useEffect, useState } from 'react'

/**
 * slides: [{ src, caption }]. Drop real images at each `src` (relative to
 * /public) and they'll appear automatically — missing ones fall back to a
 * labelled placeholder so it's obvious what to add and where.
 */
export default function Carousel({ slides, ratio = '16/7', interval = 4200 }) {
  const [index, setIndex] = useState(0)
  const [broken, setBroken] = useState({})

  useEffect(() => {
    if (slides.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [slides.length, interval])

  return (
    <div className="carousel" style={{ aspectRatio: ratio }}>
      {slides.map((s, i) => (
        <div className={`carousel__slide ${i === index ? 'is-active' : ''}`} key={s.src}>
          {!broken[i] ? (
            <img
              src={s.src}
              alt={s.caption || ''}
              loading="lazy"
              onError={() => setBroken((b) => ({ ...b, [i]: true }))}
            />
          ) : (
            <div className="carousel__placeholder">
              <span>{s.src.replace(/^\/?assets\//, '')}</span>
            </div>
          )}
          {s.caption && <div className="carousel__caption">{s.caption}</div>}
        </div>
      ))}

      {slides.length > 1 && (
        <div className="carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === index ? 'is-active' : ''}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
