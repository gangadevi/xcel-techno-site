import { brand } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image: replace /public/hero-bg.svg or change brand.heroImage in content.js */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${brand.heroImage}')` }}
        aria-hidden="true"
      />
      {/* Dark overlay keeps the text readable on any photo */}
      <div className="absolute inset-0 -z-10 bg-ink/80" aria-hidden="true" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 pb-28 pt-16 lg:flex-row lg:px-10 lg:pt-20">
        <div className="flex-1">
          <p className="mb-4 text-sm font-bold tracking-widest text-sky">Digital and print, under one roof</p>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Websites and print that make your brand look premium.
          </h1>
          <p className="mb-9 max-w-xl text-lg leading-relaxed text-soft">
            Fast, mobile-first websites and quality printing for growing businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex min-h-11 items-center rounded-xl bg-sky px-8 py-4 font-bold text-ink transition hover:bg-cyan">
              Send an enquiry
            </a>
            <a href="#work" className="inline-flex min-h-11 items-center rounded-xl border-2 border-white/50 px-8 py-4 font-semibold transition hover:border-sky hover:text-sky">
              View recent work
            </a>
          </div>
        </div>

        {/* Decorative browser + phone preview */}
        <div className="relative min-h-[380px] w-full max-w-md flex-1" aria-hidden="true">
          <div className="absolute left-0 top-5 w-[66%] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/50">
            <div className="h-7 bg-tealdark" />
            <div className="p-5">
              <div className="mb-2.5 h-3.5 w-3/5 rounded bg-brand" />
              <div className="mb-2 h-2 w-[90%] rounded bg-slate-200" />
              <div className="mb-5 h-2 w-[70%] rounded bg-slate-200" />
              <div className="flex gap-2">
                <div className="h-20 flex-1 rounded-lg bg-teal" />
                <div className="h-20 flex-1 rounded-lg bg-sky" />
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-28 w-[32%] overflow-hidden rounded-3xl border-[6px] border-blue bg-white shadow-2xl shadow-black/50">
            <div className="p-3">
              <div className="mb-2.5 h-3 w-[70%] rounded bg-brand" />
              <div className="mb-2.5 h-[70px] rounded-lg bg-cyan" />
              <div className="mt-4 h-7 rounded-md bg-brand" />
            </div>
          </div>
          <div className="absolute bottom-1 left-7 rounded-xl bg-white px-4 py-3 text-sm font-bold text-ink shadow-xl shadow-black/40">
            Web + Print, one brand
          </div>
        </div>
      </div>
    </section>
  )
}
