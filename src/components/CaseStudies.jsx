import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  {
    title: 'Revolutionary Packaging Company',
    category: 'AI Content System',
    year: '2024',
    color: 'from-violet-900 to-indigo-900',
    description: 'A company with a groundbreaking holographic print product needed a way to create high-quality product videos for investors — without hiring a full creative team.',
    context: 'Manual video production was slow, expensive, and could not keep up with the pace of fundraising activity.',
    result: 'A custom AI-powered video automation system, fully handed over to the internal team in 2 months. The company went on to raise a multi-million funding round.',
  },
  {
    title: 'Vyros',
    category: 'Fitness SaaS',
    year: '2025',
    color: 'from-emerald-900 to-teal-900',
    description: 'A fitness and training app for the Indian market — a more affordable and feature-rich alternative to Runna, with support for a wide range of smartwatches including budget Indian brands.',
    context: 'The founder had only an idea. No product, no team, no technical direction.',
    result: 'Full discovery, UI/UX, feature planning, and MVP now in active development — with 50–60 early access signups secured before launch.',
  },
  {
    title: 'Vynts',
    category: 'AI Video Platform',
    year: '2025',
    color: 'from-rose-900 to-orange-900',
    description: 'An all-in-one AI content creation platform where users manage their entire workflow — from scripting to editing, uploading, and viewing analytics — in one place.',
    context: 'Building a professional web-based video editor with AI integration is complex, expensive, and easy to get wrong.',
    result: 'A working web video editor that compresses days of editing work into minutes. Currently in testing with 200 early-access founders and creators. Early round raised.',
  },
]

const headingWords = ['PRODUCTS', 'BUILT', 'AROUND', 'FOUNDERS,', 'NOT', 'DECORATION.']

export default function CaseStudies() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-word', {
        scrollTrigger: {
          trigger: '.case-heading',
          start: 'top 90%',
          end: 'bottom 75%',
          scrub: true,
        },
        opacity: 0.1,
        stagger: 0.05,
      })
      gsap.from('.case-card', {
        scrollTrigger: {
          trigger: '.cases-grid',
          start: 'top 85%',
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-10 bg-brand-dark">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-6">
          Selected Work
        </p>

        {/* Scroll-reveal heading */}
        <div className="case-heading mb-20">
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] text-white leading-[0.95] font-heading font-black uppercase">
            {headingWords.map((word, i) => (
              <span key={i} className="case-word inline-block mr-[0.2em]">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Case study cards */}
        <div className="cases-grid flex flex-col gap-16">
          {projects.map((project, i) => (
            <div key={i} className="case-card grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Image placeholder */}
              <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 font-heading text-4xl font-bold uppercase">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                  {project.category} / {project.year}
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-heading font-bold uppercase mb-4">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-brand-red text-xs uppercase tracking-widest font-medium">Context</span>
                    <p className="text-white/50 text-sm mt-1 leading-relaxed">{project.context}</p>
                  </div>
                  <div>
                    <span className="text-brand-red text-xs uppercase tracking-widest font-medium">Result</span>
                    <p className="text-white/50 text-sm mt-1 leading-relaxed">{project.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
