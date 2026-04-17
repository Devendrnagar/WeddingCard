import React from 'react'

const FooterSection = ({ toggleMusic, isMusicPlaying }) => {
  return (
    <footer className="relative mt-20 pt-20 pb-16 border-t-2 border-[#D4AF37]/20 overflow-hidden bg-gradient-to-b from-[#FAF6F0] to-[#E9DCC9]">
      
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 -ml-[20%] w-[40%] h-96 bg-[#D4AF37]/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-4 text-[#D4AF37] mb-8">
              <span className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="animate-twinkle text-2xl">✦</span>
              <span className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          
          <h2 className="section-title text-5xl sm:text-6xl text-[#2C1810] mb-4 tracking-wide font-bold">
            Thank You
          </h2>
          <p className="text-[#5C3A21] text-xl font-medium mb-2">
            We can't wait to celebrate with you
          </p>
          <p className="mt-4 text-[#C29B27] font-display text-4xl">Khushi & Lalit</p>
        </div>

        <div className="flex justify-center items-center gap-8 mb-12">
          <button 
            onClick={toggleMusic}
            className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 ${isMusicPlaying ? 'bg-white/80 border-[#D4AF37] text-[#D4AF37]' : 'bg-white/40 border-[#D4AF37]/40 text-[#8C7B65]'} hover:bg-white shadow-[0_4px_15px_rgba(212,175,55,0.15)] transition-all font-bold backdrop-blur-md`}
          >
            <span className={isMusicPlaying ? 'animate-pulse text-xl' : 'text-xl'}>{isMusicPlaying ? '🔊' : '🔇'}</span>
            <span className="text-xs tracking-widest uppercase">{isMusicPlaying ? 'Music On' : 'Music Off'}</span>
          </button>
        </div>

        <div className="text-center text-[#B8860B] text-[10px] tracking-widest uppercase font-bold">
          <p>Created with Love for Khushi & Lalit's Wedding</p>
          <p className="mt-2">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
