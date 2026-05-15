import CtaButton from './CtaButton'

const details = [
  { label: '所要時間', value: '60分' },
  { label: '持ち物', value: '動きやすい服装のみ（ヨガマット無料貸出）' },
  { label: '参加資格', value: '初めての方、運動が苦手な方も大歓迎' },
  { label: '予約方法', value: 'LINEから簡単に予約できます' },
]

export default function TrialSection() {
  return (
    <section className="py-20 bg-yoga-green/20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Trial Lesson</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            体験レッスンのご案内
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* 詳細 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-yoga-green/20">
            <dl className="space-y-5">
              {details.map((d, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-yoga-cta text-sm font-medium w-28 flex-shrink-0 mb-1 sm:mb-0 sm:pt-0.5">
                    {d.label}
                  </dt>
                  <dd className="text-yoga-brown leading-relaxed">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="bg-yoga-pink/40 rounded-2xl px-8 py-6 border border-yoga-pink/60 w-full">
              <p className="font-mincho text-yoga-brown text-xl mb-1">体験レッスン料金</p>
              <p className="text-yoga-muted text-sm mb-3">（通常2,500円）</p>
              <p className="font-mincho text-4xl text-yoga-cta font-medium">
                ¥2,000
                <span className="text-sm text-yoga-muted font-sans ml-2">（税込）</span>
              </p>
              <p className="text-yoga-cta text-sm mt-2">✦ LINE登録で500円OFF</p>
            </div>
            <CtaButton
              label="LINEで体験レッスンを予約する"
              size="lg"
              variant="line"
              className="w-full sm:w-auto"
            />
            <p className="text-yoga-muted text-xs">
              予約後のキャンセルも前日までは無料です
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
