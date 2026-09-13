'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import TextReveal from './TextReveal';
import { MapPin, Briefcase, Sparkles, ArrowUpRight, Compass, Code2, Terminal, Layers } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/projects';
import MagneticButton from './MagneticButton';

export default function AboutSection() {
  return (
    <section className="py-24 md:py-36 bg-[#F8F5EE] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionHeading
          number="08"
          category="BACKGROUND & FOCUS"
          title="ABOUT YAALA"
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Brand Manifesto Canvas (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#181614] via-[#121110] to-[#0A0908] text-[#F8F5EE] border border-black/15 shadow-2xl p-8 flex flex-col justify-between group">
              {/* Subtle Grid Texture */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              {/* Ambient Accent Radial Glow */}
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Top Row */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-white/50 border-b border-white/10 pb-4">
                <span className="flex items-center gap-2 text-[var(--accent-light)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  DESIGNER × DEVELOPER
                </span>
                <span>ORIGIN: INDIA</span>
              </div>

              {/* Center Monogram Seal Showcase */}
              <div className="relative z-10 my-auto text-center py-6 flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src="/images/logo-mark-white.png"
                    alt="YAALA Monogram"
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
                <h4 className="font-display font-black text-3xl sm:text-4xl tracking-[0.2em] uppercase text-white mt-4">
                  YAALA
                </h4>
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-light)] mt-1">
                  DIGITAL PRODUCT BUILDER
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {['UI/UX', 'NEXT.JS', 'PYTHON', 'AI PROMPTS'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white pt-4 border-t border-white/10">
                <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-md">
                  Q-GRAPHY INTERN
                </span>
                <span className="text-[var(--accent-light)] font-semibold">
                  #2026-ACTIVE
                </span>
              </div>
            </div>

            {/* Circular Badge Floating Stamp */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-[#F8F5EE] border-2 border-[#121110] shadow-2xl p-3 hidden sm:flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo-mark.png"
                  alt="YAALA Seal"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative + Metadata Grid (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#121110] leading-none mb-6">
                <TextReveal text="I LIKE MAKING THINGS." />
              </h3>

              <div className="space-y-4 text-base sm:text-lg md:text-xl text-[#57534E] leading-relaxed font-normal">
                <p>
                  I’m interested in the intersection of <strong className="text-[#121110] font-semibold">design, technology, and AI</strong>.
                </p>
                <p>
                  I enjoy taking an idea, understanding what it needs, shaping the experience, building it, and making it better.
                </p>
              </div>
            </div>

            {/* Structured Metadata Box Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono text-[#87827B] uppercase mb-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#8F724E]" />
                  <span>CURRENTLY</span>
                </div>
                <p className="font-display font-bold text-base uppercase text-[#121110]">
                  Q-GRAPHY
                </p>
                <p className="font-mono text-xs text-[#57534E] mt-0.5">
                  Design & Digital Products
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono text-[#87827B] uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>FOCUS</span>
                </div>
                <p className="font-display font-bold text-base uppercase text-[#121110]">
                  DESIGN / CODE / AI
                </p>
                <p className="font-mono text-xs text-[#57534E] mt-0.5">
                  Digital Product Building
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono text-[#87827B] uppercase mb-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>LOCATION</span>
                </div>
                <p className="font-display font-bold text-base uppercase text-[#121110]">
                  INDIA
                </p>
                <p className="font-mono text-xs text-[#57534E] mt-0.5">
                  Working Globally
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <MagneticButton href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121110] text-[#F8F5EE] hover:bg-[#8F724E] transition-colors font-mono text-xs uppercase tracking-wider font-semibold">
                  <span>CONNECT ON LINKEDIN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
