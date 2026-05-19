import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const deliverables = [
  {
    title: 'Production-Ready Codebase',
    description: 'Clean, tested, and documented code deployed to your own accounts and repositories.',
  },
  {
    title: 'CI/CD Pipeline & Infrastructure',
    description: 'Automated deployments, staging environments, and production-grade hosting — all configured.',
  },
  {
    title: 'Architecture Documentation',
    description: 'System diagrams, API specs, and decision logs so any developer can pick up where we left off.',
  },
  {
    title: 'UI/UX Design Files',
    description: 'Complete Figma files with component library, design tokens, and responsive layouts.',
  },
  {
    title: 'Knowledge Transfer & Team Training',
    description: 'Pair programming sessions, video walkthroughs, and onboarding docs for your internal hires.',
  },
  {
    title: 'Admin Dashboard & Monitoring',
    description: 'Analytics, error tracking, and admin tools so you can operate the product independently.',
  },
]

const headingWords = ['EVERYTHING', 'YOU', 'NEED', 'TO', 'RUN', 'WITHOUT', 'US.']

export default function Deliverables() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.dlv-word', {
        scrollTrigger: {
          trigger: '.dlv-heading',
          start: 'top 90%',
          end: 'bottom 75%',
          scrub: true,
        },
        opacity: 0.1,
        stagger: 0.05,
      })
      gsap.from('.dlv-card', {
        scrollTrigger: {
          trigger: '.dlv-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
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
          What You Walk Away With
        </p>

        {/* Heading */}
        <div className="dlv-heading mb-16">
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] text-white leading-[0.95] font-heading font-black uppercase">
            {headingWords.map((word, i) => (
              <span key={i} className="dlv-word inline-block mr-[0.2em]">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Deliverables Grid */}
        <div className="dlv-grid grid md:grid-cols-2 gap-5">
          {deliverables.map((item, i) => (
            <div
              key={i}
              className="dlv-card border border-white/10 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-white text-base md:text-lg font-semibold font-body normal-case leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
