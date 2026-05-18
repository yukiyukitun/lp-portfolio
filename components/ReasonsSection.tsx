'use client'

import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import Reveal from './Reveal'

const reasons = [
  { icon: '♡', title: '初心者満足度 98%', desc: 'はじめての方でも安心して続けられるようサポート。' },
  { icon: '☼', title: '豊富なレッスン時間', desc: '朝から夜まで開講。生活リズムに合わせて選べます。' },
  { icon: '♧', title: '経験豊富な講師', desc: '資格を持つ講師が一人ひとりに寄り添います。' },
  { icon: '◌', title: '女性専用の安心空間', desc: '周りを気にせず、穏やかな時間を過ごせます。' },
  { icon: '▢', title: 'LINEで簡単予約', desc: '空き状況の確認から予約までLINEで完結。' },
]

export default function ReasonsSection() {
  return (
    <section className="bg-yoga-base/65 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-11 text-center">
          <div className="mx-auto mb-4 flex max-w-lg items-center gap-4">
            <span className="fine-line flex-1" />
            <p className="font-elegant text-sm font-semibold text-yoga-cta">WHY LUNA YOGA</p>
            <span className="fine-line flex-1" />
          </div>
          <h2 className="font-mincho text-2xl tracking-[0.12em] text-yoga-brown md:text-3xl">
            <AnimatedText text="ルナヨガが選ばれる理由" />
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 rounded-2xl bg-white/35 py-3 md:grid-cols-5 md:gap-0">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.title}
              delay={index * 80}
              className="border-yoga-pink/45 px-5 py-5 text-center md:border-r md:px-7 md:last:border-r-0"
            >
              <motion.article
                className="h-full"
                whileHover={{ y: -7, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                data-cursor
              >
              <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full border border-yoga-pink/55 bg-white/80 font-mincho text-4xl text-yoga-rose shadow-[0_14px_34px_rgb(75_61_51/0.06)]">
                {reason.icon}
              </div>
              <h3 className="font-mincho text-lg font-semibold text-yoga-brown">{reason.title}</h3>
              <p className="mt-3 text-sm leading-[1.85] text-yoga-muted">{reason.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
