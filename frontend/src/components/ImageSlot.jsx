import { useState } from 'react'
import Icon from './Icon.jsx'

/**
 * Drop a real image at `src` (relative to /public) and the box resizes to
 * match that image's own width/height — nothing gets cropped or padded
 * into someone else's ratio. `ratio` is only a placeholder height used
 * before the real image has loaded (or if it's still missing).
 */
export default function ImageSlot({ src, alt = '', ratio = '4/3', icon = 'box', className = '' }) {
  const [broken, setBroken] = useState(false)
  const [naturalRatio, setNaturalRatio] = useState(null)

  function handleLoad(e) {
    const { naturalWidth, naturalHeight } = e.currentTarget
    if (naturalWidth && naturalHeight) {
      setNaturalRatio(`${naturalWidth} / ${naturalHeight}`)
    }
  }

  const showImage = !broken
  const appliedRatio = showImage && naturalRatio ? naturalRatio : ratio

  return (
    <div className={`image-slot ${className}`} style={{ aspectRatio: appliedRatio }}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setBroken(true)}
          onLoad={handleLoad}
          loading="lazy"
        />
      ) : (
        <div className="image-slot__placeholder">
          <Icon name={icon} size={26} />
          <span>{src.replace(/^\/?assets\//, '')}</span>
        </div>
      )}
    </div>
  )
}