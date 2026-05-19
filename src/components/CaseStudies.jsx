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
    hero: { value: '50+', label: 'AI videos produced' },
    chips: ['2 months to delivery', 'Multi-million raise', 'Fully handed over'],
  },
  {
    title: 'Vyros',
    category: 'Fitness SaaS',
    year: '2025',
    color: 'from-emerald-900 to-teal-900',
    description: 'A fitness and training app for the Indian market — a more affordable and feature-rich alternative to Runna, with support for a wide range of smartwatches including budget Indian brands.',
    context: 'The founder had only an idea. No product, no team, no technical direction.',
    result: 'Full discovery, UI/UX, feature planning, and MVP now in active development — with 50–60 early access signups secured before launch.',
    hero: { value: '60+', label: 'Founders on waitlist' },
    chips: ['0 → MVP', '3 months', 'Pre-launch signups'],
  },
  {
    title: 'Vynts',
    category: 'AI Video Platform',
    year: '2025',
    color: 'from-rose-900 to-orange-900',
    description: 'An all-in-one AI content creation platform where users manage their entire workflow — from scripting to editing, uploading, and viewing analytics — in one place.',
    context: 'Building a professional web-based video editor with AI integration is complex, expensive, and easy to get wrong.',
    result: 'A working web video editor that compresses days of editing work into minutes. Currently in testing with 200 early-access founders and creators. Early round raised.',
    hero: { value: '200+', label: 'Early access users' },
    chips: ['Seed round closed', 'Days → Minutes', 'In active testing'],
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
              {/* Editorial stat card */}
              <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${project.color}`}>
                {/* Grid texture overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg,white 0,white 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,white 0,white 1px,transparent 1px,transparent 48px)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-8">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-medium">{project.category}</span>
                    <span className="text-white/25 text-[10px] font-mono">{project.year}</span>
                  </div>

                  {/* Hero stat — centred, fills the card */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <span className="font-heading font-black text-white leading-none tracking-tighter"
                      style={{ fontSize: 'clamp(5rem, 14vw, 8rem)' }}>
                      {project.hero.value}
                    </span>
                    <span className="text-white/40 text-xs uppercase tracking-[0.18em] mt-4">
                      {project.hero.label}
                    </span>
                  </div>

                  {/* Bottom chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.chips.map((chip, ci) => (
                      <span
                        key={ci}
                        className="px-3 py-1 rounded-full border border-white/15 text-white/50 text-[10px] tracking-wide"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
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
