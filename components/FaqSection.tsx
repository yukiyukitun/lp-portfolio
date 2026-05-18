'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedText from './AnimatedText'
import Reveal from './Reveal'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: '運動が苦手でも参加できますか？',
    answer:
      'はい、もちろんです。Luna Yogaの体験レッスンは、ヨガが初めての方や運動習慣がまったくない方を対象に設計されています。激しいポーズや難しい動きは一切ありません。',
  },
  {
    question: 'ヨガマットや道具は必要ですか？',
    answer:
      'ヨガマットは無料でお貸出ししています。その他の道具は何もご用意いただく必要はありません。手ぶらでお越しください。',
  },
  {
    question: 'どんな服装で来ればいいですか？',
    answer:
      'ストレッチが効いて動きやすい服装であれば何でも構いません。ジャージやスウェット、ヨガウェアなど、ご自身が動きやすいものでお越しください。',
  },
  {
    question: '体験レッスンの予約はどうすればいいですか？',
    answer:
      'LINEの公式アカウントを追加していただき、ご希望の日時をメッセージでお送りください。担当スタッフが空き状況をご確認のうえ、折り返しご連絡いたします。',
  },
  {
    question: '体験後に入会しなければいけませんか？',
    answer:
      'いいえ、入会は任意です。体験レッスン後に強引なご案内や勧誘は一切行いません。「続けてみたい」と感じた方だけ、ご都合に合わせてご検討ください。',
  },
  {
    question: '年齢制限はありますか？',
    answer:
      '18歳以上の女性の方にご利用いただけます。年齢や経験に関係なく、体の状態に合わせてご案内します。',
  },
  {
    question: '体が硬くても大丈夫ですか？',
    answer:
      '問題ありません。無理に伸ばすのではなく、呼吸に合わせて心地よく動くことを大切にしています。',
  },
  {
    question: 'キャンセルはできますか？',
    answer:
      'レッスンの2時間前までにLINEからご連絡ください。急な体調不良の場合もお気軽にご相談ください。',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-yoga-base py-16 md:py-20">
      <div className="mx-auto w-full max-w-[58rem] px-5 md:px-8">

        <Reveal className="mb-10 text-center">
          <div className="mx-auto mb-5 flex max-w-xl items-center gap-4">
            <span className="fine-line flex-1" />
            <p className="font-elegant text-sm font-semibold uppercase text-yoga-cta">FAQ</p>
            <span className="fine-line flex-1" />
          </div>
          <h2 className="font-mincho text-3xl text-yoga-brown md:text-4xl">
            <AnimatedText text="よくあるご質問" />
          </h2>
        </Reveal>

        <div className="mx-auto flex w-full max-w-full flex-col gap-3">
          {faqs.map((faq, index) => (
            <Reveal
              key={faq.question}
              delay={index * 70}
              className="w-full max-w-full overflow-hidden rounded-2xl bg-white/86 shadow-[0_12px_34px_rgb(75_61_51/0.05)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full max-w-full items-center gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-white md:px-6"
                aria-expanded={openIndex === index}
                data-cursor
              >
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-yoga-pink/85 font-mincho text-base text-white shadow-[0_8px_18px_rgb(215_167_161/0.24)]">
                  Q
                </span>
                <span className="min-w-0 flex-1 text-[1.02rem] font-semibold leading-[1.65] text-yoga-brown md:text-[1.08rem]">
                  {faq.question}
                </span>
                <span
                  className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-yoga-pink/70 text-xl leading-none text-yoga-rose transition-transform duration-300"
                  aria-hidden="true"
                >
                  <span className={openIndex === index ? 'rotate-45 transition-transform duration-300' : 'transition-transform duration-300'}>
                    +
                  </span>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-3 px-5 pb-6 pl-[4.4rem] pr-5 md:pl-[5rem] md:pr-8">
                      <span className="font-mincho text-base text-yoga-rose">A</span>
                      <p className="min-w-0 text-[0.95rem] leading-[1.95] text-yoga-muted md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
