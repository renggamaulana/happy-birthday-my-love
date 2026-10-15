'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GalleryItem } from '@/types/birthday';
import { SectionHeading } from './SectionHeading';
import {
  WashiTape,
  PhotoCorner,
  PaperClip,
  VintageStamp,
  SparkleDoodle,
} from './PaperDecorations';
import { PhotoLightbox } from './PhotoLightbox';
import { ZoomIn, Heart } from 'lucide-react';

interface MemoryGalleryProps {
  items: GalleryItem[];
  title: string;
  subtitle: string;
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({
  items,
  title,
  subtitle,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleOpenPhoto = (index: number) => {
    setActivePhotoIndex(index);
  };

  const handleClose = () => {
    setActivePhotoIndex(null);
  };

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + items.length) % items.length);
    }
  };

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % items.length);
    }
  };

  return (
    <section
      id="gallery"
      className="relative w-full max-w-6xl mx-auto px-4 py-16 sm:py-24"
    >
      {/* Decorative vintage stamps and sparkles in the corner */}
      <div className="hidden md:block absolute top-12 right-12 rotate-[-8deg] pointer-events-none opacity-80">
        <VintageStamp theme="love" label="MEMOIRE" />
      </div>

      <div className="absolute top-20 left-8 pointer-events-none opacity-40">
        <SparkleDoodle size={24} />
      </div>

      <SectionHeading
        tag="Chapter 04 • Snapshots"
        title={title}
        subtitle={subtitle}
      />

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
        {items.map((item, index) => {
          const aspectClass =
            item.aspect === 'landscape'
              ? 'aspect-[4/3]'
              : item.aspect === 'square'
              ? 'aspect-square'
              : 'aspect-[3/4]';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              style={{ transform: `rotate(${item.rotation}deg)` }}
              className="relative transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:z-20 group"
            >
              {/* Optional Tape on photo */}
              {item.tapePosition === 'top-center' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 z-10">
                  <WashiTape variant="linen" angle={-1} />
                </div>
              )}
              {item.tapePosition === 'top-left' && (
                <div className="absolute -top-2 -left-2 w-16 z-10">
                  <WashiTape variant="rose" angle={-25} />
                </div>
              )}
              {item.tapePosition === 'top-right' && (
                <div className="absolute -top-2 -right-2 w-16 z-10">
                  <WashiTape variant="coffee" angle={25} />
                </div>
              )}
              {item.tapePosition === 'both' && (
                <>
                  <div className="absolute -top-2 -left-2 w-14 z-10">
                    <WashiTape variant="linen" angle={-20} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-14 z-10">
                    <WashiTape variant="rose" angle={20} />
                  </div>
                </>
              )}

              {/* Brass Paperclip on some photos */}
              {index === 0 && (
                <div className="absolute -top-5 right-4 z-20">
                  <PaperClip color="brass" />
                </div>
              )}
              {index === 4 && (
                <div className="absolute -top-5 left-4 z-20">
                  <PaperClip color="rose" />
                </div>
              )}

              {/* Tappable Polaroid Card */}
              <button
                type="button"
                onClick={() => handleOpenPhoto(index)}
                className="w-full text-left bg-[#FCF8F0] p-3 pb-4 rounded-xs polaroid-shadow border border-[#D6C0A9] block cursor-pointer transition-shadow duration-300 group-hover:shadow-xl focus:outline-hidden focus:ring-2 focus:ring-[#8B514B] relative overflow-hidden"
                aria-label={`View photo: ${item.title}`}
              >
                {/* Photo Corner tabs for authentic scrapbook feeling */}
                {index === 2 && (
                  <>
                    <PhotoCorner position="bottom-left" />
                    <PhotoCorner position="bottom-right" />
                  </>
                )}
                {index === 6 && (
                  <>
                    <PhotoCorner position="bottom-left" />
                    <PhotoCorner position="bottom-right" />
                  </>
                )}

                <div
                  className={`relative ${aspectClass} w-full overflow-hidden rounded-[2px] bg-[#E7D7C3]/50`}
                >
                  <Image
                    src={item.photoUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gentle hover zoom icon badge */}
                  <div className="absolute inset-0 bg-[#464039]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-[#FCF8F0]/90 text-[#464039] shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="pt-3 px-1 text-center">
                  <p className="font-handwriting text-lg sm:text-xl text-[#464039] leading-snug line-clamp-1">
                    {item.title}
                  </p>
                  <p className="font-sans text-[11px] text-[#85786B] mt-0.5 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        isOpen={activePhotoIndex !== null}
        item={activePhotoIndex !== null ? items[activePhotoIndex] : null}
        items={items}
        currentIndex={activePhotoIndex ?? 0}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
