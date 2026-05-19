import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function BrandSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brand-tagline', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const tickerItems = [
    'SAAS PRODUCTS', 'MVP BUILDS', 'AI FEATURES', 'TECH ARCHITECTURE',
    'TEAM HANDOVER', 'PRODUCT STRATEGY', 'FULL STACK DEVELOPMENT', 'CLOUD INFRASTRUCTURE',
  ]

  return (
    <section ref={sectionRef}>
      {/* Brand image with tagline overlay */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="brand-tagline text-white text-[clamp(1.5rem,4vw,3rem)] font-heading font-bold uppercase leading-tight max-w-3xl">
            Built by experts. Owned by you. Ready to scale.
          </h2>
          <a href="#services" className="mt-6 text-white/60 text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
            Our Services <span className="text-lg">⊙</span>
          </a>
        </div>
      </div>

      {/* Ticker strip */}
      <div className="py-4 bg-brand-dark border-t border-b border-white/10 overflow-hidden">
        <div className="animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="whitespace-nowrap mx-6 text-sm font-medium text-white/50 uppercase tracking-widest">
              {item} <span className="text-brand-red mx-2">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
