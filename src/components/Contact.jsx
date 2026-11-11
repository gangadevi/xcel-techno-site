import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { brand, needOptions, emailConfig } from '../data/content.js'

const empty = { name: '', contact: '', need: needOptions[0], message: '' }
const field = 'rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-ink'

export function EnquiryForm({ idPrefix = 'contact', reveal = false, className = '', initialNeed = needOptions[0], initialMessage = '' }) {
  const [form, setForm] = useState({ ...empty, need: initialNeed, message: initialMessage })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const err = {}
    const contact = form.contact.trim()
    const validEmail = /^\S+@\S+\.\S+$/.test(contact)
    const validPhone = contact.replace(/\D/g, '').length >= 10
    if (!form.name.trim()) err.name = 'Enter your name.'
    if (!contact) err.contact = 'Enter an email or phone number.'
    else if (!validEmail && !validPhone) err.contact = 'Enter a valid email or a 10-digit phone number.'
    if (form.message.trim().length < 10) err.message = 'Tell us a little about your project (10+ characters).'
    return err
  }

  const emailReady = !Object.values(emailConfig).some((value) => value.startsWith('YOUR_'))

  const onSubmit = async (e) => {
    e.preventDefault()
    const spamTrap = e.currentTarget.elements.company?.value
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length) return
    if (spamTrap) return // bots fill the hidden field; real visitors never see it

    if (!emailReady) {
      console.warn('EmailJS is not set up yet: add your IDs to emailConfig in src/data/content.js')
      setErrors({ form: `The enquiry form is not connected yet. Please call ${brand.phone} or message us on WhatsApp.` })
      return
    }

    setSending(true)
    setSent(false)
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: form.name,
          contact: form.contact,
          need: form.need,
          message: form.message,
          reply_to: form.contact,
        },
        {
          publicKey: emailConfig.publicKey,
          blockHeadless: true,
          limitRate: { id: 'enquiry', throttle: 15000 },
        },
      )
      setSent(true)
      setForm(empty)
    } catch (error) {
      setErrors({
        form: error?.status === 429
          ? 'Please wait a few seconds before sending again.'
          : `Sorry, we could not send your enquiry. Please try again or call ${brand.phone}.`,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <form data-reveal={reveal ? 'right' : undefined} data-reveal-delay={reveal ? '100' : undefined} onSubmit={onSubmit} noValidate className={`enquiry-form relative flex flex-col gap-2.5 rounded-3xl border border-white/80 bg-white/90 p-6 text-ink shadow-xl shadow-brand/10 backdrop-blur-sm sm:p-8 ${className}`}>
      {sent && (
        <p role="status" className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
          Enquiry sent. We’ll reply within {brand.replyTime}.
        </p>
      )}

      {errors.form && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">{errors.form}</p>
      )}

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor={`${idPrefix}-name`} className="text-[13px] font-semibold">Your name</label>
      <input id={`${idPrefix}-name`} name="name" autoComplete="name" value={form.name} onChange={update} className={field} placeholder="Name" aria-invalid={!!errors.name} aria-describedby={errors.name ? `${idPrefix}-e-name` : undefined} />
      {errors.name && <p id={`${idPrefix}-e-name`} className="text-sm text-red-700">{errors.name}</p>}

      <label htmlFor={`${idPrefix}-contact`} className="text-[13px] font-semibold">Email or phone</label>
      <input id={`${idPrefix}-contact`} name="contact" value={form.contact} onChange={update} className={field} placeholder="Email or phone" aria-invalid={!!errors.contact} aria-describedby={errors.contact ? `${idPrefix}-e-contact` : undefined} />
      {errors.contact && <p id={`${idPrefix}-e-contact`} className="text-sm text-red-700">{errors.contact}</p>}

      <label htmlFor={`${idPrefix}-need`} className="text-[13px] font-semibold">I need</label>
      <select id={`${idPrefix}-need`} name="need" value={form.need} onChange={update} className={field}>
        {needOptions.map((o) => <option key={o}>{o}</option>)}
      </select>

      <label htmlFor={`${idPrefix}-message`} className="text-[13px] font-semibold">Message</label>
      <textarea id={`${idPrefix}-message`} name="message" rows="4" value={form.message} onChange={update} className={field} placeholder="Tell us about your project" aria-invalid={!!errors.message} aria-describedby={errors.message ? `${idPrefix}-e-message` : undefined} />
      {errors.message && <p id={`${idPrefix}-e-message`} className="text-sm text-red-700">{errors.message}</p>}

      <button type="submit" disabled={sending} className="mt-2 min-h-11 rounded-xl bg-brand px-6 py-4 font-bold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60">
        {sending ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section scroll-mt-20 text-ink">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24 lg:flex-row lg:items-center lg:px-10">
        <div data-reveal="left" className="flex-1">
          <p className="mb-3 text-sm font-bold tracking-widest text-tealink">Contact</p>
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl">Let’s build something great.</h2>
          <p className="mb-5 max-w-md leading-relaxed text-slate-600">
            Send us an enquiry about your website or printing project and we’ll reply within {brand.replyTime}.
          </p>
          <address className="company-details not-italic">
            <p className="mb-2 text-xs font-bold tracking-[0.18em] text-tealink">COMPANY</p>
            <h3 className="company-details__name mb-6 text-3xl font-extrabold text-brand sm:text-4xl">{brand.name}</h3>
            <div className="space-y-4">
              <div className="company-details__item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.3" />
                </svg>
                <div>
                  <p className="company-details__label">ADDRESS</p>
                  <p className="company-details__value">{brand.location}</p>
                </div>
              </div>
              <a className="company-details__item company-details__link" href={`mailto:${brand.email}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                </svg>
                <div>
                  <p className="company-details__label">EMAIL</p>
                  <p className="company-details__value">{brand.email}</p>
                </div>
              </a>
              <a className="company-details__item company-details__link" href={`tel:${brand.phoneLink}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h4l2 5-2.5 1.8a15 15 0 0 0 5.7 5.7L16 13l5 2v4a2 2 0 0 1-2.2 2A18 18 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
                </svg>
                <div>
                  <p className="company-details__label">PHONE</p>
                  <p className="company-details__value">{brand.phone}</p>
                </div>
              </a>
            </div>
          </address>
        </div>
        <EnquiryForm idPrefix="contact" reveal className="flex-1" />
      </div>
    </section>
  )
}
