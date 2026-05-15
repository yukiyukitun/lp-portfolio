import CtaButton from './CtaButton'

export default function FinalCtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-yoga-green/40 via-yoga-beige/20 to-white">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-4">Join Us</p>

        <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown leading-snug mb-6">
          まずは、<br className="md:hidden" />体験レッスンから。
        </h2>

        <p className="text-yoga-muted text-lg leading-relaxed mb-10">
          無理なく、あなたのペースで始められます。<br />
          LINEから、簡単に予約できます。
        </p>

        <div className="flex flex-col items-center gap-5">
          <CtaButton
            label="LINEで体験レッスンを予約する"
            size="lg"
            variant="line"
            className="w-full max-w-sm"
          />
          <div className="inline-flex items-center gap-2 bg-white/70 text-yoga-brown px-5 py-2.5 rounded-full text-sm border border-yoga-green/30">
            <span className="text-yoga-cta font-bold">✦</span>
            LINE登録で体験レッスン500円OFF
          </div>
        </div>

        <p className="text-yoga-muted/70 text-xs mt-8">
          勧誘・強引な入会のご案内は一切ありません
        </p>

      </div>
    </section>
  )
}
