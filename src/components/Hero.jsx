import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero({ onStartProject }) {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const eyebrowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(eyebrowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
      .from(headingRef.current.querySelectorAll('.line'), {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
      }, '-=0.3')
      .from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, '-=0.4')
      .from(ctaRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.4')

      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: -80,
        opacity: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const headlineLines = ['YOUR SAAS', 'PRODUCT.', 'BUILT, SCALED', 'AND HANDED', 'OVER.']

  return (
    <section ref={sectionRef} className="relative h-screen bg-brand-light flex flex-col pt-20 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col">
        {/* Eyebrow — pushed down with top spacing */}
        <div className="pt-10 md:pt-14">
          <p ref={eyebrowRef} className="text-brand-red text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-5">
            Founding Tech Team for SaaS Founders
          </p>
        </div>

        {/* Main grid — takes remaining space, 60/40 split */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-16 flex-1">
          {/* Left — Heading, vertically centered-ish */}
          <div className="flex items-start">
            <h1
              ref={headingRef}
              className="text-brand-dark text-[clamp(3rem,10.2vw,9.2rem)] leading-[0.86] tracking-[-0.04em] font-heading font-extrabold uppercase"
            >
              {headlineLines.map((line, i) => (
                <span key={i} className="line block">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          {/* Right — Subtext + Buttons, pushed to bottom */}
          <div className="flex flex-col justify-end pb-14 md:pb-20">
            <p ref={subtitleRef} className="text-brand-dark/50 text-sm md:text-base max-w-sm leading-relaxed font-body mb-7">
              We become your founding tech team — from idea to MVP to handover. You focus on the business. We handle everything technical.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-3">
              <button
                onClick={onStartProject}
                className="px-6 py-3 bg-brand-dark text-white text-sm font-medium rounded-full hover:bg-brand-dark/90 transition-colors flex items-center gap-2"
              >
                Start a Project <span className="ml-1">→</span>
              </button>
              <a
                href="#work"
                className="px-6 py-3 border border-brand-dark/30 text-brand-dark text-sm font-medium rounded-full hover:border-brand-dark/60 transition-colors flex items-center gap-2"
              >
                See Our Work <span className="text-lg">⊙</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
