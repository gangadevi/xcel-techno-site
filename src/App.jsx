import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Printing from './components/Printing.jsx'
import Process from './components/Process.jsx'
import Work from './components/Work.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Printing />
        <Process />
        <Work />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
