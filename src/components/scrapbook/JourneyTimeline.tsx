'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BirthdayContentConfig } from '@/types/birthday';
import { SectionHeading } from './SectionHeading';
import { TimelineCard } from './TimelineCard';
import { DaysCounter } from './DaysCounter';

interface JourneyTimelineProps {
  content: BirthdayContentConfig;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ content }) => {
  return (
    <motion.section
      id="journey"
      onViewportEnter={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('play-background-music'));
        }
      }}
      viewport={{ amount: 0.1 }}
      className="relative w-full max-w-5xl mx-auto px-4 py-16 sm:py-24 overflow-x-clip"
    >
      <SectionHeading
        tag="Chapter 01 • Memory Lane"
        title={content.journey.sectionTitle}
        subtitle={content.journey.sectionSubtitle}
      />

      {/* Optional Days Together Counter (renders only if relationshipStartDate is configured) */}
      {content.featureFlags.showDaysTogether && content.relationshipStartDate && (
        <div className="flex justify-center mb-12 sm:mb-16">
          <DaysCounter startDate={content.relationshipStartDate} />
        </div>
      )}

      {/* Scrapbook Timeline Container */}
      <div className="relative w-full">
        {/* Desktop Vertical Center Line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-12 w-[2px] border-l-2 border-dashed border-[#D6C0A9]" />

        <div className="flex flex-col items-center w-full">
          {content.journey.memories.map((memory, index) => (
            <TimelineCard
              key={memory.id}
              memory={memory}
              index={index}
              isEven={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
