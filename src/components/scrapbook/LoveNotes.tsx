'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail, MailOpen, Sparkles, X } from 'lucide-react';
import { LoveNoteItem } from '@/types/birthday';
import { SectionHeading } from './SectionHeading';
import { WashiTape } from './PaperDecorations';

interface LoveNotesProps {
  notes: LoveNoteItem[];
  title: string;
  subtitle: string;
}

export const LoveNotes: React.FC<LoveNotesProps> = ({
  notes,
  title,
  subtitle,
}) => {
  // Store open card IDs
  const [openCardIds, setOpenCardIds] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setOpenCardIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="love-notes"
      className="relative w-full max-w-5xl mx-auto px-4 py-16 sm:py-24"
    >
      <SectionHeading
        tag="Chapter 02 • Reasons Why"
        title={title}
        subtitle={subtitle}
      />

      {/* Grid of 6 interactive paper cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {notes.map((note, index) => {
          const isOpen = !!openCardIds[note.id];
          const rotationAngle = (index % 3 - 1) * 1.5;

          return (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{ transform: `rotate(${rotationAngle}deg)` }}
              className="relative transition-transform duration-300 hover:rotate-0"
            >
              {/* Decorative tape on each note */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 z-20">
                <WashiTape
                  variant={index % 2 === 0 ? 'rose' : 'linen'}
                  angle={index % 2 === 0 ? -1 : 1.5}
                />
              </div>

              {/* Interactive Paper Card */}
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-label={`${note.label}: ${note.title}`}
                onClick={() => toggleCard(note.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(note.id);
                  }
                }}
                className={`w-full min-h-[220px] sm:min-h-[240px] rounded-xl p-5 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between select-none relative overflow-hidden border border-[#D6C0A9] scrapbook-card-shadow ${
                  isOpen
                    ? 'bg-[#FCF8F0] ring-2 ring-[#8B514B]/30'
                    : 'bg-[#FCF8F0]/90 hover:bg-[#FCF8F0]'
                }`}
              >
                {/* Note Header / Handwritten Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-handwriting text-base sm:text-lg text-[#8B514B] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {note.label}
                  </span>
                  <div className="text-[#85786B] flex items-center gap-1">
                    {isOpen ? (
                      <X className="w-4 h-4 text-[#8B514B]" />
                    ) : (
                      <Mail className="w-4 h-4 text-[#B58D70]" />
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="my-auto py-2">
                  <AnimatePresence mode="wait">
                    {!isOpen ? (
                      <motion.div
                        key="closed"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="text-center py-4"
                      >
                        <h4 className="font-serif text-xl sm:text-2xl text-[#464039] font-medium mb-2 leading-snug">
                          {note.title}
                        </h4>
                        <p className="text-xs font-handwriting text-[#B58D70] tracking-wide">
                          (Tap to unfold message)
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="py-1"
                      >
                        <p className="font-sans text-sm sm:text-base text-[#464039] leading-relaxed">
                          {note.message}
                        </p>
                        <div className="mt-3 flex justify-end">
                          <span className="font-handwriting text-sm text-[#8B514B] flex items-center gap-1">
                            forever yours <Heart className="w-3 h-3 fill-[#8B514B]" />
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Footer */}
                <div className="pt-2 border-t border-[#D6C0A9]/50 flex items-center justify-between text-[11px] text-[#85786B] font-sans">
                  <span>Note #{index + 1}</span>
                  <span className="text-[11px] font-handwriting text-[#8B514B]">
                    {isOpen ? 'Tap to close' : 'Click or tap to open'}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
