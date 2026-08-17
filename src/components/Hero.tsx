'use client';

import { motion } from 'framer-motion';
import HeroImage from './HeroImage';
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/projects';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-28 pb-16 md:pt-36 md:pb-20 flex flex-col justify-between overflow-hidden border-b border-black/10">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#121110_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full relative z-10 my-auto">
        {/* Top Monospace Metadata Line */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#57534E] mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-black/15 bg-black/[0.03] text-[#121110] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            DESIGNER × DEVELOPER × AI
          </span>
          <span className="hidden sm:inline text-[#87827B]">/</span>
          <span className="text-[#87827B]">BASED IN INDIA</span>
          <span className="hidden md:inline text-[#87827B]">/</span>
          <span className="hidden md:inline text-[#87827B]">CREATING DIGITAL EXPERIENCES</span>
        </motion.div>

        {/* Main Grid: Statement + Editorial Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Oversized Hero Headline & Bio (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Giant Editorial Statement - Crystal Clear & Immediate */}
            <div className="font-display font-extrabold uppercase tracking-tight text-[#121110] leading-[0.92] text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] mb-6 sm:mb-8 flex flex-col gap-1.5 sm:gap-2">
              <div>
                <TextReveal text="I DESIGN THINGS" delay={0.05} inHero={true} />
              </div>
              <div className="text-[var(--accent-dark)] italic font-serif normal-case tracking-normal">
                <TextReveal text="that people" delay={0.18} inHero={true} />
              </div>
              <div>
                <TextReveal text="CAN ACTUALLY USE." delay={0.3} inHero={true} />
              </div>
            </div>

            {/* Core Positioning Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#57534E] leading-relaxed max-w-xl font-normal mb-8 sm:mb-10"
            >
              I’m <strong className="font-semibold text-[#121110]">Yaala</strong> — a multidisciplinary designer and developer working across digital products, websites, creative systems, and AI-assisted workflows.
            </motion.p>

            {/* Hero Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <MagneticButton href="#work">
                <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#121110] text-[#F8F5EE] hover:bg-[#8F724E] transition-all duration-300 font-mono text-xs uppercase tracking-wider font-semibold shadow-lg">
                  <span>EXPLORE WORK</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>
              </MagneticButton>

              <MagneticButton href="#experience">
                <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-black/20 bg-transparent text-[#121110] hover:bg-black/5 transition-all duration-300 font-mono text-xs uppercase tracking-wider font-semibold">
                  <span>Q-GRAPHY EXP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </MagneticButton>

              <MagneticButton href={SOCIAL_LINKS.email}>
                <div className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-[#87827B] hover:text-[#121110] font-mono text-xs uppercase tracking-wider font-medium transition-colors">
                  <span>GET IN TOUCH →</span>
                </div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Profile Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>

      {/* Bottom Metadata & Ticker Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full pt-8 md:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-black/10 text-xs font-mono text-[#87827B]">
        <div className="flex items-center gap-6">
          <span>01 / EDITORIAL IDENTITY</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">TECH STACK: REACT · NEXT.JS · PYTHON</span>
        </div>

        <div className="flex items-center gap-2 text-[#57534E]">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3 h-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
