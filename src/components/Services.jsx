import Section from './Section.jsx'
import { services } from '../data/content.js'

export default function Services() {
  return (
    <Section id="services" eyebrow="What we build" title="Six web services, built to bring you customers." light className="bg-mist pt-14">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-navy/5">
            <div className={`mb-5 h-1.5 w-10 rounded-full ${s.bar}`} />
            <h3 className="mb-2 text-xl font-bold text-navy">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-slate-600">{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
