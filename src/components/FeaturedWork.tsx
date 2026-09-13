'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { Sparkles, Layers } from 'lucide-react';

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'professional' | 'experiment' | 'concept'>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.type === activeFilter;
  });

  return (
    <section id="work" className="py-24 md:py-36 bg-[#121110] text-[#F8F5EE] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionHeading
          number="03"
          category="FEATURED PORTFOLIO"
          title="SELECTED WORK"
          subtitle="A mix of real-world professional experience, AI-assisted workflows, and personal product experiments."
          theme="dark"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {[
            { label: 'ALL WORK', value: 'all', count: PROJECTS_DATA.length },
            {
              label: 'PROFESSIONAL EXPERIENCE',
              value: 'professional',
              count: PROJECTS_DATA.filter((p) => p.type === 'professional').length,
            },
            {
              label: 'PERSONAL EXPERIMENTS',
              value: 'experiment',
              count: PROJECTS_DATA.filter((p) => p.type === 'experiment').length,
            },
            {
              label: 'INDEPENDENT CONCEPTS',
              value: 'concept',
              count: PROJECTS_DATA.filter((p) => p.type === 'concept').length,
            },
          ].map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveFilter(tab.value as any)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                activeFilter === tab.value
                  ? 'bg-[#F8F5EE] text-[#121110] border-[#F8F5EE] font-semibold shadow-md'
                  : 'bg-white/[0.03] text-[#A8A29E] border-white/10 hover:border-white/30 hover:text-[#F8F5EE]'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === tab.value ? 'bg-black/10 text-black' : 'bg-white/10 text-white/70'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* Modular Architecture Callout Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#A8A29E]"
        >
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-white/5 text-[var(--accent-light)]">
              <Layers className="w-4 h-4" />
            </span>
            <span>MODULAR ARCHITECTURE: Add or modify projects via `src/data/projects.ts` without touching components.</span>
          </div>
          <a
            href="#experience"
            className="text-[var(--accent-light)] hover:underline whitespace-nowrap"
          >
            VIEW DETAILED EXPERIENCE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
