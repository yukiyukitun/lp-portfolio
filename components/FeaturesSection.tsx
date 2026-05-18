'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import Reveal from './Reveal'

const features = [
  {
    image: '/images/feature-small-class-photo.png',
    alt: '少人数制ヨガレッスンで丁寧にサポートする様子',
    title: '少人数制で丁寧にサポート',
    desc: '1クラス最大8名まで。初めての方も安心してご参加いただけます。',
    imageClassName: 'object-center',
  },
  {
    image: '/images/feature-studio-interior-photo.png',
    alt: '自然光が入る明るいヨガスタジオ',
    title: '明るく清潔感のあるスタジオ',
    desc: '自然光が差し込む心地よい空間で、リラックスして過ごせます。',
    imageClassName: 'object-center',
  },
  {
    image: '/images/feature-instructor-support-photo.png',
    alt: 'インストラクターが初心者をやさしく補助するレッスン',
    title: '初心者にやさしいレッスン',
    desc: '呼吸やポーズの基礎から丁寧に。無理なく心地よく整えます。',
    imageClassName: 'object-[50%_42%]',
  },
  {
    image: '/images/feature-relax-photo.png',
    alt: '明るいスタジオで穏やかにヨガをする女性',
    title: '通いやすい料金・立地',
    desc: '駅近で通いやすく、続けやすい料金設定をご用意しています。',
    imageClassName: 'object-[50%_45%]',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-yoga-base/60 py-18 md:py-22">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-11 text-center">
          <div className="mx-auto mb-4 flex max-w-lg items-center gap-4">
            <span className="fine-line flex-1" />
            <p className="font-elegant text-sm font-semibold text-yoga-cta">FEATURES</p>
            <span className="fine-line flex-1" />
          </div>
          <h2 className="font-mincho text-2xl tracking-[0.12em] text-yoga-brown md:text-3xl">
            <AnimatedText text="ルナヨガの特徴" />
          </h2>
          <svg viewBox="0 0 168 22" className="mx-auto mt-4 h-6 w-44 text-yoga-cta/45" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M69 11H18" />
            <path d="M44 11c-9-7-19-7-30-1 9 7 20 7 30 1Z" />
            <path d="M78 11c-8-6-17-6-27-1 8 6 18 6 27 1Z" />
            <path d="M99 11h51" />
            <path d="M124 11c9-7 19-7 30-1-9 7-20 7-30 1Z" />
            <path d="M90 11c8-6 17-6 27-1-8 6-18 6-27 1Z" />
          </svg>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 90}
              className="group overflow-hidden rounded-2xl border border-yoga-pink/35 bg-white shadow-[0_24px_62px_rgb(75_61_51/0.11)]"
            >
              <motion.article
                className="h-full"
                whileHover={{ y: -8, rotateX: 1.4, rotateY: index % 2 === 0 ? -1.2 : 1.2 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                data-cursor
              >
                <motion.div
                  className="relative h-56 overflow-hidden lg:h-60"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.075] ${feature.imageClassName}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/20 via-transparent to-white/5" />
                </motion.div>
                <div className="p-6">
                  <h3 className="mb-3 font-mincho text-lg leading-snug text-yoga-brown">
                    {feature.title}
                  </h3>
                  <p className="text-[0.94rem] leading-[1.85] text-yoga-muted">{feature.desc}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
