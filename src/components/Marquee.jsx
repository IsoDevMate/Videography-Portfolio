import { marquee } from '../content.js'

export default function Marquee() {
  const text = [...marquee, ...marquee].join('  ·  ')
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}
