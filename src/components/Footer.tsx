'use client';

import Image from 'next/image';
import { ArrowUp, Heart } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0908] text-[#F8F5EE] py-16 md:py-20 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-white/10">
          {/* Logo & Brand Lockup */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo-mark-white.png"
                alt="YAALA Logo Mark"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-display font-black text-xl tracking-[0.2em] text-white">
                YAALA
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-[#87827B]">
                DESIGN × DEVELOPMENT × AI
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs uppercase tracking-widest text-[#A8A29E]">
            {[
              { label: 'ABOUT', href: '#about' },
              { label: 'WORK', href: '#work' },
              { label: 'EXPERIENCE', href: '#experience' },
              { label: 'AI CREATIVE', href: '#ai-section' },
              { label: 'CAPABILITIES', href: '#capabilities' },
              { label: 'CONTACT', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <MagneticButton onClick={scrollToTop} strength={0.3}>
            <div className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </MagneticButton>
        </div>

        {/* Bottom Legal / Year Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#87827B]">
          <p>© {new Date().getFullYear()} YAALA. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1.5">
            <span>BUILT WITH PRECISION & INTENTION</span>
          </p>
          <p>HOSTED ON VERCEL</p>
        </div>
      </div>
    </footer>
  );
}
