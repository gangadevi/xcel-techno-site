import Section from './Section.jsx'
import { projects, projectsNote, steps } from '../data/content.js'

const processColors = ['#c62828', '#8dbf24', '#f4a300', '#0ba8c7']

const processIcons = [
  <path key="chat" d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.2 8.2 0 0 1-3.4-.7L4 20l1.5-4A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />,
  <>
    <circle key="head-left" cx="9" cy="8" r="3" />
    <circle key="head-right" cx="17" cy="9" r="2.5" />
    <path key="body-left" d="M3.5 19a5.5 5.5 0 0 1 11 0M14 14a4.5 4.5 0 0 1 6.5 4" />
  </>,
  <>
    <rect key="paper" x="5" y="4" width="14" height="16" rx="1.5" />
    <path key="lines" d="M8 8h8M8 11h5M8 15h8M8 17h5" />
  </>,
  <>
    <rect key="case" x="3.5" y="8" width="17" height="12" rx="2" />
    <path key="handle" d="M9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8M3.5 12h17M10 12v2h4v-2" />
  </>,
]

export default function Work() {
  return (
    <Section id="work" eyebrow="From first idea to launch" title="A clear process, and designs to show it." className="work-process-section">
      <ol className="process-flow mb-6">
        {steps.map((s, i) => (
          <li
            key={s.title}
            data-reveal="up"
            data-reveal-delay={i * 90}
            className="process-flow__step"
            style={{ '--step-color': processColors[i] }}
          >
            <div className="process-flow__copy">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
            <div className="process-flow__node">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {processIcons[i]}
              </svg>
            </div>
            {i < steps.length - 1 && (
              <svg
                className="process-flow__connector"
                data-direction={i % 2 === 0 ? 'down' : 'up'}
                viewBox="0 0 160 80"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <marker id={`process-arrow-${i}`} markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                    <path d="M1 1 9 5 1 9" fill="none" stroke="var(--step-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </marker>
                </defs>
                <path
                  className="process-flow__path process-flow__path--horizontal"
                  d={i % 2 === 0 ? 'M0 40 C32 40 32 72 80 72 S128 40 150 40' : 'M0 40 C32 40 32 8 80 8 S128 40 150 40'}
                  markerEnd={`url(#process-arrow-${i})`}
                />
                <path
                  className="process-flow__path process-flow__path--vertical"
                  d="M80 0 C80 20 32 20 80 40 S80 60 80 70"
                  markerEnd={`url(#process-arrow-${i})`}
                />
              </svg>
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
