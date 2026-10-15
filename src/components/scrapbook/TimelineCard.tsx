'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MemoryItem } from '@/types/birthday';
import { WashiTape } from './PaperDecorations';

interface TimelineCardProps {
  memory: MemoryItem;
  index: number;
  isEven: boolean;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  memory,
  index,
  isEven,
}) => {
  const rotation = memory.rotation ?? (index % 2 === 0 ? -2 : 2);
  const aspectClass =
    memory.aspect === 'landscape'
      ? 'aspect-[4/3]'
      : memory.aspect === 'square'
      ? 'aspect-square'
      : 'aspect-[3/4]';

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center w-full mb-12 sm:mb-16 last:mb-0 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Central Timeline Node Indicator */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-20 items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#FCF8F0] border-2 border-[#8B514B] shadow-sm flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8B514B]" />
        </div>
      </div>

      {/* Content Side (Photo + Polaroid) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-[46%] flex flex-col items-center"
      >
        <div
          style={{ transform: `rotate(${rotation}deg)` }}
          className="relative group transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] max-w-[320px] sm:max-w-[360px] w-full"
        >
          {/* Decorative washi tape at top */}
          <div className="absolute -top-3 left-8 w-20 z-10">
            <WashiTape
              variant={index % 2 === 0 ? 'linen' : 'rose'}
              angle={index % 2 === 0 ? -2 : 1.5}
            />
          </div>

          {/* Polaroid Frame */}
          <div className="bg-[#FCF8F0] p-3 sm:p-4 pb-5 rounded-xs polaroid-shadow border border-[#D6C0A9]/80">
            <div
              className={`relative ${aspectClass} w-full overflow-hidden rounded-[2px] bg-[#E7D7C3]/40`}
            >
              <Image
                src={memory.photoUrl}
                alt={memory.title}
                fill
                sizes="(max-width: 640px) 300px, 360px"
                className="object-cover"
              />
            </div>
            <div className="pt-3 px-1 text-center">
              <span className="font-handwriting text-xl sm:text-2xl text-[#464039] leading-tight block">
                {memory.title}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#85786B] mt-0.5 block">
                {memory.date}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile timeline dot & line marker */}
      <div className="md:hidden flex items-center gap-2 my-3">
        <span className="w-2 h-2 rounded-full bg-[#8B514B]" />
        <span className="h-[1px] w-12 bg-[#D6C0A9]" />
        <span className="text-xs font-handwriting text-[#8B514B]">
          Memory #{index + 1}
        </span>
        <span className="h-[1px] w-12 bg-[#D6C0A9]" />
        <span className="w-2 h-2 rounded-full bg-[#8B514B]" />
      </div>

      {/* Narrative Side (Story / Caption) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-[46%] px-2 sm:px-6"
      >
        <div
          className={`bg-[#FCF8F0]/90 backdrop-blur-xs p-5 sm:p-6 rounded-xl border border-[#D6C0A9] scrapbook-card-shadow relative ${
            isEven ? 'md:text-right' : 'md:text-left'
          } text-center`}
        >
          {/* Chapter badge */}
          <div
            className={`flex items-center gap-2 mb-2 justify-center ${
              isEven ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-[#8B514B] bg-[#E7D7C3]/60 px-2 py-0.5 rounded">
              {memory.date}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#464039] mb-2">
            {memory.title}
          </h3>

          <p className="text-sm sm:text-base text-[#85786B] font-sans leading-relaxed">
            {memory.caption}
          </p>

          <div
            className={`mt-4 flex items-center gap-1 justify-center text-[#8B514B]/70 font-handwriting text-sm ${
              isEven ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            <span>cherished forever</span>
            <span>♡</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
