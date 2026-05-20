import { useState, useEffect, useRef, useCallback } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandSection from './components/BrandSection'
import ProofStrip from './components/ProofStrip'
import OperatingModel from './components/OperatingModel'
import WhyUs from './components/WhyUs'
import VSTable from './components/VSTable'
import CaseStudies from './components/CaseStudies'
import Services from './components/Services'
import Deliverables from './components/Deliverables'
import HighlightSection from './components/HighlightSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = useCallback(() => setContactOpen(true), [])
  const closeContact = useCallback(() => setContactOpen(false), [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <main className="overflow-hidden">
      <Navbar onStartProject={openContact} />
      <Hero onStartProject={openContact} />
      <BrandSection />
      <ProofStrip />
      <OperatingModel />
      <WhyUs />
      <VSTable />
      <CaseStudies />
      <Services />
      <Deliverables />
      <HighlightSection />
      <FAQ />
      <Footer onStartProject={openContact} />
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

export default App
