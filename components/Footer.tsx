export default function Footer() {
  return (
    <footer className="bg-white py-8 text-yoga-muted">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-6 border-t border-yoga-beige pt-6 md:grid-cols-4">

          <div>
            <p className="font-mincho text-xl tracking-wider text-yoga-cta">Luna Yoga</p>
            <p className="mt-2 text-xs leading-relaxed">
              初心者が安心して始められる、<br />
              少人数制の女性向けヨガスタジオ。
            </p>
          </div>

          <a href="#concern" className="text-xs hover:text-yoga-cta">はじめての方へ</a>
          <a href="#trial" className="text-xs hover:text-yoga-cta">レッスン</a>
          <a href="#faq" className="text-xs hover:text-yoga-cta">よくある質問</a>
        </div>
        <p className="mt-6 text-center text-[11px] text-yoga-muted/70">
          © 2024 Luna Yoga All Rights Reserved.（架空のスタジオです）
        </p>

      </div>
    </footer>
  )
}
