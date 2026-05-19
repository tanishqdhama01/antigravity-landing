import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    number: '001',
    title: 'Tech Strategy & Architecture',
    description: 'Senior-level technical direction for SaaS founders who need clarity before they build.',
    bullets: [
      'Define your stack, architecture, and MVP scope.',
      'Avoid the costly rebuilds that happen when foundations are wrong.',
      'Usually done in 2–3 weeks as a standalone sprint.',
    ],
  },
  {
    number: '002',
    title: 'MVP Build & Launch',
    description: 'End-to-end product development from design to production code.',
    bullets: [
      'Backend, frontend, database, auth, billing, and infra — all included.',
      'Built on your accounts so you own everything from day one.',
      'Most MVPs go live in 8–12 weeks.',
    ],
  },
  {
    number: '003',
    title: 'Scale & AI Integration',
    description: 'Ongoing development and infrastructure scaling as your users grow.',
    bullets: [
      'New features, performance improvements, and AI integrations.',
      'We move with your roadmap, not ours.',
      'Monthly retainer with clear scope and direct communication.',
    ],
  },
  {
    number: '004',
    title: 'Team Handover & Training',
    description: 'A structured program to bring your internal team up to speed and make us fully replaceable.',
    bullets: [
      'We help you hire the right developers for your stack.',
      'Pair programming, documentation, and knowledge transfer sessions.',
      'You leave with a trained team and zero dependency on us.',
    ],
  },
]

const headingWords = ['STRATEGY,', 'BUILD', 'AND', 'HANDOVER', 'UNDER', 'ONE', 'ROOF.']

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-word', {
        scrollTrigger: {
          trigger: '.svc-heading',
          start: 'top 90%',
          end: 'bottom 75%',
          scrub: true,
        },
        opacity: 0.1,
        stagger: 0.05,
      })
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-10 bg-brand-light">
      <div className="max-w-[1400px] mx-auto">
        {/* Eyebrow */}
        <p className="text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-6">
          Services
        </p>

        {/* Heading + Badge */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div className="svc-heading">
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] text-brand-dark leading-[0.95] font-heading font-black uppercase">
              {headingWords.map((word, i) => (
                <span key={i} className="svc-word inline-block mr-[0.2em]">
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* Rotating badge */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0">
            <div className="absolute inset-0 rounded-full border border-brand-dark/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-brand-dark font-heading text-2xl md:text-3xl font-bold">0→1</span>
            </div>
            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <path
                id="badge-path"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[8px] uppercase tracking-[0.3em] fill-brand-dark/60">
                <textPath href="#badge-path">
                  · STRATEGY · BUILD · DESIGN · HANDOVER
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* 4 Vertical Columns */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className={`service-card flex flex-col py-8 md:py-0 md:px-6 lg:px-8 ${
                idx < services.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-brand-dark/10'
                  : ''
              }`}
            >
              <span className="text-brand-dark/30 text-xs font-body mb-4">
                {service.number}
              </span>
              <h3 className="text-brand-dark text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-[0.95] mb-5">
                {service.title}
              </h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-col mt-auto">
                {service.bullets.map((bullet, i) => (
                  <div key={i} className={`py-4 ${i > 0 ? 'border-t border-brand-dark/10' : 'border-t border-brand-dark/10'}`}>
                    <span className="text-brand-dark/50 text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
