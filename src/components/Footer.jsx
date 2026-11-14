import { brand, navLinks } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="text-xl font-extrabold text-white">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-soft">
            Websites, printing and corporate gifting for growing businesses in Bangalore.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-sky">EXPLORE</p>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-soft transition-colors hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-sky">CONTACT</p>
          <ul className="space-y-2.5 text-sm text-soft">
            <li>{brand.location}</li>
            <li><a href={`tel:${brand.phoneLink}`} className="transition-colors hover:text-white">{brand.phone}</a></li>
            <li><a href={`mailto:${brand.email}`} className="break-all transition-colors hover:text-white">{brand.email}</a></li>
            <li>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                WhatsApp
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 pr-24 text-sm text-soft lg:px-10 lg:pr-24">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <span className="ml-auto">Websites, Maintainance &amp; Printing</span>
        </div>
      </div>
    </footer>
  )
}
