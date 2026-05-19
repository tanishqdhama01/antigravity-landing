import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const faqs = [
  {
    question: 'How long does it take to build an MVP?',
    answer: 'Most MVPs go live in 8–12 weeks depending on complexity. Before that, a 2–3 week Tech Clarity Sprint defines the exact scope so there are no surprises during the build.',
  },
  {
    question: 'Do we own the code and infrastructure?',
    answer: 'Yes — completely. All code lives in your own GitHub. All infrastructure runs on your own cloud accounts. We only have managed access during the engagement. You own everything from day one.',
  },
  {
    question: 'What happens when we want to build an internal team?',
    answer: 'That is part of the plan. When you are ready, we help you hire the right developers, onboard them through pair programming sessions, and hand over all documentation. We step back gradually until you are fully independent.',
  },
  {
    question: 'Do you only work with funded startups?',
    answer: 'No. We work with pre-seed founders who have a validated idea and seed-funded founders who have capital but no product. If you are serious about building, we want to talk.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="faq" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-10 bg-brand-faq">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="faq-heading text-[clamp(2rem,5vw,3.5rem)] text-brand-dark leading-[0.9] mb-16">
          Straight answers before the first call.
        </h2>

        <div className="faq-list max-w-3xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item border-b border-brand-dark/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full py-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-brand-dark text-base md:text-lg font-medium">
                  {faq.question}
                </span>
                <span className={`text-brand-red text-2xl font-light transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                <p className="text-brand-dark/60 text-sm leading-relaxed pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
