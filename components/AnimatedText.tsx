'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  return (
    <motion.span
      className={['inline-block', className].join(' ')}
      data-cursor
      data-cursor-hover
      aria-label={text}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block will-change-transform"
          aria-hidden="true"
          whileHover={{
            y: -5,
            rotate: index % 2 === 0 ? -1 : 1,
            scale: 1.05,
          }}
          transition={{
            type: 'spring',
            stiffness: 420,
            damping: 18,
            mass: 0.42,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
