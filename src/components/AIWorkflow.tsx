'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check, ArrowRight } from 'lucide-react';

const WORKFLOW_STEPS = [
  { step: '01', name: 'IDEA', desc: 'Raw Intent & Requirements' },
  { step: '02', name: 'PROMPT', desc: 'Structured Token Architecture' },
  { step: '03', name: 'AI', desc: 'Multi-Modal Generation Engine' },
  { step: '04', name: 'ITERATE', desc: 'Constraint Tuning & Feedback' },
  { step: '05', name: 'DESIGN', desc: 'Figma & Visual System Polish' },
  { step: '06', name: 'FINAL OUTPUT', desc: 'Production-Ready Asset / Code' },
];

const PROMPT_PARAMETERS = [
  {
    tag: '/context',
    color: 'text-sky-400',
    title: 'Context & Persona',
    content: 'Role: Senior Creative Technologist. Target: High-density editorial design for modern digital products.',
  },
  {
    tag: '/objective',
    color: 'text-emerald-400',
    title: 'Objective & Core Deliverable',
    content: 'Synthesize complex user mental models into an intuitive 3-step progressive disclosure flow.',
  },
  {
    tag: '/style',
    color: 'text-amber-400',
    title: 'Aesthetic & Typographic Constraints',
    content: 'Oversized display typography, warm cream background (#F8F5EE), monospace micro-labels, asymmetric balance.',
  },
  {
    tag: '/constraints',
    color: 'text-rose-400',
    title: 'Negative Constraints & Rules',
    content: 'No generic SaaS templates. No arbitrary decorative fluff. Zero layout shift. Strict accessible contrast.',
  },
  {
    tag: '/output',
    color: 'text-purple-400',
    title: 'Deterministic Output Structure',
    content: 'TypeScript component + Tailwind CSS classes + Framer Motion animation orchestration.',
  },
];

export default function AIWorkflow() {
  const [selectedTag, setSelectedTag] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = PROMPT_PARAMETERS.map((p) => `${p.tag} [${p.title}]\n${p.content}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Visual Pipeline Bar */}
      <div className="relative">
        <h4 className="font-mono text-xs uppercase tracking-widest text-[#A8A29E] mb-4 sm:mb-6">
          INTERACTIVE GENERATIVE PIPELINE
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {WORKFLOW_STEPS.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--accent)] transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="font-mono text-[10px] text-[var(--accent-light)] font-bold">
                  {s.step}
                </span>
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-white/30 hidden lg:block" />
                )}
              </div>
              <div>
                <h5 className="font-display font-bold text-xs sm:text-sm uppercase text-white tracking-wide group-hover:text-[var(--accent-light)] transition-colors">
                  {s.name}
                </h5>
                <p className="text-[10px] sm:text-[11px] font-mono text-[#87827B] mt-1 line-clamp-2">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Prompt Architecture Terminal */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#0B0B0A] border border-white/15 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-white/[0.04] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[11px] sm:text-xs text-white/60 ml-1 sm:ml-2 flex items-center gap-1.5 truncate">
              <Terminal className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
              <span className="truncate">prompt_architecture_blueprint</span>
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-white/60 hover:text-white px-2.5 sm:px-3 py-1 rounded-md bg-white/5 border border-white/10 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY SPEC</span>
              </>
            )}
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-8 font-mono text-xs sm:text-sm space-y-4">
          <div className="text-white/40 pb-2 border-b border-white/5 text-[10px] sm:text-[11px]">
            // STRUCTURED PROMPT METHODOLOGY — YAALA CREATIVE WORKFLOW
          </div>

          {/* Interactive Tag Selectors */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
            {PROMPT_PARAMETERS.map((param, index) => (
              <button
                key={param.tag}
                type="button"
                onClick={() => setSelectedTag(index)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border font-mono text-[11px] sm:text-xs transition-all ${
                  selectedTag === index
                    ? 'bg-white/15 border-[var(--accent)] text-white shadow-sm'
                    : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                <span className={`font-bold ${param.color}`}>{param.tag}</span>
              </button>
            ))}
          </div>

          {/* Active Tag Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 mt-3 sm:mt-4"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`font-bold ${PROMPT_PARAMETERS[selectedTag].color}`}>
                  {PROMPT_PARAMETERS[selectedTag].tag}
                </span>
                <span className="text-white/50 text-[11px] sm:text-xs">
                  — {PROMPT_PARAMETERS[selectedTag].title}
                </span>
              </div>
              <p className="text-white/90 leading-relaxed font-sans text-xs sm:text-base">
                {PROMPT_PARAMETERS[selectedTag].content}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* All Parameters Preview */}
          <div className="pt-4 sm:pt-6 space-y-2.5 sm:space-y-3 opacity-70 hover:opacity-100 transition-opacity">
            {PROMPT_PARAMETERS.map((p) => (
              <div key={p.tag} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-[11px] sm:text-xs font-mono">
                <span className={`font-bold shrink-0 ${p.color}`}>{p.tag}</span>
                <span className="text-[#A8A29E] leading-relaxed font-sans">{p.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
