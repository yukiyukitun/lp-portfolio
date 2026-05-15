const concerns = [
  { icon: '😮‍💨', text: '最近、体が重くなってきた' },
  { icon: '🤔', text: '運動を始めたいけど、続くか不安' },
  { icon: '⏰', text: '忙しくて自分の時間が取れない' },
  { icon: '🙆‍♀️', text: '肩こりや姿勢が気になっている' },
  { icon: '😌', text: 'きつい運動は苦手。無理なく始めたい' },
  { icon: '🌿', text: '心と体、どちらも少しずつ整えたい' },
]

export default function ConcernSection() {
  return (
    <section className="py-20 bg-yoga-beige/50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Concern</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown leading-snug">
            こんなお悩み、<br className="md:hidden" />ありませんか？
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {concerns.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm border border-yoga-beige hover:border-yoga-green/50 transition-colors duration-200"
            >
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
              <p className="text-yoga-brown font-medium leading-snug">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-yoga-muted text-lg leading-relaxed">
          そのお悩み、<strong className="font-mincho text-yoga-cta font-normal">Luna Yoga</strong> でやさしく解決できます。
        </p>

      </div>
    </section>
  )
}
