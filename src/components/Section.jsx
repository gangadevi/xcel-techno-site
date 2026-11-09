// Shared section wrapper: consistent width, padding, eyebrow and heading.
export default function Section({ id, eyebrow, title, light = false, className = '', children }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        {eyebrow && (
          <p className={`mb-3 text-sm font-bold tracking-widest ${light ? 'text-tealdark' : 'text-sky'}`}>{eyebrow}</p>
        )}
        {title && (
          <h2 className={`mb-11 max-w-2xl text-3xl font-extrabold sm:text-4xl ${light ? 'text-navy' : 'text-white'}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
