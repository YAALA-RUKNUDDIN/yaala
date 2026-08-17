'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { CAPABILITIES_DATA } from '@/data/projects';
import { Palette, Code, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const CATEGORY_ICONS = [
  <Palette key="1" className="w-5 h-5 text-rose-500" />,
  <Code key="2" className="w-5 h-5 text-emerald-500" />,
  <Layers key="3" className="w-5 h-5 text-sky-500" />,
  <Sparkles key="4" className="w-5 h-5 text-purple-500" />,
];

export default function Capabilities() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="capabilities" className="py-24 md:py-36 bg-[#F8F5EE] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionHeading
          number="07"
          category="CORE COMPETENCIES"
          title="WHAT I CAN DO"
          subtitle="A multidisciplinary toolset spanning aesthetic design systems, modern frontend engineering, and structured AI orchestration."
          theme="light"
        />

        {/* Interactive Master Capability Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Category Accordion/List (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {CAPABILITIES_DATA.map((category, index) => {
              const isActive = activeCategory === index;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveCategory(index)}
                  onMouseEnter={() => setActiveCategory(index)}
                  className={`p-6 sm:p-8 rounded-3xl cursor-pointer border transition-all duration-400 ${
                    isActive
                      ? 'bg-[#121110] text-[#F8F5EE] border-[#121110] shadow-xl'
                      : 'bg-white text-[#121110] border-black/10 hover:border-black/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isActive ? 'text-[var(--accent-light)]' : 'text-[#87827B]'
                        }`}
                      >
                        {category.number}
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isActive ? 'bg-white/10 text-white' : 'bg-black/[0.04] text-black'
                      }`}
                    >
                      {CATEGORY_ICONS[index]}
                    </div>
                  </div>

                  <p
                    className={`mt-3 text-sm leading-relaxed transition-colors ${
                      isActive ? 'text-[#A8A29E]' : 'text-[#57534E]'
                    }`}
                  >
                    {category.summary}
                  </p>

                  {/* Skills Pills in Active Category */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2"
                    >
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#F8F5EE] border border-white/15"
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: Large Editorial Focus Card (6 cols) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1A1816] to-[#0E0E0D] text-[#F8F5EE] border border-white/15 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 font-mono text-xs text-[var(--accent-light)]">
                    <span>DISCIPLINE SHOWCASE</span>
                    <span>{CAPABILITIES_DATA[activeCategory].number} / 04</span>
                  </div>

                  <h4 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mt-8">
                    {CAPABILITIES_DATA[activeCategory].title}
                  </h4>

                  <p className="mt-4 text-base sm:text-lg text-[#A8A29E] leading-relaxed">
                    {CAPABILITIES_DATA[activeCategory].summary}
                  </p>

                  <div className="mt-8 space-y-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">
                      KEY DELIVERABLES & EXPERTISE:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {CAPABILITIES_DATA[activeCategory].skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2.5 text-xs font-mono text-white/90 p-2.5 rounded-lg bg-white/[0.04] border border-white/10"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-light)] shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[var(--accent-light)]">
                  <span>PHILOSOPHY: {CAPABILITIES_DATA[activeCategory].highlight}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
