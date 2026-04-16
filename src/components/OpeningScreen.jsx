import React, { useEffect, useRef, useState } from 'react'
import { BrideIllustration, GroomIllustration } from './BrideGroomIllustrations'

const OpeningScreen = ({ onOpenInvitation }) => {
  const [showMusic, setShowMusic] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [showText, setShowText] = useState(false)
  const [showPortraits, setShowPortraits] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 250)
    const portraitTimer = setTimeout(() => setShowPortraits(true), 650)

    const audioElement = audioRef.current
    if (audioElement) {
      audioElement.volume = 0.25
      audioElement.play().then(() => {
        setShowMusic(true)
      }).catch(() => {
        setShowMusic(false)
      })
    }

    return () => {
      clearTimeout(textTimer)
      clearTimeout(portraitTimer)
    }
  }, [])

  const handleOpenInvitation = () => {
    setShowButton(false)
    setTimeout(() => {
      onOpenInvitation()
    }, 500)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#cc8e5e]/25 blur-3xl animate-aura-pulse"></div>
        <div className="absolute right-0 top-6 h-96 w-96 rounded-full bg-[#89bf9e]/20 blur-3xl animate-aura-pulse delay-400"></div>
        <div className="absolute bottom-0 left-1/2 h-64 w-[110%] -translate-x-1/2 rounded-t-[50%] bg-gradient-to-t from-[#f1bf72]/20 to-transparent animate-soft-wave"></div>
      </div>

      <audio ref={audioRef} id="background-music" loop preload="auto">
        <source src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==" type="audio/wav" />
      </audio>

      <div className="relative z-10 w-full max-w-7xl">
        <div className={`panel-surface mx-auto overflow-hidden rounded-[2rem] sm:rounded-[2.4rem] transition-all duration-1000 ${
          showText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <section className="px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <div className="pill-label animate-pop-in inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs tracking-[0.26em] uppercase sm:text-sm">
                Wedding Evening
              </div>

              <h1 className="font-display mt-6 animate-rise-fade text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
                You Are
                <span className="block bg-gradient-to-r from-[#ffe8c8] via-[#f1bf72] to-[#ffd7a9] bg-clip-text text-transparent">
                  Warmly Invited
                </span>
              </h1>

              <p className="mt-4 animate-rise-fade text-lg text-[#ffe8d0] sm:text-xl">आप सादर आमंत्रित हैं</p>
              <p className="mt-3 max-w-xl animate-rise-fade text-sm leading-7 text-[#fff6ed]/82 sm:text-base">
                This celebration is prepared with love, music, flowers, and family blessings.
                Open the invitation to explore every beautiful moment.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="soft-card animate-rise-fade rounded-2xl px-4 py-3 text-sm text-[#ffe8cf]">Luxury floral design</div>
                <div className="soft-card animate-rise-fade rounded-2xl px-4 py-3 text-sm text-[#ffe8cf]">Traditional ceremony</div>
                <div className="soft-card animate-rise-fade rounded-2xl px-4 py-3 text-sm text-[#ffe8cf]">Family togetherness</div>
              </div>

              {showButton && (
                <div className={`mt-9 transition-all duration-700 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <button
                    type="button"
                    onClick={handleOpenInvitation}
                    className="focus-ring animate-shimmer group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f1bf72] via-[#f7d9ac] to-[#cc8e5e] px-8 py-3.5 font-semibold text-[#2f1a25] shadow-[0_16px_42px_rgba(51,21,34,0.42)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_58px_rgba(137,191,158,0.3)]"
                  >
                    <span className="relative">Open Wedding Story</span>
                  </button>
                </div>
              )}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="soft-card rounded-[1.5rem] p-4 animate-rise-fade delay-300">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#ffd7aa]">Venue hint</p>
                  <p className="mt-2 text-sm leading-7 text-[#fff6ed]/80">
                    A royal evening filled with lights, blessings, and unforgettable photographs.
                  </p>
                </div>
                <div className="soft-card rounded-[1.5rem] p-4 animate-rise-fade delay-500">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#ffd7aa]">Note</p>
                  <p className="mt-2 text-sm leading-7 text-[#fff6ed]/80">
                    Press play for the ambience, then open the card for complete details.
                  </p>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#25141f]/92 to-[#3a2432]/84 px-6 py-10 sm:px-10 lg:border-l lg:border-t-0">
              <div className="absolute -top-8 -right-6 h-28 w-28 rounded-full border border-[#89bf9e]/50">
                <span className="animate-orbit absolute left-1/2 top-1/2 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-[#89bf9e]" />
              </div>

              <div className={`relative grid h-full gap-4 transition-all duration-1000 ${showPortraits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="soft-card rounded-[1.5rem] p-4">
                    <BrideIllustration animated={showPortraits} />
                    <p className="mt-2 text-center font-display text-3xl text-white">Khushi</p>
                  </div>
                  <div className="soft-card rounded-[1.5rem] p-4">
                    <GroomIllustration animated={showPortraits} />
                    <p className="mt-2 text-center font-display text-3xl text-white">Lalit</p>
                  </div>
                </div>

                <div className="soft-card rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#ffd7aa]">Entry Note</p>
                  <p className="mt-2 text-sm leading-7 text-[#fff6ed]/80">
                    Tap the invitation to unveil the full wedding website with gallery, schedule, and location details.
                  </p>
                </div>

                <div className="soft-card rounded-2xl p-5">
                  <p className="font-display text-2xl text-[#ffe5c4]">May your arrival bring joy.</p>
                  <p className="mt-3 text-sm text-[#fff6ed]/76">हम आपके आगमन की प्रतीक्षा कर रहे हैं।</p>
                </div>

                <div className="flex items-center gap-3 text-[#f1bf72]">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f1bf72]/80" />
                  <span className="animate-twinkle text-lg">✦</span>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f1bf72]/80" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-5 z-20 sm:right-8 sm:top-8">
        <button
          type="button"
          onClick={() => {
            const audio = audioRef.current
            if (!audio) return
            if (audio.paused) {
              audio.play().catch(() => {})
              setShowMusic(true)
            } else {
              audio.pause()
              setShowMusic(false)
            }
          }}
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#24141d]/58 px-4 py-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#3b2031]/74"
          title="Toggle background music"
          aria-pressed={showMusic}
        >
          <span className={showMusic ? 'animate-twinkle' : ''}>{showMusic ? '🔊' : '🔇'}</span>
          <span className="hidden sm:inline text-sm">Music</span>
        </button>
      </div>
    </div>
  )
}

export default OpeningScreen
