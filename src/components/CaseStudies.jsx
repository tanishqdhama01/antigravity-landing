import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  {
    title: 'Revolutionary Packaging Company',
    category: 'AI Content System',
    year: '2024',
    accent: 'from-violet-600 to-indigo-600',
    accentSolid: '#6d28d9',
    shortName: 'PACKAGING',
    description: 'A company with a groundbreaking holographic print product needed a way to create high-quality product videos for investors — without hiring a full creative team.',
    context: 'Manual video production was slow, expensive, and could not keep up with the pace of fundraising activity.',
    result: 'A custom AI-powered video automation system, fully handed over to the internal team in 2 months. The company went on to raise a multi-million funding round.',
  },
  {
    title: 'Vyros',
    category: 'Fitness SaaS',
    year: '2025',
    accent: 'from-emerald-600 to-teal-600',
    accentSolid: '#059669',
    shortName: 'VYROS',
    description: 'A fitness and training app for the Indian market — a more affordable and feature-rich alternative to Runna, with support for a wide range of smartwatches including budget Indian brands.',
    context: 'The founder had only an idea. No product, no team, no technical direction.',
    result: 'Full discovery, UI/UX, feature planning, and MVP now in active development — with 50–60 early access signups secured before launch.',
  },
  {
    title: 'Vynts',
    category: 'AI Video Platform',
    year: '2025',
    accent: 'from-rose-600 to-orange-600',
    accentSolid: '#e11d48',
    shortName: 'VYNTS',
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
            <div key={i} className="case-card grid md:grid-cols-[3fr_7fr] gap-6 md:gap-10 items-stretch">
              {/* UI Skeleton Mockup — 30% */}
              <div className="rounded-2xl overflow-hidden bg-[#111111] border border-white/[0.06] flex flex-col min-h-[360px]">
                {/* Accent top stripe */}
                <div className={`h-[3px] w-full bg-gradient-to-r ${project.accent}`} />

                {/* Window chrome */}
                <div className="px-4 py-3 flex items-center gap-2 border-b border-white/[0.05]">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/[0.12]" />
                    <span className="w-2 h-2 rounded-full bg-white/[0.12]" />
                    <span className="w-2 h-2 rounded-full bg-white/[0.12]" />
                  </div>
                  <div className="ml-2 flex-1 h-3.5 rounded-sm bg-white/[0.05]" />
                </div>

                {/* Body */}
                <div className="flex-1 p-4 flex flex-col gap-3">
                  {/* Category pill */}
                  <span className="self-start px-2 py-0.5 rounded border border-white/[0.08] text-white/30 text-[9px] uppercase tracking-widest">
                    {project.category}
                  </span>

                  {/* Hero block */}
                  <div className={`rounded-lg bg-gradient-to-br ${project.accent} p-4 flex items-end justify-between`} style={{ opacity: 0.18 }} />
                  <div className={`-mt-[3.5rem] mx-1 rounded-lg bg-gradient-to-br ${project.accent} p-4 flex items-end justify-between relative z-10`}>
                    <span className="font-heading font-black text-white/80 text-xl leading-none tracking-tight uppercase">
                      {project.shortName}
                    </span>
                    <span className="text-white/40 text-[10px] font-mono">{project.year}</span>
                  </div>

                  {/* Skeleton text rows */}
                  <div className="flex flex-col gap-1.5 mt-1">
                    <div className="h-2 rounded-full bg-white/[0.07] w-full" />
                    <div className="h-2 rounded-full bg-white/[0.05] w-4/5" />
                    <div className="h-2 rounded-full bg-white/[0.04] w-3/5" />
                  </div>

                  {/* Mini stat cards */}
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="bg-white/[0.04] rounded-lg p-2.5 border border-white/[0.05]">
                      <div className="h-1.5 w-1/2 bg-white/[0.07] rounded mb-1.5" />
                      <div className="h-2.5 w-3/4 bg-white/[0.12] rounded" />
                    </div>
                    <div className="bg-white/[0.04] rounded-lg p-2.5 border border-white/[0.05]">
                      <div className="h-1.5 w-1/2 bg-white/[0.07] rounded mb-1.5" />
                      <div className="h-2.5 w-2/3 bg-white/[0.12] rounded" />
                    </div>
                  </div>

                  {/* More skeleton rows */}
                  <div className="flex flex-col gap-1.5">
                    <div className="h-1.5 rounded-full bg-white/[0.04] w-full" />
                    <div className="h-1.5 rounded-full bg-white/[0.03] w-5/6" />
                  </div>

                  {/* Bottom progress bar */}
                  <div className="mt-auto pt-2">
                    <div className="h-[2px] w-full bg-white/[0.05] rounded-full overflow-hidden">
                      <div className={`h-full w-3/5 bg-gradient-to-r ${project.accent} rounded-full`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content — 70% */}
              <div className="flex flex-col justify-center">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-3">
                  {project.category} · {project.year}
                </p>
                <h3 className="text-white text-3xl md:text-4xl font-heading font-bold uppercase mb-5 leading-tight">
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
