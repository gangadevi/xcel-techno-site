import Section from './Section.jsx'
import { steps } from '../data/content.js'

export default function Process() {
  return (
    <Section id="process" eyebrow="How we work together" title="A clear process, no surprises." className="bg-navy">
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className={`rounded-2xl border border-t-4 border-white/15 bg-white/5 p-7 ${s.border}`}>
            <div className="text-3xl font-extrabold text-sky">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="mb-1.5 mt-2 text-lg font-bold">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-soft">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
