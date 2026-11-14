import { brand } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero-section relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <img
          src={brand.heroImage}
          alt=""
          className="h-full w-full object-cover object-[68%_center] lg:object-center"
        />
      </div>
      <div className="hero-section__overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto flex min-h-[640px] max-w-6xl items-center px-6 py-20 sm:min-h-[680px] lg:min-h-[700px] lg:px-10 lg:py-24">
        <div className="hero-intro w-full max-w-[34rem]">
          <p className="hero-load-item mb-5 text-xs font-extrabold tracking-[0.2em] text-sky sm:text-sm">
            WE BUILD MODERN WEB SOLUTIONS
          </p>
          <h1 className="hero-load-item mb-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-5xl">
            <span className="block font-medium">Turning Ideas Into</span>
            <span className="block">Powerful</span>
            <span className="block bg-gradient-to-r from-[#25d9ff] to-[#22e0b0] bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>
          <div className="hero-load-item hero-heading-accent mb-6" aria-hidden="true" />
          <p className="hero-load-item mb-7 max-w-[34rem] text-base leading-relaxed text-soft sm:text-lg">
            We create modern, responsive and user-friendly websites that help businesses grow.
          </p>
        </div>
      </div>
    </section>
  )
}
