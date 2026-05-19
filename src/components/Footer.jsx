import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Footer({ onStartProject }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.footer-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={sectionRef} id="footer-cta">
      {/* Footer CTA */}
      <div className="py-24 md:py-36 px-6 md:px-10 bg-brand-dark">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="footer-heading text-[clamp(3.5rem,12vw,10rem)] text-white leading-[0.9] font-body font-extrabold uppercase tracking-[-0.03em] mb-8 max-w-[85%] mx-auto">
            We open 3 spots per month for new projects.
          </h2>

          <div className="footer-content">
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              If you are building a SaaS and need a founding tech team, it is worth talking now while the next slot is still open.
            </p>

            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white text-base font-medium rounded-full hover:bg-red-600 transition-colors group"
            >
              Talk to Tanishq →
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="py-6 px-6 md:px-10 bg-brand-dark border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-xs">
            © 2026 Zentrix
          </span>
          <span className="text-white/40 text-xs">
            help@zentrix.com
          </span>
        </div>
      </div>
    </footer>
  )
}
