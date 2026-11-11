import { brand } from '../data/content.js'

export default function WhatsAppButton() {
  const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#0f766e] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-black/30 transition hover:bg-[#0d5f58] sm:px-5"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9 11.5h.01M12 11.5h.01M15 11.5h.01" strokeWidth="2.6" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  )
}
