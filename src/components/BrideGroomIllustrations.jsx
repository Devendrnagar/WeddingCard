import React, { useState } from 'react'
import brideImg from '../assets/bride.jpeg'
import groomImg from '../assets/groom.jpeg'

export const BrideIllustration = ({ animated }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className={`mx-auto transition-all duration-1000 flex items-center justify-center ${
        animated ? 'opacity-100 transform translate-x-0 scale-100 animate-ambient-float' : 'opacity-0 transform -translate-x-20 scale-75'
      }`}
      style={{
        filter: 'drop-shadow(0 14px 24px rgba(0,0,0,0.28))',
        minHeight: '220px',
        minWidth: '160px',
      }}
    >
      {!imgError ? (
        <img 
          src={brideImg} 
          alt="Bride" 
          className="w-36 h-52 object-contain select-none"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="text-center text-yellow-100/90 text-sm p-4 rounded-2xl border border-white/10 bg-black/20">
          <p className="text-4xl mb-2">👰</p>
          <p>Place bride image in src/assets/</p>
        </div>
      )}
    </div>
  )
}

export const GroomIllustration = ({ animated }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className={`mx-auto transition-all duration-1000 flex items-center justify-center ${
        animated ? 'opacity-100 transform translate-x-0 scale-100 animate-ambient-float' : 'opacity-0 transform translate-x-20 scale-75'
      }`}
      style={{
        filter: 'drop-shadow(0 14px 24px rgba(0,0,0,0.28))',
        minHeight: '220px',
        minWidth: '160px',
      }}
    >
      {!imgError ? (
        <img 
          src={groomImg} 
          alt="Groom" 
          className="w-36 h-52 object-contain select-none"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="text-center text-yellow-100/90 text-sm p-4 rounded-2xl border border-white/10 bg-black/20">
          <p className="text-4xl mb-2">🤵</p>
          <p>Place groom image in src/assets/</p>
        </div>
      )}
    </div>
  )
}
