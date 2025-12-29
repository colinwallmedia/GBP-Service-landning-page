import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'light' }) => {
  // Brighter, more vibrant yellow for the lemon icon
  const iconColor = '#facc15'; 
  
  // Optimized text colors
  const textColor = variant === 'light' ? 'text-[#1e40af]' : 'text-white';

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-10 h-10 md:w-12 md:h-12 shrink-0 drop-shadow-sm"
        aria-label="Lemon Fresh Marketing Logo"
      >
        {/* Rotate 90deg so the gap is at 3 o'clock (Right), forming a C */}
        <g transform="rotate(90 50 50)">
          {/* Outer Rind Arc */}
          {/* Starts at approx 30deg, goes around to 330deg (leaving gap at 0/360 which is right side after rotation) */}
          <path
            d="M 68.7 15.3 A 40 40 0 1 1 31.3 15.3"
            stroke={iconColor}
            strokeWidth="6"
            strokeLinecap="round"
            transform="rotate(-90 50 50)" 
          />
          {/* 
             The above arc logic: 
             The group is rotated 90. 0 is Bottom. 
             If we want C opening Right (original 0 is Up).
             Let's simplify:
             Original coord system: 0,0 top left.
             Center 50,50.
             Petals are defined pointing UP at 0 rotation.
             Gap in petals is at index 0 (top).
             So petals form a U.
             Rotating 90 deg makes it a C (opening right).
          */}

          {/* Petals */}
          {/* Distributed to leave a gap at the top (which becomes right after group rotation) */}
          {[45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 50 50)`}>
              <path 
                d="M50 14 C54 14 58 20 56 34 C55 40 52 44 50 44 C48 44 45 40 44 34 C42 20 46 14 50 14 Z" 
                fill={iconColor} 
              />
            </g>
          ))}
          
          {/* Add the Rind separately relative to the gap */}
          {/* We want the rind to have the same gap as the petals (at angle 0 relative to group) */}
          <path
            d="M 75 25 A 42 42 0 1 1 25 25"
            stroke={iconColor}
            strokeWidth="5"
            strokeLinecap="round"
            transform="rotate(180 50 50)" // This puts the gap at the top (relative to the already rotated group? no)
            // Let's just draw an arc that matches the petal gap.
            // Petal gap is at 0 degrees (Up).
            // Arc should go from angle ~30 to ~330.
          />
          {/* 
            Re-doing the Rind Path manually to ensure alignment:
            Gap is at top (before 90deg rotation).
            Start angle: 25 deg. End angle: 335 deg.
            x = 50 + r*sin(a), y = 50 - r*cos(a)
            r = 46
            Start (25deg): x=69.4, y=8.3
            End (335deg/-25deg): x=30.6, y=8.3
            Large arc flag 1, Sweep flag 1.
          */}
           <path
            d="M 69.4 8.3 A 46 46 0 1 1 30.6 8.3"
            stroke={iconColor}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <div className={`leading-tight flex flex-col ${textColor}`}>
        <span className="font-bold text-lg md:text-xl tracking-tight">Lemon Fresh</span>
        <span className="text-xs md:text-sm font-semibold tracking-wider uppercase opacity-90">Marketing</span>
      </div>
    </div>
  );
};