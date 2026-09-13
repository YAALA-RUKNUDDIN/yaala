'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { PHILOSOPHY_PILLARS } from '@/data/projects';

export default function DesignPhilosophy() {
  return (
    <section className="py-24 md:py-36 bg-[#121110] text-[#F8F5EE] border-b border-white/10 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <SectionHeading
          number="02"
          category="PHILOSOPHY & ETHOS"
          title="DESIGN, AS I SEE IT"
          theme="dark"
        />

        {/* Central Core Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 p-8 sm:p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-6 right-8 font-serif italic text-6xl md:text-8xl text-white/10 pointer-events-none select-none">
            “
          </div>
          <p className="font-display font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#F8F5EE] max-w-4xl">
            Good design isn&apos;t only about how something looks. It is about whether the experience makes sense, feels natural, and solves the right problem.
          </p>
        </motion.div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 sm:p-10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 group-hover:border-[var(--accent)]/30 transition-colors">
                  <span className="font-mono text-xs text-[var(--accent-light)] tracking-widest font-semibold">
                    PILLAR / {pillar.id}
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    PRINCIPLE
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#F8F5EE] group-hover:text-[var(--accent-light)] transition-colors">
                  {pillar.heading}
                </h3>

                <p className="mt-4 text-base text-[#A8A29E] leading-relaxed font-normal">
                  {pillar.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 flex items-center gap-2 font-mono text-[11px] text-white/40 group-hover:text-[var(--accent-light)] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="uppercase tracking-wider">APPLIED IN ALL WORK</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
