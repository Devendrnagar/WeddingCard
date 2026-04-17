import React, { useEffect, useState } from 'react'
import { BrideIllustration, GroomIllustration } from './BrideGroomIllustrations'

const OpeningScreen = ({ onOpenInvitation, isMusicPlaying, toggleMusic }) => {
  const [showButton, setShowButton] = useState(true)
  const [showText, setShowText] = useState(false)
  const [showPortraits, setShowPortraits] = useState(false)

  const ceremonyEvents = [
    {
      date: '28 April 2026',
      titleEn: 'Mata Pujan',
      titleHi: 'माता पूजन',
      tone: 'from-[#FFF8E8] to-[#FDF2CC]'
    },
    {
      date: '30 April 2026',
      titleEn: 'Juloos',
      titleHi: 'जुलूस',
      tone: 'from-[#FFF7ED] to-[#FFE9CF]'
    },
    {
      date: '2 May 2026',
      titleEn: 'Shadi',
      titleHi: 'शादी',
      tone: 'from-[#FFF2F2] to-[#FFE2E2]'
    }
  ]

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 250)
    const portraitTimer = setTimeout(() => setShowPortraits(true), 650)
    return () => {
      clearTimeout(textTimer)
      clearTimeout(portraitTimer)
    }
  }, [])

  const handleOpenInvitation = () => {
    setShowButton(false)
    setTimeout(() => { onOpenInvitation() }, 500)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#D4AF37]/30 blur-3xl animate-aura-pulse"></div>
        <div className="absolute right-0 top-6 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl animate-aura-pulse delay-400"></div>
        <div className="absolute bottom-0 left-1/2 h-64 w-[110%] -translate-x-1/2 rounded-t-[50%] bg-gradient-to-t from-[#D4AF37]/15 to-transparent animate-soft-wave"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className={`panel-surface mx-auto overflow-hidden rounded-[2rem] sm:rounded-[2.4rem] transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
          }`}>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <section className="px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <div className="pill-label animate-pop-in inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.26em] uppercase">
                Wedding Evening
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-[#B8860B] uppercase tracking-[0.2em] mb-4 animate-rise-fade opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: '100ms' }}>
                  Together with their families, Lalit & Khushi invite you…
                </p>
                <h1 className="font-display flex flex-col gap-1 text-6xl sm:text-7xl lg:text-8xl text-[#2C1810]">
                  <span className="animate-slide-fade-right inline-block opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: '300ms' }}>
                    Khushi
                  </span>
                  <span className="animate-pop-in inline-block text-4xl sm:text-5xl text-[#D4AF37] ml-2 lg:ml-4 opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: '700ms' }}>
                    &
                  </span>
                  <span className="animate-slide-fade-left inline-block opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: '1100ms' }}>
                    Lalit
                  </span>
                </h1>
              </div>

              <p className="mt-8 animate-rise-fade text-base leading-8 text-[#5C3A21] sm:text-lg opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: '1500ms' }}>
                This celebration is prepared with love, music, flowers, and family blessings.
                Open the invitation to explore every beautiful moment.
              </p>

              <div className="mt-8 opacity-0 animate-rise-fade [animation-fill-mode:forwards]" style={{ animationDelay: '1700ms' }}>
                <div className="mb-3 flex items-center justify-between px-1">
                  <p className="text-[11px] font-bold tracking-[0.24em] text-[#B8860B] uppercase">Ceremony Timeline</p>
                  <p className="text-xs font-semibold text-[#8D6E63]">3 Rituals</p>
                </div>

                <div className="soft-card rounded-3xl border border-[#D4AF37]/20 bg-white/70 p-2.5 backdrop-blur-sm">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {ceremonyEvents.map((event, index) => (
                      <article
                        key={event.titleEn}
                        className={`group relative overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-gradient-to-br ${event.tone} p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(62,39,35,0.12)]`}
                      >
                        <div className="absolute right-3 top-3 rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] text-[#7A5B3F] uppercase">
                          Day {index + 1}
                        </div>
                        <p className="text-xs font-bold tracking-[0.16em] text-[#8D6E63] uppercase">{event.date}</p>
                        <p className="mt-3 font-display text-2xl text-[#2C1810] leading-tight">{event.titleEn}</p>
                        <p className="mt-1 text-sm font-semibold text-[#5C3A21]">{event.titleHi}</p>

                        {index < ceremonyEvents.length - 1 && (
                          <span className="pointer-events-none absolute -right-1.5 top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-[#D4AF37]/40 bg-[#F7E7B0] sm:block" />
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {showButton && (
                <div className={`mt-10 transition-all duration-700 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <button
                    type="button"
                    onClick={handleOpenInvitation}
                    className="focus-ring animate-shimmer group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] px-9 py-4 font-bold text-[#fafafa] shadow-[0_16px_40px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(212,175,55,0.5)]"
                  >
                    <span className="relative tracking-wide">Open Wedding Story</span>
                  </button>
                </div>
              )}
            </section>

            <section className="relative overflow-hidden border-t border-[#D4AF37]/20 bg-gradient-to-br from-[#FAF6F0] to-[#F5EBE1] px-6 py-10 sm:px-10 lg:border-l lg:border-t-0">
              <div className="absolute -top-8 -right-6 h-28 w-28 rounded-full border-2 border-[#D4AF37]/30">
                <span className="animate-orbit absolute left-1/2 top-1/2 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-[#D4AF37]" />
              </div>

              <div className={`relative grid h-full gap-5 transition-all duration-1000 ${showPortraits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="photo-frame p-5">
                    <div className="scale-110 mt-2"><BrideIllustration animated={showPortraits} /></div>
                    <p className="mt-4 text-center font-display text-4xl text-[#2C1810]">Khushi</p>
                    <p className="text-center text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">The Bride</p>
                  </div>
                  <div className="photo-frame p-5">
                    <div className="scale-110 mt-2"><GroomIllustration animated={showPortraits} /></div>
                    <p className="mt-4 text-center font-display text-4xl text-[#2C1810]">Lalit</p>
                    <p className="text-center text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">The Groom</p>
                  </div>
                </div>

                <div className="soft-card rounded-2xl p-6 mt-2">
                  <p className="font-display text-3xl text-[#2C1810]">We can’t wait to celebrate with you ❤️</p>
                  <p className="mt-3 text-sm font-semibold text-[#D4AF37] uppercase tracking-widest">हम आपके आगमन की प्रतीक्षा कर रहे हैं</p>
                </div>

                <div className="flex items-center gap-4 text-[#D4AF37] mt-auto">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
                  <span className="animate-twinkle text-xl">✦</span>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-5 z-20 sm:right-8 sm:top-8">
        <button
          type="button"
          onClick={toggleMusic}
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/70 px-5 py-3 text-[#3E2723] font-semibold shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white"
          title="Toggle background music"
        >
          <span className={isMusicPlaying ? 'animate-twinkle text-[#D4AF37]' : 'text-gray-400'}>{isMusicPlaying ? '🔊' : '🔇'}</span>
          <span className="hidden sm:inline text-sm">Music</span>
        </button>
      </div>
    </div>
  )
}

export default OpeningScreen
