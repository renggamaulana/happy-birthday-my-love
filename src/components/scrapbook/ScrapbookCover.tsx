'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { BirthdayContentConfig } from '@/types/birthday';
import {
  WashiTape,
  PressedFlower,
  PostmarkStamp,
  PaperClip,
  VintageStamp,
  BotanicalBranch,
  HandwrittenArrow,
  CoffeeRingStain,
  SparkleDoodle,
} from './PaperDecorations';

interface ScrapbookCoverProps {
  content: BirthdayContentConfig;
  onOpenSurprise: () => void;
}

export const ScrapbookCover: React.FC<ScrapbookCoverProps> = ({
  content,
  onOpenSurprise,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showLoveToast, setShowLoveToast] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setShowLoveToast(true);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('play-background-music'));
    }
    setTimeout(() => {
      onOpenSurprise();
    }, 600);
  };

  return (
    <section
      id="cover"
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between px-4 py-8 sm:py-12 overflow-hidden"
    >
      {/* Decorative background stamps, vintage coffee ring and botanicals */}
      <div className="absolute -top-6 -left-6 pointer-events-none opacity-40">
        <CoffeeRingStain size={150} />
      </div>

      <div className="absolute top-4 left-4 sm:top-8 sm:left-12 rotate-[-8deg] pointer-events-none opacity-85">
        <VintageStamp theme="rose" label="LOVE" />
      </div>

      <div className="hidden sm:block absolute top-14 left-28 rotate-[6deg] pointer-events-none opacity-70">
        <PostmarkStamp date="PAR AVION" />
      </div>

      <div className="absolute top-6 right-4 sm:top-8 sm:right-12 rotate-[12deg] pointer-events-none opacity-80">
        <PressedFlower size={64} />
      </div>

      <div className="hidden md:block absolute bottom-24 right-8 pointer-events-none opacity-40 rotate-[15deg]">
        <BotanicalBranch size={90} />
      </div>

      {/* Main Cover Content */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center my-auto z-10 pt-4 relative">
        {/* Sparkle doodles */}
        <div className="absolute -top-3 right-6 hidden sm:block">
          <SparkleDoodle size={22} />
        </div>

        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E7D7C3]/80 border border-[#D6C0A9] text-[#8B514B] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-4 shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{content.intro.topLabel}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#464039] font-normal leading-[1.15] mb-3 tracking-tight"
        >
          {content.intro.heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-[#85786B] font-sans max-w-md mx-auto leading-relaxed mb-6 px-2"
        >
          {content.intro.subheading}
        </motion.p>

        {/* Hero Polaroid Photo with Paperclip & Washi Tape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: content.intro.coverPhoto.rotation }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="relative mt-2 mb-8 group select-none"
        >
          {/* Metallic Paperclip */}
          <div className="absolute -top-5 left-4 z-30">
            <PaperClip color="brass" />
          </div>

          {/* Washi tape over Polaroid */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 z-20">
            <WashiTape variant="pattern" angle={-1} />
          </div>

          <div className="bg-[#FCF8F0] p-3 pb-5 rounded-xs polaroid-shadow border border-[#D6C0A9]/80 w-[260px] sm:w-[300px]">
            <div className="relative aspect-square w-full bg-[#E7D7C3]/50 overflow-hidden rounded-[1px]">
              <Image
                src={content.intro.coverPhoto.url}
                alt={content.intro.coverPhoto.caption}
                fill
                priority
                sizes="(max-width: 640px) 260px, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
            <div className="pt-3 text-center">
              <p className="font-handwriting text-lg sm:text-xl text-[#464039]">
                {content.intro.coverPhoto.caption}
              </p>
              <p className="text-[10px] text-[#85786B] font-sans tracking-wider uppercase mt-0.5">
                {content.intro.coverPhoto.dateLabel}
              </p>
            </div>
          </div>

          {/* Cute handwritten sticker tag */}
          <div className="absolute -bottom-3 -right-4 bg-[#FCF8F0] border border-[#D6C0A9] px-2.5 py-1 rounded shadow-xs rotate-[8deg]">
            <span className="font-handwriting text-sm text-[#8B514B] font-semibold flex items-center gap-1">
              sweetest <Heart className="w-3 h-3 fill-[#8B514B]" />
            </span>
          </div>

          {/* Cute hand-drawn arrow pointing to photo */}
          <div className="hidden lg:block absolute -right-36 top-1/2 -translate-y-1/2 rotate-[-5deg]">
            <HandwrittenArrow text="favorite smile ♡" direction="left" />
          </div>
        </motion.div>

        {/* Primary Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-3 w-full max-w-xs"
        >
          <motion.button
            onClick={handleOpenClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            animate={
              isOpening
                ? {
                    scale: [1, 1.06, 0.98, 1],
                    backgroundColor: '#683632',
                  }
                : {}
            }
            className="w-full min-h-[48px] px-6 py-3.5 bg-[#8B514B] hover:bg-[#77423D] text-[#FCF8F0] font-sans font-medium text-sm sm:text-base rounded-full shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#683632]"
            aria-label="Open your little surprise"
          >
            <span>{content.intro.buttonText}</span>
          </motion.button>

          {/* Handwritten note below button */}
          {showLoveToast ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-handwriting text-base sm:text-lg text-[#8B514B] flex items-center gap-1"
            >
              {content.intro.noteText}
            </motion.p>
          ) : (
            <p className="text-xs text-[#85786B] font-sans">
              Tap to unfold your handmade journal ♡
            </p>
          )}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 flex flex-col items-center gap-1 text-[#85786B] cursor-pointer"
        onClick={handleOpenClick}
      >
        <span className="text-[11px] font-sans uppercase tracking-widest text-[#85786B]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#8B514B]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
