'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Terminal, ShieldCheck, Compass } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/projects';

export default function ProfileVisual() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5EE] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#121110] text-[#F8F5EE] border border-black/20 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Refined Monogram Canvas (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C1A17] via-[#141210] to-[#0A0908] border border-white/15 p-8 flex flex-col justify-between group shadow-xl">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                {/* Top Corner Metadata */}
                <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-white/50">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--accent-light)]">
                    IDENTITY MARK
                  </span>
                  <span>EST. 2025</span>
                </div>

                {/* Central Monogram Emblem */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-6">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 transition-transform duration-500 group-hover:scale-108">
                    <Image
                      src="/images/logo-mark-white.png"
                      alt="YAALA Monogram"
                      fill
                      sizes="150px"
                      className="object-contain"
                    />
                  </div>
                  <p className="font-display font-black text-2xl tracking-[0.3em] uppercase text-white mt-4">
                    YAALA
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#87827B] mt-1">
                    DESIGN × DEVELOPMENT × AI
                  </p>
                </div>

                {/* Bottom Bar Inside Canvas */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-md">
                    NOV 2025 → PRESENT
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-md text-[var(--accent-light)] font-semibold">
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
