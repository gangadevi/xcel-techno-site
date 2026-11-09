import { stats } from '../data/content.js'

export default function Stats() {
  return (
    <div className="relative z-10 mx-auto -mb-14 max-w-6xl px-6 lg:px-10">
      <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-white/15 bg-navy p-8 text-center lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className={`text-3xl font-extrabold sm:text-4xl ${s.tone}`}>{s.value}</dd>
            <dt className="mt-1 text-sm text-soft">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  )
}
