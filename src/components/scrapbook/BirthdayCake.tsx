'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, ArrowDown } from 'lucide-react';
import { BirthdayContentConfig } from '@/types/birthday';
import { SectionHeading } from './SectionHeading';
import { WashiTape } from './PaperDecorations';

interface BirthdayCakeProps {
  content: BirthdayContentConfig;
  onProceedToFinal: () => void;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({
  content,
  onProceedToFinal,
}) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const { birthdayWish } = content;

  const triggerConfetti = () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    // Romantic palette: rose, coffee, cream, warm blush
    const romanticColors = ['#8B514B', '#B58D70', '#E7D7C3', '#FCF8F0', '#d8817a', '#f5cbb8'];

    // Burst 1: Center burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: romanticColors,
      disableForReducedMotion: true,
    });

    // Burst 2 & 3: Staggered side cannons for festive celebration
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.65 },
        colors: romanticColors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.65 },
        colors: romanticColors,
      });
    }, 250);
  };

  const handleBlowCandles = () => {
    if (candlesBlown || isBlowing) return;

    setIsBlowing(true);

    // Animate extinguishing
    setTimeout(() => {
      setCandlesBlown(true);
      setIsBlowing(false);
      triggerConfetti();
    }, 600);
  };

  return (
    <section
      id="make-a-wish"
      className="relative w-full max-w-4xl mx-auto px-4 py-16 sm:py-24 flex flex-col items-center overflow-x-clip"
    >
      <SectionHeading
        tag="Chapter 05 • Celebration"
        title={birthdayWish.sectionTitle}
        subtitle={birthdayWish.sectionSubtitle}
      />

      {/* Decorative Scrapbook Frame around Cake */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#FCF8F0] p-5 sm:p-10 rounded-2xl border border-[#D6C0A9] scrapbook-card-shadow max-w-lg w-full flex flex-col items-center select-none"
      >
        {/* Top washi tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 z-10">
          <WashiTape variant="rose" angle={-1} />
        </div>

        {/* Illustrated Interactive Cake SVG */}
        <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 flex items-center justify-center my-2">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full drop-shadow-md overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cake Stand / Plate */}
            <ellipse
              cx="150"
              cy="260"
              rx="120"
              ry="18"
              fill="#E7D7C3"
              stroke="#B58D70"
              strokeWidth="3"
            />
            <path
              d="M135 260 L130 285 L170 285 L165 260 Z"
              fill="#D6C0A9"
              stroke="#B58D70"
              strokeWidth="2"
            />
            <ellipse
              cx="150"
              cy="285"
              rx="25"
              ry="5"
              fill="#B58D70"
            />

            {/* Bottom Tier */}
            <rect
              x="55"
              y="180"
              width="190"
              height="75"
              rx="12"
              fill="#FCF8F0"
              stroke="#D6C0A9"
              strokeWidth="2.5"
            />
            {/* Bottom Frosting & Cream */}
            <path
              d="M55 200 C70 215, 85 195, 100 210 C115 195, 130 215, 150 200 C170 215, 185 195, 200 210 C215 195, 230 215, 245 200 L245 180 L55 180 Z"
              fill="#E7D7C3"
            />
            {/* Decorative pearls/berries */}
            <circle cx="80" cy="225" r="4" fill="#8B514B" />
            <circle cx="120" cy="225" r="4" fill="#B58D70" />
            <circle cx="150" cy="225" r="4" fill="#8B514B" />
            <circle cx="180" cy="225" r="4" fill="#B58D70" />
            <circle cx="220" cy="225" r="4" fill="#8B514B" />

            {/* Top Tier */}
            <rect
              x="85"
              y="110"
              width="130"
              height="70"
              rx="10"
              fill="#FCF8F0"
              stroke="#D6C0A9"
              strokeWidth="2.5"
            />
            {/* Top Frosting */}
            <path
              d="M85 125 C100 138, 115 120, 130 135 C145 120, 160 138, 175 125 C190 138, 205 120, 215 125 L215 110 L85 110 Z"
              fill="#8B514B"
              fillOpacity="0.25"
            />

            {/* Cake Candles (3 Candles) */}
            {/* Candle 1 (Left) */}
            <rect x="110" y="70" width="8" height="40" rx="3" fill="#B58D70" />
            <line x1="114" y1="65" x2="114" y2="70" stroke="#464039" strokeWidth="2" />

            {/* Candle 2 (Center) */}
            <rect x="146" y="60" width="8" height="50" rx="3" fill="#8B514B" />
            <line x1="150" y1="55" x2="150" y2="60" stroke="#464039" strokeWidth="2" />

            {/* Candle 3 (Right) */}
            <rect x="182" y="70" width="8" height="40" rx="3" fill="#B58D70" />
            <line x1="186" y1="65" x2="186" y2="70" stroke="#464039" strokeWidth="2" />

            {/* Candle Flames (Animated or Extinguished) */}
            <AnimatePresence>
              {!candlesBlown && (
                <>
                  {/* Left Flame */}
                  <motion.g
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.2, y: -10 }}
                    animate={{
                      scale: isBlowing ? [1, 0.4, 0] : [1, 1.15, 0.95, 1],
                      y: isBlowing ? -5 : [0, -1, 1, 0],
                    }}
                    transition={{
                      repeat: isBlowing ? 0 : Infinity,
                      duration: 0.8,
                      ease: 'easeInOut',
                    }}
                  >
                    <ellipse cx="114" cy="54" rx="5" ry="9" fill="#FFA500" />
                    <ellipse cx="114" cy="56" rx="3" ry="5" fill="#FFFF77" />
                  </motion.g>

                  {/* Center Flame */}
                  <motion.g
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.2, y: -10 }}
                    animate={{
                      scale: isBlowing ? [1, 0.4, 0] : [1, 0.95, 1.2, 1],
                      y: isBlowing ? -5 : [0, 1, -1, 0],
                    }}
                    transition={{
                      repeat: isBlowing ? 0 : Infinity,
                      duration: 0.7,
                      ease: 'easeInOut',
                    }}
                  >
                    <ellipse cx="150" cy="44" rx="6" ry="11" fill="#FFA500" />
                    <ellipse cx="150" cy="46" rx="3.5" ry="6" fill="#FFFF77" />
                  </motion.g>

                  {/* Right Flame */}
                  <motion.g
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.2, y: -10 }}
                    animate={{
                      scale: isBlowing ? [1, 0.4, 0] : [1, 1.1, 0.9, 1],
                      y: isBlowing ? -5 : [0, -1, 0.5, 0],
                    }}
                    transition={{
                      repeat: isBlowing ? 0 : Infinity,
                      duration: 0.9,
                      ease: 'easeInOut',
                    }}
                  >
                    <ellipse cx="186" cy="54" rx="5" ry="9" fill="#FFA500" />
                    <ellipse cx="186" cy="56" rx="3" ry="5" fill="#FFFF77" />
                  </motion.g>
                </>
              )}
            </AnimatePresence>

            {/* Gentle smoke wisps when extinguished */}
            {candlesBlown && (
              <motion.g
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: [0, 0.6, 0], y: -20 }}
                transition={{ duration: 1.8 }}
              >
                <path
                  d="M150 50 C145 40, 155 30, 150 20"
                  stroke="#85786B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M114 60 C110 50, 120 40, 114 30"
                  stroke="#85786B"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M186 60 C182 50, 192 40, 186 30"
                  stroke="#85786B"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.g>
            )}
          </svg>
        </div>

        {/* Action Controls & Celebration Message */}
        <div className="w-full text-center mt-4">
          {!candlesBlown ? (
            <div className="flex flex-col items-center gap-3">
              <p className="font-sans text-xs sm:text-sm text-[#85786B] italic max-w-xs">
                {birthdayWish.promptText}
              </p>

              <motion.button
                type="button"
                onClick={handleBlowCandles}
                disabled={isBlowing}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="min-h-[48px] px-8 py-3.5 bg-[#8B514B] hover:bg-[#77423D] text-[#FCF8F0] font-sans font-medium text-sm sm:text-base rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors border border-[#683632]"
                aria-label="Blow the birthday candles"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  {isBlowing ? 'Blowing gently...' : birthdayWish.blowButtonText}
                </span>
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-4 py-2"
            >
              <div className="p-4 bg-[#E7D7C3]/50 border border-[#D6C0A9] rounded-xl max-w-md">
                <span className="font-handwriting text-xl sm:text-2xl text-[#8B514B] block mb-1">
                  ✨ Yay! Wish Granted! ✨
                </span>
                <p className="font-sans text-sm sm:text-base text-[#464039] leading-relaxed">
                  {birthdayWish.celebrationMessage}
                </p>
              </div>

              {/* Reveal "One last thing..." Button */}
              <motion.button
                type="button"
                onClick={onProceedToFinal}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="min-h-[48px] px-8 py-3.5 bg-[#464039] hover:bg-[#322e29] text-[#FCF8F0] font-sans font-medium text-sm sm:text-base rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all border border-[#322e29]"
                aria-label="Proceed to the final surprise"
              >
                <span>{birthdayWish.nextButtonText}</span>
                <ArrowDown className="w-4 h-4 text-[#E7D7C3]" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
