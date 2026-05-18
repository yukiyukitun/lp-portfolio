'use client'

import { motion, type Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: 'blur(10px)',
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay,
      duration: 0.92,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  amount = 0.18,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      custom={delay / 1000}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </motion.div>
  )
}
