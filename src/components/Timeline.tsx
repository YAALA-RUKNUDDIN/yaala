'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Briefcase, Sparkles, Layers, ArrowRight } from 'lucide-react';

const TIMELINE_EVENTS = [
  {
    period: 'NOV 2025',
    title: 'Joined Q-graphy as Intern',
    role: 'Design & Digital Product Intern',
    summary: 'Onboarded into multi-disciplinary creative and product workflows. Commenced hands-on design system exploration and frontend architecture.',
    highlights: ['Design System Onboarding', 'UI/UX Foundation', 'Frontend Setup'],
  },
  {
    period: 'Q1 2026',
    title: 'UI/UX & Web Management Expansion',
    role: 'Web & Digital Experience',
    summary: 'Took ownership of responsive website management, crafting modular visual components, and standardizing typography and design tokens.',
    highlights: ['Responsive Frontend Web', 'Website Management', 'Component Architecture'],
  },
  {
    period: 'MID 2026 — PRESENT',
    title: 'AI Workflows & Multi-Modal Production',
    role: 'AI Creative & Product Pipelines',
    summary: 'Integrated structured prompt engineering pipelines, accelerating creative concept generation, social media assets, and digital product feature delivery.',
    highlights: ['Structured Prompt Engineering', 'Creative Direction', 'Social Asset Systems'],
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-white/15 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12 my-12">
      {TIMELINE_EVENTS.map((event, idx) => (
        <motion.div
          key={event.period}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Timeline Node Icon */}
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#121110] border-2 border-[var(--accent)] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          </div>

          {/* Time Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[var(--accent-light)] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{event.period}</span>
          </div>

          {/* Event Content */}
          <h4 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-[var(--accent-light)] transition-colors">
            {event.title}
          </h4>

          <p className="font-mono text-xs text-[#A8A29E] mt-1 uppercase tracking-wider">
            {event.role}
          </p>

          <p className="mt-3 text-sm sm:text-base text-[#A8A29E] leading-relaxed max-w-2xl font-normal">
            {event.summary}
          </p>

          {/* Key tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {event.highlights.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
