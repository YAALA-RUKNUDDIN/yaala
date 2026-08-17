'use client';

import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import Image from 'next/image';
import { Terminal, Lightbulb, Compass, Zap } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#F8F5EE] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center justify-between mb-12 sm:mb-16 border-b border-black/10 pb-4 font-mono text-xs uppercase tracking-widest text-[#87827B]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 border border-black/30 rounded-full text-[10px]">01</span>
            <span>INTRODUCTION & PERSPECTIVE</span>
          </div>
          <span className="hidden sm:inline">MULTIDISCIPLINARY DNA</span>
        </div>

        {/* Big Editorial Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Headline: Oversized stacked statement (7 cols) */}
          <div className="lg:col-span-7 font-display font-extrabold uppercase text-[#121110] leading-[0.92] text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] tracking-tight flex flex-col gap-1 sm:gap-2">
            <div>
              <TextReveal text="I'M THE" delay={0.05} />
            </div>
            <div className="text-[var(--accent-dark)]">
              <TextReveal text="DESIGNER" delay={0.15} />
            </div>
            <div>
              <TextReveal text="WHO THINKS" delay={0.25} />
            </div>
            <div className="font-serif italic normal-case tracking-normal text-[#121110]">
              <TextReveal text="about the" delay={0.35} />
            </div>
            <div>
              <TextReveal text="DETAILS." delay={0.45} />
            </div>
          </div>

          {/* Right Column: Editorial Narrative + Highlight Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-lg sm:text-xl md:text-2xl text-[#57534E] leading-relaxed font-normal"
            >
              <p>
                I&apos;m interested in the space where <strong className="text-[#121110] font-semibold">design, technology, and AI</strong> meet.
              </p>
              <p>
                I like understanding an idea, designing the experience, building the interface, and refining what comes after.
              </p>
            </motion.div>

            {/* 4 Feature Micro-Cards Grid */}
            <div className="grid grid-cols-2 gap-4 pt-10 sm:pt-14">
              {[
                {
                  icon: <Compass className="w-4 h-4 text-[#8F724E]" />,
                  title: 'INTENTIONAL',
                  desc: 'Form follows function and clarity.',
                },
                {
                  icon: <Terminal className="w-4 h-4 text-emerald-600" />,
                  title: 'CODE-DRIVEN',
                  desc: 'Bridging Figma to working software.',
                },
                {
                  icon: <Lightbulb className="w-4 h-4 text-amber-600" />,
                  title: 'AI INTEGRATED',
                  desc: 'Structured prompts for real output.',
                },
                {
                  icon: <Zap className="w-4 h-4 text-indigo-600" />,
                  title: 'CONTINUOUS',
                  desc: 'Iterating until friction is zero.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className="p-4 rounded-xl bg-black/[0.03] border border-black/10 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-1.5 rounded-md bg-white border border-black/10">
                      {item.icon}
                    </span>
                    <span className="font-mono text-[10px] text-[#87827B]">0{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-[#121110]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#57534E] mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
