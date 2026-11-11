import Section from './Section.jsx'
import { projects, projectsNote, steps } from '../data/content.js'

export default function Work() {
  return (
    <Section id="work" eyebrow="From first idea to launch" title="A clear process, and designs to show it." light className="work-process-section">
      <ol className="process-steps mb-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} data-reveal="up" data-reveal-delay={i * 90} className={`process-step rounded-2xl border border-white/90 bg-white/85 p-5 shadow-lg shadow-navy/10 backdrop-blur-sm ${s.border}`}>
            <div className="text-2xl font-extrabold text-brand">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="mb-1.5 mt-2 text-lg font-bold text-navy">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-slate-600">{s.text}</p>
            {i < steps.length - 1 && (
              <span className="process-step__connector" data-step={i} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 12c3-6 6 6 9 0s6 6 9 0m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="mb-6">
        <h3 className="text-2xl font-extrabold text-navy sm:text-3xl">Concept designs</h3>
        <p className="mt-2 max-w-2xl text-slate-600">{projectsNote}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.title} data-reveal="zoom-in" data-reveal-delay={i * 110} className="group">
            <img
              src={p.image}
              alt={`${p.title}: ${p.type}`}
              width="1200"
              height="800"
              className="portfolio-image h-48 w-full rounded-2xl object-cover shadow-md shadow-navy/10"
              loading="lazy"
            />
            <h4 className="mt-4 text-lg font-bold text-navy">{p.title}</h4>
            <p className="text-sm text-slate-600">{p.type}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
