'use client';

import { motion } from 'framer-motion';

const ROW_1 = [
  'DESIGN',
  'DEVELOPMENT',
  'AI CREATIVE',
  'DIGITAL PRODUCTS',
  'UI/UX ARCHITECTURE',
  'PYTHON',
  'JAVA',
  'FRONTEND',
  'PROMPT ENGINEERING',
  'CREATIVE SYSTEMS',
];

const ROW_2 = [
  'GRAPHIC SYSTEMS',
  'DESIGN TOKENS',
  'WEBSITE MANAGEMENT',
  'INTERACTION DESIGN',
  'NEXT.JS & REACT',
  'TAILWIND CSS',
  'FRAMER MOTION',
  'CREATIVE AUTOMATION',
  'Q-GRAPHY',
  'YAALA',
];

export default function Marquee() {
  return (
    <section className="py-16 md:py-24 bg-[#121110] text-[#F8F5EE] border-b border-white/10 overflow-hidden select-none">
      {/* Row 1: Leftward Infinite Marquee */}
      <div className="flex overflow-hidden py-3 border-y border-white/10">
        <div className="animate-marquee-left flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {[...ROW_1, ...ROW_1, ...ROW_1].map((item, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-12">
              <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white/90 hover:text-[var(--accent-light)] transition-colors">
                {item}
              </span>
              <span className="font-mono text-sm text-[var(--accent)]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Infinite Marquee (Italic / Serif accents) */}
      <div className="flex overflow-hidden py-3 border-b border-white/10 mt-3">
        <div className="animate-marquee-right flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {[...ROW_2, ...ROW_2, ...ROW_2].map((item, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-12">
              <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-white/60 hover:text-white transition-colors">
                {item}
              </span>
              <span className="font-mono text-xs text-white/30">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
