'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/projects';

export default function ProfileVisual() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5EE] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#121110] text-[#F8F5EE] border border-black/20 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Wide Editorial Photo Crop (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/15 group">
                <Image
                  src="/images/profile.png"
                  alt="Yaala Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  unoptimized
                  quality={100}
                  className="object-cover object-[center_20%] group-hover:scale-103 transition-all duration-700 ease-out"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white">
                  <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-md">
                    NOV 2025 → PRESENT
                  </span>
                  <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-md text-[var(--accent-light)] font-semibold">
                    Q-GRAPHY
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography Lockup (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4 font-mono text-xs text-[var(--accent-light)] uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  <span>IDENTITY & PROFILE SNAPSHOT</span>
                </div>

                <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
                  YAALA
                </h3>

                <p className="font-mono text-sm sm:text-base text-[var(--accent-light)] uppercase tracking-widest mt-2">
                  DESIGN × CODE × AI
                </p>

                <p className="text-base sm:text-lg text-[#A8A29E] leading-relaxed font-normal mt-6 max-w-xl">
                  Building at the frontier of human intention and algorithmic precision. Bringing an uncompromising eye for typographic craft and clean frontend execution to every digital product.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#A8A29E]">
                <div>
                  <span className="text-white font-semibold">LOCATION:</span> INDIA
                </div>
                <div>
                  <span className="text-white font-semibold">ROLE:</span> INTERN @ Q-GRAPHY
                </div>
                <div>
                  <span className="text-white font-semibold">AVAILABILITY:</span> SELECT OPPORTUNITIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
