import { printItems } from '../data/content.js'

export default function Printing() {
  return (
    <section id="printing">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 py-24 lg:flex-row lg:px-10">
        <div className="flex-1">
          <p className="mb-3 text-sm font-bold tracking-widest text-sky">Printing services</p>
          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">From screen to paper, with the same quality.</h2>
          <p className="mb-7 max-w-lg leading-relaxed text-soft">
            Your website and your printed materials should look like one brand. We handle both, so your colors, logo and message stay consistent.
          </p>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-xl border-2 border-sky px-7 py-3 font-bold text-sky transition hover:bg-sky hover:text-ink">
            Ask about printing
          </a>
        </div>
        <ul className="grid flex-1 grid-cols-2 gap-4">
          {printItems.map((p) => (
            <li key={p.title} className="rounded-2xl border border-white/15 bg-white/5 p-7">
              <div className={`mb-4 h-1.5 w-9 rounded-full ${p.bar}`} />
              <span className="font-bold">{p.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
