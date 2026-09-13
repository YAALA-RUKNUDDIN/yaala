'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { PROCESS_STEPS } from '@/data/projects';
import { HelpCircle, Compass, Palette, Code, RefreshCw, Send } from 'lucide-react';

const STEP_ICONS = [
  <HelpCircle key="1" className="w-5 h-5 text-sky-500" />,
  <Compass key="2" className="w-5 h-5 text-amber-500" />,
  <Palette key="3" className="w-5 h-5 text-rose-500" />,
  <Code key="4" className="w-5 h-5 text-emerald-500" />,
  <RefreshCw key="5" className="w-5 h-5 text-purple-500" />,
  <Send key="6" className="w-5 h-5 text-[var(--accent)]" />,
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-36 bg-[#F8F5EE] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionHeading
          number="06"
          category="METHODOLOGY & EXECUTION"
          title="THE WAY I WORK"
          subtitle="A structured, six-stage approach to deconstructing challenges, designing with clarity, and building with rigor."
          theme="light"
        />

        {/* 6-Grid Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 rounded-3xl bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Step Top Row */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
                  <span className="font-display font-black text-2xl text-[var(--accent-dark)] group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-black/[0.03] border border-black/10">
                    {STEP_ICONS[idx]}
                  </div>
                </div>

                <p className="font-mono text-xs uppercase tracking-widest text-[#87827B] mb-2">
                  {step.subtitle}
                </p>

                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#121110] group-hover:text-[var(--accent-dark)] transition-colors">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[#57534E] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Progress indicator micro-line */}
              <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono text-[#87827B]">
                <span>STAGE 0{idx + 1} OF 06</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
