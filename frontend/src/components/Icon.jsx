function Wrap({ children, size = 24, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

const paths = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 5-5 2 2-5z" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.2 12.3l2.4 2.4 5.2-5.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-7.4-7-12.2A7 7 0 0 1 19 8.8C19 13.6 12 21 12 21z" />
      <circle cx="12" cy="8.7" r="2.3" />
    </>
  ),
  bars: (
    <>
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="12" y1="18" x2="12" y2="6" />
      <line x1="18" y1="18" x2="18" y2="14" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-9.7-9A5.3 5.3 0 0 1 12 6.5 5.3 5.3 0 0 1 21.7 11c-2.2 4.4-9.7 9-9.7 9z" />
  ),
  bulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.3 11c.7.5 1.1 1.3 1.1 2.1h4.4c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3z" />
    </>
  ),
  trending: (
    <>
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 1 0-2.6 6.7" />
      <polyline points="20 4 20 11 13 11" />
    </>
  ),
  box: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5l8 4.5 8-4.5" />
      <line x1="12" y1="12" x2="12" y2="21" />
    </>
  ),
  chartLine: (
    <>
      <polyline points="3 18 9 11 13 14 21 5" />
      <circle cx="9" cy="11" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="14" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </>
  ),
  network: (
    <>
      <circle cx="6.5" cy="7" r="2.6" />
      <circle cx="17.5" cy="17" r="2.6" />
      <circle cx="17.5" cy="7" r="2.6" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="8.2" y1="9" x2="15.8" y2="15" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  droplet: (
    <path d="M12 3c-4.4 5.4-6.6 8.9-6.6 12A6.6 6.6 0 0 0 18.6 15c0-3.1-2.2-6.6-6.6-12z" />
  ),
  signal: (
    <>
      <line x1="5" y1="19" x2="5" y2="15" />
      <line x1="10" y1="19" x2="10" y2="11" />
      <line x1="15" y1="19" x2="15" y2="7" />
      <line x1="20" y1="19" x2="20" y2="4" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="8" width="10" height="13" rx="1" />
      <line x1="8" y1="12" x2="8" y2="12.01" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
      <line x1="8" y1="16" x2="8" y2="16.01" />
      <line x1="12" y1="16" x2="12" y2="16.01" />
      <path d="M15 8l4 3v10h-4" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <line x1="12" y1="7" x2="12" y2="20" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <path d="M5 15a7 7 0 0 0 14 0" />
    </>
  ),
  gear: (
    <g>
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="8" strokeDasharray="2.6 3" />
    </g>
  ),
  mapPin: (
    <>
      <path d="M12 21s-7-7.4-7-12.2A7 7 0 0 1 19 8.8C19 13.6 12 21 12 21z" />
      <circle cx="12" cy="8.7" r="2.3" />
    </>
  ),
  phone: (
    <path d="M7 3h3l1.4 4-2 1.6a12.4 12.4 0 0 0 6 6l1.6-2 4 1.4v3a2 2 0 0 1-2 2C11.5 19 5 12.5 5 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 16 14" />
    </>
  ),
  check: <polyline points="4 12 9 17 20 6" />,
  arrowRight: (
    <>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </>
  ),
}

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <Wrap size={size} className={className}>
      {paths[name] || paths.box}
    </Wrap>
  )
}
