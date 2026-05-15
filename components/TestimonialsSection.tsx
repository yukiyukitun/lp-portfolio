const testimonials = [
  {
    name: 'Aさん（32歳・会社員）',
    text: '初めてのヨガで緊張していましたが、少人数制で先生が丁寧に教えてくださり、とても安心できました。体験後は体がふわっと軽くなった感じがして、また来たいと思いました。',
  },
  {
    name: 'Bさん（41歳・主婦）',
    text: '少人数なので質問しやすく、自分のペースで無理なく続けられています。強引な入会の勧誘がないので、気持ちよく通えています。',
  },
  {
    name: 'Cさん（28歳・デザイナー）',
    text: '仕事帰りに気軽に立ち寄れる距離にあって助かっています。最近は呼吸が深くなって、仕事のストレスも少し楽になった気がします。',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-yoga-pink/20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            ご参加された方のお声
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-yoga-pink/30 relative"
            >
              <span
                className="absolute -top-3 left-6 font-mincho text-5xl text-yoga-pink/60 leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-yoga-muted text-sm leading-relaxed mb-5 pt-3">
                {t.text}
              </p>
              <p className="text-yoga-brown text-sm font-medium border-t border-yoga-pink/20 pt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
