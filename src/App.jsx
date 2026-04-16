import React, { useState } from 'react'
import OpeningScreen from './components/OpeningScreen'
import InvitationCard from './components/InvitationCard'

function App() {
  const [showInvitation, setShowInvitation] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleOpenInvitation = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowInvitation(true)
      setIsTransitioning(false)
    }, 620)
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="grain-layer"></div>
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[#f1bf72]/20 blur-3xl animate-aura-pulse"></div>
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-[#89bf9e]/18 blur-3xl animate-aura-pulse delay-300"></div>
      </div>
      <div
        className={`relative z-10 transition-all duration-700 ${
          isTransitioning ? 'opacity-0 scale-[0.96] rotate-[0.35deg] blur-[2px]' : 'opacity-100 scale-100 rotate-0 blur-0'
        }`}
      >
        {!showInvitation ? (
          <OpeningScreen onOpenInvitation={handleOpenInvitation} />
        ) : (
          <InvitationCard />
        )}
      </div>
    </div>
  )
}

export default App
