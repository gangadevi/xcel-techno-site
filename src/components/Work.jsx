import Section from './Section.jsx'
import { projects } from '../data/content.js'

export default function Work() {
  return (
    <Section id="work" eyebrow="Recent work" title="Projects we’re proud of." light className="bg-mist">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={i}>
            {p.image ? (
              <img src={p.image} alt={p.title} className="h-56 w-full rounded-2xl object-cover" loading="lazy" />
            ) : (
              <div className={`flex h-56 items-center justify-center rounded-2xl font-bold ${p.tile}`}>[PROJECT SCREENSHOT]</div>
            )}
            <h3 className="mt-4 text-lg font-bold text-navy">{p.title}</h3>
            <p className="text-sm text-slate-600">{p.type}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
