import React, { useState, useEffect } from 'react';
import shadiendImg from '../assets/shadiend.jpeg';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('loader'); // 'loader', 'image', 'fadeout'

  useEffect(() => {
    // Show loader for 3 seconds
    const loaderTimer = setTimeout(() => {
      setPhase('image');
    }, 2000);

    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    if (phase === 'image') {
      // Show image for 5 seconds strictly
      const imageTimer = setTimeout(() => {
        setPhase('fadeout');
        setTimeout(() => {
          onComplete();
        }, 500); // quick 0.5s fade out so overall it feels crisp at 5s
      }, 1000); // 4.5s solid + 0.5s fadeout = 5s total

      return () => clearTimeout(imageTimer);
    }
  }, [phase, onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF6F0] overflow-hidden transition-opacity duration-1000 ${phase === 'fadeout' ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background styling for elegance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/15 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#D4AF37]/15 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Loader Phase */}
        <div className={`absolute flex flex-col items-center justify-center transition-all duration-1000 ${phase === 'loader' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="relative flex items-center justify-center w-40 h-40">
            {/* Outer Ring */}
            <div className="absolute w-32 h-32 border-4 border-transparent border-t-[#D4AF37] border-b-[#D4AF37] rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
            {/* Inner Ring */}
            <div className="absolute w-24 h-24 border-4 border-transparent border-l-[#E5C158] border-r-[#E5C158] rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
            {/* Golden Core */}
            <div className="absolute w-3 h-3 bg-[#D4AF37] rounded-full animate-ping"></div>
            <div className="text-4xl">💍</div>
          </div>
          
          <div className="mt-8 text-center animate-pulse">
            <h2 className="font-display text-2xl tracking-[0.2em] text-[#2C1810] uppercase">Beginning</h2>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#D4AF37] mt-3">A New Chapter</p>
          </div>
        </div>

        {/* Image Phase */}
        <div className={`absolute flex items-center justify-center w-full h-full p-4 md:p-12 transition-all duration-1000 ${phase === 'image' ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
          <img 
            src={shadiendImg} 
            alt="Wedding Special" 
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.4)]"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
