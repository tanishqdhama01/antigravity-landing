import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const comparisons = [
  {
    feature: 'Full SaaS build (strategy + design + dev)',
    us: 'Yes',
    inHouse: 'Slow (6–12 months)',
    agency: 'Varies',
    freelancer: 'No',
  },
  {
    feature: 'Production-ready scalable code',
    us: 'Yes',
    inHouse: 'Depends on hire',
    agency: 'Rarely',
    freelancer: 'Partial',
  },
  {
    feature: 'Senior-level technical decisions',
    us: 'Yes',
    inHouse: 'Only with right CTO',
    agency: 'Rarely',
    freelancer: 'Depends',
  },
  {
    feature: 'Direct founder communication',
    us: 'Yes',
    inHouse: 'Yes',
    agency: 'No',
    freelancer: 'Yes',
  },
  {
    feature: 'Clean handover + team training',
    us: 'Yes',
    inHouse: 'N/A',
    agency: 'Never',
    freelancer: 'No',
  },
  {
    feature: 'Startup-ready architecture from day one',
    us: 'Yes',
    inHouse: 'Depends',
    agency: 'No',
    freelancer: 'No',
  },
  {
    feature: 'No lock-in — you own everything',
    us: 'Yes',
    inHouse: 'Yes',
    agency: 'No',
    freelancer: 'Partial',
  },
]

export default function VSTable() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.vs-row', {
        scrollTrigger: {
          trigger: '.vs-table',
          start: 'top 80%',
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36 px-6 md:px-10 bg-brand-light">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-brand-dark leading-[0.9] mb-16">
          Us vs your other options
        </h2>

        <div className="vs-table overflow-x-auto">
          {/* Header */}
          <div className="hidden lg:grid grid-cols-5 gap-4 pb-4 border-b border-brand-dark/10 mb-4 min-w-[800px]">
            <span className="text-brand-dark/40 text-xs uppercase tracking-widest font-medium">Feature</span>
            <span className="text-brand-red text-xs uppercase tracking-widest font-medium">Us</span>
            <span className="text-brand-dark/40 text-xs uppercase tracking-widest font-medium">Hiring In-House</span>
            <span className="text-brand-dark/40 text-xs uppercase tracking-widest font-medium">Generic Dev Agency</span>
            <span className="text-brand-dark/40 text-xs uppercase tracking-widest font-medium">Solo Freelancer</span>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div key={i} className="vs-row grid lg:grid-cols-5 gap-2 lg:gap-4 py-4 border-b border-brand-dark/10 min-w-[800px]">
              <span className="text-brand-dark text-sm font-medium">
                {row.feature}
              </span>
              <span className="text-brand-red text-sm font-semibold">
                {row.us}
              </span>
              <span className="text-brand-dark/50 text-sm">
                {row.inHouse}
              </span>
              <span className="text-brand-dark/50 text-sm">
                {row.agency}
              </span>
              <span className="text-brand-dark/50 text-sm">
                {row.freelancer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
