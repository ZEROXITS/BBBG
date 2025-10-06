
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#020917] to-[#0d2a58]">
      <style>{`
        @keyframes swim {
          0%, 100% { transform: translateX(-25%) translateY(0) rotate(-5deg); }
          50% { transform: translateX(125%) translateY(-20px) rotate(5deg); }
        }
        @keyframes wave1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-40px); }
        }
        @keyframes wave2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-60px); }
        }
         @keyframes wave3 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-30px); }
        }
        @keyframes sunlight {
          0%, 100% { opacity: 0.1; transform: translateY(-50%) rotate(45deg) scale(1.5); }
          50% { opacity: 0.3; transform: translateY(-48%) rotate(50deg) scale(1.55); }
        }
      `}</style>

      {/* Sunlight effect */}
      <div 
        className="absolute top-0 left-1/2 w-[150%] h-[150%] bg-gradient-radial from-cyan-300/60 via-transparent to-transparent"
        style={{ animation: 'sunlight 15s ease-in-out infinite' }}
      ></div>

      {/* Whale */}
      <div 
        className="absolute bottom-[20%] w-[200px] md:w-[300px] lg:w-[400px] h-auto"
        style={{ animation: 'swim 30s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 200 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="whaleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M195 50 C 180 30, 150 10, 100 20 S 20 50, 5 60 C -10 70, 20 90, 40 80 L 170 70 C 190 65, 200 55, 195 50 Z" fill="url(#whaleGradient)" filter="url(#glow)"/>
          <path d="M170 70 C 180 80, 190 90, 185 80 L 175 75 Z" fill="#1e3a8a" />
          <circle cx="185" cy="48" r="2" fill="#93c5fd" />
        </svg>
      </div>

      {/* Wave Layers for parallax effect */}
      <div 
        className="absolute bottom-0 left-0 w-[200%] h-[200px] bg-no-repeat bg-cover opacity-30" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 100\'%3E%3Cpath d=\'M 0 50 Q 100 20, 200 50 T 400 50 T 600 50 T 800 50 V 100 H 0 Z\' fill=\'%230e7490\'/%3E%3C/svg%3E")',
          animation: 'wave1 12s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-[200%] h-[220px] bg-no-repeat bg-cover opacity-20" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 100\'%3E%3Cpath d=\'M 0 60 Q 100 30, 200 60 T 400 60 T 600 60 T 800 60 V 100 H 0 Z\' fill=\'%23164e63\'/%3E%3C/svg%3E")',
          animation: 'wave2 15s ease-in-out infinite'
        }}
      ></div>
       <div 
        className="absolute bottom-0 left-0 w-[200%] h-[180px] bg-no-repeat bg-cover opacity-40" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 100\'%3E%3Cpath d=\'M 0 40 Q 100 70, 200 40 T 400 40 T 600 40 T 800 40 V 100 H 0 Z\' fill=\'%230891b2\'/%3E%3C/svg%3E")',
          animation: 'wave3 10s ease-in-out infinite'
        }}
      ></div>
       <div className="absolute inset-0 bg-black/20"></div> {/* Dark overlay */}
    </div>
  );
};

export default Background;
