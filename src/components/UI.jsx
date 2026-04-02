import React, { useEffect } from 'react';

export const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[999] bg-[#F2F0E9] flex items-center justify-center animate-fade-out" style={{ animationDelay: '1s', animationFillMode: 'forwards', pointerEvents: 'none' }}>
      <div className="overflow-hidden">
        <h1 className="font-serif text-5xl md:text-7xl text-[#1C1C1C] animate-slide-up tracking-tighter" style={{ animationDuration: '0.8s' }}>
          Tierra
        </h1>
      </div>
    </div>
  );
};

export const Button = React.memo(({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
  const base = "relative inline-flex items-center justify-center px-8 py-4 font-sans font-medium tracking-widest text-[10px] md:text-xs uppercase overflow-hidden group focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover-trigger";

  const variants = {
    primary: "border border-[#1C1C1C] text-[#1C1C1C]",
    secondary: "border border-[#1C1C1C] text-[#1C1C1C]",
    ghost: "bg-transparent text-[#3A4D39] hover:bg-[#3A4D39]/5",
    white: "border border-white text-white"
  };

  const isWhite = variant === 'white';

  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} onClick={onClick} disabled={disabled}>
      <span className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform translate-y-full group-hover:translate-y-0 ${isWhite ? 'bg-white' : 'bg-[#1C1C1C]'}`}></span>
      <span className={`relative z-10 transition-colors duration-500 flex items-center gap-3 ${isWhite ? 'group-hover:text-[#1C1C1C]' : 'group-hover:text-[#F2F0E9]'}`}>
        {children}
      </span>
    </button>
  );
});

export const Section = React.memo(({ children, className = '', id = '' }) => (
  <section id={id} className={`w-full flex flex-col items-center overflow-hidden ${className}`}>
    <div className="max-w-[1600px] w-[94%] py-16 md:py-36 px-4 md:px-8 arch-grid">
      {children}
    </div>
  </section>
));

export const Heading = React.memo(({ level = 2, children, className = '' }) => {
  const Tag = `h${level}`;
  const styles = {
    1: "font-serif text-5xl md:text-7xl lg:text-9xl text-[#1C1C1C] leading-[0.9] tracking-tight",
    2: "font-serif text-3xl md:text-5xl lg:text-6xl text-[#1C1C1C] mb-8 leading-tight",
    3: "font-serif text-2xl md:text-3xl text-[#1C1C1C] mb-4",
    4: "font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#3A4D39] mb-4"
  };
  return <Tag className={`${styles[level]} ${className}`}>{children}</Tag>;
});
