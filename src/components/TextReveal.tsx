'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
  delay?: number;
  stagger?: number;
  inHero?: boolean;
}

export default function TextReveal({
  text,
  className = '',
  tag: Tag = 'div',
  delay = 0,
  stagger = 0.035,
  inHero = false,
}: TextRevealProps) {
  const words = text.split(' ');

  return (
    <Tag className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.05em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-[0.02em]">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            {...(inHero
              ? {
                  animate: { y: '0%', opacity: 1 },
                }
              : {
                  whileInView: { y: '0%', opacity: 1 },
                  viewport: { once: true, margin: '0px' },
                })}
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block whitespace-nowrap"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
