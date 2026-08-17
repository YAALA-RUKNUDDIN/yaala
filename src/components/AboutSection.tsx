'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import TextReveal from './TextReveal';
import { MapPin, Briefcase, Sparkles, Code, Palette, ArrowUpRight } from 'lucide-react';
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
          {/* Left: Editorial Portrait Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-[#121110] border border-black/15 shadow-2xl group">
              <Image
                src="/images/profile.png"
                alt="Yaala — Designer & Developer"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                unoptimized
                quality={100}
                className="object-cover object-[center_25%] group-hover:scale-103 transition-all duration-700 ease-out"
              />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
                <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 shadow-md">
                  YAALA · PRODUCT & AI
                </span>
                <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 shadow-md text-[var(--accent-light)] font-semibold">
                  Q-GRAPHY INTERN
                </span>
              </div>
            </div>

            {/* Circular Stamp */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#121110] border-2 border-[#F8F5EE] shadow-2xl p-4 hidden sm:flex items-center justify-center">
              <Image
                src="/images/logo-mark-white.png"
                alt="YAALA Monogram"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
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
