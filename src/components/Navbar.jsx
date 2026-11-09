import { useState } from 'react'
import Logo from './Logo.jsx'
import { navLinks } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-100 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-sky">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden min-h-11 items-center rounded-xl bg-sky px-5 text-sm font-bold text-ink transition hover:bg-cyan lg:inline-flex"
        >
          Enquire now
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/20 lg:hidden"
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
        <nav id="mobile-menu" className="border-t border-white/10 px-6 pb-6 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-100">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex min-h-11 items-center rounded-xl bg-sky px-5 text-sm font-bold text-ink">
            Enquire now
          </a>
        </nav>
      )}
    </header>
  )
}
