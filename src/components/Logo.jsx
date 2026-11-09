export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Xcel Techno home">
      <svg width="32" height="32" viewBox="0 0 34 34" aria-hidden="true">
        <path d="M4 4 L30 30 M30 4 L4 30" stroke="#2BBDF0" strokeWidth="7" strokeLinecap="round" />
      </svg>
      <span className="text-xl font-extrabold text-white">
        CEL <span className="text-[11px] font-normal tracking-[0.3em]">TECHNO</span>
      </span>
    </a>
  )
}
