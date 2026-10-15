'use client';

import React from 'react';
import { birthdayData } from '@/data/birthday-content';
import { ScrapbookCover } from '@/components/scrapbook/ScrapbookCover';
import { JourneyTimeline } from '@/components/scrapbook/JourneyTimeline';
import { LoveNotes } from '@/components/scrapbook/LoveNotes';
import { LoveLetter } from '@/components/scrapbook/LoveLetter';
import { MemoryGallery } from '@/components/scrapbook/MemoryGallery';
import { BirthdayCake } from '@/components/scrapbook/BirthdayCake';
import { FinalSurprise } from '@/components/scrapbook/FinalSurprise';
import { MusicPlayer } from '@/components/scrapbook/MusicPlayer';
import { RomanticCursor } from '@/components/scrapbook/RomanticCursor';

export default function BirthdayPage() {
  const scrollToJourney = () => {
    const journeyEl = document.getElementById('journey');
    if (journeyEl) {
      journeyEl.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  const scrollToFinal = () => {
    const finalEl = document.getElementById('final-surprise');
    if (finalEl) {
      finalEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center bg-[#F7F0E5] text-[#464039] selection:bg-[#E7D7C3] selection:text-[#8B514B]">
      {/* ROMANTIC INTERACTIVE CURSOR (DESKTOP) */}
      <RomanticCursor />

      {/* SECTION 1 — THE LITTLE INVITATION */}
      <ScrapbookCover
        content={birthdayData}
        onOpenSurprise={scrollToJourney}
      />

      {/* Subtle organic divider */}
      <div className="w-full flex items-center justify-center my-6 select-none opacity-40">
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
        <span className="mx-3 text-[#8B514B] text-xs">❦</span>
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
      </div>

      {/* SECTION 2 — OUR LITTLE JOURNEY */}
      <JourneyTimeline content={birthdayData} />

      {/* Subtle organic divider */}
      <div className="w-full flex items-center justify-center my-6 select-none opacity-40">
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
        <span className="mx-3 text-[#8B514B] text-xs">♡</span>
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
      </div>

      {/* SECTION 3 — LITTLE THINGS I LOVE ABOUT YOU */}
      <LoveNotes
        notes={birthdayData.loveNotes.notes}
        title={birthdayData.loveNotes.sectionTitle}
        subtitle={birthdayData.loveNotes.sectionSubtitle}
      />

      {/* Subtle organic divider */}
      <div className="w-full flex items-center justify-center my-6 select-none opacity-40">
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
        <span className="mx-3 text-[#8B514B] text-xs">❦</span>
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
      </div>

      {/* SECTION 4 — A LETTER FROM MY HEART */}
      <LoveLetter content={birthdayData} />

      {/* Subtle organic divider */}
      <div className="w-full flex items-center justify-center my-6 select-none opacity-40">
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
        <span className="mx-3 text-[#8B514B] text-xs">♡</span>
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
      </div>

      {/* SECTION 5 — OUR LITTLE MEMORIES */}
      <MemoryGallery
        items={birthdayData.gallery.items}
        title={birthdayData.gallery.sectionTitle}
        subtitle={birthdayData.gallery.sectionSubtitle}
      />

      {/* Subtle organic divider */}
      <div className="w-full flex items-center justify-center my-6 select-none opacity-40">
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
        <span className="mx-3 text-[#8B514B] text-xs">❦</span>
        <span className="h-[1px] w-24 bg-[#D6C0A9]" />
      </div>

      {/* SECTION 6 — MAKE A WISH */}
      <BirthdayCake
        content={birthdayData}
        onProceedToFinal={scrollToFinal}
      />

      {/* SECTION 7 — THE LAST LITTLE SURPRISE */}
      <FinalSurprise
        content={birthdayData}
        onScrollToTop={scrollToTop}
      />

      {/* FLOATING BACKGROUND MUSIC PLAYER */}
      {birthdayData.featureFlags.showMusicPlayer && (
        <MusicPlayer config={birthdayData.music} />
      )}
    </main>
  );
}
