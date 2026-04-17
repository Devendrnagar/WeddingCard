import React, { useState, useRef, useEffect } from 'react'
import OpeningScreen from './components/OpeningScreen'
import InvitationCard from './components/InvitationCard'
import SplashScreen from './components/SplashScreen'

const createAmbientChimeDataUri = () => {
  const sampleRate = 22050
  const durationSeconds = 8
  const totalSamples = sampleRate * durationSeconds
  const channels = 1
  const bitsPerSample = 16
  const blockAlign = channels * (bitsPerSample / 8)
  const byteRate = sampleRate * blockAlign
  const dataSize = totalSamples * blockAlign
  const buffer = new ArrayBuffer(44 + dataSize)
  const view = new DataView(buffer)
  const writeString = (offset, value) => {
    for (let i = 0; i < value.length; i += 1) { view.setUint8(offset + i, value.charCodeAt(i)) }
  }
  writeString(0, 'RIFF')
  view.setUint32(4, 36 + dataSize, true)
  writeString(8, 'WAVE')
  writeString(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, channels, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, byteRate, true)
  view.setUint16(32, blockAlign, true)
  view.setUint16(34, bitsPerSample, true)
  writeString(36, 'data')
  view.setUint32(40, dataSize, true)

  const notes = [261.63, 329.63, 392.0, 523.25]
  for (let i = 0; i < totalSamples; i += 1) {
    const t = i / sampleRate
    const noteIndex = Math.floor(t / 2) % notes.length
    const freq = notes[noteIndex]
    const envelope = Math.exp(-1.8 * (t % 2))
    const shimmer = Math.sin(2 * Math.PI * (freq * 0.5) * t) * 0.25
    const signal = 0.42 * Math.sin(2 * Math.PI * freq * t) + 0.24 * Math.sin(2 * Math.PI * (freq * 2) * t) + shimmer
    const sample = Math.max(-1, Math.min(1, signal * envelope * 0.4))
    view.setInt16(44 + i * 2, sample * 32767, true)
  }

  let binary = ''
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.length; i += 1) { binary += String.fromCharCode(bytes[i]) }
  return `data:audio/wav;base64,${btoa(binary)}`
}

const ambientChimeSrc = createAmbientChimeDataUri()

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showInvitation, setShowInvitation] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const initAudio = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.15
        try {
          await audioRef.current.play()
          setIsMusicPlaying(true)
        } catch (err) {
          console.warn("Autoplay prevented:", err)
          setIsMusicPlaying(false)
        }
      }
    }
    const t = setTimeout(() => { initAudio() }, 500)
    return () => clearTimeout(t)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
        setIsMusicPlaying(false)
      } else {
        audioRef.current.play().then(() => setIsMusicPlaying(true)).catch(() => setIsMusicPlaying(false))
      }
    }
  }

  const handleOpenInvitation = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowInvitation(true)
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 620)
  }

  return (
    <div className="relative min-h-[100dvh]">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="grain-layer"></div>
      
      <audio ref={audioRef} loop preload="auto">
        <source src={ambientChimeSrc} type="audio/wav" />
      </audio>

      {!showInvitation && (
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-3xl animate-aura-pulse"></div>
          <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-[#E5C158]/15 blur-3xl animate-aura-pulse delay-300"></div>
        </div>
      )}

      <div
        className={`relative z-10 w-full min-h-[100dvh] transition-all duration-700 ${isTransitioning ? 'opacity-0 scale-[0.96] rotate-[0.35deg] blur-[2px]' : 'opacity-100 scale-100 rotate-0 blur-0'
          }`}
      >
        {!showInvitation ? (
          <OpeningScreen 
            onOpenInvitation={handleOpenInvitation} 
            isMusicPlaying={isMusicPlaying}
            toggleMusic={toggleMusic}
          />
        ) : (
          <InvitationCard 
            isMusicPlaying={isMusicPlaying} 
            toggleMusic={toggleMusic} 
          />
        )}
      </div>
    </div>
  )
}

export default App
