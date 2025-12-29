import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'light' }) => {
  const iconColor = '#FACC15'; 
  const textColor = variant === 'light' ? 'text-slate-900' : 'text-white';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 md:w-11 md:h-11 bg-lemon-400 rounded-xl rotate-12 flex items-center justify-center shadow-lg group-hover:rotate-0 transition-transform duration-300">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-6 h-6 text-slate-900 -rotate-12 group-hover:rotate-0 transition-transform duration-300" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="currentColor" opacity="0.2"/>
            <path d="M21 12.79C21 16.1 18.3 18.79 15 18.79C11.7 18.79 9 16.1 9 12.79C9 9.48 11.7 6.79 15 6.79C18.3 6.79 21 9.48 21 12.79Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M15 6.79C15 4.58 13.21 2.79 11 2.79C8.79 2.79 7 4.58 7 6.79" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-fresh-500 rounded-full border-2 border-white"></div>
      </div>
      <div className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-black text-lg md:text-xl tracking-tighter">LEMON FRESH</span>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-fresh-600">Marketing</span>
      </div>
    </div>
  );
};