'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { calculateDaysTogether, formatScrapbookDate } from '@/lib/date-utils';
import { Calendar, Heart } from 'lucide-react';

interface DaysCounterProps {
  startDate: string | null;
  className?: string;
}

export const DaysCounter: React.FC<DaysCounterProps> = ({
  startDate,
  className = '',
}) => {
  const days = calculateDaysTogether(startDate);

  // If start date is missing, unconfigured, or invalid, safely hide the counter completely
  if (days === null) {
    return null;
  }

  const formattedDate = formatScrapbookDate(startDate);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex flex-col items-center justify-center p-4 sm:p-5 bg-[#FCF8F0] border border-[#D6C0A9] rounded-2xl scrapbook-card-shadow relative overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#85786B] font-sans font-medium mb-1">
        <Calendar className="w-3.5 h-3.5 text-[#8B514B]" />
        <span>Days with you</span>
      </div>

      <div className="flex items-baseline gap-1 my-1">
        <span className="text-4xl sm:text-5xl font-serif font-bold text-[#8B514B]">
          {days.toLocaleString('id-ID')}
        </span>
        <span className="text-sm sm:text-base font-handwriting text-[#B58D70]">
          beautiful days
        </span>
      </div>

      {formattedDate && (
        <p className="text-[11px] sm:text-xs text-[#85786B]/80 font-sans mt-1">
          Since our first hello on {formattedDate}
        </p>
      )}

      <Heart className="w-4 h-4 text-[#8B514B]/30 absolute -bottom-1 -right-1" />
    </motion.div>
  );
};
