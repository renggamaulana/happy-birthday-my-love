'use client';

import React from 'react';

interface WashiTapeProps {
  className?: string;
  variant?: 'linen' | 'rose' | 'coffee' | 'pattern';
  angle?: number;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  className = '',
  variant = 'linen',
  angle = -1.5,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'rose':
        return 'bg-[#8B514B]/30 border-y border-dashed border-[#8B514B]/40';
      case 'coffee':
        return 'bg-[#B58D70]/35 border-y border-dashed border-[#B58D70]/40';
      case 'pattern':
        return 'bg-[#E7D7C3]/80 border-y border-dashed border-[#B58D70]/30 [background-image:repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(181,141,112,0.2)_6px,rgba(181,141,112,0.2)_12px)]';
      case 'linen':
      default:
        return 'bg-[#E7D7C3]/85 border-y border-dashed border-[#B58D70]/40';
    }
  };

  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`h-6 shadow-xs backdrop-blur-[1px] pointer-events-none select-none relative z-10 ${getVariantStyles()} ${className}`}
      aria-hidden="true"
    >
      {/* Jagged / torn tape edges */}
      <div className="absolute -left-1 top-0 bottom-0 w-1.5 bg-[#F7F0E5]/60 [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
      <div className="absolute -right-1 top-0 bottom-0 w-1.5 bg-[#F7F0E5]/60 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
    </div>
  );
};

export const PressedFlower: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 40,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none text-[#8B514B]/60 ${className}`}
    aria-hidden="true"
  >
    {/* Stem */}
    <path
      d="M50 90C50 65 52 45 50 25"
      stroke="#85786B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Leaves */}
    <path
      d="M50 65C40 60 35 48 38 42C44 45 48 55 50 65Z"
      fill="#D6C0A9"
      fillOpacity="0.7"
      stroke="#B58D70"
      strokeWidth="1.5"
    />
    <path
      d="M50 52C60 48 65 38 62 32C56 35 52 44 50 52Z"
      fill="#D6C0A9"
      fillOpacity="0.7"
      stroke="#B58D70"
      strokeWidth="1.5"
    />
    {/* Flower Petals */}
    <ellipse cx="50" cy="18" rx="8" ry="14" fill="#8B514B" fillOpacity="0.5" />
    <ellipse
      cx="40"
      cy="24"
      rx="7"
      ry="12"
      transform="rotate(-45 40 24)"
      fill="#8B514B"
      fillOpacity="0.5"
    />
    <ellipse
      cx="60"
      cy="24"
      rx="7"
      ry="12"
      transform="rotate(45 60 24)"
      fill="#8B514B"
      fillOpacity="0.5"
    />
    <circle cx="50" cy="25" r="5" fill="#E7D7C3" stroke="#8B514B" strokeWidth="1" />
  </svg>
);

export const BotanicalBranch: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 50,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none text-[#85786B]/50 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M20 110 Q45 65 80 15"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Left leaves */}
    <path d="M30 92 Q18 82 25 76 Q35 84 32 90 Z" fill="#D6C0A9" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
    <path d="M42 72 Q30 62 38 56 Q48 64 44 70 Z" fill="#D6C0A9" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
    <path d="M55 52 Q44 42 52 36 Q62 44 57 50 Z" fill="#D6C0A9" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
    {/* Right leaves */}
    <path d="M38 82 Q50 74 46 66 Q36 72 37 80 Z" fill="#D6C0A9" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
    <path d="M50 62 Q64 54 60 46 Q48 52 49 60 Z" fill="#D6C0A9" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
    <path d="M64 40 Q78 32 74 24 Q62 30 63 38 Z" fill="#D6C0A9" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
    {/* Tip leaf */}
    <path d="M78 18 Q86 6 82 4 Q74 12 77 17 Z" fill="#D6C0A9" fillOpacity="0.8" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export const PaperClip: React.FC<{ className?: string; color?: 'brass' | 'silver' | 'rose' }> = ({
  className = '',
  color = 'brass',
}) => {
  const strokeColor =
    color === 'rose' ? '#8B514B' : color === 'silver' ? '#A3998E' : '#B58D70';

  return (
    <div className={`relative pointer-events-none select-none z-20 ${className}`} aria-hidden="true">
      <svg
        width="24"
        height="48"
        viewBox="0 0 24 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm"
      >
        <path
          d="M8 14 V38 C8 42 16 42 16 38 V8 C16 3 4 3 4 8 V36 C4 44 20 44 20 36 V12"
          stroke={strokeColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const VintageStamp: React.FC<{
  className?: string;
  theme?: 'rose' | 'heart' | 'love';
  label?: string;
}> = ({ className = '', theme = 'rose', label = '30¢' }) => (
  <div
    className={`relative inline-block p-2 bg-[#FCF8F0] border border-[#D6C0A9] shadow-sm select-none pointer-events-none ${className}`}
    style={{
      boxShadow: '0 2px 5px rgba(70,64,57,0.12)',
      backgroundImage:
        'radial-gradient(circle at 0 0, transparent 4px, #FCF8F0 4px), radial-gradient(circle at 100% 0, transparent 4px, #FCF8F0 4px), radial-gradient(circle at 0 100%, transparent 4px, #FCF8F0 4px), radial-gradient(circle at 100% 100%, transparent 4px, #FCF8F0 4px)',
    }}
    aria-hidden="true"
  >
    <div className="w-16 h-20 border-2 border-dashed border-[#8B514B]/40 flex flex-col items-center justify-between p-1.5 bg-[#F7F0E5]/60">
      <div className="w-full flex justify-between items-center text-[8px] font-sans font-bold text-[#8B514B]">
        <span>POST</span>
        <span>{label}</span>
      </div>

      {theme === 'rose' && (
        <div className="my-auto text-[#8B514B]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
            <path d="M12 7 C14 10, 10 14, 12 17 C13 15, 15 13, 14 11 Z" fill="#8B514B" fillOpacity="0.4" />
          </svg>
        </div>
      )}
      {theme === 'heart' && (
        <div className="my-auto text-[#8B514B]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#8B514B" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      )}
      {theme === 'love' && (
        <span className="my-auto font-serif text-xs italic tracking-widest text-[#8B514B]">
          Amour
        </span>
      )}

      <div className="text-[7px] font-handwriting text-[#85786B] tracking-wider">
        SPECIAL AIR MAIL
      </div>
    </div>
  </div>
);

export const HandwrittenArrow: React.FC<{
  text?: string;
  className?: string;
  direction?: 'left' | 'right' | 'down';
}> = ({ text, className = '', direction = 'right' }) => (
  <div className={`inline-flex items-center gap-1.5 select-none pointer-events-none font-handwriting text-[#8B514B] ${className}`} aria-hidden="true">
    {direction === 'left' && (
      <svg width="32" height="18" viewBox="0 0 36 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M34 10 C24 12, 10 14, 4 8 M4 8 L10 4 M4 8 L10 13" />
      </svg>
    )}
    {text && <span className="text-base sm:text-lg whitespace-nowrap">{text}</span>}
    {direction === 'right' && (
      <svg width="32" height="18" viewBox="0 0 36 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 10 C12 12, 26 14, 32 8 M32 8 L26 4 M32 8 L26 13" />
      </svg>
    )}
    {direction === 'down' && (
      <svg width="18" height="32" viewBox="0 0 20 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M10 2 C12 12, 14 26, 8 32 M8 32 L4 26 M8 32 L13 26" />
      </svg>
    )}
  </div>
);

export const CoffeeRingStain: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 110,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none opacity-20 text-[#B58D70] ${className}`}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="30 8 15 10 40 5" />
    <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
    <path d="M80 30 C88 38, 92 50, 88 56 C85 60, 80 54, 82 48" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="35" cy="40" r="2" fill="currentColor" />
    <circle cx="68" cy="65" r="1.5" fill="currentColor" />
  </svg>
);

export const PhotoCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const getStyles = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 border-t-8 border-l-8 border-[#464039]/40';
      case 'top-right':
        return 'top-0 right-0 border-t-8 border-r-8 border-[#464039]/40';
      case 'bottom-left':
        return 'bottom-0 left-0 border-b-8 border-l-8 border-[#464039]/40';
      case 'bottom-right':
        return 'bottom-0 right-0 border-b-8 border-r-8 border-[#464039]/40';
    }
  };

  return (
    <div
      className={`absolute w-3 h-3 pointer-events-none z-10 ${getStyles()} ${className}`}
      aria-hidden="true"
    />
  );
};

export const DoodleHeart: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />
  </svg>
);

export const SparkleDoodle: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none text-[#8B514B]/50 ${className}`}
    aria-hidden="true"
  >
    <path d="M12 0C12 7 15 12 24 12C15 12 12 17 12 24C12 17 9 12 0 12C9 12 12 7 12 0Z" />
  </svg>
);

export const WaxSeal: React.FC<{ className?: string; text?: string }> = ({
  className = '',
  text = 'LOVE',
}) => (
  <div
    className={`w-12 h-12 rounded-full wax-seal flex items-center justify-center text-white/90 font-serif text-[10px] tracking-wider font-bold shadow-md select-none ${className}`}
    aria-hidden="true"
  >
    <span className="border border-white/30 rounded-full w-9 h-9 flex items-center justify-center">
      {text}
    </span>
  </div>
);

export const PostmarkStamp: React.FC<{ date?: string; className?: string }> = ({
  date = 'AIR MAIL',
  className = '',
}) => (
  <div
    className={`inline-flex flex-col items-center justify-center border-2 border-dashed border-[#85786B]/40 rounded-sm px-2.5 py-1 text-[#85786B]/70 select-none uppercase tracking-widest text-[9px] font-sans ${className}`}
    aria-hidden="true"
  >
    <span className="font-semibold">{date}</span>
    <span className="text-[7px] tracking-normal font-handwriting">with love</span>
  </div>
);
