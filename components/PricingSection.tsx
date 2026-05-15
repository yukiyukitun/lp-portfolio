import CtaButton from './CtaButton'

const plans = [
  {
    name: '体験レッスン',
    price: '2,000',
    originalPrice: '2,500',
    unit: '（税込）',
    note: 'LINE登録で500円OFF',
    features: ['60分レッスン', 'ヨガマット無料貸出', '初めての方限定'],
    highlight: true,
  },
  {
    name: '月4回プラン',
    price: '8,000',
    originalPrice: '',
    unit: '円〜 / 月（税込）',
    note: '',
    features: ['週1回・選べる時間帯', '平日夜・土日クラスあり', '体験後から入会可'],
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Pricing</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            料金・キャンペーン
          </h2>
        </div>

        {/* キャンペーンバナー */}
        <div className="bg-yoga-cta text-white rounded-2xl px-8 py-5 text-center mb-10 shadow-md">
          <p className="font-mincho text-xl mb-1">🎁 期間限定キャンペーン</p>
          <p className="text-white/90 text-sm">
            LINE登録でその場で使える
            <strong> 体験レッスン 500円OFFクーポン</strong>をプレゼント
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border-2 ${
                plan.highlight
                  ? 'border-yoga-cta bg-yoga-green/10 shadow-md'
                  : 'border-yoga-beige bg-yoga-base'
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-yoga-cta text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">
                  おすすめ
                </span>
              )}
              <h3 className="font-mincho text-xl text-yoga-brown mb-3">{plan.name}</h3>
              <div className="mb-1">
                {plan.originalPrice && (
                  <span className="text-yoga-muted text-sm line-through mr-2">
                    ¥{plan.originalPrice}
                  </span>
                )}
                <span className="font-mincho text-4xl text-yoga-brown">¥{plan.price}</span>
                <span className="text-yoga-muted text-sm ml-1">{plan.unit}</span>
              </div>
              {plan.note && (
                <p className="text-yoga-cta text-sm mb-5">✦ {plan.note}</p>
              )}
              <ul className="space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-yoga-muted text-sm">
                    <span className="text-yoga-cta">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CtaButton
            label="LINEで体験レッスンを予約する"
            size="lg"
            variant="line"
          />
        </div>

      </div>
    </section>
  )
}
