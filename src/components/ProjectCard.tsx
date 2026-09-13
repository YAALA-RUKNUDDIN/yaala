'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { ArrowUpRight, Briefcase, FlaskConical, Lightbulb, Eye, Maximize2, X, Grid, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImageTab, setActiveImageTab] = useState<'grid' | 'mark'>('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const hasCustomImages = Boolean(project.image);

  return (
    <>
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
        {/* Visual Canvas Area */}
        <div className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-br ${project.bgGradient} p-5 sm:p-7 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
          {/* Subtle grid mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Ambient colored spotlight */}
          <div
            className="absolute -top-1/4 -right-1/4 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700 group-hover:opacity-45 group-hover:scale-110"
            style={{ backgroundColor: project.accentColor }}
          />

          {/* Top bar inside canvas */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono">
              {getBadgeIcon(project.type)}
              <span className="text-white/90 font-medium tracking-wide">{project.badge}</span>
            </div>

            <span className="font-mono text-xs text-white/50 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
              {project.year}
            </span>
          </div>

          {/* Center Visual: Real Uploaded Image / Logo OR Stylized Monogram */}
          {hasCustomImages ? (
            <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full py-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/15 backdrop-blur-sm p-4 flex items-center justify-center group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                {/* Image Display */}
                <Image
                  src={activeImageTab === 'grid' && project.image ? project.image : project.imageGrid || project.image!}
                  alt={`${project.title} Artwork`}
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  unoptimized
                  className={`object-contain p-2 transition-transform duration-500 ${
                    activeImageTab === 'mark' ? 'scale-90 group-hover:scale-100' : 'group-hover:scale-105'
                  }`}
                />

                {/* Switcher & Expand Badges */}
                <div className="absolute top-2 right-2 flex items-center gap-1.5 z-20">
                  {project.imageGrid && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageTab(activeImageTab === 'grid' ? 'mark' : 'grid');
                      }}
                      className="px-2 py-0.5 rounded-md bg-black/80 hover:bg-black text-[10px] font-mono text-white/80 hover:text-white border border-white/20 transition-all shadow-md flex items-center gap-1"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[var(--accent-light)]" />
                      <span>{activeImageTab === 'grid' ? 'VIEW MARK' : 'VIEW GRID'}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="p-1 rounded-md bg-black/80 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all shadow-md"
                    title="View Full Resolution"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 my-auto text-center py-6">
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1, y: isHovered ? -4 : 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex flex-col items-center justify-center p-5 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl max-w-[85%]"
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
          )}

          {/* Bottom bar inside canvas */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/60">
            <span className="truncate max-w-[70%]">ROLE: {project.role}</span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest shrink-0">
              CASE STUDY
            </span>
          </div>
        </div>

        {/* Card Information Footer */}
        <div className="p-5 sm:p-8 flex flex-col justify-between flex-1">
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

              <div
                onClick={() => {
                  if (hasCustomImages) setIsModalOpen(true);
                }}
                className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0 cursor-pointer"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#A8A29E] leading-relaxed font-normal mt-2.5">
              {project.description}
            </p>
          </div>

          {/* Deliverable Tags */}
          <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2">
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

      {/* Full-Screen Image Modal for Custom Projects */}
      <AnimatePresence>
        {isModalOpen && hasCustomImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl p-4 sm:p-8 md:p-12 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121110] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-6"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-xs text-[var(--accent-light)] uppercase tracking-widest font-semibold">
                    {project.number} / {project.category}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mt-1">
                    {project.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2.5 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {project.image && (
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/15 p-4 flex flex-col justify-between">
                    <span className="relative z-10 font-mono text-[10px] text-white/60 bg-black/60 px-2 py-0.5 rounded border border-white/10 self-start">
                      GEOMETRIC GRID & WORDMARK
                    </span>
                    <div className="relative w-full h-full my-auto">
                      <Image
                        src={project.image}
                        alt={`${project.title} Construction Grid`}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {project.imageGrid && (
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/15 p-4 flex flex-col justify-between">
                    <span className="relative z-10 font-mono text-[10px] text-white/60 bg-black/60 px-2 py-0.5 rounded border border-white/10 self-start">
                      STANDALONE LOGOMARK
                    </span>
                    <div className="relative w-full h-full my-auto">
                      <Image
                        src={project.imageGrid}
                        alt={`${project.title} Logomark`}
                        fill
                        unoptimized
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Project Brief & Rationale */}
              <div className="pt-2 text-sm sm:text-base text-[#A8A29E] leading-relaxed">
                <p className="text-white font-medium text-base sm:text-lg mb-2">{project.tagline}</p>
                <p>{project.description}</p>
              </div>

              {/* Deliverable Tags in Modal */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {project.deliverables.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/15 text-xs font-mono text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
