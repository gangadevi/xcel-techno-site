import Section from './Section.jsx'
import { about } from '../data/content.js'

export default function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow} className="bg-navy">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div data-reveal="left" className="max-w-xl">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {about.heading}
          </h2>
          <p className="text-base leading-relaxed text-soft sm:text-lg">
            {about.promise}
          </p>
        </div>

        <div>
          <h3 data-reveal="up" className="mb-5 text-xl font-extrabold text-white">
            {about.whyHeading}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {about.features.map((feature, index) => (
              <article
                key={feature.title}
                data-reveal="zoom-in"
                data-reveal-delay={index * 80}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-black/20"
              >
                <div className={`mb-4 h-1.5 w-10 rounded-full ${feature.accent}`} aria-hidden="true" />
                <h4 className="mb-2 text-base font-bold text-navy">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-slate-700">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div data-reveal="up" className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-white p-6 text-navy shadow-lg shadow-navy/15 sm:flex-row sm:items-center sm:px-8">
        <p className="text-xl font-bold">{about.callToAction}</p>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-6 py-3 font-bold text-white shadow-sm transition hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          {about.buttonText}
        </a>
      </div>
    </Section>
  )
}
