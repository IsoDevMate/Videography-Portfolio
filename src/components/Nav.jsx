import { brand, nav } from '../content.js'

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-mark" href="#top">
        {brand.mark}
      </a>
      <nav aria-label="Primary">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
