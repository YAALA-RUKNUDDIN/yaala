'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Code2, Layers, Cpu } from 'lucide-react';

export default function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] mx-auto perspective-[1200px]"
    >
      {/* 3D Tilted Visual Canvas */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10"
      >
        {/* Editorial Frame Mask */}
        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#121110] border border-black/15 shadow-2xl group">
          {/* Main Profile Photo - High Res & Crystal Clear */}
          <Image
            src="/images/profile.png"
            alt="Yaala — Designer × Developer × AI Creative"
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 450px, 520px"
            priority
            unoptimized
            quality={100}
            className="object-cover object-[center_28%] scale-[1.0] group-hover:scale-103 transition-all duration-700 ease-out"
          />

          {/* Interactive Crosshair & Technical Metadata Overlay */}
          <div className="absolute inset-0 pointer-events-none p-3 sm:p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start text-[9px] sm:text-[10px] font-mono text-white/90">
              <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE · Q-GRAPHY
              </span>
              <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-md">
                INDIA
              </span>
            </div>

            <div className="flex justify-between items-end text-[9px] sm:text-[10px] font-mono text-white">
              <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 shadow-lg">
                <p className="font-bold tracking-wider text-white">YAALA</p>
                <p className="text-[8px] sm:text-[9px] text-white/80">PRODUCT & CREATIVE TECH</p>
              </div>
              <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 shadow-lg text-right">
                <p className="text-[8px] sm:text-[9px] text-white/80">SYSTEM ID</p>
                <p className="font-bold text-[var(--accent-light)]">#YR-2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Metadata Card 01 — Top Left (Desktop & Tablet) */}
        <motion.div
          animate={{
            y: isHovered ? -8 : 0,
            x: isHovered ? -8 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{ transform: 'translateZ(40px)' }}
          className="absolute -top-4 -left-3 sm:-top-6 sm:-left-8 z-20 hidden sm:flex items-center gap-3 bg-[#F8F5EE] border border-black/15 shadow-xl px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-left"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#121110] text-[#F8F5EE] flex items-center justify-center">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent)]" />
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase text-[#87827B]">01 / CRAFT</p>
            <p className="font-display font-bold text-xs uppercase tracking-wide text-[#121110]">
              UI/UX & Systems
            </p>
          </div>
        </motion.div>

        {/* Floating Metadata Card 02 — Top Right */}
        <motion.div
          animate={{
            y: isHovered ? -6 : 0,
            x: isHovered ? 8 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{ transform: 'translateZ(45px)' }}
          className="absolute -top-4 -right-3 sm:-top-4 sm:-right-8 z-20 hidden sm:flex items-center gap-3 bg-[#F8F5EE] border border-black/15 shadow-xl px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-left"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#121110] text-[#F8F5EE] flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase text-[#87827B]">02 / ENGINE</p>
            <p className="font-display font-bold text-xs uppercase tracking-wide text-[#121110]">
              Frontend & Python
            </p>
          </div>
        </motion.div>

        {/* Floating Circular Monogram Badge — Bottom Right */}
        <motion.div
          animate={{
            rotate: isHovered ? 12 : 0,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.5 }}
          style={{ transform: 'translateZ(60px)' }}
          className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 z-20 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#121110] border-2 border-[#F8F5EE] shadow-2xl p-2 sm:p-2.5 flex items-center justify-center"
        >
          <Image
            src="/images/logo-mark-white.png"
            alt="YAALA Seal"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Ambient Radial Glow Behind Image */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--accent)]/20 via-transparent to-black/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />
    </div>
  );
}
