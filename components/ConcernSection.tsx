'use client'

import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import Reveal from './Reveal'

const concerns = [
  { text: '運動が苦手で続けられるか不安' },
  { text: '肩こりや姿勢の悪さが気になる' },
  { text: '忙しくて自分の時間がない' },
  { text: 'リフレッシュしたいけど何から始めたらいいかわからない' },
  { text: 'ヨガスタジオは敷居が高そう' },
]

export default function ConcernSection() {
  return (
    <section id="concern" className="relative overflow-hidden bg-white py-18 md:py-22">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-11 text-center">
          <div className="mx-auto mb-5 flex max-w-5xl items-center gap-5">
            <span className="fine-line flex-1" />
            <h2 className="font-mincho text-2xl tracking-[0.12em] text-yoga-brown md:text-[1.7rem]">
              <AnimatedText text="こんなお悩みありませんか？" />
            </h2>
            <span className="fine-line flex-1" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-5 md:gap-7">
          {concerns.map((item, index) => (
            <Reveal
              key={item.text}
              delay={index * 80}
              className="group min-h-[190px] rounded-[1.45rem] border border-yoga-pink/40 bg-yoga-base/75 px-5 py-7 text-center shadow-[0_18px_48px_rgb(75_61_51/0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-yoga-green/45 hover:bg-white"
            >
              <motion.article
                className="h-full"
                whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                data-cursor
              >
              <div className="mx-auto mb-5 grid h-24 w-24 place-items-center rounded-full bg-yoga-pink/55 text-yoga-brown/68">
                <svg viewBox="0 0 56 56" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 24c0-7 4.7-12 10.4-12 6 0 10.6 4.8 10.6 12" />
                  <path d="M19 24c-.6 7.5 3.7 13.2 9 13.2s9.6-5.7 9-13.2" />
                  <path d="M22 20c4-1.2 8.8-3.5 11.4-6.8" />
                  <path d="M31 16c2.5 2.8 5 4.2 8 4.8" />
                  <path d="M24 29c1.7 1.2 6.2 1.2 8 0" />
                  <path d="M19 42c2.7-2.9 5.8-4.2 9-4.2s6.3 1.3 9 4.2" />
                  <path d="M14 45c4-5 8.7-7.5 14-7.5S38 40 42 45" />
                  <path d="M17 30c-2.8.8-5 2.9-6.4 6.4" />
                  <path d="M39 30c2.8.8 5 2.9 6.4 6.4" />
                </svg>
              </div>
              <p className="text-[0.95rem] font-medium leading-[1.85] text-yoga-brown">{item.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-11 text-center">
          <p className="font-mincho text-xl tracking-[0.1em] text-yoga-brown md:text-2xl">
            <AnimatedText text="ルナヨガは、そんなあなたのためのヨガスタジオです。" />
          </p>
        </Reveal>
      </div>
    </section>
  )
}
