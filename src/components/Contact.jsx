import { useState } from 'react'
import { brand, needOptions } from '../data/content.js'

const empty = { name: '', contact: '', need: needOptions[0], message: '' }
const field = 'rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-ink'

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Enter your name.'
    if (!form.contact.trim()) err.contact = 'Enter an email or phone number.'
    if (form.message.trim().length < 10) err.message = 'Tell us a little about your project (10+ characters).'
    return err
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length) return

    // TODO: connect a real service here (Formspree, EmailJS or your own API).
    // Example: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    console.log('Enquiry', form)
    setSent(true)
    setForm(empty)
  }

  return (
    <section id="contact" className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24 lg:flex-row lg:items-center lg:px-10">
        <div className="flex-1">
          <p className="mb-3 text-sm font-bold tracking-widest text-sky">Contact</p>
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">Let’s build something great.</h2>
          <p className="mb-5 max-w-md leading-relaxed text-soft">
            Send us an enquiry about your website or printing project and we’ll reply within {brand.replyTime}.
          </p>
          <address className="space-y-1 text-[15px] not-italic">
            <p>{brand.email}</p>
            <p>{brand.phone}</p>
            <p>{brand.location}</p>
          </address>
        </div>

        <form onSubmit={onSubmit} noValidate className="flex flex-1 flex-col gap-2.5 rounded-3xl bg-white p-8 text-ink">
          {sent && (
            <p role="status" className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
              Enquiry sent. We’ll reply within {brand.replyTime}.
            </p>
          )}

          <label htmlFor="name" className="text-[13px] font-semibold">Your name</label>
          <input id="name" name="name" value={form.name} onChange={update} className={field} placeholder="Name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
          {errors.name && <p id="e-name" className="text-sm text-red-700">{errors.name}</p>}

          <label htmlFor="contact" className="text-[13px] font-semibold">Email or phone</label>
          <input id="contact" name="contact" value={form.contact} onChange={update} className={field} placeholder="Email or phone" aria-invalid={!!errors.contact} aria-describedby={errors.contact ? 'e-contact' : undefined} />
          {errors.contact && <p id="e-contact" className="text-sm text-red-700">{errors.contact}</p>}

          <label htmlFor="need" className="text-[13px] font-semibold">I need</label>
          <select id="need" name="need" value={form.need} onChange={update} className={field}>
            {needOptions.map((o) => <option key={o}>{o}</option>)}
          </select>

          <label htmlFor="message" className="text-[13px] font-semibold">Message</label>
          <textarea id="message" name="message" rows="4" value={form.message} onChange={update} className={field} placeholder="Tell us about your project" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} />
          {errors.message && <p id="e-message" className="text-sm text-red-700">{errors.message}</p>}

          <button type="submit" className="mt-2 min-h-11 rounded-xl bg-brand px-6 py-4 font-bold text-white transition hover:bg-navy">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
