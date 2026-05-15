const features = [
  {
    icon: '🌱',
    title: '初心者を大切にする指導',
    desc: 'ヨガが初めての方も安心。基礎から丁寧にお伝えします。',
  },
  {
    icon: '👥',
    title: '少人数制（定員6名）',
    desc: '一人ひとりに目が届く、アットホームな環境です。',
  },
  {
    icon: '🏡',
    title: '女性専用の落ち着いた空間',
    desc: '清潔感のある、リラックスできる専用スタジオです。',
  },
  {
    icon: '📍',
    title: '駅徒歩3分・LINEで簡単予約',
    desc: '仕事帰りでも通いやすい立地。予約はLINEから。',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Features</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            Luna Yoga の特徴
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-yoga-base rounded-2xl p-7 border border-yoga-green/20 hover:border-yoga-green/60 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <span className="text-4xl mb-4" aria-hidden="true">{f.icon}</span>
              <h3 className="font-mincho text-lg text-yoga-brown mb-2 leading-snug">{f.title}</h3>
              <p className="text-yoga-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
