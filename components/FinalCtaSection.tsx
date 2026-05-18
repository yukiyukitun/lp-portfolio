import Image from 'next/image'
import AnimatedText from './AnimatedText'
import CtaButton from './CtaButton'
import Reveal from './Reveal'

export default function FinalCtaSection() {
  return (
    <section id="line" className="relative bg-[linear-gradient(100deg,#fff_0%,#f0d9d5_55%,#eaf4e7_100%)] py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-[0.84fr_1.38fr_0.56fr] md:px-8">
        <Reveal className="relative h-64 overflow-hidden rounded-[1.6rem] md:hidden">
          <Image
            src="/images/hero-yoga-photo.png"
            alt="明るいスタジオでヨガを楽しむ女性"
            fill
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/45 to-transparent" />
        </Reveal>

        <Reveal className="relative hidden h-80 overflow-hidden rounded-r-[2rem] md:block">
          <Image
            src="/images/hero-yoga-photo.png"
            alt="明るいスタジオでヨガを楽しむ女性"
            fill
            sizes="35vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent" />
        </Reveal>

        <Reveal className="text-center">
          <h2 className="font-mincho text-2xl leading-snug tracking-[0.1em] text-yoga-brown md:text-3xl">
            <AnimatedText text="自分を大切にする時間、はじめてみませんか？" />
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-yoga-muted">
            初心者の方も安心してご参加いただけます。<br />
            まずはお気軽に体験レッスンへお越しください。
          </p>
          <div className="mt-7">
            <CtaButton
              label="LINEで体験レッスンを予約する"
              size="lg"
              variant="line"
              className="w-full max-w-xl bg-yoga-cta hover:bg-yoga-line"
            />
          </div>
          <p className="mt-4 text-xs text-yoga-muted">
            勧誘・強引な入会のご案内は一切ありません
          </p>
        </Reveal>
        <Reveal delay={120} className="hidden self-start justify-self-center pt-5 md:block">
          <div className="grid h-44 w-44 rotate-[-10deg] place-items-center rounded-full border border-yoga-pink bg-white/68 text-center shadow-[0_20px_52px_rgb(75_61_51/0.1)] backdrop-blur">
            <p className="font-mincho text-base leading-relaxed text-yoga-brown">
              簡単LINEで<br />
              予約完了！
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
