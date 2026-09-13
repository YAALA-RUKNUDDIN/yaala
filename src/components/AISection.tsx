'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import AIWorkflow from './AIWorkflow';
import TextReveal from './TextReveal';

export default function AISection() {
  return (
    <section id="ai-section" className="py-20 sm:py-24 md:py-36 bg-[#0E0E0D] text-[#F8F5EE] border-b border-white/10 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <SectionHeading
          number="05"
          category="AI CREATIVE & PROMPT ENGINEERING"
          title="EXPANDING CREATIVITY"
          theme="dark"
        />

        {/* Giant Headline Statement */}
        <div className="mb-10 sm:mb-16">
          <div className="font-display font-black uppercase text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.94] text-white flex flex-col gap-1 sm:gap-2 max-w-full">
            <div>
              <TextReveal text="I DON'T JUST USE AI." delay={0.05} />
            </div>
            <div className="text-[var(--accent-light)] font-serif italic normal-case tracking-normal">
              <TextReveal text="I know how to" delay={0.18} />
            </div>
            <div>
              <TextReveal text="TALK TO IT." delay={0.3} />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-[#A8A29E] leading-relaxed max-w-3xl font-normal"
          >
            I build structured prompts and creative workflows that help AI understand a requirement, preserve intent, and produce more useful outputs.
          </motion.p>
        </div>

        {/* Interactive AI Workflow Engine */}
        <AIWorkflow />
      </div>
    </section>
  );
}
