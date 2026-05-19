import { useState, useEffect } from 'react'

const budgetRanges = ['Up to $5K', '$5K–$10K', '$10K–$20K', '$20K–$50K', '$50K+']

export default function ContactModal({ isOpen, onClose }) {
  const [selectedBudget, setSelectedBudget] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, budget: selectedBudget }),
      })

      if (!res.ok) {
        let errMsg = 'Something went wrong'
        try {
          const data = await res.json()
          if (data.error) errMsg = data.error
        } catch {}
        throw new Error(errMsg)
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setSelectedBudget(null)
      setTimeout(() => {
        setStatus('idle')
        onClose()
      }, 2000)
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl mx-4 animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-dark/60 hover:text-brand-dark transition-colors"
        >
          Close
          <span className="w-8 h-8 rounded-full border border-brand-dark/20 flex items-center justify-center text-lg">
            ×
          </span>
        </button>

        <div className="grid md:grid-cols-[2fr_3fr]">
          {/* Left side — heading + info */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-brand-dark leading-[0.9] font-heading font-black uppercase mb-6">
                Tell us what you want to build.
              </h2>
              <p className="text-brand-dark/50 text-sm leading-relaxed">
                Our team reads every message and replies with the best next step.
              </p>
            </div>

            <div className="hidden md:block mt-12 space-y-4">
              <div>
                <p className="text-brand-dark/40 text-xs uppercase tracking-wider mb-1">Email</p>
                <p className="text-brand-dark text-sm font-medium">hello@antigravity.in</p>
              </div>
              <div>
                <p className="text-brand-dark/40 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-brand-dark text-sm font-medium">India · Remote</p>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="p-8 md:p-12 md:border-l border-brand-dark/10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label className="text-brand-dark text-sm font-medium block mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-brand-dark/15 rounded-lg text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-dark/40 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-brand-dark text-sm font-medium block mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-brand-dark/15 rounded-lg text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-dark/40 transition-colors"
                />
              </div>

              {/* Budget range */}
              <div>
                <label className="text-brand-dark text-sm font-medium block mb-3">Investment range</label>
                <div className="flex flex-wrap gap-2">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setSelectedBudget(range)}
                      className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                        selectedBudget === range
                          ? 'bg-brand-dark text-white border-brand-dark'
                          : 'bg-white text-brand-dark border-brand-dark/20 hover:border-brand-dark/40'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-brand-dark text-sm font-medium block mb-2">What is happening in the product today?</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Context, goal, link and what would make this project a win."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-brand-dark/15 rounded-lg text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-dark/40 transition-colors resize-y"
                />
              </div>

              {/* Error message */}
              {status === 'error' && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
              )}

              {/* Success message */}
              {status === 'success' && (
                <p className="text-green-600 text-sm font-medium">Message sent! We'll be in touch soon.</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full flex items-center justify-between px-6 py-4 bg-brand-red text-white text-sm font-medium rounded-xl hover:bg-red-600 transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{status === 'loading' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send message'}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
