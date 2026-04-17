import React, { useEffect, useState } from 'react'

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

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(getCountdown())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600)
    const interval = setInterval(() => setCountdown(getCountdown()), 1000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className={`py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="photo-frame overflow-hidden relative rounded-[2.5rem] py-14 sm:py-20 px-6 sm:px-12 border-2 border-[#D4AF37]/50 shadow-[0_20px_60px_rgba(212,175,55,0.15)] bg-gradient-to-br from-[#FAF6F0] to-[#E9DCC9]">
        <div className="absolute inset-0 bg-[#FDFBF7]/40 z-0 backdrop-blur-[2px]"/>
        
        {/* Subtle royal flairs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-[80px]" />

        <div className="relative z-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B8860B] mb-10">The wait is almost over</p>
          
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-4xl mx-auto">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.mins },
              { label: 'Seconds', value: countdown.secs },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`glass-panel border-2 border-[#D4AF37]/30 rounded-3xl p-6 text-center flex flex-col items-center justify-center shadow-lg animate-rise-fade`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="section-title text-5xl sm:text-6xl lg:text-7xl text-[#2C1810]">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
             <div className="inline-block bg-[#D4AF37]/10 border-2 border-[#D4AF37]/50 px-8 py-3 rounded-full text-sm font-bold text-[#B8860B] tracking-[0.2em] uppercase animate-pulse shadow-[0_0_15px_rgba(212,175,55,0.2)]">
               28 Apr 2026 Mata Pujan · 30 Apr 2026 Juloos · 2 May 2026 Shadi
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountdownTimer
