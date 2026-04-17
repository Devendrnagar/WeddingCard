import React, { useEffect, useState } from 'react'

const VenueSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`py-16 sm:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center mb-12 animate-fade-scale-in">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">Join The Celebration</p>
        <h2 className="section-title text-5xl sm:text-6xl text-[#2C1810]">Event Venue</h2>
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="gold-divider w-24"></div>
          <span className="text-[#D4AF37] animate-twinkle text-xl">❦</span>
          <div className="gold-divider w-24"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 relative z-10 px-4 sm:px-0">
        {/* Details Panel */}
        <div className="glass-panel p-10 sm:p-14 rounded-[2.5rem] flex flex-col justify-center space-y-10 animate-slide-fade-right shadow-[0_20px_60px_rgba(62,39,35,0.08)] border-[#D4AF37]/30">
          <div>
            <h3 className="section-title text-4xl text-[#2C1810] mb-3">Sultaniya</h3>
            <p className="text-[#5C3A21] text-lg font-medium">Main Wedding & Reception</p>
          </div>

          <div className="space-y-8">
             <div className="flex items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#D4AF37]/40 text-[#D4AF37] text-xl shadow-md">📍</span>
                <div>
                   <p className="font-bold text-[#3E2723] text-lg">Address</p>
                   <p className="text-[#5C3A21] leading-relaxed mt-1">Near VIP Road, City Center<br/>Madhya Pradesh</p>
                </div>
             </div>
             
             <div className="flex items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#D4AF37]/40 text-[#D4AF37] text-xl shadow-md">🕒</span>
                <div>
                   <p className="font-bold text-[#3E2723] text-lg">When</p>
                 <p className="text-[#5C3A21] leading-relaxed mt-1">Saturday, May 2, 2026 (Shadi / शादी)<br/>7:00 PM onwards</p>
                </div>
             </div>

             <div className="flex items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#D4AF37]/40 text-[#D4AF37] text-xl shadow-md">📞</span>
                <div>
                   <p className="font-bold text-[#3E2723] text-lg">Contact</p>
                   <p className="text-[#5C3A21] leading-relaxed mt-1">+91 62657 55863</p>
                </div>
             </div>
          </div>

          <div className="pt-6">
            <a
              href="https://maps.app.goo.gl/sfsAo3WPcA2rQ87n8"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring animate-shimmer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] px-10 py-4 font-bold text-[#FAF6F0] shadow-[0_16px_40px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(212,175,55,0.5)] w-full sm:w-auto tracking-wide text-lg"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Extended Map Frame */}
        <div className="photo-frame rounded-[2.5rem] overflow-hidden h-[450px] lg:h-auto border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(212,175,55,0.15)] animate-slide-fade-left p-2 bg-[#FDFBF7]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.7797558509!2d77.41261545!3d23.2599333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sSultania%20zanana%20hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '2rem', filter: 'contrast(0.9) opacity(0.95)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:filter-none transition-filters duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VenueSection
