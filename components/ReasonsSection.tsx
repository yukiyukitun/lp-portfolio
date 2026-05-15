const reasons = [
  {
    num: '01',
    title: '全員が初心者からスタートできる',
    desc: '経験者向けの難しいポーズは一切ありません。体の硬い方も、運動が苦手な方も安心して参加いただけます。',
  },
  {
    num: '02',
    title: '少人数制で自分のペースで続けられる',
    desc: '定員6名の少人数制。インストラクターが一人ひとりに目を向け、あなたのペースでレッスンを進めます。',
  },
  {
    num: '03',
    title: '夜・土日クラスも充実',
    desc: '平日の夜や週末のクラスも豊富。仕事帰りでも、休日の朝でも、ライフスタイルに合わせて通えます。',
  },
  {
    num: '04',
    title: '体験後の強引な勧誘は一切なし',
    desc: '体験レッスン後に無理なお誘いはしません。「続けてみたい」と感じた方だけ、ご検討ください。',
  },
]

export default function ReasonsSection() {
  return (
    <section className="py-20 bg-yoga-base">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Why Luna Yoga</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            Luna Yoga が選ばれる理由
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="flex gap-5 bg-white rounded-2xl p-7 border border-yoga-beige hover:border-yoga-green/40 hover:shadow-sm transition-all duration-200"
            >
              <span className="font-mincho text-3xl text-yoga-green/70 flex-shrink-0 leading-none pt-1">
                {r.num}
              </span>
              <div>
                <h3 className="font-mincho text-lg text-yoga-brown mb-2">{r.title}</h3>
                <p className="text-yoga-muted text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
