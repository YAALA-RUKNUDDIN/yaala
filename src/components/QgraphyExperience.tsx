'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Timeline from './Timeline';
import { Briefcase, Layers, Code, Palette, Share2, Sparkles, Image as ImageIcon } from 'lucide-react';

const CAPABILITY_PILLARS = [
  {
    title: 'DESIGN',
    icon: <Palette className="w-4 h-4 text-rose-400" />,
    desc: 'Graphic systems, UI/UX flows, and brand asset crafting.',
  },
  {
    title: 'WEB',
    icon: <Code className="w-4 h-4 text-emerald-400" />,
    desc: 'Responsive frontend development and website management.',
  },
  {
    title: 'DIGITAL PRODUCTS',
    icon: <Layers className="w-4 h-4 text-sky-400" />,
    desc: 'Translating concepts into structured digital products.',
  },
  {
    title: 'SOCIAL',
    icon: <Share2 className="w-4 h-4 text-amber-400" />,
    desc: 'Visual social narratives and branded distribution design.',
  },
  {
    title: 'AI CREATIVE',
    icon: <Sparkles className="w-4 h-4 text-purple-400" />,
    desc: 'Structured prompt engineering & generative pipelines.',
  },
  {
    title: 'CREATIVE PRODUCTION',
    icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
    desc: 'End-to-end creative direction & asset optimization.',
  },
];

export default function QgraphyExperience() {
  return (
    <section id="experience" className="py-20 sm:py-24 md:py-36 bg-[#121110] text-[#F8F5EE] border-b border-white/10 relative overflow-hidden">
      {/* Subtle Background Accent Gradient */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <SectionHeading
          number="04"
          category="PROFESSIONAL EXPERIENCE"
          title="Q-GRAPHY"
          subtitle="Real-world internship experience spanning design systems, frontend code, and generative AI production."
          theme="dark"
        />

        {/* Hero Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-10 md:p-14 rounded-3xl bg-white/[0.03] border border-white/15 relative overflow-hidden mb-12 sm:mb-16"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] sm:text-xs mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE INTERNSHIP (ALMOST 1 YEAR)</span>
              </div>
              <h3 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white break-words">
                DESIGN & DIGITAL PRODUCT INTERN
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[var(--accent-light)] mt-2">
                NOV 2025 — PRESENT · Q-GRAPHY
              </p>
            </div>

            <div className="text-left lg:text-right font-mono text-[11px] sm:text-xs text-[#A8A29E] space-y-1">
              <p className="text-white font-semibold">LOCATION: INDIA</p>
              <p>DISCIPLINE: MULTIDISCIPLINARY</p>
              <p className="text-[var(--accent-light)]">STATUS: VERIFIED EXPERIENCE</p>
            </div>
          </div>

          {/* Working Across Grid */}
          <div className="pt-8 sm:pt-10">
            <h4 className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#A8A29E] mb-5 sm:mb-6">
              CORE SPHERES OF RESPONSIBILITY:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {CAPABILITY_PILLARS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[var(--accent)]/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-white/5">{item.icon}</span>
                    <span className="font-display font-bold text-sm sm:text-base uppercase text-white tracking-wide">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-[#A8A29E] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout: Timeline + Visual Artifact Slots */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Progression Timeline (6 cols) */}
          <div className="lg:col-span-6">
            <h4 className="font-display font-extrabold text-xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              MILESTONES & GROWTH
            </h4>
            <p className="font-mono text-xs text-[#A8A29E] mb-6 sm:mb-8">
              CHRONOLOGICAL OVERVIEW OF INTERNSHIP MILESTONES
            </p>
            <Timeline />
          </div>

          {/* Right: Project Screenshots / Visual Artifact Slots (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <h4 className="font-display font-extrabold text-xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              EXPERIENCE ARTIFACTS
            </h4>
            <p className="font-mono text-xs text-[#A8A29E] mb-6 sm:mb-8">
              MODULAR ARTIFACT SLOTS (READY FOR CUSTOM SCREENSHOTS)
            </p>

            {/* Artifact Card 01 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group">
              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-xl bg-gradient-to-br from-[#1F1C18] to-[#121110] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] font-mono text-white/50">
                  <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">UI/UX SYSTEMS</span>
                  <span>Q-GRAPHY #01</span>
                </div>
                <div className="text-center my-auto py-2">
                  <ImageIcon className="w-7 h-7 text-[var(--accent)] mx-auto mb-2 opacity-80" />
                  <p className="font-display font-bold text-base sm:text-lg text-white uppercase">Product Interfaces & Components</p>
                  <p className="font-mono text-[11px] sm:text-xs text-white/50 mt-1">Design System Guidelines & Layouts</p>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-[var(--accent-light)]">
                  <span>PRODUCTION READY</span>
                  <span className="text-white/40">UPLOADABLE SLOT</span>
                </div>
              </div>
            </div>

            {/* Artifact Card 02 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group">
              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-xl bg-gradient-to-br from-[#161B1E] to-[#0E1114] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] font-mono text-white/50">
                  <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">AI WORKFLOWS</span>
                  <span>Q-GRAPHY #02</span>
                </div>
                <div className="text-center my-auto py-2">
                  <Sparkles className="w-7 h-7 text-sky-400 mx-auto mb-2 opacity-80" />
                  <p className="font-display font-bold text-base sm:text-lg text-white uppercase">Structured Generative Systems</p>
                  <p className="font-mono text-[11px] sm:text-xs text-white/50 mt-1">Prompt Blueprints & Automation</p>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-sky-300">
                  <span>SYSTEMATIZED WORKFLOW</span>
                  <span className="text-white/40">UPLOADABLE SLOT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
