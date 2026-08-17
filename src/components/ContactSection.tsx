'use client';

import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';
import { SOCIAL_LINKS } from '@/data/projects';
import { Mail, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 md:py-44 bg-[#121110] text-[#F8F5EE] border-b border-white/10 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent)]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Top Monospace Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[var(--accent-light)] font-mono text-xs uppercase tracking-widest mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>OPEN FOR COLLABORATION & INQUIRIES</span>
        </motion.div>

        {/* Huge Headline Statement */}
        <div className="font-display font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] tracking-tight leading-[0.88] text-white max-w-5xl mb-8">
          <div className="overflow-hidden">
            <TextReveal text="LET'S MAKE" delay={0.05} />
          </div>
          <div className="overflow-hidden text-[var(--accent-light)] font-serif italic normal-case tracking-normal">
            <TextReveal text="something" delay={0.2} />
          </div>
          <div className="overflow-hidden">
            <TextReveal text="USEFUL." delay={0.35} />
          </div>
        </div>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl text-[#A8A29E] max-w-2xl font-normal leading-relaxed mb-12 sm:mb-16"
        >
          Have an idea, product, or digital experience that needs to be designed or built? Let’s create something extraordinary.
        </motion.p>

        {/* CTAs: Email, LinkedIn, GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Email CTA */}
          <MagneticButton href={SOCIAL_LINKS.email} strength={0.35}>
            <div className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F8F5EE] text-[#121110] hover:bg-[var(--accent-light)] transition-all duration-300 font-mono text-sm uppercase tracking-wider font-bold shadow-2xl">
              <Mail className="w-4 h-4 text-[#121110]" />
              <span>EMAIL ME</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </MagneticButton>

          {/* LinkedIn CTA */}
          <MagneticButton href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" strength={0.35}>
            <div className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/20 transition-all duration-300 font-mono text-sm uppercase tracking-wider font-semibold">
              <LinkedInIcon className="w-4 h-4 text-[#5DA3E8]" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </MagneticButton>

          {/* GitHub CTA */}
          <MagneticButton href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" strength={0.35}>
            <div className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/20 transition-all duration-300 font-mono text-sm uppercase tracking-wider font-semibold">
              <GitHubIcon className="w-4 h-4" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </MagneticButton>
        </motion.div>

        {/* Direct Email Address Display */}
        <div className="mt-12 text-xs font-mono text-[#87827B]">
          DIRECT CONTACT:{' '}
          <a
            href={SOCIAL_LINKS.email}
            className="text-white hover:text-[var(--accent-light)] transition-colors underline underline-offset-4"
          >
            yaalarukunuddin@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
