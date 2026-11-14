import { useLayoutEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Printing from './components/Printing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import EnquiryModal from './components/EnquiryModal.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [enquiry, setEnquiry] = useState({ open: false, id: 0, need: 'A website', message: '' })

  // Opens the enquiry popup. Optionally pre-select what the visitor needs and pre-fill the message.
  const openEnquiry = (options = {}) =>
    setEnquiry((current) => ({
      open: true,
      id: current.id + 1,
      need: options.need ?? 'A website',
      message: options.message ?? '',
    }))
  const closeEnquiry = () => setEnquiry((current) => ({ ...current, open: false }))

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const revealTargets = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    revealTargets.forEach((target) => {
      target.classList.add('scroll-reveal')
      target.style.setProperty('--reveal-delay', `${Number(target.dataset.revealDelay) || 0}ms`)
      observer.observe(target)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar onOpenEnquiry={() => openEnquiry()} />
      <main>
        <Hero />
        <Services />
        <About />
        <Work />
        <Printing onOpenEnquiry={openEnquiry} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquiryModal open={enquiry.open} onClose={closeEnquiry} need={enquiry.need} message={enquiry.message} formKey={enquiry.id} />
    </>
  )
}
