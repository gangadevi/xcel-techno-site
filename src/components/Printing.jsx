import { printItems } from '../data/content.js'

export default function Printing({ onOpenEnquiry }) {
  return (
    <section id="printing" className="printing-section">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p data-reveal="up" className="mb-3 text-sm font-bold tracking-widest text-sky">Printing services</p>
          <h2 data-reveal="up" data-reveal-delay="80" className="mb-5 text-3xl font-extrabold sm:text-4xl">From screen to paper, with the same quality.</h2>
          <p data-reveal="up" data-reveal-delay="150" className="mb-7 max-w-2xl leading-relaxed text-soft">
            Your website and your printed materials should look like one brand. We handle both, so your colors, logo and message stay consistent.
          </p>
          <button data-reveal="up" data-reveal-delay="210" type="button" onClick={() => onOpenEnquiry({ need: 'Printing' })} className="inline-flex min-h-11 items-center rounded-xl border-2 border-sky px-7 py-3 font-bold text-sky transition hover:bg-sky hover:text-ink">
            Ask about printing
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {printItems.map((p, index) => (
            <article key={p.title} data-reveal="zoom-in" data-reveal-delay={index * 100} className="rounded-3xl border border-white/15 bg-white/[0.07] p-7 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-8">
              <div className="mb-5 flex items-center gap-4">
                <img
                  src={`/printing/${p.icon}.svg`}
                  alt=""
                  aria-hidden="true"
                  data-reveal="zoom-out"
                  width="72"
                  height="72"
                  className="h-16 w-16 shrink-0 rounded-2xl object-contain shadow-md shadow-black/10 sm:h-[4.5rem] sm:w-[4.5rem]"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-white sm:text-2xl">{p.title}</h3>
              </div>
              <p className="mb-6 leading-relaxed text-soft">{p.description}</p>
              <ul className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                {p.products.map((product) => (
                  <li key={product} className="print-product flex items-start gap-2.5 text-sm leading-relaxed text-white/90">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                    {product}
                  </li>
                ))}
              </ul>
              {/* <button
                type="button"
                onClick={() => onOpenEnquiry({ need: 'Printing', message: `I would like to enquire about ${p.title}.` })}
                className="mt-7 inline-flex min-h-11 items-center rounded-xl border border-sky/60 px-5 text-sm font-bold text-sky transition hover:bg-sky hover:text-ink"
              >
                Enquire about {p.title}
              </button> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
