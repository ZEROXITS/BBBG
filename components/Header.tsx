import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  // FIX: Updated the type for the style state to allow for the specific CSS custom properties being used.
  // React.CSSProperties doesn't include definitions for custom properties like '--rotate-x' by default.
  const [style, setStyle] = useState<React.CSSProperties & { '--rotate-x'?: string; '--rotate-y'?: string }>({});
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const rotateX = (clientY / innerHeight - 0.5) * -30; // Max rotation 15deg
      const rotateY = (clientX / innerWidth - 0.5) * 30;  // Max rotation 15deg

      setStyle({
        '--rotate-x': `${rotateX}deg`,
        '--rotate-y': `${rotateY}deg`,
        transform: `perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) scale(1.1)`,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="h-screen flex items-center justify-center text-center w-full select-none">
      <h1
        ref={ref}
        className="text-7xl sm:text-8xl md:text-9xl font-black uppercase tracking-widest text-transparent transition-transform duration-100 ease-out"
        style={{
          ...style,
          WebkitTextStroke: '2px #06b6d4',
          textShadow: `
            0 0 5px #06b6d4,
            0 0 10px #06b6d4,
            0 0 20px #0891b2,
            3px 3px 0px #0e7490,
            6px 6px 0px #164e63
          `,
        }}
      >
        Fabio
      </h1>
    </header>
  );
};

export default Header;
