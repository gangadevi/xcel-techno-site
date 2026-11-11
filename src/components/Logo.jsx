import { brand } from '../data/content.js'

export default function Logo() {
  return (
    <a href="#top" className="inline-flex shrink-0 items-center" aria-label={`${brand.name} home`}>
      <img
        src="/xcel-techno-logo-sm.webp"
        alt=""
        className="h-14 w-auto"
        width="252"
        height="168"
      />
    </a>
  )
}
