import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
  {
    number: '01',
    title: 'Tech Clarity Sprint',
    description: 'Map the idea, define scope, design architecture.',
  },
  {
    number: '02',
    title: 'MVP Build & Launch',
    description: 'We design and build the full product end to end.',
  },
  {
    number: '03',
    title: 'Scale & Operate',
    description: 'We grow the product with you as users come in.',
  },
  {
    number: '04',
    title: 'Handover',
    description: 'We train your team and fully step back when you are ready.',
  },
]

export default function OperatingModel() {
  const sectionRef = useRef(null)
  const timelineTrackRef = useRef(null)
  const timelineFillRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the progress fill line on scroll
      gsap.fromTo(
        timelineFillRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineTrackRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 0.6,
          },
        }
      )

      // Vertical fill for mobile
      gsap.fromTo(
        '.timeline-fill-mobile',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineTrackRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 0.6,
          },
        }
      )

      // Stagger-in each node
      gsap.from('.tl-node', {
        scrollTrigger: {
          trigger: timelineTrackRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-10 bg-brand-light">
      <div className="max-w-[1400px] mx-auto">
        {/* Eyebrow + Heading */}
        <p className="text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-4">
          How We Work
        </p>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] text-brand-dark leading-[0.9]">
            From idea to live SaaS — and beyond.
          </h2>
          <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed self-end">
            We do not just write code. We own the technical direction, shape the product, build everything, and then hand it all over to your internal team when you are ready.
          </p>
        </div>

        {/* ── Desktop horizontal timeline ── */}
        <div ref={timelineTrackRef} className="hidden md:block relative">
          {/* Track line (background) */}
          <div className="absolute top-[22px] left-0 right-0 h-[2px] bg-brand-dark/10" />
          {/* Fill line (animated) */}
          <div
            ref={timelineFillRef}
            className="absolute top-[22px] left-0 right-0 h-[2px] bg-brand-red origin-left"
            style={{ transform: 'scaleX(0)' }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="tl-node relative pt-0">
                {/* Node dot */}
                <div className="relative z-10 w-11 h-11 rounded-full bg-brand-dark flex items-center justify-center mb-6">
                  <span className="text-brand-red font-heading text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <h3 className="text-brand-dark text-lg font-semibold font-body normal-case leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-dark/55 text-sm leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="md:hidden relative pl-10">
          {/* Track line (background) */}
          <div className="absolute top-0 bottom-0 left-[18px] w-[2px] bg-brand-dark/10" />
          {/* Fill line (animated) */}
          <div
            className="timeline-fill-mobile absolute top-0 bottom-0 left-[18px] w-[2px] bg-brand-red origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <div key={step.number} className="tl-node relative">
                {/* Node dot */}
                <div className="absolute -left-10 top-0 z-10 w-9 h-9 rounded-full bg-brand-dark flex items-center justify-center">
                  <span className="text-brand-red font-heading text-xs font-bold">
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <h3 className="text-brand-dark text-base font-semibold font-body normal-case leading-snug mb-1">
                  {step.title}
                </h3>
                <p className="text-brand-dark/55 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
