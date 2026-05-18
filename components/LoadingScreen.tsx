'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let current = 0
    const startedAt = window.performance.now()

    const timer = window.setInterval(() => {
      current = Math.min(100, current + Math.floor(Math.random() * 7) + 5)
      setProgress(current)

      if (current >= 100) {
        window.clearInterval(timer)
        const elapsed = window.performance.now() - startedAt
        window.setTimeout(() => setIsVisible(false), Math.max(360, 980 - elapsed))
      }
    }, 80)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[linear-gradient(135deg,#fffaf7_0%,#fff_52%,#edf5ea_100%)]"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', filter: 'blur(10px)' }}
          transition={{ duration: 1.05, ease: [0.8, 0, 0.2, 1] }}
          aria-label="ページを読み込み中"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(232,213,208,0.44),transparent_19rem),radial-gradient(circle_at_42%_58%,rgba(212,230,213,0.5),transparent_22rem)]"
            animate={{ scale: [1, 1.035, 1], opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-sm px-8 text-center">
            <motion.div
              className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border border-yoga-green/45 bg-white/72 shadow-[0_22px_70px_rgb(75_61_51/0.1)] backdrop-blur"
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: [0, -7, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <span className="font-mincho text-2xl text-yoga-cta">L</span>
            </motion.div>
            <motion.p
              className="mb-2 font-mincho text-3xl tracking-[0.18em] text-yoga-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              Luna Yoga
            </motion.p>
            <motion.p
              className="mb-7 font-elegant text-sm font-medium text-yoga-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24, duration: 0.72 }}
            >
              breathe into quiet
            </motion.p>
            <div className="h-px overflow-hidden rounded-full bg-yoga-green/30">
              <motion.div
                className="h-full rounded-full bg-yoga-line"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="mt-5 font-elegant text-sm font-semibold text-yoga-muted">
              {String(progress).padStart(3, '0')}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
