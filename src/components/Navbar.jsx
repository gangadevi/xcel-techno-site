import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { navLinks } from '../data/content.js'

export default function Navbar({ onOpenEnquiry }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateShadow = () => {
      setScrolled(window.scrollY > 0)
    }

    updateShadow()
    window.addEventListener('scroll', updateShadow, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateShadow)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b border-blue-100 bg-[#eff6ff]/95 text-ink backdrop-blur transition-shadow ${scrolled ? 'shadow-lg shadow-ink/20' : 'shadow-none'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={l.href === '#printing' ? 'printing-nav-link uppercase' : 'uppercase transition-colors hover:text-blue'}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onOpenEnquiry}
          className="hidden min-h-11 items-center rounded-xl bg-brand px-5 text-sm font-bold text-white shadow-md shadow-brand/20 transition hover:bg-navy lg:inline-flex"
        >
          Enquire now
        </button>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-brand/20 text-brand transition-colors hover:bg-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-blue-100 bg-[#eff6ff] px-6 pb-6 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={l.href === '#printing' ? 'printing-nav-link mobile-printing-nav-link text-base font-semibold uppercase' : 'block py-3 text-base font-semibold uppercase text-ink transition-colors hover:text-blue'}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => { setOpen(false); onOpenEnquiry() }} className="mt-2 inline-flex min-h-11 items-center rounded-xl bg-brand px-5 text-sm font-bold text-white shadow-md shadow-brand/20 transition hover:bg-navy">
            Enquire now
          </button>
        </nav>
      )}
    </header>
  )
}
