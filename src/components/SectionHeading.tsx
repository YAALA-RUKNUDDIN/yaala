'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'between';
  theme?: 'light' | 'dark';
}

export default function SectionHeading({
  number,
  category,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`w-full mb-10 sm:mb-14 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {/* Top Metadata / Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest ${
          align === 'center' ? 'justify-center' : 'justify-start'
        } ${isDark ? 'text-[var(--accent-light)]' : 'text-[#8F724E]'}`}
      >
        <span className="px-2 py-0.5 border border-current rounded-full text-[10px] tracking-wider font-semibold">
          {number}
        </span>
        <span className="opacity-40">/</span>
        <span className="truncate">{category}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className={`font-display font-extrabold uppercase tracking-tight break-words ${
          isDark ? 'text-[#F8F5EE]' : 'text-[#121110]'
        } text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.94]`}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-3 sm:mt-4 text-sm sm:text-base md:text-xl font-normal max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${isDark ? 'text-[#A8A29E]' : 'text-[#57534E]'}`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Subtle Horizontal Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: align === 'center' ? 'center' : 'left' }}
        className={`h-[1px] w-full mt-6 md:mt-10 ${
          isDark ? 'bg-white/10' : 'bg-black/10'
        }`}
      />
    </div>
  );
}
