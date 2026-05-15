import CtaButton from './CtaButton'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-yoga-green/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mincho text-2xl text-yoga-cta font-medium tracking-wider select-none">
          Luna Yoga
        </span>
        <CtaButton label="体験レッスンを予約" size="sm" variant="line" />
      </div>
    </header>
  )
}
