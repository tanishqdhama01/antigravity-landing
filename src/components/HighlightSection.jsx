import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const guarantees = [
  {
    title: '100% code ownership from day one.',
    description: 'Everything runs on your accounts — your repo, your infra, your domain. Always.',
  },
  {
    title: 'No lock-in contracts.',
    description: 'Leave anytime, take everything with you. We never hold code or access hostage.',
  },
  {
    title: 'We make ourselves replaceable.',
    description: 'Our goal is to hand over and step back. That is the whole point of working with us.',
  },
  {
    title: 'Transparent pricing, clear scope, direct communication.',
    description: 'No surprise invoices. No scope creep without your approval. One Slack channel, always responsive.',
  },
]

const headlineLines = ['ZERO', 'LOCK-IN.', 'FULL', 'OWNERSHIP.', 'NO', 'SURPRISES.']

export default function HighlightSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hl-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
      })
      gsap.from('.hl-guarantee', {
        scrollTrigger: {
          trigger: '.hl-guarantees',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36 px-6 md:px-10 bg-brand-red">
      <div className="max-w-[1400px] mx-auto">
        {/* Eyebrow */}
        <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium mb-8">
          Our Guarantees
        </p>

        {/* Large heading */}
        <h2 className="text-[clamp(2.5rem,8vw,6rem)] text-white leading-[0.9] font-heading font-black uppercase mb-16">
          {headlineLines.map((line, i) => (
            <span key={i} className="hl-line inline-block mr-[0.25em]">
              {line}
            </span>
          ))}
        </h2>

        {/* Guarantees list */}
        <div className="hl-guarantees grid md:grid-cols-2 gap-8">
          {guarantees.map((item, i) => (
            <div key={i} className="hl-guarantee border-t border-white/20 pt-6">
              <h3 className="text-white text-lg md:text-xl font-semibold font-body normal-case leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
