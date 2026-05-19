import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const testimonials = [
  {
    quote: "They built us an AI video system our entire team can run without any technical background. It helped us create the content we needed for investors and gave us confidence that we own our technology.",
    author: 'Founder, Revolutionary Packaging Company',
  },
  {
    quote: "In just a few weeks they had mapped our entire product, finished the UI/UX, and started building. They also helped us get our first 50 early access users before we even launched.",
    author: 'Founder, Vyros',
  },
  {
    quote: "They are not just a dev agency. They think like a co-founder. The editing tool they built compresses days of work into minutes — and 200 creators are already testing it.",
    author: 'Founder, Vynts',
  },
]

export default function ProofStrip() {
  const [activeQuote, setActiveQuote] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proof-stat', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.proof-testimonial', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-brand-light">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          {/* Left - Stat */}
          <div className="proof-stat">
            <span className="text-[clamp(3rem,8vw,5rem)] font-heading font-black text-brand-dark leading-none">
              +$4M
            </span>
            <p className="text-brand-dark/60 text-sm mt-2">raised by our clients</p>
          </div>

          {/* Right - Testimonials */}
          <div className="proof-testimonial relative min-h-[180px]">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  activeQuote === i
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 absolute top-0 left-0 pointer-events-none'
                }`}
              >
                <blockquote className="text-brand-dark/80 text-base md:text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-brand-dark/50 text-sm mt-4 font-medium">
                  — {testimonial.author}
                </p>
              </div>
            ))}

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuote(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeQuote === i ? 'bg-brand-red' : 'bg-brand-dark/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
