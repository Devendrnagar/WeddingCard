import React, { useMemo } from 'react'
import HeroSection from './HeroSection'
import OurStory from './OurStory'
import CountdownTimer from './CountdownTimer'
import VenueSection from './VenueSection'
import RSVPForm from './RSVPForm'
import FooterSection from './FooterSection'

const InvitationCard = ({ isMusicPlaying, toggleMusic }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        size: 3 + (index % 4),
        left: `${(index * 13) % 100}%`,
        top: `${(index * 23) % 100}%`,
        duration: 14 + (index % 7),
        delay: `${(index % 6) * 0.8}s`,
      })),
    []
  )

  return (
    <div className="relative min-h-screen px-4 py-6 sm:px-6 sm:py-10 lg:px-8 overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="animate-twinkle absolute rounded-full bg-[#D4AF37] opacity-30 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl animate-fade-scale-in">
        <div className="panel-surface overflow-hidden rounded-[2.5rem]">
          <div className="animate-border-sweep h-2 w-full" />
          
          <div className="relative isolate py-6 sm:py-10 text-[#3E2723]">
            <HeroSection />
            <OurStory />
            <CountdownTimer />
            <VenueSection />
            <RSVPForm />
            <FooterSection isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.15; }
          25% { transform: translate3d(18px, -34px, 0); opacity: 0.5; }
          50% { transform: translate3d(-18px, -68px, 0); opacity: 0.25; }
          75% { transform: translate3d(-24px, -28px, 0); opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

export default InvitationCard
