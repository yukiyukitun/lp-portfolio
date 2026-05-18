'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import CtaButton from './CtaButton'
import Reveal from './Reveal'

export default function PricingSection() {
  return (
    <section className="bg-yoga-base/65 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 text-center">
          <div className="mx-auto mb-4 flex max-w-lg items-center gap-4">
            <span className="fine-line flex-1" />
            <p className="text-xs tracking-[0.28em] text-yoga-cta">PRICE & CAMPAIGN</p>
            <span className="fine-line flex-1" />
          </div>
          <h2 className="font-mincho text-2xl tracking-[0.12em] text-yoga-brown md:text-3xl">
            <AnimatedText text="体験レッスン料金" />
          </h2>
        </Reveal>

        <Reveal className="grid overflow-hidden rounded-2xl border border-yoga-pink/40 bg-white p-5 shadow-[0_24px_64px_rgb(75_61_51/0.09)] lg:grid-cols-[0.95fr_0.95fr_1.45fr] lg:gap-5">
          <motion.div
            className="rounded-xl border border-yoga-pink/40 bg-white px-7 py-8 text-center"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            data-cursor
          >
            <h3 className="font-mincho text-2xl tracking-[0.08em] text-yoga-brown">
              体験レッスン料金
            </h3>
            <div className="mx-auto mt-6 max-w-[15rem] rounded-xl border border-yoga-beige bg-yoga-base/60 px-6 py-6">
              <p className="text-sm text-yoga-muted">通常価格</p>
              <p className="mt-2 font-mincho text-3xl text-yoga-brown">2,500円</p>
              <div className="mx-auto my-4 h-10 w-px bg-yoga-pink" />
              <p className="text-sm text-yoga-cta">LINE登録で</p>
              <p className="font-mincho text-[3.75rem] leading-none text-yoga-rose">2,000<span className="text-2xl">円</span></p>
              <p className="mt-1 text-sm text-yoga-muted">税込</p>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-5 min-h-[310px] overflow-hidden rounded-xl lg:mt-0"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            data-cursor
          >
              <Image
                src="/images/studio-photo.png"
                alt="明るいヨガスタジオの料金案内イメージ"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.045]"
              />
          </motion.div>

          <motion.div
            className="mt-5 rounded-xl border border-yoga-pink/50 bg-[linear-gradient(105deg,#fff_0%,#f1d8d3_58%,#edf5ea_100%)] p-8 text-center lg:mt-0"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            data-cursor
          >
            <p className="mx-auto mb-6 max-w-md rounded-full bg-yoga-rose/85 px-6 py-2.5 text-base text-white">
              今だけの特別キャンペーン
            </p>
            <p className="font-mincho text-2xl leading-relaxed text-yoga-brown">
              LINE登録で体験レッスンが
            </p>
            <p className="mt-2 font-mincho text-[3.65rem] text-yoga-rose">500円OFF!</p>
            <div className="mt-8">
              <CtaButton
                label="LINEで体験レッスンを予約する"
                size="lg"
                variant="line"
                className="w-full max-w-lg"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-yoga-muted">
              お一人様1回限り・当日入会で入会金0円
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
