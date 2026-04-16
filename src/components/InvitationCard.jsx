import React, { useEffect, useMemo, useState } from 'react'
import { BrideIllustration, GroomIllustration } from './BrideGroomIllustrations'
import shadiEndImg from '../assets/shadiend.jpeg'
import brideImg from '../assets/bride.jpeg'
import groomImg from '../assets/groom.jpeg'

const eventDate = new Date('2026-05-02T18:00:00')

const getCountdown = () => {
  const diff = Math.max(eventDate.getTime() - Date.now(), 0)
  const totalSeconds = Math.floor(diff / 1000)
  const totalHours = Math.floor(totalSeconds / 3600)

  return {
    days: Math.floor(totalHours / 24),
    hours: totalHours % 24,
    mins: Math.floor((totalSeconds % 3600) / 60),
    secs: totalSeconds % 60,
  }
}

const InvitationCard = () => {
  const [showFrame, setShowFrame] = useState(false)
  const [showHero, setShowHero] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [hasAccepted, setHasAccepted] = useState(false)
  const [showBlessings, setShowBlessings] = useState(false)
  const [countdown, setCountdown] = useState(getCountdown())

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        size: 2 + (index % 4),
        left: `${(index * 11) % 100}%`,
        top: `${(index * 19) % 100}%`,
        duration: 12 + (index % 7),
        delay: `${(index % 6) * 0.8}s`,
      })),
    []
  )

  const blessingParticles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: `${(index * 7) % 100}%`,
        delay: `${(index % 8) * 0.2}s`,
        duration: 2.4 + (index % 5) * 0.35,
      })),
    []
  )

  useEffect(() => {
    const frameTimer = setTimeout(() => setShowFrame(true), 120)
    const heroTimer = setTimeout(() => setShowHero(true), 430)
    const galleryTimer = setTimeout(() => setShowGallery(true), 900)
    setCountdown(getCountdown())
    const countdownTimer = setInterval(() => setCountdown(getCountdown()), 1000)

    return () => {
      clearTimeout(frameTimer)
      clearTimeout(heroTimer)
      clearTimeout(galleryTimer)
      clearInterval(countdownTimer)
    }
  }, [])

  useEffect(() => {
    if (hasAccepted) {
      const revealTimer = setTimeout(() => setShowBlessings(true), 60)
      return () => clearTimeout(revealTimer)
    }

    setShowBlessings(false)
    return undefined
  }, [hasAccepted])

  const handleAcceptInvitation = () => {
    setHasAccepted(true)
  }

  const handleCloseBlessing = () => {
    setShowBlessings(false)
    setTimeout(() => setHasAccepted(false), 220)
  }

  return (
    <div className="relative min-h-screen px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,191,114,0.16),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(137,191,158,0.12),transparent_24%),radial-gradient(circle_at_10%_90%,rgba(204,142,94,0.15),transparent_28%)]" />
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="animate-twinkle absolute rounded-full bg-[#f1bf72] opacity-20"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: particle.left,
                top: particle.top,
                animation: `float ${particle.duration}s infinite ease-in-out`,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl transition-all duration-1000 ${
          showFrame ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
        }`}
      >
        <div className="panel-surface overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          <div className="animate-border-sweep h-1 w-full" />

          <div className="relative isolate px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full bg-[#89bf9e]/15 blur-3xl animate-aura-pulse" />
            <div className="pointer-events-none absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-[#f1bf72]/14 blur-3xl animate-aura-pulse delay-400" />

            <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
              <section className="glass-panel rounded-[1.75rem] p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="pill-label animate-pop-in rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs">
                    Wedding Invitation
                  </span>
                  <span className="soft-card rounded-full px-4 py-2 text-[11px] tracking-[0.24em] uppercase text-[#ffe8cf] sm:text-xs">
                    Save the date · 2 May 2026
                  </span>
                </div>

                <h1 className="section-title mt-6 animate-fade-scale-in text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                  Khushi
                  <span className="mx-3 text-[#f1bf72]">&</span>
                  Lalit
                </h1>

                <p className="mt-5 max-w-2xl animate-slide-fade-left text-base leading-7 text-[#fff6ed]/82 sm:text-lg delay-200">
                  We warmly invite you to join us as we celebrate a beautiful union filled with love, traditions, family blessings,
                  and unforgettable memories.
                </p>
                <p className="mt-2 animate-slide-fade-left text-sm text-[#ffe2bf]/90 sm:text-base delay-300">
                  आपकी उपस्थिति हमारे लिए आशीर्वाद होगी।
                </p>

                <div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-4">
                  {[
                    { label: 'Days', value: countdown.days },
                    { label: 'Hours', value: countdown.hours },
                    { label: 'Mins', value: countdown.mins },
                    { label: 'Secs', value: countdown.secs },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className={`soft-card animate-card-float rounded-[1.4rem] p-4 text-center ${
                        index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : index === 3 ? 'delay-500' : ''
                      }`}
                    >
                      <div className="section-title text-4xl text-white sm:text-5xl">{String(item.value).padStart(2, '0')}</div>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ffe2bf]/80 sm:text-xs">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {['Elegant rituals', 'Music & lights', 'Family gathering'].map((item, index) => (
                    <div
                      key={item}
                      className={`soft-card animate-rise-fade rounded-2xl px-4 py-3 text-sm text-[#fff1df]/86 ${
                        index === 1 ? 'delay-300' : index === 2 ? 'delay-500' : ''
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-8 grid gap-3 sm:grid-cols-3 transition-all duration-700 ${
                    showHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="glass-panel rounded-[1.35rem] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ffe7c4]/74">Date</p>
                    <p className="mt-2 text-lg font-semibold text-white">Saturday, 2 May 2026</p>
                  </div>
                  <div className="glass-panel rounded-[1.35rem] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ffe7c4]/74">Time</p>
                    <p className="mt-2 text-lg font-semibold text-white">7  :00 PM onwards</p>
                  </div>
                  <div className="glass-panel rounded-[1.35rem] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ffe7c4]/74">Venue</p>
                    <p className="mt-2 text-lg font-semibold text-white">Sultaniya </p>
                  </div>
                </div>

                <div
                  className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ${
                    showHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <button
                    type="button"
                    onClick={handleAcceptInvitation}
                    className="focus-ring animate-shimmer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#89bf9e] via-[#cce8c8] to-[#89bf9e] px-6 py-3.5 font-semibold text-[#213124] shadow-[0_16px_42px_rgba(23,50,34,0.45)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Accept Invitation
                  </button>
                  <a
                    href="sms:+919340908367"
                    className="focus-ring animate-shimmer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f1bf72] via-[#f7d9ac] to-[#cc8e5e] px-6 py-3.5 font-semibold text-[#2f1a25] shadow-[0_16px_42px_rgba(51,21,34,0.42)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    RSVP via Message
                  </a>
                  <a
                    href="https://maps.app.goo.gl/sfsAo3WPcA2rQ87n8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-card inline-flex items-center justify-center rounded-full px-6 py-3.5 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Open Location
                  </a>
                </div>
              </section>

              <section
                className={`glass-panel relative overflow-hidden rounded-[1.75rem] p-5 sm:p-6 lg:p-8 transition-all duration-1000 ${
                  showHero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(241,191,114,0.15),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(137,191,158,0.14),transparent_24%)]" />
                <div className="relative grid h-full gap-4 sm:grid-cols-2">
                  <div className="photo-frame min-h-[20rem] animate-card-float p-4 sm:p-5">
                    <div className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#ffe7c4] backdrop-blur-md">
                      Bride
                    </div>
                    <BrideIllustration animated={showHero} />
                    <div className="mt-3 text-center">
                      <p className="section-title text-3xl text-white">Khushi</p>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#ffd8ad]/80">The bride</p>
                    </div>
                  </div>

                  <div className="photo-frame min-h-[20rem] translate-y-4 animate-card-float delay-300 p-4 sm:p-5">
                    <div className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#ffe7c4] backdrop-blur-md">
                      Groom
                    </div>
                    <GroomIllustration animated={showHero} />
                    <div className="mt-3 text-center">
                      <p className="section-title text-3xl text-white">Lalit</p>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#ffd8ad]/80">The groom</p>
                    </div>
                  </div>

                  <div className="photo-frame sm:col-span-2 relative h-[18rem] overflow-hidden sm:h-[22rem]">
                    <img
                      src={shadiEndImg}
                      alt="Wedding celebration"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24141d]/82 via-[#24141d]/18 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-black/80">Our day</p>
                        <p className="section-title text-2xl text-black sm:text-3xl">A night of blessings</p>
                      </div>
                      <span className="rounded-full border border-black/15 bg-black/10 px-3 py-2 text-xs text-black/90 backdrop-blur-md">
                        2026
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div
              className={`mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] transition-all duration-1000 ${
                showGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <section className="space-y-6">
                <div className="glass-panel rounded-[1.75rem] p-5 sm:p-6 lg:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#ffe7c4]/75">Visit details</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="soft-card rounded-[1.35rem] p-4">
                      <p className="text-sm uppercase tracking-[0.22em] text-[#ffe7c4]/70">Landmark</p>
                      <p className="mt-2 text-base text-white">Near VIP Road</p>
                    </div>
                    <div className="soft-card rounded-[1.35rem] p-4">
                      <p className="text-sm uppercase tracking-[0.22em] text-[#ffe7c4]/70">Contact</p>
                      <p className="mt-2 text-base text-white">+91 6265755863</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-1">
                    <a
                      href="https://maps.app.goo.gl/sfsAo3WPcA2rQ87n8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soft-card inline-flex items-center justify-center rounded-full px-6 py-3.5 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      Open Map
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {hasAccepted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          <div
            className={`absolute inset-0 bg-[#110912]/70 backdrop-blur-sm transition-opacity duration-300 ${showBlessings ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleCloseBlessing}
          />

          <div
            className={`relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-[linear-gradient(145deg,rgba(70,31,51,0.92),rgba(37,21,31,0.95))] p-6 shadow-[0_34px_90px_rgba(0,0,0,0.5)] transition-all duration-500 sm:p-8 ${
              showBlessings ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.92] translate-y-6'
            }`}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {blessingParticles.map((item) => (
                <span
                  key={item.id}
                  className="absolute top-[88%] h-2.5 w-2.5 rounded-full bg-[#f1bf72]/75"
                  style={{
                    left: item.left,
                    animation: `petalDrift ${item.duration}s ease-out infinite`,
                    animationDelay: item.delay,
                  }}
                />
              ))}
              <div
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f9dfb4]/45"
                style={{ animation: 'haloPulse 2.3s ease-out infinite' }}
              />
            </div>

            <div className="relative z-10 text-center" style={{ animation: showBlessings ? 'thankYouPop 0.5s ease-out both' : 'none' }}>
              <p className="text-xs uppercase tracking-[0.34em] text-[#fddfad]/75">Blessings Received</p>
              <h2 className="section-title mt-3 text-4xl text-white sm:text-5xl">Thank You!</h2>
              <p className="mt-3 text-sm text-[#ffe7c4]/90 sm:text-base">
                Your acceptance means a lot to us. We are excited to celebrate with you.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/15 bg-white/8 p-3">
                  <img src={brideImg} alt="Bride Khushi" className="h-52 w-full rounded-2xl object-cover" />
                  <p className="mt-2 text-sm text-[#ffe6c2]">Bride - Khushi</p>
                </div>
                <div className="rounded-3xl border border-white/15 bg-white/8 p-3">
                  <img src={groomImg} alt="Groom Lalit" className="h-52 w-full rounded-2xl object-cover" />
                  <p className="mt-2 text-sm text-[#ffe6c2]">Groom - Lalit</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={handleCloseBlessing}
                  className="soft-card rounded-full px-5 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.18;
          }
          25% {
            transform: translate3d(18px, -34px, 0);
            opacity: 0.38;
          }
          50% {
            transform: translate3d(-24px, -68px, 0);
            opacity: 0.22;
          }
          75% {
            transform: translate3d(-32px, -28px, 0);
            opacity: 0.3;
          }
        }

        @keyframes thankYouPop {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.94);
          }
          75% {
            opacity: 1;
            transform: translateY(0) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes petalDrift {
          0% {
            transform: translate3d(0, 0, 0) scale(0.9);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          100% {
            transform: translate3d(0, -180px, 0) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes haloPulse {
          0% {
            opacity: 0.42;
            transform: translate(-50%, -50%) scale(0.86);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.34);
          }
        }
      `}</style>
    </div>
  )
}

export default InvitationCard
