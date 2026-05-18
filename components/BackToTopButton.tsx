'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      setIsVisible(scrollTop > 640 && scrollTop > pageHeight * 0.45)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 z-[90] grid h-12 w-12 place-items-center rounded-full border border-yoga-pink/70 bg-white/86 text-yoga-cta shadow-[0_16px_44px_rgb(75_61_51/0.14)] backdrop-blur transition-colors duration-300 hover:bg-yoga-green/55 md:bottom-8 md:right-8 md:h-14 md:w-14"
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.94 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          aria-label="ページ上部へ戻る"
          data-cursor
        >
          <span className="font-mincho text-xl leading-none" aria-hidden="true">
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
