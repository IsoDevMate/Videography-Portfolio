import { Link } from 'react-router-dom'
import { brand } from '../content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-mark">{brand.mark}</p>
      <p>
        {brand.name} · {brand.city}
      </p>
      <nav>
        <a href={`mailto:${brand.email}`}>Email</a>
        <a href={brand.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <Link to="/cards">Cards</Link>
      </nav>
    </footer>
  )
}
