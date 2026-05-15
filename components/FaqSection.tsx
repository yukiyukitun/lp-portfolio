'use client'

import { useState } from 'react'

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
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-yoga-base">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">FAQ</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-yoga-green/20 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-yoga-green/5 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-yoga-brown pr-4 leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-yoga-cta/50 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  <span className="text-yoga-cta text-lg leading-none font-light">+</span>
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-yoga-muted leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
