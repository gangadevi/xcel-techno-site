import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { EnquiryForm } from './Contact.jsx'

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function EnquiryModal({ open, onClose, need, message, formKey }) {
  const [mounted, setMounted] = useState(open)
  const [visible, setVisible] = useState(false)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!open) {
      if (!mounted) return undefined

      setVisible(false)
      const timer = window.setTimeout(() => setMounted(false), 280)
      return () => window.clearTimeout(timer)
    }

    setMounted(true)
    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const previousFocus = document.activeElement
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return
      const dialog = closeButtonRef.current?.closest('[role="dialog"]')
      const focusable = dialog ? Array.from(dialog.querySelectorAll(focusableSelector)).filter((element) => element.getClientRects().length > 0) : []
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [open])

  useLayoutEffect(() => {
    if (!open || !mounted) return undefined

    closeButtonRef.current?.focus({ preventScroll: true })
    const frame = window.requestAnimationFrame(() => setVisible(true))
    return () => window.cancelAnimationFrame(frame)
  }, [open, mounted])

  if (!mounted) return null

  return (
    <div
      className={`enquiry-modal-backdrop${visible ? ' is-visible' : ''}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      aria-hidden={!open}
    >
      <div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title">
        <button ref={closeButtonRef} type="button" className="enquiry-modal__close" onClick={onClose} aria-label="Close enquiry form">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        <aside className="enquiry-modal__promo">
          <div className="enquiry-modal__glow" aria-hidden="true" />
          <div className="enquiry-modal__promo-copy">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-200">Your next big idea starts here</p>
            <h2 id="enquiry-modal-title" className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let&apos;s Bring Your Ideas to Life!
            </h2>
            <p className="max-w-md leading-relaxed text-white/80">
              Have a project in mind? Let&apos;s create a professional website that helps your business grow.
            </p>
            <ul className="mt-7 space-y-3 text-sm font-semibold text-white/95">
              {['Creative Website Solutions', 'Modern & Responsive Designs', 'Reliable Support'].map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-sky-200" aria-hidden="true">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <svg className="enquiry-modal__illustration" viewBox="0 0 440 300" fill="none" aria-hidden="true">
            <rect x="43" y="35" width="300" height="202" rx="18" fill="white" fillOpacity=".12" stroke="white" strokeOpacity=".42" strokeWidth="2" />
            <path d="M43 58c0-12.7 10.3-23 23-23h254c12.7 0 23 10.3 23 23v20H43V58Z" fill="white" fillOpacity=".18" />
            <circle cx="67" cy="57" r="5" fill="#93E5FF" />
            <circle cx="86" cy="57" r="5" fill="white" fillOpacity=".7" />
            <circle cx="105" cy="57" r="5" fill="white" fillOpacity=".45" />
            <rect x="67" y="100" width="108" height="12" rx="6" fill="#A5E8FF" />
            <rect x="67" y="125" width="179" height="8" rx="4" fill="white" fillOpacity=".72" />
            <rect x="67" y="143" width="148" height="8" rx="4" fill="white" fillOpacity=".42" />
            <rect x="67" y="172" width="82" height="29" rx="9" fill="#8CE0FF" />
            <rect x="266" y="103" width="55" height="97" rx="10" fill="white" fillOpacity=".16" stroke="white" strokeOpacity=".5" strokeWidth="2" />
            <rect x="275" y="115" width="37" height="50" rx="5" fill="#B5A7FF" fillOpacity=".8" />
            <circle cx="293.5" cy="184" r="4" fill="white" fillOpacity=".7" />
            <path d="m337 205 18 18 34-40" stroke="#9BE9D1" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="365" cy="73" r="25" fill="#B5A7FF" fillOpacity=".75" />
            <path d="M357 73h16M365 65v16" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="enquiry-modal__spark enquiry-modal__spark--one" aria-hidden="true" />
          <span className="enquiry-modal__spark enquiry-modal__spark--two" aria-hidden="true" />
        </aside>

        <div className="enquiry-modal__form-panel">
          <div className="mb-5 pr-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-tealink">Tell Us What You Have in Mind</p>
            <h3 className="mt-2 text-2xl font-extrabold text-ink">Send an enquiry</h3>
          </div>
          <EnquiryForm key={formKey} idPrefix="modal" initialNeed={need} initialMessage={message} />
        </div>
      </div>
    </div>
  )
}
