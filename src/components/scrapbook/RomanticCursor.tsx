'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  symbol: string;
  color: string;
}

export const RomanticCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastSpawnTime = useRef(0);
  const particleId = useRef(0);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const romanticSymbols = ['✦', '♡', '✧', '⋆', '·'];
    const romanticColors = ['#8B514B', '#B58D70', '#D6C0A9', '#e89c92', '#85786B'];

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPos({ x: clientX, y: clientY });

      // Throttle particle trail creation
      const now = Date.now();
      if (now - lastSpawnTime.current > 70) {
        lastSpawnTime.current = now;
        const newParticle: Particle = {
          id: particleId.current++,
          x: clientX + (Math.random() * 12 - 6),
          y: clientY + (Math.random() * 12 - 6),
          size: Math.random() * 6 + 8,
          symbol: romanticSymbols[Math.floor(Math.random() * romanticSymbols.length)],
          color: romanticColors[Math.floor(Math.random() * romanticColors.length)],
        };

        setParticles((prev) => [...prev.slice(-15), newParticle]);
      }

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest('button') ||
          target.closest('a') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer') ||
          window.getComputedStyle(target).cursor === 'pointer';
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Click burst: spawn 5 particles around click
      const burst: Particle[] = Array.from({ length: 5 }).map((_, i) => ({
        id: particleId.current++,
        x: e.clientX + (Math.cos((i * 72 * Math.PI) / 180) * 16),
        y: e.clientY + (Math.sin((i * 72 * Math.PI) / 180) * 16),
        size: 14,
        symbol: i % 2 === 0 ? '♡' : '✦',
        color: '#8B514B',
      }));
      setParticles((prev) => [...prev.slice(-12), ...burst]);
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setPos({ x: -100, y: -100 });
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Clean up older particles periodically
  useEffect(() => {
    if (!enabled) return;
    const interval = setInterval(() => {
      setParticles((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(1);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [enabled]);

  if (!enabled || pos.x < 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Trailing Magic Dust Particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0.9, scale: 0.8, y: 0 }}
            animate={{ opacity: 0, scale: 1.4, y: -18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              left: p.x,
              top: p.y,
              fontSize: `${p.size}px`,
              color: p.color,
              lineHeight: 1,
              userSelect: 'none',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {p.symbol}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Main Cursor Outer Aura / Ring */}
      <motion.div
        animate={{
          x: pos.x - (isHovered ? 24 : 16),
          y: pos.y - (isHovered ? 24 : 16),
          scale: isClicking ? 0.8 : isHovered ? 1.4 : 1,
          borderColor: isHovered ? '#8B514B' : '#B58D70',
          backgroundColor: isHovered ? 'rgba(139, 81, 75, 0.12)' : 'rgba(231, 215, 195, 0.25)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 280,
          mass: 0.4,
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#B58D70]/60 backdrop-blur-[0.5px] pointer-events-none flex items-center justify-center shadow-xs"
      >
        {isHovered && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-[9px] text-[#8B514B] select-none"
          >
            ♡
          </motion.span>
        )}
      </motion.div>

      {/* Center Pen / Dot Tip */}
      <motion.div
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: isClicking ? 1.6 : isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.1,
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#8B514B] pointer-events-none"
      />
    </div>
  );
};
