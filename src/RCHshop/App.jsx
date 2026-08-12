import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import TapeStrip from './TapeStrip.jsx'
import Categories from './Categories.jsx'
import FeaturedBikes from './FeaturedBikes.jsx'
import Installments from './Installments.jsx'
import Services from './Services.jsx'
import Testimonials from './Testimonials.jsx'
import Footer from './Footer.jsx'
import useReveal from './useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TapeStrip />
        <Categories />
        <FeaturedBikes />
        <Installments />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
