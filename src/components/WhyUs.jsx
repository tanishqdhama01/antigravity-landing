import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const painPoints = [
  {
    number: '01',
    problem: 'You have the idea, but hiring a tech team feels overwhelming.',
    solution: 'We step in as your complete founding tech team from day one — no hiring, no training, no management overhead on your side.',
  },
  {
    number: '02',
    problem: 'You have funding but no product to show investors or users.',
    solution: 'We move fast. From a clear idea to a live MVP in 8–12 weeks, built on scalable architecture that does not need a rebuild later.',
  },
  {
    number: '03',
    problem: 'You have worked with freelancers but got inconsistent results.',
    solution: 'We operate as a senior-level team with full ownership of technical decisions — not a group of disconnected freelancers.',
  },
  {
    number: '04',
    problem: 'You are worried an agency will lock you in forever.',
    solution: 'Your code, your infra, your team. We are designed to make ourselves replaceable. That is the whole point.',
  },
]

const headingWords = ['YOU', 'ARE', 'HERE', 'IF', 'YOU', 'HAVE', 'THE', 'IDEA', 'BUT', 'NOT', 'THE', 'PRODUCT', 'YET.']

export default function WhyUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-word', {
        scrollTrigger: {
          trigger: '.why-heading-container',
          start: 'top 90%',
          end: 'bottom 75%',
          scrub: true,
        },
        opacity: 0.1,
        stagger: 0.05,
      })
      gsap.from('.why-row', {
        scrollTrigger: {
          trigger: '.why-rows',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36 px-6 md:px-10 bg-brand-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Eyebrow */}
        <p className="text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-8">
          Why Founders Choose Us
        </p>

        {/* Scroll-reveal heading */}
        <div className="why-heading-container mb-12">
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] text-white leading-[0.95] font-heading font-black uppercase">
            {headingWords.map((word, i) => (
              <span key={i} className="why-word inline-block mr-[0.2em]">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-white/60 text-base md:text-lg max-w-xl mb-16 leading-relaxed md:ml-auto md:text-right">
          We work where business strategy and technical execution meet. No hiring chaos. No wasted months. No lock-in.
        </p>

        {/* Pain-point rows */}
        <div className="why-rows flex flex-col gap-6">
          {painPoints.map((point) => (
            <div key={point.number} className="why-row border-b border-white/10 pb-6">
              <div className="flex items-start gap-5">
                <span className="text-brand-red font-heading text-2xl font-bold shrink-0">
                  {point.number}
                </span>
                <div className="flex-1">
                  <p className="text-white text-base md:text-lg font-medium mb-2">
                    {point.problem}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    → {point.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
