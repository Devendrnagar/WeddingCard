import React, { useEffect, useState } from 'react'

const milestones = [
  {
    year: '2023',
    title: 'How We Met',
    description: 'It all started with a simple hello. Little did we know, that brief encounter would blossom into a lifetime of togetherness.',
    icon: '✨'
  },
  {
    year: '2024',
    title: 'Friendship & Laughter',
    description: 'Countless conversations, shared coffees, and endless laughter. We realized our bond was something truly special.',
    icon: '☕'
  },
  {
    year: '2025',
    title: 'The Promise',
    description: 'Surrounded by our loved ones, we exchanged rings and promises, deciding to walk the journey of life hand in hand.',
    icon: '💍'
  },
  {
    year: '2026',
    title: 'Forever Begins',
    description: 'And now, we prepare for our biggest adventure yet - tying the knot and building a family filled with love and warmth.',
    icon: '🌸'
  }
]

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`py-16 sm:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center mb-16 animate-fade-scale-in">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">Journey of Love</p>
        <h2 className="section-title text-5xl sm:text-6xl text-[#2C1810]">Our Story</h2>
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="gold-divider w-24"></div>
          <span className="text-[#D4AF37] animate-twinkle text-xl">❦</span>
          <div className="gold-divider w-24"></div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
        <div className="absolute left-1/2 top-4 bottom-4 -ml-px w-0.5 bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/60 to-[#D4AF37]/0 hidden sm:block"></div>

        <div className="flex flex-col gap-10 sm:gap-16 relative z-10">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={milestone.year} className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-0 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                <div className={`sm:w-1/2 flex ${isEven ? 'sm:justify-start sm:pl-12' : 'sm:justify-end sm:pr-12'} w-full -animate-slide-fade-left`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="glass-panel p-8 rounded-3xl w-full sm:max-w-md hover:scale-[1.03] transition-transform duration-500 relative group overflow-hidden border-[#D4AF37]/30">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-5xl grayscale">
                      {milestone.icon}
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B8860B] text-xs font-bold mb-4 tracking-wider">
                      {milestone.year}
                    </span>
                    <h3 className="section-title text-3xl text-[#2C1810] mb-3">{milestone.title}</h3>
                    <p className="text-base font-medium leading-relaxed text-[#5C3A21]">{milestone.description}</p>
                  </div>
                </div>

                <div className="hidden sm:flex absolute left-1/2 -ml-[22px] w-[44px] h-[44px] rounded-full bg-white border-4 border-[#D4AF37] items-center justify-center z-20 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform">
                  <span className="w-3 h-3 rounded-full bg-[#B8860B] animate-pulse"></span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurStory
