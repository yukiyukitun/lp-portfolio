'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedText from './AnimatedText'

interface CtaButtonProps {
  label: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'line' | 'outline'
  className?: string
}

const LINE_ICON = (
  <svg
    className="h-5 w-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
)

const SIZE_CLASSES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-11 py-[1.05rem] text-lg md:px-12 md:text-[1.08rem]',
}

const VARIANT_CLASSES = {
  line: 'bg-yoga-line text-white shadow-[0_14px_30px_rgb(79_164_99/0.24)] hover:bg-yoga-cta hover:shadow-[0_18px_42px_rgb(79_164_99/0.28)]',
  outline: 'bg-white/70 text-yoga-cta border border-yoga-cta/35 hover:bg-yoga-beige/80',
}

export default function CtaButton({
  label,
  href = '#line',
  size = 'md',
  variant = 'line',
  className = '',
}: CtaButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      aria-label={label}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.018 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      className={[
        'group inline-flex items-center justify-center gap-2',
        'relative overflow-hidden font-medium rounded-full',
        'transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-cta/40 focus-visible:ring-offset-2',
        SIZE_CLASSES[size],
        VARIANT_CLASSES[variant],
        className,
      ].join(' ')}
    >
      {variant === 'line' && (
        <span
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 blur-sm transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
      {variant === 'line' && LINE_ICON}
      <span>
        <AnimatedText text={label} />
      </span>
      <motion.span
        className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/22 text-sm"
        animate={{ x: isHovered ? 6 : 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        aria-hidden="true"
      >
        →
      </motion.span>
    </motion.a>
  )
}
