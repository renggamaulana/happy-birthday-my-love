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
