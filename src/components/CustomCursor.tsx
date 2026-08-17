'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-cursor]');
      const projectCard = target.closest('[data-cursor-project]');
      const viewCard = target.closest('[data-cursor-view]');

      if (projectCard) {
        setCursorVariant('project');
        setCursorText('EXPLORE');
      } else if (viewCard) {
        setCursorVariant('view');
        setCursorText('VIEW');
      } else if (interactive) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: '#121110',
      border: '0px solid transparent',
      opacity: 0.75,
    },
    hover: {
      width: 44,
      height: 44,
      backgroundColor: 'rgba(196, 164, 124, 0.25)',
      border: '1.5px solid #C4A47C',
      opacity: 1,
    },
    project: {
      width: 84,
      height: 84,
      backgroundColor: '#121110',
      border: '1px solid rgba(248, 245, 238, 0.4)',
      opacity: 1,
    },
    view: {
      width: 72,
      height: 72,
      backgroundColor: '#C4A47C',
      border: '1px solid #121110',
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      {cursorText && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#F8F5EE] font-semibold select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
