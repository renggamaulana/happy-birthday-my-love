'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const isCenter = alignment === 'center';

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 sm:mb-14 ${isCenter ? 'text-center' : 'text-left'} ${className}`}
    >
      {tag && (
        <span className="inline-block text-[11px] sm:text-xs tracking-[0.25em] uppercase font-sans font-medium text-[#8B514B] bg-[#E7D7C3]/60 px-3 py-1 rounded-full mb-3 border border-[#D6C0A9]/60">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#464039] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-[#85786B] font-sans max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 flex items-center gap-2 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="h-[1px] w-10 sm:w-16 bg-[#D6C0A9]" />
        <span className="text-xs text-[#8B514B]">♡</span>
        <span className="h-[1px] w-10 sm:w-16 bg-[#D6C0A9]" />
      </div>
    </motion.header>
  );
};
