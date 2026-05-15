import type { Metadata } from 'next'
import { Shippori_Mincho, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const shipporiMincho = Shippori_Mincho({
  weight: ['400', '500', '600', '700'],
  variable: '--font-mincho-loaded',
  display: 'swap',
  preload: false,
})

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans-loaded',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Luna Yoga | 初心者歓迎の少人数制ヨガスタジオ',
  description:
    '初心者歓迎。少人数制で、心と体をやさしく整える体験レッスン。LINEから簡単にご予約いただけます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSansJP.variable}`}
    >
      <body className="font-sans text-yoga-brown bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
