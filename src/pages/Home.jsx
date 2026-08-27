import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Deliver from '../components/Deliver.jsx'
import Work from '../components/Work.jsx'
import Process from '../components/Process.jsx'
import Instagram from '../components/Instagram.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'

export default function Home() {
  return (
    <div className="site">
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Deliver />
        <Work />
        <Process />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
