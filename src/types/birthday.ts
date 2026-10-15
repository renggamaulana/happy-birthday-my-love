export type PhotoAspect = 'portrait' | 'landscape' | 'square';

export type TapePosition = 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'both' | 'none';

export interface MemoryItem {
  id: string;
  date: string;
  title: string;
  photoUrl: string;
  caption: string;
  rotation?: number; // degrees, e.g. -2, 1.5, -3
  aspect?: PhotoAspect;
}

export interface LoveNoteItem {
  id: string;
  label: string; // e.g. "a tiny secret", "just between us", "one more thing"
  title: string;
  message: string;
  colorVariant?: 'cream' | 'linen' | 'rose-tint' | 'warm-coffee-tint';
}

export interface GalleryItem {
  id: string;
  title: string;
  photoUrl: string;
  caption: string;
  rotation: number;
  aspect: PhotoAspect;
  tapePosition?: TapePosition;
}

export interface MusicConfig {
  enabled: boolean;
  title: string;
  artist: string;
  audioSrc: string;
  loop: boolean;
}

export interface VoiceNoteConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  audioSrc: string;
  placeholderNotice: string;
}

export interface FeatureFlags {
  showDaysTogether: boolean;
  showMusicPlayer: boolean;
  showVoiceNote: boolean;
  enableConfetti: boolean;
}

export interface BirthdayContentConfig {
  recipientName: string;
  senderName: string;
  birthdayDate: string | null; // e.g. '2026-10-15' or null
  relationshipStartDate: string | null; // e.g. '2023-08-14' or null
  intro: {
    topLabel: string;
    heading: string;
    subheading: string;
    buttonText: string;
    noteText: string;
    coverPhoto: {
      url: string;
      caption: string;
      dateLabel: string;
      rotation: number;
    };
  };
  journey: {
    sectionTitle: string;
    sectionSubtitle: string;
    memories: MemoryItem[];
  };
  loveNotes: {
    sectionTitle: string;
    sectionSubtitle: string;
    notes: LoveNoteItem[];
  };
  loveLetter: {
    sectionTitle: string;
    sectionSubtitle: string;
    salutation: string;
    paragraphs: string[];
    signOff: string;
    signature: string;
    letterDate: string;
  };
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: GalleryItem[];
  };
  birthdayWish: {
    sectionTitle: string;
    sectionSubtitle: string;
    promptText: string;
    blowButtonText: string;
    celebrationMessage: string;
    nextButtonText: string;
  };
  finalSurprise: {
    sectionTitle: string;
    sectionSubtitle: string;
    envelopeLabel: string;
    letterTitle: string;
    paragraphs: string[];
    closingQuote: string;
    restartButtonText: string;
  };
  music: MusicConfig;
  voiceNote: VoiceNoteConfig;
  featureFlags: FeatureFlags;
}
