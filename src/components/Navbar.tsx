'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MobileMenu from './MobileMenu';
import MagneticButton from './MagneticButton';
import { Menu, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/projects';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'py-3.5 bg-[#F8F5EE]/85 backdrop-blur-md border-b border-black/10 shadow-xs'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand / Logo */}
          <MagneticButton href="#" strength={0.2}>
            <div className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-mark.png"
                  alt="YAALA Logo Mark"
                  fill
                  sizes="36px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-sm md:text-base tracking-[0.25em] text-[#121110] leading-none">
                  YAALA
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#87827B] mt-0.5">
                  DESIGN × CODE × AI
                </span>
              </div>
            </div>
          </MagneticButton>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 border border-black/10 rounded-full px-6 py-2 bg-[#F8F5EE]/60 backdrop-blur-xs">
            {[
              { label: 'ABOUT', href: '#about' },
              { label: 'WORK', href: '#work' },
              { label: 'EXPERIENCE', href: '#experience' },
              { label: 'AI CREATIVE', href: '#ai-section' },
              { label: 'CAPABILITIES', href: '#capabilities' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-[#57534E] hover:text-[#121110] transition-colors relative group py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#121110] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action / Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton href={SOCIAL_LINKS.email} strength={0.3}>
              <div className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121110] text-[#F8F5EE] hover:bg-[#8F724E] transition-colors duration-300 font-mono text-xs uppercase tracking-wider font-medium overflow-hidden shadow-xs">
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full border border-black/15 bg-[#F8F5EE]/80 backdrop-blur-xs text-[#121110] hover:bg-black/5 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
