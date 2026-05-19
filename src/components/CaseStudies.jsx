import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const videos = [
  { title: 'Product Video 01', status: 'done' },
  { title: 'Investor Pitch', status: 'processing' },
  { title: 'Brand Intro', status: 'done' },
  { title: 'Feature Demo', status: 'done' },
  { title: 'Launch Reel', status: 'queued' },
  { title: 'Demo Cut', status: 'processing' },
]

function PackagingDashboard() {
  return (
    <div className="absolute inset-0 bg-[#080808] flex flex-col text-[10px] overflow-hidden select-none">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-3 py-2 border-b border-white/[0.06] shrink-0">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <span className="text-white/70 font-bold tracking-tight ml-1">VideoAI</span>
        <div className="flex-1 mx-2 h-4 bg-white/[0.04] rounded-sm" />
        <div className="w-4 h-4 rounded-full bg-white/[0.08]" />
        <div className="w-4 h-4 rounded bg-lime-400/20" />
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-[72px] shrink-0 border-r border-white/[0.06] flex flex-col gap-1 p-2">
          <p className="text-white/25 uppercase tracking-widest text-[7px] px-1 mb-1">Projects</p>
          {['Holographic', 'Campaign', 'Retail', 'Spot'].map((name, j) => (
            <div key={j} className={`px-2 py-1.5 rounded text-[9px] truncate ${
              j === 0 ? 'bg-lime-400/10 text-lime-400' : 'text-white/30'
            }`}>{name}</div>
          ))}
          <div className="mt-auto pt-2 border-t border-white/[0.05]">
            <p className="text-white/20 text-[7px] uppercase tracking-wide px-1 mb-1">Stats</p>
            <div className="px-1">
              <p className="text-lime-400 font-bold text-[11px] leading-none">127</p>
              <p className="text-white/25 text-[7px]">videos</p>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 flex flex-col min-w-0 p-2">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-white/25 text-[8px]">All Projects</span>
            <span className="text-white/15 text-[8px]">›</span>
            <span className="text-white/50 text-[8px]">Holographic Packaging</span>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 text-[7px] font-medium">+ New Video</span>
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            {videos.map((v, j) => (
              <div key={j} className="bg-[#121212] rounded border border-white/[0.05] flex flex-col overflow-hidden">
                {/* Thumbnail */}
                <div className="flex-1 bg-gradient-to-br from-white/[0.04] to-transparent relative flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-white/20 ml-0.5" />
                  </div>
                </div>
                {/* Info */}
                <div className="px-1.5 py-1 border-t border-white/[0.05]">
                  <p className="text-white/50 text-[8px] truncate leading-tight">{v.title}</p>
                  <span className={`inline-block mt-0.5 px-1 py-px rounded-sm text-[6px] font-medium ${
                    v.status === 'done' ? 'bg-lime-400/15 text-lime-400' :
                    v.status === 'processing' ? 'bg-blue-400/15 text-blue-400' :
                    'bg-white/[0.06] text-white/30'
                  }`}>
                    {v.status === 'done' ? '✓ Done' : v.status === 'processing' ? '● Processing' : 'Queued'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="flex gap-3 mt-2 pt-2 border-t border-white/[0.05]">
            {[['127', 'Videos Generated'], ['48h', 'Time Saved'], ['3', 'Active Projects']].map(([val, label], j) => (
              <div key={j} className="flex items-baseline gap-1">
                <span className="text-white/70 font-bold text-[10px]">{val}</span>
                <span className="text-white/25 text-[7px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    title: 'Revolutionary Packaging Co.',
    category: 'AI Content System',
    year: '2024',
    image: null,
    visual: 'dashboard',
    description: 'A company with a groundbreaking holographic print product needed a way to create high-quality product videos for investors — without hiring a full creative team.',
    context: 'Manual video production was slow, expensive, and could not keep up with the pace of fundraising activity.',
    result: 'A custom AI-powered video automation system, fully handed over to the internal team in 2 months. The company went on to raise a multi-million funding round.',
  },
  {
    title: 'Vyros',
    category: 'Fitness SaaS',
    year: '2025',
    image: '/mockup-vyros.png',
    visual: null,
    description: 'A fitness and training app for the Indian market — a more affordable and feature-rich alternative to Runna, with support for a wide range of smartwatches including budget Indian brands.',
    context: 'The founder had only an idea. No product, no team, no technical direction.',
    result: 'Full discovery, UI/UX, feature planning, and MVP now in active development — with 50–60 early access signups secured before launch.',
  },
  {
    title: 'Vynts',
    category: 'AI Video Platform',
    year: '2025',
    image: '/mockup-vynts.png',
    visual: null,
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
        <div className="cases-grid flex flex-col gap-6">
          {projects.map((project, i) => (
            <div key={i} className="case-card grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.07]">

              {/* Left — mockup image */}
              <div className="relative aspect-[4/3] md:aspect-auto bg-[#0e0e0e] overflow-hidden">
                {project.visual === 'dashboard' ? (
                  <PackagingDashboard />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04)_0%,_transparent_70%)]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18M3.75 4.5h16.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z" />
                        </svg>
                      </div>
                      <span className="text-white/20 text-[10px] uppercase tracking-widest">Mockup coming soon</span>
                    </div>
                  </>
                )}
              </div>

              {/* Right — content */}
              <div className="flex flex-col justify-between p-8 md:p-12 bg-brand-dark border-l border-white/[0.07]">
                <div>
                  {/* Category / year */}
                  <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-5">
                    {project.category} / {project.year}
                  </p>

                  {/* Title */}
                  <h3
                    className="font-heading font-black uppercase text-white leading-[0.9] tracking-tight mb-6"
                    style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>

                {/* Context + Result — 2-col */}
                <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-white/[0.07]">
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="text-white/20 text-xs">↗</span>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Context</span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{project.context}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="text-white/20 text-xs">↗</span>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Result</span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{project.result}</p>
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
