import React, { useState, useEffect } from 'react'

const RSVPForm = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className={`py-20 sm:py-28 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-3xl mx-auto relative z-10 px-4 sm:px-0">
        
        {/* Glow Effects */}
        <div className="absolute -top-10 left-1/2 -ml-32 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-[80px]" />

        <div className="glass-panel p-10 sm:p-14 rounded-[3rem] relative overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_30px_80px_rgba(212,175,55,0.15)] bg-gradient-to-b from-[#FDFBF7] to-[#F5EBE1]">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3">Your Presence</p>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl text-[#2C1810]">Will you attend?</h2>
            <p className="mt-4 text-[#5C3A21] font-medium text-lg">Please let us know by April 15th, 2026</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2 pl-4">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/70 border-2 border-[#D4AF37]/30 rounded-full px-8 py-4 text-[#2C1810] font-medium placeholder-[#5C3A21]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all shadow-inner"
                  placeholder="E.g. Rahul Sharma"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2 pl-4">Attendance</label>
                  <select className="w-full bg-white/70 border-2 border-[#D4AF37]/30 rounded-full px-8 py-4 text-[#2C1810] font-medium focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all shadow-inner appearance-none cursor-pointer">
                    <option value="yes">Joyfully Accept</option>
                    <option value="no">Regretfully Decline</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2 pl-4">Guests</label>
                  <select className="w-full bg-white/70 border-2 border-[#D4AF37]/30 rounded-full px-8 py-4 text-[#2C1810] font-medium focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all shadow-inner appearance-none cursor-pointer">
                    <option value="1">Just Me (1)</option>
                    <option value="2">Two of Us (2)</option>
                    <option value="3">Family of Three (3)</option>
                    <option value="4">Family of Four+ (4+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2 pl-4">Wishes for the couple</label>
                <textarea 
                  rows="3"
                  className="w-full bg-white/70 border-2 border-[#D4AF37]/30 rounded-3xl px-8 py-5 text-[#2C1810] font-medium placeholder-[#5C3A21]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all resize-none shadow-inner"
                  placeholder="Any special notes or dietary requirements..."
                ></textarea>
              </div>

              <div className="pt-6 text-center">
                <button 
                  type="submit"
                  className="focus-ring animate-shimmer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] px-14 py-4 font-bold text-[#FAF6F0] shadow-[0_16px_40px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(212,175,55,0.5)] w-full text-lg tracking-wide"
                >
                  Confirm RSVP
                </button>
              </div>
            </form>
          ) : (
            <div className="py-16 text-center animate-pop-in">
              <div className="w-24 h-24 mx-auto bg-[#D4AF37]/10 rounded-full flex items-center justify-center border-2 border-[#D4AF37] mb-8 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <span className="text-5xl animate-twinkle">✨</span>
              </div>
              <h3 className="section-title text-4xl sm:text-5xl text-[#2C1810] mb-4">Thank you!</h3>
              <p className="text-[#5C3A21] text-lg font-medium">We have received your response. We look forward to celebrating together.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RSVPForm
