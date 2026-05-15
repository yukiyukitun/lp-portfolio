import CtaButton from './CtaButton'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-yoga-green/40 via-white to-yoga-beige/30 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* テキスト */}
          <div className="animate-fadeInUp">
            <p className="text-yoga-cta text-xs font-medium tracking-[0.3em] uppercase mb-5">
              Luna Yoga — 初心者歓迎
            </p>
            <h1 className="font-mincho text-4xl md:text-5xl lg:text-[3.25rem] text-yoga-brown leading-[1.4] mb-6">
              整うだけじゃない。<br />
              キレイもついてくるヨガ。
            </h1>
            <p className="text-yoga-muted text-lg md:text-xl leading-relaxed mb-10 max-w-md">
              初心者歓迎。少人数制で、<br />
              心と体をやさしく整える体験レッスン。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
              <CtaButton
                label="LINEで体験レッスンを予約する"
                size="lg"
                variant="line"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-yoga-pink/60 text-yoga-brown px-5 py-2.5 rounded-full text-sm border border-yoga-pink">
              <span className="text-yoga-cta font-bold">✦</span>
              LINE登録で体験レッスン500円OFF
            </div>
          </div>

          {/* ビジュアル */}
          <div
            className="flex justify-center lg:justify-end animate-fadeInUp"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yoga-green/70 to-yoga-beige" />
              <div className="absolute inset-5 rounded-full bg-gradient-to-tr from-white/90 to-yoga-green/20 flex flex-col items-center justify-center gap-3">
                <svg
                  viewBox="0 0 100 120"
                  className="w-24 h-28 text-yoga-cta/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <circle cx="50" cy="15" r="10" />
                  <line x1="50" y1="25" x2="50" y2="65" />
                  <line x1="50" y1="38" x2="20" y2="55" />
                  <line x1="50" y1="38" x2="80" y2="55" />
                  <line x1="50" y1="65" x2="28" y2="100" />
                  <line x1="50" y1="65" x2="72" y2="100" />
                </svg>
                <span className="font-mincho text-yoga-cta/70 text-sm font-medium tracking-wide">
                  体験レッスン受付中
                </span>
              </div>
              <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-yoga-pink/50 blur-[2px]" />
              <div className="absolute -bottom-4 -left-2 w-10 h-10 rounded-full bg-yoga-green/60 blur-[2px]" />
              <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-yoga-beige border border-yoga-pink/40" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
