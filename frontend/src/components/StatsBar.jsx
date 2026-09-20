import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 8, label: 'Our Staff' },
  { num: 5, label: 'Partners' },
  { num: 10, label: 'Completed Projects' },
  { num: 25, label: 'Combined Years of Experience' },
]

function CountUp({ target, active }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1100
    const start = performance.now()
    let raf

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return <>{value}</>
}

export default function StatsBar({ dark = false }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`stats ${dark ? 'stats--dark' : ''}`}>
      {stats.map((s) => (
        <div className={`stat ${active ? 'is-visible' : ''}`} key={s.label}>
          <div className="stat__num">
            <CountUp target={s.num} active={active} />
            <span className="plus">+</span>
          </div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
