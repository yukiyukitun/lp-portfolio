'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import CtaButton from './CtaButton'

export default function StickyMobileCta() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 260], [96, 0])
  const opacity = useTransform(scrollY, [0, 260], [0, 1])

  return (
    <motion.div
      style={{ y, opacity }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-yoga-green/25 bg-white/88 px-4 py-3 shadow-[0_-14px_40px_rgb(75_61_51/0.12)] backdrop-blur-md md:hidden"
    >
      <CtaButton
        label="LINEで空き状況を確認"
        size="md"
        variant="line"
        className="w-full"
      />
    </motion.div>
  )
}
