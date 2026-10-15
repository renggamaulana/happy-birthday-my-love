'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BirthdayContentConfig } from '@/types/birthday';
import { SectionHeading } from './SectionHeading';
import { PressedFlower, WaxSeal, WashiTape, PostmarkStamp } from './PaperDecorations';
import { VoiceNotePlayer } from './VoiceNotePlayer';

interface LoveLetterProps {
  content: BirthdayContentConfig;
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ content }) => {
  const { loveLetter, voiceNote, featureFlags } = content;

  return (
    <section
      id="love-letter"
      className="relative w-full max-w-4xl mx-auto px-4 py-16 sm:py-24"
    >
      <SectionHeading
        tag="Chapter 03 • From My Heart"
        title={loveLetter.sectionTitle}
        subtitle={loveLetter.sectionSubtitle}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-2xl mx-auto"
      >
        {/* Top Washi Tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 z-20">
          <WashiTape variant="coffee" angle={-1.5} />
        </div>

        {/* Vintage Letter Paper */}
        <article className="bg-[#FCF8F0] p-6 sm:p-10 md:p-12 rounded-sm border border-[#D6C0A9] scrapbook-card-shadow relative overflow-hidden rotate-[-0.5deg]">
          {/* Decorative Corner Accents */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-60">
            <PostmarkStamp date={loveLetter.letterDate} />
          </div>

          <div className="absolute top-12 -right-4 pointer-events-none opacity-40">
            <PressedFlower size={64} />
          </div>

          {/* Letter Header */}
          <div className="mb-6 pt-2">
            <span className="font-handwriting text-sm sm:text-base text-[#85786B] block mb-1">
              {loveLetter.letterDate}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#464039] font-medium tracking-tight">
              {loveLetter.salutation}
            </h3>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-4 font-sans text-sm sm:text-base text-[#464039] leading-relaxed">
            {loveLetter.paragraphs.map((p, idx) => (
              <p key={idx} className="indent-4 first:indent-0">
                {p}
              </p>
            ))}
          </div>

          {/* Letter Sign-off and Wax Seal */}
          <div className="mt-8 pt-6 border-t border-[#D6C0A9]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-handwriting text-lg sm:text-xl text-[#85786B]">
                {loveLetter.signOff}
              </p>
              <p className="font-serif text-xl sm:text-2xl text-[#8B514B] font-medium mt-0.5">
                {loveLetter.signature}
              </p>
            </div>

            <div className="self-end sm:self-center">
              <WaxSeal text="LOVE" />
            </div>
          </div>

          {/* Embedded Voice Note Player */}
          {featureFlags.showVoiceNote && voiceNote.enabled && (
            <div className="mt-8">
              <VoiceNotePlayer config={voiceNote} />
            </div>
          )}
        </article>
      </motion.div>
    </section>
  );
};
