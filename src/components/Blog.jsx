import Section from './Section.jsx'
import { posts } from '../data/content.js'

export default function Blog() {
  return (
    <Section id="blog" eyebrow="Blog" title="Ideas to grow your business online.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <p className="text-xs font-bold tracking-widest text-sky">{p.tag}</p>
            <h3 className="my-3 text-xl font-bold leading-snug">{p.title}</h3>
            <p className="text-sm text-soft">{p.meta}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
