'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Heart, ArrowUp, Star } from 'lucide-react';
import { BirthdayContentConfig } from '@/types/birthday';
import { WaxSeal, WashiTape, VintageStamp, SparkleDoodle } from './PaperDecorations';

interface FinalSurpriseProps {
  content: BirthdayContentConfig;
  onScrollToTop: () => void;
}

export const FinalSurprise: React.FC<FinalSurpriseProps> = ({
  content,
  onScrollToTop,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { finalSurprise } = content;

  return (
    <section
      id="final-surprise"
      className="relative w-full min-h-[90vh] py-20 sm:py-28 px-4 flex flex-col items-center justify-center bg-[#464039] text-[#FCF8F0] overflow-hidden"
    >
      {/* Decorative Night Sky Scrapbook Stars */}
      <div className="absolute inset-0 pointer-events-none opacity-20 [background-image:radial-gradient(#E7D7C3_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute top-12 left-10 text-[#E7D7C3]/30 pointer-events-none rotate-12">
        <Star className="w-5 h-5 fill-current" />
      </div>
      <div className="absolute top-24 right-12 text-[#E7D7C3]/40 pointer-events-none -rotate-12">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-16 left-16 text-[#E7D7C3]/25 pointer-events-none">
        <Star className="w-4 h-4 fill-current" />
      </div>
      <div className="absolute bottom-20 right-20 text-[#8B514B]/50 pointer-events-none rotate-45">
        <Heart className="w-6 h-6 fill-current" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Intimate Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] font-sans text-[#E7D7C3] font-medium mb-3 bg-[#FCF8F0]/10 px-3 py-1 rounded-full border border-[#E7D7C3]/20">
            Final Chapter
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#FCF8F0] tracking-tight">
            {finalSurprise.sectionTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#E7D7C3]/80 font-sans max-w-md mx-auto">
            {finalSurprise.sectionSubtitle}
          </p>
        </motion.div>

        {/* Envelope / Folded Letter Interaction */}
        <div className="w-full max-w-lg mb-8">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Closed Envelope View */
              <motion.div
                key="envelope-closed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIsOpen(true)}
                className="relative bg-[#FCF8F0] text-[#464039] p-6 sm:p-12 rounded-xl envelope-shadow border border-[#D6C0A9] cursor-pointer group select-none transition-transform hover:scale-[1.02] active:scale-[0.98]"
                role="button"
                tabIndex={0}
                aria-label="Open the final surprise letter"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsOpen(true);
                  }
                }}
              >
                {/* Vintage Stamp on top-right of envelope */}
                <div className="absolute top-4 right-4 rotate-6 z-20">
                  <VintageStamp theme="heart" label="SECRET" />
                </div>

                {/* Washi tape over envelope */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 z-20">
                  <WashiTape variant="rose" angle={-1} />
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#E7D7C3]/60 flex items-center justify-center text-[#8B514B] mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8" />
                  </div>

                  <p className="font-serif text-2xl sm:text-3xl font-medium text-[#464039] mb-1">
                    To: {content.recipientName}
                  </p>
                  <p className="font-handwriting text-base text-[#85786B] mb-6">
                    A little secret just for your eyes
                  </p>

                  <div className="relative my-2">
                    <WaxSeal text="OPEN" />
                  </div>

                  <span className="mt-4 text-xs font-sans uppercase tracking-widest text-[#8B514B] font-semibold bg-[#E7D7C3]/40 px-3 py-1 rounded-full border border-[#D6C0A9]/60">
                    {finalSurprise.envelopeLabel}
                  </span>
                </div>
              </motion.div>
            ) : (
              /* Opened Letter View */
              <motion.article
                key="letter-open"
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-[#FCF8F0] text-[#464039] p-6 sm:p-10 rounded-xl scrapbook-card-shadow border border-[#D6C0A9] text-left"
              >
                {/* Top washi tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 z-20">
                  <WashiTape variant="coffee" angle={1} />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#464039]">
                    {finalSurprise.letterTitle}
                  </h3>
                  <SparkleDoodle size={18} className="opacity-70" />
                </div>

                <div className="space-y-4 font-sans text-sm sm:text-base text-[#464039] leading-relaxed">
                  {finalSurprise.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Closing quote */}
                <div className="mt-8 pt-6 border-t border-[#D6C0A9] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="font-handwriting text-xl sm:text-2xl text-[#8B514B]">
                    &ldquo;{finalSurprise.closingQuote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 font-serif text-sm text-[#85786B]">
                    <span>♡ With all my heart, {content.senderName}</span>
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>

        {/* Read Our Story Again Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <button
            type="button"
            onClick={onScrollToTop}
            className="px-6 py-3 min-h-[44px] rounded-full bg-[#FCF8F0]/10 hover:bg-[#FCF8F0]/20 text-[#FCF8F0] border border-[#E7D7C3]/30 font-sans text-xs sm:text-sm tracking-wider uppercase font-medium flex items-center gap-2 transition-all cursor-pointer active:scale-95"
            aria-label="Scroll back to top of the page"
          >
            <ArrowUp className="w-4 h-4 text-[#E7D7C3]" />
            <span>{finalSurprise.restartButtonText}</span>
          </button>
          <p className="text-[11px] font-sans text-[#E7D7C3]/50">
            A Little More of You • Crafted with love
          </p>
        </motion.div>
      </div>
    </section>
  );
};
