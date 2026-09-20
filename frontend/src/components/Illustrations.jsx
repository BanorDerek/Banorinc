/* Custom geometric illustrations — brand palette, no external imagery.
   Each is a self-contained SVG with a couple of animated elements
   (gentle float / pulse / draw) so the service pages feel alive. */

export function ProcurementArt() {
  return (
    <svg viewBox="0 0 420 320" className="illustration" role="img" aria-label="Crates being sourced and shipped">
      <defs>
        <linearGradient id="pcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#081b3f" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="170" r="130" fill="#e8edfa" />
      <g className="illu-float">
        <rect x="130" y="150" width="80" height="80" rx="6" fill="url(#pcGrad)" />
        <path d="M130 168 L170 190 L210 168" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6" />
        <line x1="170" y1="190" x2="170" y2="230" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
      </g>
      <g className="illu-float illu-float--delay">
        <rect x="230" y="110" width="62" height="62" rx="6" fill="#ffffff" stroke="#12306e" strokeWidth="2" />
        <path d="M230 124 L261 141 L292 124" stroke="#12306e" strokeWidth="2" fill="none" />
        <line x1="261" y1="141" x2="261" y2="172" stroke="#12306e" strokeWidth="2" />
      </g>
      <g className="illu-float illu-float--slow">
        <rect x="90" y="90" width="46" height="46" rx="6" fill="#c9a227" opacity="0.9" />
      </g>
      <g stroke="#12306e" strokeWidth="2" strokeDasharray="6 8" opacity="0.5" className="illu-dash">
        <path d="M60 240 Q 210 300 360 230" fill="none" />
      </g>
      <circle cx="60" cy="240" r="5" fill="#c9a227" />
      <circle cx="360" cy="230" r="5" fill="#1d4ed8" />
    </svg>
  )
}

export function ConsultingArt() {
  return (
    <svg viewBox="0 0 420 320" className="illustration" role="img" aria-label="Data analytics driving supply chain decisions">
      <circle cx="210" cy="170" r="130" fill="#e8edfa" />
      <g className="illu-float">
        <polyline points="90,220 150,170 190,195 260,120 330,150" fill="none" stroke="#12306e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="150" cy="170" r="5" fill="#1d4ed8" />
        <circle cx="190" cy="195" r="5" fill="#1d4ed8" />
        <circle cx="260" cy="120" r="5" fill="#c9a227" />
        <circle cx="330" cy="150" r="5" fill="#1d4ed8" />
      </g>
      <g className="illu-float illu-float--delay" opacity="0.85">
        <rect x="90" y="230" width="20" height="40" rx="3" fill="#1d4ed8" />
        <rect x="120" y="210" width="20" height="60" rx="3" fill="#12306e" />
        <rect x="150" y="245" width="20" height="25" rx="3" fill="#c9a227" />
      </g>
      <g className="illu-float illu-float--slow" opacity="0.9">
        <circle cx="320" cy="90" r="26" fill="none" stroke="#12306e" strokeWidth="3" />
        <line x1="339" y1="109" x2="356" y2="126" stroke="#12306e" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function OEMArt() {
  return (
    <svg viewBox="0 0 420 320" className="illustration" role="img" aria-label="OEM products entering new global markets">
      <circle cx="210" cy="170" r="130" fill="#e8edfa" />
      <g className="illu-spin">
        <circle cx="210" cy="170" r="78" fill="none" stroke="#12306e" strokeWidth="2" />
        <ellipse cx="210" cy="170" rx="30" ry="78" fill="none" stroke="#12306e" strokeWidth="2" />
        <line x1="132" y1="170" x2="288" y2="170" stroke="#12306e" strokeWidth="2" />
      </g>
      <circle cx="210" cy="170" r="46" fill="#1d4ed8" />
      <g className="illu-float">
        <circle cx="120" cy="110" r="9" fill="#c9a227" />
        <circle cx="310" cy="120" r="7" fill="#12306e" />
        <circle cx="300" cy="235" r="8" fill="#1d4ed8" />
        <circle cx="115" cy="230" r="6" fill="#12306e" />
      </g>
    </svg>
  )
}

export function ConsortiumArt() {
  return (
    <svg viewBox="0 0 420 320" className="illustration" role="img" aria-label="Businesses connected through a shared consortium platform">
      <circle cx="210" cy="170" r="130" fill="#e8edfa" />
      <g className="illu-float" stroke="#12306e" strokeWidth="2" opacity="0.55">
        <line x1="150" y1="130" x2="210" y2="170" />
        <line x1="270" y1="130" x2="210" y2="170" />
        <line x1="150" y1="220" x2="210" y2="170" />
        <line x1="270" y1="220" x2="210" y2="170" />
      </g>
      <circle cx="210" cy="170" r="22" fill="#12306e" />
      <g className="illu-float illu-float--delay">
        <circle cx="150" cy="130" r="16" fill="#1d4ed8" />
        <circle cx="270" cy="130" r="16" fill="#1d4ed8" />
        <circle cx="150" cy="220" r="16" fill="#c9a227" />
        <circle cx="270" cy="220" r="16" fill="#1d4ed8" />
      </g>
    </svg>
  )
}
