'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { GalleryItem } from '@/types/birthday';

interface PhotoLightboxProps {
  isOpen: boolean;
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  item,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  // Prevent background scrolling while open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Keyboard navigation & accessibility
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#464039]/80 backdrop-blur-sm select-none"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Photo Lightbox"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-50 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#FCF8F0] hover:bg-[#E7D7C3] text-[#464039] flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 z-50 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#FCF8F0]/90 hover:bg-[#FCF8F0] text-[#464039] flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
          aria-label="Previous photo (Left arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 z-50 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#FCF8F0]/90 hover:bg-[#FCF8F0] text-[#464039] flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
          aria-label="Next photo (Right arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Lightbox Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-xl w-full bg-[#FCF8F0] p-4 sm:p-6 pb-6 rounded-xs polaroid-shadow border border-[#D6C0A9] flex flex-col items-center max-h-[92vh] overflow-y-auto"
        >
          {/* Polaroid Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] max-h-[60vh] bg-[#E7D7C3]/50 rounded-[2px] overflow-hidden">
            <Image
              src={item.photoUrl}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 640px) 90vw, 550px"
              className="object-contain sm:object-cover"
            />
          </div>

          {/* Polaroid Caption and Details */}
          <div className="w-full text-center mt-4 px-2">
            <h3 className="font-serif text-xl sm:text-2xl text-[#464039] font-medium leading-snug">
              {item.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#85786B] mt-1 leading-relaxed">
              {item.caption}
            </p>

            {/* Counter */}
            <div className="mt-3 pt-2 border-t border-[#D6C0A9]/60 flex items-center justify-between text-[11px] text-[#85786B] font-sans">
              <span className="font-handwriting text-sm text-[#8B514B] flex items-center gap-1">
                our memory <Heart className="w-3 h-3 fill-[#8B514B]" />
              </span>
              <span>
                {currentIndex + 1} of {items.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
