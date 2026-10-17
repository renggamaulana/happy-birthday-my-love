'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX, AlertCircle } from 'lucide-react';
import { MusicConfig } from '@/types/birthday';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
  config: MusicConfig;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ config }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const wasPlayingBeforeVoiceRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!config.enabled) return;

    const audio = new Audio(config.audioSrc);
    audio.loop = config.loop;
    audio.preload = 'auto';
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    // Function to attempt playing audio
    const attemptPlay = () => {
      if (!audioRef.current || userPausedRef.current || wasPlayingBeforeVoiceRef.current) return;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasError(false);
          cleanupInteractionListeners();
        })
        .catch(() => {
          // Autoplay was blocked by browser policy prior to user interaction.
          // Listeners will keep retrying on user interactions (scroll, touch, click, etc.)
        });
    };

    // Interaction triggers for browsers with strict autoplay policies
    const handleInteraction = () => {
      if (!userPausedRef.current && !wasPlayingBeforeVoiceRef.current) {
        attemptPlay();
      }
    };

    // Handlers for Voice Note coordination: pause bg music while voice note plays, resume when stopped
    const handleVoiceNotePlay = () => {
      if (audioRef.current && !audioRef.current.paused) {
        wasPlayingBeforeVoiceRef.current = true;
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    const handleVoiceNoteStop = () => {
      if (wasPlayingBeforeVoiceRef.current && audioRef.current && !userPausedRef.current) {
        wasPlayingBeforeVoiceRef.current = false;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasError(false);
          })
          .catch(() => {});
      }
    };

    const cleanupInteractionListeners = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('touchmove', handleInteraction);
      window.removeEventListener('pointerdown', handleInteraction);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('play-background-music', handleInteraction);
    };

    window.addEventListener('click', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('touchmove', handleInteraction, { passive: true });
    window.addEventListener('pointerdown', handleInteraction, { passive: true });
    window.addEventListener('wheel', handleInteraction, { passive: true });
    window.addEventListener('keydown', handleInteraction, { passive: true });
    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('play-background-music', handleInteraction);
    window.addEventListener('voicenote-play', handleVoiceNotePlay);
    window.addEventListener('voicenote-stop', handleVoiceNoteStop);

    // Initial immediate attempt to autoplay
    audio.load();
    attemptPlay();

    return () => {
      audio.pause();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
      window.removeEventListener('voicenote-play', handleVoiceNotePlay);
      window.removeEventListener('voicenote-stop', handleVoiceNoteStop);
      cleanupInteractionListeners();
      audioRef.current = null;
    };
  }, [config.audioSrc, config.loop, config.enabled]);

  if (!config.enabled) return null;

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;

    wasPlayingBeforeVoiceRef.current = false;

    if (isPlaying) {
      userPausedRef.current = true;
      audioRef.current.pause();
    } else {
      userPausedRef.current = false;
      audioRef.current.play().catch(() => {
        setHasError(true);
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <aside
      aria-label="Background music player"
      className="fixed bottom-4 right-4 z-40 select-none max-w-[calc(100vw-32px)]"
    >
      <div className="flex items-center gap-2">
        {/* Expandable Track Information Card */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="bg-[#FCF8F0]/95 backdrop-blur-md border border-[#D6C0A9] px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5 max-w-[170px] xs:max-w-[210px] sm:max-w-[240px]"
            >
              <div className="w-7 h-7 rounded-full bg-[#E7D7C3] flex items-center justify-center shrink-0">
                <Music
                  className={`w-3.5 h-3.5 text-[#8B514B] ${
                    isPlaying ? 'animate-pulse' : ''
                  }`}
                />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-serif font-medium text-[#464039] truncate">
                  {config.title}
                </p>
                <p className="text-[10px] text-[#85786B] font-sans truncate">
                  {hasError ? 'Audio error' : config.artist}
                </p>
              </div>

              {/* Mute button */}
              {isPlaying && !hasError && (
                <button
                  type="button"
                  onClick={toggleMute}
                  className="text-[#85786B] hover:text-[#464039] p-1 ml-auto cursor-pointer"
                  aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Toggle Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              if (hasError) return;
              togglePlay();
              setIsExpanded(true);
            }}
            onMouseEnter={() => setIsExpanded(true)}
            className={`w-12 h-12 min-w-[48px] min-h-[48px] rounded-full border border-[#D6C0A9] flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer ${
              isPlaying
                ? 'bg-[#8B514B] text-[#FCF8F0] shadow-[#8B514B]/20'
                : 'bg-[#FCF8F0] text-[#464039] hover:bg-[#E7D7C3]'
            }`}
            aria-label={
              hasError
                ? 'Audio unavailable'
                : isPlaying
                ? 'Pause background music'
                : 'Play background music'
            }
          >
            {hasError ? (
              <AlertCircle className="w-5 h-5 text-[#8B514B]" />
            ) : isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Music className="w-5 h-5" />
            )}
          </button>

          {/* Tiny gentle spinning indicator while playing */}
          {isPlaying && (
            <span
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#8B514B] border-2 border-[#FCF8F0] animate-ping"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </aside>
  );
};
