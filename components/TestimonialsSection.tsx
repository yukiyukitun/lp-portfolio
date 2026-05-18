'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import Reveal from './Reveal'

const testimonials = [
  {
    image: '/images/voice-women-photo-01.png',
    imageClassName: 'object-[50%_28%]',
    name: 'Kさん / 32歳 会社員',
    title: '運動が苦手な私でも楽しく続けられています',
    text: '体が硬くて不安でしたが、丁寧に教えてもらえて安心しました。肩こりも気になりにくくなりました。',
  },
  {
    image: '/images/voice-women-photo-02.png',
    imageClassName: 'object-[50%_25%]',
    name: 'Mさん / 38歳 主婦',
    title: '自分の時間を大切にできるようになりました',
    text: '忙しい毎日の中で、自分の呼吸に向き合う時間ができました。心も体も軽くなってきています。',
  },
  {
    image: '/images/voice-women-photo-03.png',
    imageClassName: 'object-[50%_27%]',
    name: 'Yさん / 29歳 会社員',
    title: '姿勢が良くなり、周りから褒められました',
    text: '続けるうちに姿勢や呼吸が整って、気持ちにも余裕が出ました。少人数なのも安心です。',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-11 text-center">
          <div className="mx-auto mb-4 flex max-w-lg items-center gap-4">
            <span className="fine-line flex-1" />
            <p className="font-elegant text-sm font-semibold text-yoga-cta">VOICE</p>
            <span className="fine-line flex-1" />
          </div>
          <h2 className="font-mincho text-2xl tracking-[0.12em] text-yoga-brown md:text-3xl">
            <AnimatedText text="お客様の声" />
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 90}
              className="rounded-2xl border border-yoga-pink/35 bg-yoga-base/68 p-7 shadow-[0_18px_50px_rgb(75_61_51/0.07)]"
            >
              <motion.article
                className="h-full"
                whileHover={{ y: -7, rotate: index === 1 ? 0 : index === 0 ? -0.35 : 0.35 }}
                transition={{ type: 'spring', stiffness: 280, damping: 25 }}
                data-cursor
              >
              <div className="mb-6 flex items-center gap-5">
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-[1.35rem] bg-yoga-pink/30 shadow-[0_12px_28px_rgb(75_61_51/0.08)]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="112px"
                    className={`object-cover ${item.imageClassName}`}
                  />
                </div>
                <div>
                  <h3 className="font-mincho text-lg font-semibold leading-[1.55] text-yoga-brown">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-[0.95rem] leading-[1.95] text-yoga-muted">{item.text}</p>
              <p className="mt-5 text-right text-sm text-yoga-muted">{item.name}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
