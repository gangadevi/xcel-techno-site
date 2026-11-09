import { brand } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-deep">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-7 text-sm text-soft lg:px-10">
        <span>© {new Date().getFullYear()} {brand.name}</span>
        <span>Websites, printing and maintenance</span>
      </div>
    </footer>
  )
}
