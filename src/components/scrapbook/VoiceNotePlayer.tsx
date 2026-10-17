'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, AlertCircle, Mic, RotateCcw } from 'lucide-react';
import { VoiceNoteConfig } from '@/types/birthday';

interface VoiceNotePlayerProps {
  config: VoiceNoteConfig;
}

export const VoiceNotePlayer: React.FC<VoiceNotePlayerProps> = ({ config }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio(config.audioSrc);
    audioRef.current = audio;

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsLoaded(true);
      setHasError(false);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onPlay = () => {
      setIsPlaying(true);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('voicenote-play'));
      }
    };

    const onPause = () => {
      setIsPlaying(false);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('voicenote-stop'));
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('voicenote-stop'));
      }
    };

    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('voicenote-stop'));
      }
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    // Initial check
    audio.load();

    return () => {
      audio.pause();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('voicenote-stop'));
      }
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
      audioRef.current = null;
    };
  }, [config.audioSrc]);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setHasError(true);
          setIsPlaying(false);
        });
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || duration === 0 || hasError) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newRatio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = newRatio * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleRestart = () => {
    if (!audioRef.current || hasError) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-[#E7D7C3]/50 border border-[#D6C0A9] rounded-xl p-4 sm:p-5 mt-6 scrapbook-card-shadow">
      <div className="flex items-center gap-2 mb-2">
        <Mic className="w-4 h-4 text-[#8B514B]" />
        <span className="text-xs uppercase tracking-wider font-sans font-semibold text-[#8B514B]">
          {config.title}
        </span>
      </div>

      <p className="text-xs text-[#85786B] font-sans mb-3">
        {config.subtitle}
      </p>

      {hasError ? (
        <div className="flex items-start gap-2 p-3 bg-[#FCF8F0] border border-[#8B514B]/30 rounded-lg text-xs text-[#85786B]">
          <AlertCircle className="w-4 h-4 text-[#8B514B] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#8B514B]">Audio belum tersedia</p>
            <p className="mt-0.5">
              Letakkan file rekaman suara Anda di{' '}
              <code className="text-[#464039] bg-[#E7D7C3]/60 px-1 py-0.5 rounded break-all">
                public/audio/birthday-voice.mp3
              </code>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#8B514B] hover:bg-[#77423D] text-[#FCF8F0] flex items-center justify-center transition-transform active:scale-95 shadow-sm cursor-pointer"
              aria-label={isPlaying ? 'Pause voice note' : 'Play voice note'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Interactive Progress Bar */}
            <div className="flex-1 flex flex-col justify-center">
              <div
                role="progressbar"
                aria-valuenow={currentTime}
                aria-valuemin={0}
                aria-valuemax={duration}
                onClick={handleSeek}
                className="w-full h-3 bg-[#D6C0A9]/60 hover:bg-[#D6C0A9] rounded-full overflow-hidden cursor-pointer relative"
              >
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="h-full bg-[#8B514B] transition-all duration-100 rounded-full"
                />
              </div>

              {/* Time Indicators */}
              <div className="flex justify-between items-center text-[11px] text-[#85786B] font-sans mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{duration > 0 ? formatTime(duration) : '--:--'}</span>
              </div>
            </div>

            {/* Restart button if played */}
            {currentTime > 0 && (
              <button
                type="button"
                onClick={handleRestart}
                className="w-8 h-8 rounded-full text-[#85786B] hover:text-[#464039] flex items-center justify-center transition-colors"
                title="Replay from start"
                aria-label="Replay voice note"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Placeholder Notice */}
          <div className="mt-2 text-[11px] text-[#85786B]/80 font-handwriting italic text-center sm:text-left">
            * {config.placeholderNotice}
          </div>
        </div>
      )}
    </div>
  );
};
