import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#bikes', label: 'موتورها' },
  { href: '#categories', label: 'دسته‌بندی' },
  { href: '#installments', label: 'اقساط' },
  { href: '#services', label: 'خدمات' },
  { href: '#reviews', label: 'نظر مشتری‌ها' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark">RCH</span>
          <span className="logo__word">Shop</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#bikes" className="btn btn--hiviz nav__cta-mobile">
            خرید موتور
          </a>
        </nav>

        <div className="nav__actions">
          <a className="nav__phone num" href="tel:02100000000">
            021-9100 0000
          </a>
          <a href="#bikes" className="btn btn--hiviz nav__cta">
            خرید موتور
          </a>
          <button
            className="nav__burger"
            aria-label={open ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? 'is-x' : ''} />
            <span className={open ? 'is-x' : ''} />
          </button>
        </div>
      </div>
      <div className="tape nav__tape" />
    </header>
  )
}
