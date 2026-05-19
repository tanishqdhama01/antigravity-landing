import { useState, useEffect } from 'react'

export default function Navbar({ onStartProject }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3' : 'bg-brand-light py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter font-black transition-colors duration-500 leading-none ${scrolled ? 'text-white' : 'text-brand-dark'}`}
          >
            Zentrix
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('work')} className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/80 hover:text-white' : 'text-brand-dark/60 hover:text-brand-dark'}`}>
            Work
          </button>
          <button onClick={() => scrollTo('services')} className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/80 hover:text-white' : 'text-brand-dark/60 hover:text-brand-dark'}`}>
            Services
          </button>
          <button onClick={() => scrollTo('process')} className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/80 hover:text-white' : 'text-brand-dark/60 hover:text-brand-dark'}`}>
            Process
          </button>
          <button onClick={() => scrollTo('faq')} className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/80 hover:text-white' : 'text-brand-dark/60 hover:text-brand-dark'}`}>
            FAQ
          </button>
          <button
            onClick={onStartProject}
            className={`ml-4 px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${scrolled ? 'bg-white text-brand-dark hover:bg-white/90' : 'bg-brand-dark text-white hover:bg-brand-dark/90'}`}
          >
            Start a Project →
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-brand-dark'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-brand-dark'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-brand-dark'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-dark/98 backdrop-blur-md transition-all duration-500 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          <button onClick={() => scrollTo('work')} className="text-white text-left text-lg font-medium">Work</button>
          <button onClick={() => scrollTo('services')} className="text-white text-left text-lg font-medium">Services</button>
          <button onClick={() => scrollTo('process')} className="text-white text-left text-lg font-medium">Process</button>
          <button onClick={() => scrollTo('faq')} className="text-white text-left text-lg font-medium">FAQ</button>
          <button
            onClick={() => { setMenuOpen(false); onStartProject(); }}
            className="mt-2 px-5 py-3 bg-white text-brand-dark text-sm font-medium rounded-full text-center w-full"
          >
            Start a Project →
          </button>
        </div>
      </div>
    </nav>
  )
}
