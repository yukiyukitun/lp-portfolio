export default function Footer() {
  return (
    <footer className="bg-yoga-brown text-white/80 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          <div>
            <p className="font-mincho text-2xl text-white mb-3 tracking-wider">Luna Yoga</p>
            <p className="text-sm leading-relaxed text-white/60">
              初心者が安心して始められる、<br />
              少人数制の女性向けヨガスタジオ。
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-3 tracking-wide uppercase">Studio</h3>
            <address className="not-italic text-sm leading-relaxed text-white/60 space-y-1">
              <p>〒150-0001</p>
              <p>東京都渋谷区神宮前1-2-3</p>
              <p>サンプルビル 3F</p>
              <p className="mt-2">営業時間: 月〜土 10:00〜21:00</p>
            </address>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-3 tracking-wide uppercase">Access</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              各線 渋谷駅より徒歩3分<br />
              ご予約・お問い合わせは<br />
              LINEからお気軽にどうぞ
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-xs">
            © 2024 Luna Yoga. All rights reserved.
            <span className="ml-2 opacity-50">（架空のスタジオです）</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
