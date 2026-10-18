import { MotionConfig } from 'motion/react'
import { About } from './components/About'
import { Area } from './components/Area'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { HeightGauge } from './components/HeightGauge'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { MobileCallBar } from './components/MobileCallBar'
import { Services } from './components/Services'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="fixed top-2 left-2 z-60 -translate-y-24 rounded-md bg-accent px-4 py-2 font-semibold text-bg focus:translate-y-0"
      >
        Przejdź do treści
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <About />
        <Area />
        <Contact />
      </main>
      <Footer />
      <HeightGauge />
      <MobileCallBar />
    </MotionConfig>
  )
}
