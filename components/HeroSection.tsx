'use client'

import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import { MouseEvent, useRef } from 'react'
import AnimatedText from './AnimatedText'
import CtaButton from './CtaButton'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.86, ease: [0.22, 1, 0.36, 1] },
  },
}

function PlantDecoration() {
  return (
    <svg
      viewBox="0 0 140 230"
      className="h-full w-full text-yoga-cta/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M62 220 C58 172 64 116 78 52" />
      <path d="M77 60 C55 62 43 49 37 31 C59 32 73 42 77 60Z" />
      <path d="M70 96 C49 99 35 90 28 72 C49 72 63 80 70 96Z" />
      <path d="M66 134 C43 133 30 120 24 100 C47 103 61 114 66 134Z" />
      <path d="M73 112 C93 101 109 106 122 122 C101 130 84 126 73 112Z" />
      <path d="M68 164 C88 154 106 159 119 174 C98 182 80 178 68 164Z" />
      <path d="M80 51 C91 34 105 27 122 29 C114 47 99 56 80 51Z" />
      <path d="M54 182 C38 181 27 172 20 157" />
      <path d="M82 146 C98 141 113 145 126 157" />
    </svg>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24, mass: 0.4 })
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24, mass: 0.4 })
  const photoX = useTransform(smoothX, [-1, 1], shouldReduceMotion ? [0, 0] : [-10, 10])
  const photoMouseY = useTransform(smoothY, [-1, 1], shouldReduceMotion ? [0, 0] : [-8, 8])
  const plantX = useTransform(smoothX, [-1, 1], shouldReduceMotion ? [0, 0] : [8, -8])
  const plantY = useTransform(smoothY, [-1, 1], shouldReduceMotion ? [0, 0] : [10, -10])
  const titleX = useTransform(smoothX, [-1, 1], shouldReduceMotion ? [0, 0] : [4, -4])
  const offerX = useTransform(smoothX, [-1, 1], shouldReduceMotion ? [0, 0] : [7, -7])
  const offerY = useTransform(smoothY, [-1, 1], shouldReduceMotion ? [0, 0] : [5, -5])
  const ctaX = useTransform(smoothX, [-1, 1], shouldReduceMotion ? [0, 0] : [5, -5])
  const ctaY = useTransform(smoothY, [-1, 1], shouldReduceMotion ? [0, 0] : [4, -4])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const scrollPhotoY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 72])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.02, shouldReduceMotion ? 1.02 : 0.96])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 34])

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2)
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#fffaf6] pt-16 md:pt-[72px]"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_20%,rgba(212,230,213,0.46),transparent_28rem),radial-gradient(circle_at_82%_72%,rgba(232,213,208,0.5),transparent_34rem),linear-gradient(105deg,#fffaf6_0%,#fff_50%,#eef7ee_100%)]"
      />

      <motion.div
        style={{ x: photoX, y: scrollPhotoY, scale: photoScale }}
        className="absolute bottom-0 right-0 top-0 z-0 hidden w-[70vw] overflow-hidden md:block lg:w-[72vw]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
        data-cursor
      >
        <motion.div
          style={{ y: photoMouseY }}
          className="absolute inset-0"
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.025 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero-yoga-photo.png"
            alt="明るいヨガスタジオで呼吸を整える女性"
            fill
            priority
            sizes="72vw"
            className="object-cover object-[62%_center]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fffaf6_0%,rgba(255,250,246,0.94)_18%,rgba(255,250,246,0.64)_34%,rgba(255,250,246,0.16)_58%,rgba(255,250,246,0.06)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative grid min-h-[700px] grid-cols-1 items-center gap-8 py-10 md:grid-cols-[0.44fr_0.56fr] md:py-14 lg:min-h-[740px]">
          <motion.div
            className="relative z-10 pt-12 md:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              style={{ x: plantX, y: plantY }}
              className="pointer-events-none absolute -left-[7.1rem] top-28 hidden h-72 w-40 opacity-45 md:block"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <PlantDecoration />
            </motion.div>

            <motion.h1
              style={{ x: titleX }}
              variants={fadeUpVariants}
              className="font-mincho text-[2.28rem] leading-[1.72] tracking-normal text-yoga-brown/95 md:text-[3.05rem] md:leading-[1.6] md:tracking-[0.045em] lg:text-[3.42rem]"
            >
              <span className="block md:whitespace-nowrap">
                <AnimatedText text="整うだけじゃない。" />
              </span>
              <span className="block md:whitespace-nowrap">
                <AnimatedText text="キレイ" className="text-yoga-rose" />
                <AnimatedText text="もついてくるヨガ。" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-[35rem] font-mincho text-lg leading-[2.15] tracking-[0.08em] text-yoga-muted md:text-xl"
            >
              初心者歓迎。少人数制で、<br />
              心と体をやさしく整える体験レッスン。
            </motion.p>

            <motion.div
              style={{ x: offerX, y: offerY }}
              className="mt-8 max-w-[38rem] rounded-2xl border border-yoga-pink/80 bg-white/82 p-5 shadow-[0_22px_60px_rgb(75_61_51/0.09)] backdrop-blur"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6, scale: 1.012 }}
              transition={{ delay: 0.68, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              data-cursor
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-yoga-pink/60 font-mincho text-xs leading-tight text-yoga-brown">
                  LINE<br />登録で
                </span>
                <span className="font-mincho text-lg text-yoga-brown">体験レッスン</span>
                <span className="font-mincho text-5xl leading-none text-yoga-rose md:text-[3.45rem]">500円OFF</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="mt-6">
              <motion.div style={{ x: ctaX, y: ctaY }} className="inline-block w-full sm:w-auto">
                <CtaButton
                  label="LINEで体験レッスンを予約する"
                  size="lg"
                  variant="line"
                  className="w-full max-w-[34rem] sm:w-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ x: photoX, y: scrollPhotoY, scale: photoScale }}
            className="relative mt-8 h-[430px] w-full overflow-hidden rounded-[1.2rem] bg-white/50 md:hidden"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
            data-cursor
          >
            <motion.div
              style={{ y: photoMouseY }}
              className="absolute inset-0"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.035 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/hero-yoga-photo.png"
                alt="明るいヨガスタジオで呼吸を整える女性"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[63%_center]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#fffaf6_0%,rgba(255,250,246,0.64)_18%,rgba(255,250,246,0.06)_48%,rgba(255,250,246,0.12)_100%)]" />
            <div className="absolute inset-y-0 left-0 hidden w-60 bg-gradient-to-r from-[#fffaf6] via-[#fffaf6]/78 to-transparent md:block" />
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white via-white/48 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
