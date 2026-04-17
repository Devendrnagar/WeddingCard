import React, { useEffect, useState } from 'react'
import { BrideIllustration, GroomIllustration } from './BrideGroomIllustrations'
import shadiEndImg from '../assets/shadiend.jpeg'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full bg-[#D4AF37]/10 blur-3xl animate-aura-pulse" />
        <div className="pointer-events-none absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl animate-aura-pulse delay-400" />
        
        <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
          <span className="pill-label animate-pop-in rounded-full px-5 py-2.5 text-[11px] font-bold tracking-[0.28em] uppercase sm:text-xs text-[#6A1E1E]">
            Wedding Invitation
          </span>
          <span className="soft-card rounded-full px-5 py-2.5 text-[11px] font-semibold tracking-[0.24em] uppercase text-[#D4AF37] sm:text-xs">
            Save the date · 2 May 2026
          </span>
        </div>

        <h1 className="section-title mt-10 animate-fade-scale-in text-6xl leading-[0.96] text-[#2C1810] sm:text-7xl lg:text-8xl relative z-10 font-bold">
          Khushi
          <span className="block my-2 text-4xl text-[#D4AF37] sm:text-5xl font-light">&</span>
          Lalit
        </h1>

        <p className="mt-8 mx-auto max-w-2xl animate-fade-scale-in text-base leading-8 text-[#5C3A21] sm:text-lg delay-200 relative z-10 font-medium">
          We warmly invite you to join us as we celebrate a beautiful union filled with love, elegant traditions, family blessings, and unforgettable memories.
        </p>
        <p className="mt-4 animate-fade-scale-in text-sm text-[#D4AF37] font-bold tracking-wider sm:text-base delay-300 relative z-10 uppercase">
          आपकी उपस्थिति हमारे लिए आशीर्वाद होगी।
        </p>

        {/* Illustrations Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 relative z-10">
          <div className="photo-frame min-h-[22rem] animate-card-float p-5">
            <div className="absolute right-4 top-4 rounded-full bg-white/80 border border-[#D4AF37]/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37] backdrop-blur-md z-10">
              Bride
            </div>
            <div className="transform scale-110 mt-6"><BrideIllustration animated={isVisible} /></div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="section-title text-4xl text-[#2C1810]">Khushi</p>
            </div>
          </div>

          <div className="photo-frame min-h-[22rem] translate-y-6 sm:translate-y-8 animate-card-float delay-300 p-5">
            <div className="absolute right-4 top-4 rounded-full bg-white/80 border border-[#D4AF37]/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37] backdrop-blur-md z-10">
              Groom
            </div>
            <div className="transform scale-110 mt-6"><GroomIllustration animated={isVisible} /></div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="section-title text-4xl text-[#2C1810]">Lalit</p>
            </div>
          </div>
        </div>

        {/* Feature Banner Photo */}
        <div className="mt-16 photo-frame relative h-[20rem] overflow-hidden sm:h-[26rem] w-full max-w-5xl mx-auto rounded-3xl animate-rise-fade delay-500 border-4 border-[#FDFBF7] shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
          <img
            src={shadiEndImg}
            alt="Wedding celebration"
            className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-[15s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-[#2C1810]/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <div className="text-left">
              <p className="text-[11px] uppercase font-bold tracking-[0.3em] text-[#D4AF37]">Our special day</p>
              <p className="section-title mt-2 text-3xl text-white sm:text-4xl">A night of blessings</p>
            </div>
            <span className="hidden sm:inline-block rounded-full border border-white/40 bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur-md">
              Est. 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
