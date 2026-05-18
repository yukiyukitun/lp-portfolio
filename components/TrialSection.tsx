'use client'

import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import Reveal from './Reveal'

const lessonFlow = [
  { title: 'カウンセリング', desc: 'お悩みやご希望をお伺いします', icon: 'lotus' },
  { title: '呼吸とストレッチ', desc: '体をやさしくほぐし呼吸を整えます', icon: 'stretch' },
  { title: 'やさしいヨガの実践', desc: '初心者向けのポーズで心地よく動きます', icon: 'balance' },
  { title: 'リラックス・瞑想', desc: '心と体をゆるめて深いリラックスへ', icon: 'meditate' },
  { title: 'アフターティー', desc: 'ハーブティーでほっとひと息つけます', icon: 'tea' },
]

function StepIcon({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 64 64" className="mx-auto h-20 w-20 text-yoga-rose/78" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === 'tea' ? (
        <>
          <path d="M19 31h23v7a10 10 0 0 1-10 10h-3a10 10 0 0 1-10-10z" />
          <path d="M42 33h5a5 5 0 0 1 0 10h-5" />
          <path d="M17 51h34" />
          <path d="M25 19c-2 3 2 5 0 8" />
          <path d="M34 17c-2 3 2 5 0 8" />
        </>
      ) : type === 'stretch' ? (
        <>
          <circle cx="32" cy="16" r="5" />
          <path d="M31 22c-6 7-10 13-16 19" />
          <path d="M31 23c7 4 12 7 18 8" />
          <path d="M23 34c9 0 18 3 27 10" />
          <path d="M18 45c10-3 20-4 31-2" />
        </>
      ) : type === 'balance' ? (
        <>
          <circle cx="32" cy="15" r="5" />
          <path d="M32 21v24" />
          <path d="M17 30c9-5 21-5 30 0" />
          <path d="M32 45l-12 9" />
          <path d="M32 45l12 9" />
        </>
      ) : (
        <>
          <circle cx="32" cy="17" r="5" />
          <path d="M32 23v13" />
          <path d="M20 35c8 7 16 7 24 0" />
          <path d="M18 48c8-8 20-8 28 0" />
          <path d="M24 52h16" />
        </>
      )}
    </svg>
  )
}

export default function TrialSection() {
  return (
    <section id="trial" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-11 text-center">
          <div className="mx-auto mb-4 flex max-w-lg items-center gap-4">
            <span className="fine-line flex-1" />
            <p className="font-elegant text-sm font-semibold text-yoga-cta">TRIAL LESSON</p>
            <span className="fine-line flex-1" />
          </div>
          <h2 className="font-mincho text-2xl tracking-[0.12em] text-yoga-brown md:text-3xl">
            <AnimatedText text="体験レッスンの内容" />
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8">
          {lessonFlow.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="relative min-h-[235px] rounded-xl border border-yoga-pink/40 bg-white px-5 pb-7 pt-0 text-center shadow-[0_16px_40px_rgb(75_61_51/0.07)]"
            >
              <motion.article
                className="h-full"
                whileHover={{ y: -7, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                data-cursor
              >
              <span className="mx-auto -mt-5 mb-5 grid h-11 w-11 place-items-center rounded-full bg-yoga-pink font-mincho text-base text-white shadow-[0_8px_18px_rgb(215_167_161/0.3)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <StepIcon type={item.icon} />
              <h3 className="mt-4 font-mincho text-[1.05rem] text-yoga-brown">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.85] text-yoga-muted">{item.desc}</p>
              {index < lessonFlow.length - 1 && (
                <span className="absolute -right-7 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-yoga-pink/35 text-lg text-yoga-rose md:flex" aria-hidden="true">
                  →
                </span>
              )}
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 max-w-5xl rounded-full bg-yoga-beige/80 px-6 py-4 text-center text-base font-medium leading-relaxed text-yoga-muted">
          所要時間: 75分　|　持ち物: 動きやすい服装・タオル・お水（レンタルマット無料）
        </Reveal>
      </div>
    </section>
  )
}
