import Section from './Section.jsx'
import { services } from '../data/content.js'

export default function Services() {
  return (
    <Section id="services" eyebrow="What we build" title="Web services, built to bring you customers." light className="services-section">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, index) => (
          <article key={s.title} data-reveal="zoom-in" data-reveal-delay={index * 100} className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-navy/5">
            <img src={`/website_service_icons/${s.icon}.svg`} alt="" aria-hidden="true" className="mx-auto mb-5 h-16 w-16 object-contain" width="64" height="64" />
            <h3 className="mb-2 text-xl font-bold text-navy">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-slate-600">{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
