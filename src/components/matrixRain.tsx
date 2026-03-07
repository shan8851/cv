'use client';

import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF';
const FONT_SIZE = 14;
const FALL_SPEED = 0.4;
const OPACITY = 0.06;

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const columnCount = Math.floor(canvas.width / FONT_SIZE);
    const isMobile = window.innerWidth < 768;
    const density = isMobile ? 0.25 : 0.5;

    const columns: number[] = Array.from({ length: columnCount }, () =>
      Math.random() < density ? Math.random() * canvas.height / FONT_SIZE : -1
    );

    let frameCount = 0;

    const draw = () => {
      frameCount++;
      if (frameCount % 3 !== 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = `rgba(10, 10, 15, 0.08)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(0, 255, 204, ${OPACITY})`;
      ctx.font = `${FONT_SIZE}px monospace`;

      columns.forEach((y, i) => {
        if (y < 0) return;

        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;

        ctx.fillText(char, x, y * FONT_SIZE);

        columns[i] = y + FALL_SPEED;

        if (y * FONT_SIZE > canvas.height && Math.random() > 0.98) {
          columns[i] = 0;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    let animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none animate-fade"
      style={{ animationDuration: '2s' }}
    />
  );
};
