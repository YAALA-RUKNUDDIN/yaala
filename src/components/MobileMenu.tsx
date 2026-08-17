'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/data/projects';
import { X, ArrowUpRight, Mail } from 'lucide-react';
import { LinkedInIcon } from './Icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', number: '01' },
  { label: 'SELECTED WORK', href: '#work', number: '02' },
  { label: 'Q-GRAPHY', href: '#experience', number: '03' },
  { label: 'AI CREATIVE', href: '#ai-section', number: '04' },
  { label: 'CAPABILITIES', href: '#capabilities', number: '05' },
  { label: 'PROCESS', href: '#process', number: '06' },
  { label: 'CONTACT', href: '#contact', number: '07' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerVariants: Variants = {
    closed: {
      opacity: 0,
      clipPath: 'circle(0% at 95% 5%)',
      transition: {
        duration: 0.45,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      clipPath: 'circle(150% at 95% 5%)',
      transition: {
        duration: 0.65,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants: Variants = {
    closed: { y: 30, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.12 + i * 0.05,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={containerVariants}
          className="fixed inset-0 z-[9990] bg-[#121110] text-[#F8F5EE] flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-y-auto"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-mark-white.png"
                alt="YAALA Logo"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-bold text-lg tracking-widest">YAALA</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-3 rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition-colors text-[#F8F5EE]"
              aria-label="Close Navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto py-8 flex flex-col gap-3 sm:gap-4">
            {NAV_ITEMS.map((item, i) => (
              <motion.div key={item.label} custom={i} variants={itemVariants}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between border-b border-white/5 pb-3 hover:border-[var(--accent)] transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[var(--accent-light)] opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.number}
                    </span>
                    <span className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight group-hover:text-[var(--accent-light)] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[var(--accent-light)]" />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Footer Metadata in Menu */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#A8A29E]">
            <div>
              <span>DESIGN × CODE × AI · BASED IN INDIA</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
