import './BikeArt.css'

/**
 * BikeArt — نقشه‌ی فنی موتور به‌جای عکس.
 * چهار حالت: sport | trail | classic | electric
 * جای عکس واقعی: کافی است این کامپوننت را با <img src=... /> عوض کنی.
 */
export default function BikeArt({ type = 'sport', className = '' }) {
  const common = {
    className: `bike-art bike-art--${type} ${className}`.trim(),
    xmlns: 'http://www.w3.org/2000/svg',
    role: 'img',
    'aria-hidden': 'true',
    fill: 'none',
  }

  if (type === 'trail') {
    return (
      <svg {...common} viewBox="0 0 220 130">
        <Wheel cx={54} cy={88} r={31} knobby />
        <Wheel cx={180} cy={88} r={31} knobby />
        <path d="M54 88 L110 76" className="ba-bar" />
        <path d="M100 50 L134 48 L140 76 L106 80 Z" className="ba-mass" />
        <path d="M94 30 Q120 20 148 32 L152 50 L98 54 Z" className="ba-mass" />
        <path d="M52 28 L96 34 L94 50 L60 46 Z" className="ba-mass" />
        <path d="M164 38 L180 88" className="ba-bar" />
        <path d="M148 32 Q174 26 196 40 L190 50 L152 46 Z" className="ba-mass" />
        <path d="M160 58 Q182 48 204 66" className="ba-line" />
        <path d="M110 74 L82 74 L70 62" className="ba-bar" />
        <path d="M150 24 L172 18" className="ba-bar" />
        <path d="M40 40 L58 34" className="ba-line" />
      </svg>
    )
  }

  if (type === 'classic') {
    return (
      <svg {...common} viewBox="0 0 220 126">
        <Wheel cx={56} cy={88} r={28} spokes />
        <Wheel cx={174} cy={88} r={28} spokes />
        <path d="M56 88 L108 78" className="ba-bar" />
        <path d="M104 60 L134 58 L138 84 L108 86 Z" className="ba-mass" />
        <path d="M96 46 Q120 34 146 46 Q146 62 120 64 Q98 64 96 46 Z" className="ba-mass" />
        <path d="M62 48 Q82 40 100 48 L98 58 L64 58 Z" className="ba-mass" />
        <circle cx={166} cy={54} r={10} className="ba-line" />
        <path d="M156 42 L176 36" className="ba-bar" />
        <path d="M158 52 L174 88" className="ba-bar" />
        <path d="M152 70 Q174 60 194 76" className="ba-line" />
        <path d="M108 84 L68 88 L54 88" className="ba-bar" />
        <path d="M44 62 L58 62" className="ba-line" />
      </svg>
    )
  }

  if (type === 'electric') {
    return (
      <svg {...common} viewBox="0 0 220 126">
        <Wheel cx={58} cy={92} r={24} />
        <Wheel cx={178} cy={92} r={24} />
        <path d="M60 62 L110 58 L112 74 L64 78 Z" className="ba-mass" />
        <path d="M106 76 L152 72 L154 84 L108 88 Z" className="ba-mass" />
        <path d="M150 38 L172 42 L178 82 L152 78 Z" className="ba-mass" />
        <path d="M154 32 L176 28" className="ba-bar" />
        <path d="M166 58 L178 92" className="ba-bar" />
        <path d="M58 68 L58 88" className="ba-bar" />
        <path d="M120 62 L132 62 L126 70 L138 70 L118 84 L124 72 L114 72 Z" className="ba-spark" />
        <path d="M148 84 Q174 76 196 88" className="ba-line" />
      </svg>
    )
  }

  /* sport — پیش‌فرض */
  return (
    <svg {...common} viewBox="0 0 220 126">
      <Wheel cx={54} cy={88} r={28} />
      <Wheel cx={178} cy={88} r={28} />
      <path d="M54 88 L110 76" className="ba-bar" />
      <path d="M98 58 L136 56 L142 84 L106 88 Z" className="ba-mass" />
      <path d="M92 44 Q118 33 148 44 L150 60 L96 63 Z" className="ba-mass" />
      <path d="M50 34 L96 44 L94 58 L62 55 Z" className="ba-mass" />
      <path d="M148 42 Q176 44 186 64 L158 70 L146 58 Z" className="ba-mass" />
      <path d="M164 56 L178 88" className="ba-bar" />
      <path d="M158 66 Q180 58 200 74" className="ba-line" />
      <path d="M110 84 L72 92 L58 92" className="ba-bar" />
      <path d="M152 38 L166 33" className="ba-bar" />
      <path d="M44 44 L62 40" className="ba-line" />
    </svg>
  )
}

function Wheel({ cx, cy, r, spokes = false, knobby = false }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        className={knobby ? 'ba-tyre ba-tyre--knobby' : 'ba-tyre'}
      />
      <circle cx={cx} cy={cy} r={r * 0.5} className="ba-rim" />
      {spokes &&
        [0, 45, 90, 135].map((deg) => {
          const rad = (deg * Math.PI) / 180
          const dx = Math.cos(rad) * r * 0.86
          const dy = Math.sin(rad) * r * 0.86
          return (
            <line
              key={deg}
              x1={cx - dx}
              y1={cy - dy}
              x2={cx + dx}
              y2={cy + dy}
              className="ba-spoke"
            />
          )
        })}
    </g>
  )
}
