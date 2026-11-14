import { brand } from '../data/content.js'

export default function WhatsAppButton() {
  const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:scale-105 active:scale-95"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.34.22 11.89c0 2.1.55 4.14 1.59 5.95L.14 24l6.34-1.66a11.9 11.9 0 0 0 5.71 1.45h.01c6.55 0 11.89-5.33 11.89-11.89a11.82 11.82 0 0 0-3.57-8.42ZM12.2 21.76h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  )
}
