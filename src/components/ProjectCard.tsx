'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { ArrowUpRight, Briefcase, FlaskConical, Lightbulb } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeIcon = (type: Project['type']) => {
    switch (type) {
      case 'professional':
        return <Briefcase className="w-3.5 h-3.5 text-emerald-400" />;
      case 'experiment':
        return <FlaskConical className="w-3.5 h-3.5 text-amber-400" />;
      case 'concept':
        return <Lightbulb className="w-3.5 h-3.5 text-sky-400" />;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor-project
      className="group relative flex flex-col justify-between rounded-3xl bg-[#121110] text-[#F8F5EE] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-500 shadow-xl"
    >
      {/* Visual Canvas Area (Polished Modular Placeholder System) */}
      <div className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-br ${project.bgGradient} p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Ambient colored spotlight */}
        <div
          className="absolute -top-1/4 -right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700 group-hover:opacity-40 group-hover:scale-110"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Top bar inside canvas */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs font-mono">
            {getBadgeIcon(project.type)}
            <span className="text-white/90 font-medium tracking-wide">{project.badge}</span>
          </div>

          <span className="font-mono text-xs text-white/50 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Center Editorial Visual Graphic / Monogram Artifact */}
        <div className="relative z-10 my-auto text-center py-6">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1, y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl max-w-[85%]"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
              PROJECT ARTIFACT / {project.number}
            </div>
            <h4 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-white">
              {project.title}
            </h4>
            <p className="font-mono text-xs text-white/70 mt-2 line-clamp-1 max-w-sm">
              {project.tagline}
            </p>
          </motion.div>
        </div>

        {/* Bottom bar inside canvas */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/60">
          <span>ROLE: {project.role}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest">
            MODULAR CASE STUDY
          </span>
        </div>
      </div>

      {/* Card Information Footer */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className="font-mono text-xs text-[var(--accent-light)] font-semibold tracking-widest">
                {project.number} / {project.category}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mt-1 group-hover:text-[var(--accent-light)] transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#A8A29E] leading-relaxed font-normal mt-3">
            {project.description}
          </p>
        </div>

        {/* Deliverable Tags */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {project.deliverables.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
