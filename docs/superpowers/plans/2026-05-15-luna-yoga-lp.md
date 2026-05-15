# Luna Yoga LP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Next.js / TypeScript / Tailwind CSS で女性向けヨガスタジオ（Luna Yoga）の体験レッスンLPを実装し、buildエラーなしのポートフォリオ掲載可能な品質に仕上げる。

**Architecture:** App Router構成。各セクションをコンポーネントに分割し、`app/page.tsx` で並べる。FAQ のみ `'use client'`、他はすべてサーバーコンポーネント。カスタムTailwindカラーとGoogle Fontsを使用。

**Tech Stack:** Next.js 15, TypeScript 5, Tailwind CSS 3, Google Fonts（Shippori Mincho / Noto Sans JP）

---

## File Map

| ファイル | 責務 |
|---|---|
| `tailwind.config.ts` | カスタムカラー・フォントファミリー設定 |
| `app/layout.tsx` | Google Fonts読み込み、metadata、body設定 |
| `app/globals.css` | アニメーション定義、ベーススタイル |
| `app/page.tsx` | 全セクションの組み立て |
| `components/CtaButton.tsx` | 共通CTAボタン（line/outlineバリアント） |
| `components/Header.tsx` | 固定ナビゲーション |
| `components/HeroSection.tsx` | ファーストビュー |
| `components/ConcernSection.tsx` | 悩み・共感 |
| `components/FeaturesSection.tsx` | スタジオの特徴 |
| `components/TrialSection.tsx` | 体験レッスンの内容 |
| `components/ReasonsSection.tsx` | 選ばれる理由 |
| `components/TestimonialsSection.tsx` | お客様の声 |
| `components/PricingSection.tsx` | 料金・キャンペーン |
| `components/FaqSection.tsx` | よくある質問（'use client'） |
| `components/FinalCtaSection.tsx` | 最終CTA |
| `components/Footer.tsx` | フッター |

---

## Task 1: Next.js プロジェクト初期化

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

- [ ] **Step 1: 既存README.mdをバックアップする**

```bash
cp /Users/ogasawarayukiko/lp-portfolio/README.md /Users/ogasawarayukiko/lp-portfolio/README.orig.md
```

- [ ] **Step 2: Next.jsプロジェクトを初期化する**

`/Users/ogasawarayukiko/lp-portfolio` で実行。プロンプトが出た場合は `y` で上書きを許可（README.mdのみ上書きされる）。

```bash
cd /Users/ogasawarayukiko/lp-portfolio && \
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --eslint \
  --yes
```

- [ ] **Step 3: README.mdをオリジナルに戻す**

```bash
cp /Users/ogasawarayukiko/lp-portfolio/README.orig.md /Users/ogasawarayukiko/lp-portfolio/README.md && \
rm /Users/ogasawarayukiko/lp-portfolio/README.orig.md
```

- [ ] **Step 4: 初期化確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && ls -la
```

Expected: `package.json`, `app/`, `components/`（未作成）, `tailwind.config.ts`, `tsconfig.json` が存在すること

- [ ] **Step 5: 開発サーバーが起動するか確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npm run dev &
sleep 5 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

Expected: `200`

```bash
# 確認後、開発サーバーを停止
kill %1 2>/dev/null || true
```

- [ ] **Step 6: コミット**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && \
git add package.json tsconfig.json next.config.ts postcss.config.mjs .gitignore app/ && \
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind CSS"
```

---

## Task 2: Tailwind カスタムカラー・フォント設定

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: tailwind.config.ts を書き換える**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yoga-base':   '#F7F6F3',
        'yoga-green':  '#D4E6D5',
        'yoga-cta':    '#4A7C59',
        'yoga-beige':  '#F0EBE3',
        'yoga-pink':   '#E8D5D0',
        'yoga-brown':  '#3D3530',
        'yoga-muted':  '#7A6F6A',
        'yoga-line':   '#06C755',
      },
      fontFamily: {
        mincho: ['var(--font-mincho)', 'serif'],
        sans:   ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add tailwind.config.ts && \
git commit -m "feat: add custom yoga color palette and font families to Tailwind config"
```

---

## Task 3: layout.tsx と globals.css の設定

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: app/layout.tsx を書き換える**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Shippori_Mincho, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const shipporiMincho = Shippori_Mincho({
  weight: ['400', '500', '600', '700'],
  variable: '--font-mincho',
  display: 'swap',
  preload: false,
})

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
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
```

- [ ] **Step 2: app/globals.css を書き換える**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
}

@layer utilities {
  .animate-fadeInUp {
    animation: fadeInUp 0.7s ease forwards;
  }
  .animate-fadeIn {
    animation: fadeIn 0.8s ease forwards;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

- [ ] **Step 3: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 4: コミット**

```bash
git add app/layout.tsx app/globals.css && \
git commit -m "feat: configure Google Fonts (Shippori Mincho + Noto Sans JP) and base animations"
```

---

## Task 4: CtaButton コンポーネント

**Files:**
- Create: `components/CtaButton.tsx`

- [ ] **Step 1: components/ ディレクトリを作成する**

```bash
mkdir -p /Users/ogasawarayukiko/lp-portfolio/components
```

- [ ] **Step 2: components/CtaButton.tsx を作成する**

```typescript
// components/CtaButton.tsx
interface CtaButtonProps {
  label: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'line' | 'outline'
  className?: string
}

const LINE_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
)

const SIZE_CLASSES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-10 py-4 text-lg',
}

const VARIANT_CLASSES = {
  line: 'bg-yoga-line text-white hover:bg-[#05b34c] shadow-md',
  outline: 'bg-white text-yoga-cta border-2 border-yoga-cta hover:bg-yoga-beige',
}

export default function CtaButton({
  label,
  href = '#line',
  size = 'md',
  variant = 'line',
  className = '',
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center gap-2',
        'font-medium rounded-full',
        'transition-all duration-300',
        'hover:-translate-y-0.5 hover:shadow-lg',
        SIZE_CLASSES[size],
        VARIANT_CLASSES[variant],
        className,
      ].join(' ')}
    >
      {variant === 'line' && LINE_ICON}
      {label}
    </a>
  )
}
```

- [ ] **Step 3: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 4: コミット**

```bash
git add components/CtaButton.tsx && \
git commit -m "feat: add CtaButton component with line/outline variants"
```

---

## Task 5: Header コンポーネント

**Files:**
- Create: `components/Header.tsx`

- [ ] **Step 1: components/Header.tsx を作成する**

```typescript
// components/Header.tsx
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
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/Header.tsx && \
git commit -m "feat: add fixed Header with logo and CTA button"
```

---

## Task 6: HeroSection コンポーネント

**Files:**
- Create: `components/HeroSection.tsx`

- [ ] **Step 1: components/HeroSection.tsx を作成する**

```typescript
// components/HeroSection.tsx
import CtaButton from './CtaButton'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-yoga-green/40 via-white to-yoga-beige/30 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: テキスト */}
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

          {/* Right: ビジュアル */}
          <div
            className="flex justify-center lg:justify-end animate-fadeInUp"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem]">
              {/* メイン円 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yoga-green/70 to-yoga-beige" />
              {/* 内側円 */}
              <div className="absolute inset-5 rounded-full bg-gradient-to-tr from-white/90 to-yoga-green/20 flex flex-col items-center justify-center gap-3">
                {/* ヨガポーズ SVG */}
                <svg
                  viewBox="0 0 100 120"
                  className="w-24 h-28 text-yoga-cta/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  {/* 頭 */}
                  <circle cx="50" cy="15" r="10" />
                  {/* 体幹 */}
                  <line x1="50" y1="25" x2="50" y2="65" />
                  {/* 左腕 */}
                  <line x1="50" y1="38" x2="20" y2="55" />
                  {/* 右腕 */}
                  <line x1="50" y1="38" x2="80" y2="55" />
                  {/* 左脚 */}
                  <line x1="50" y1="65" x2="28" y2="100" />
                  {/* 右脚 */}
                  <line x1="50" y1="65" x2="72" y2="100" />
                </svg>
                <span className="font-mincho text-yoga-cta/70 text-sm font-medium tracking-wide">
                  体験レッスン受付中
                </span>
              </div>
              {/* 装飾円 */}
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
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/HeroSection.tsx && \
git commit -m "feat: add HeroSection with headline, CTA, and decorative visual"
```

---

## Task 7: ConcernSection コンポーネント

**Files:**
- Create: `components/ConcernSection.tsx`

- [ ] **Step 1: components/ConcernSection.tsx を作成する**

```typescript
// components/ConcernSection.tsx
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
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/ConcernSection.tsx && \
git commit -m "feat: add ConcernSection with concern cards"
```

---

## Task 8: FeaturesSection コンポーネント

**Files:**
- Create: `components/FeaturesSection.tsx`

- [ ] **Step 1: components/FeaturesSection.tsx を作成する**

```typescript
// components/FeaturesSection.tsx
const features = [
  {
    icon: '🌱',
    title: '初心者を大切にする指導',
    desc: 'ヨガが初めての方も安心。基礎から丁寧にお伝えします。',
  },
  {
    icon: '👥',
    title: '少人数制（定員6名）',
    desc: '一人ひとりに目が届く、アットホームな環境です。',
  },
  {
    icon: '🏡',
    title: '女性専用の落ち着いた空間',
    desc: '清潔感のある、リラックスできる専用スタジオです。',
  },
  {
    icon: '📍',
    title: '駅徒歩3分・LINEで簡単予約',
    desc: '仕事帰りでも通いやすい立地。予約はLINEから。',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Features</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            Luna Yoga の特徴
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-yoga-base rounded-2xl p-7 border border-yoga-green/20 hover:border-yoga-green/60 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <span className="text-4xl mb-4" aria-hidden="true">{f.icon}</span>
              <h3 className="font-mincho text-lg text-yoga-brown mb-2 leading-snug">{f.title}</h3>
              <p className="text-yoga-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/FeaturesSection.tsx && \
git commit -m "feat: add FeaturesSection with 4 studio feature cards"
```

---

## Task 9: TrialSection コンポーネント

**Files:**
- Create: `components/TrialSection.tsx`

- [ ] **Step 1: components/TrialSection.tsx を作成する**

```typescript
// components/TrialSection.tsx
import CtaButton from './CtaButton'

const details = [
  { label: '所要時間', value: '60分' },
  { label: '持ち物', value: '動きやすい服装のみ（ヨガマット無料貸出）' },
  { label: '参加資格', value: '初めての方、運動が苦手な方も大歓迎' },
  { label: '予約方法', value: 'LINEから簡単に予約できます' },
]

export default function TrialSection() {
  return (
    <section className="py-20 bg-yoga-green/20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Trial Lesson</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            体験レッスンのご案内
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: 詳細 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-yoga-green/20">
            <dl className="space-y-5">
              {details.map((d, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-yoga-cta text-sm font-medium w-32 flex-shrink-0 mb-1 sm:mb-0 sm:pt-0.5">
                    {d.label}
                  </dt>
                  <dd className="text-yoga-brown leading-relaxed">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="bg-yoga-pink/40 rounded-2xl px-8 py-6 border border-yoga-pink/60 w-full">
              <p className="font-mincho text-yoga-brown text-xl mb-1">体験レッスン料金</p>
              <p className="text-yoga-muted text-sm mb-3">（通常2,500円）</p>
              <p className="font-mincho text-4xl text-yoga-cta font-medium">
                ¥2,000
                <span className="text-sm text-yoga-muted font-sans ml-2">（税込）</span>
              </p>
              <p className="text-yoga-cta text-sm mt-2">✦ LINE登録で500円OFF</p>
            </div>
            <CtaButton
              label="LINEで体験レッスンを予約する"
              size="lg"
              variant="line"
              className="w-full sm:w-auto"
            />
            <p className="text-yoga-muted text-xs">
              予約後のキャンセルも前日までは無料です
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/TrialSection.tsx && \
git commit -m "feat: add TrialSection with lesson details and pricing CTA"
```

---

## Task 10: ReasonsSection コンポーネント

**Files:**
- Create: `components/ReasonsSection.tsx`

- [ ] **Step 1: components/ReasonsSection.tsx を作成する**

```typescript
// components/ReasonsSection.tsx
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
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/ReasonsSection.tsx && \
git commit -m "feat: add ReasonsSection with 4 reason cards"
```

---

## Task 11: TestimonialsSection コンポーネント

**Files:**
- Create: `components/TestimonialsSection.tsx`

- [ ] **Step 1: components/TestimonialsSection.tsx を作成する**

```typescript
// components/TestimonialsSection.tsx
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
                "
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
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/TestimonialsSection.tsx && \
git commit -m "feat: add TestimonialsSection with 3 testimonial cards"
```

---

## Task 12: PricingSection コンポーネント

**Files:**
- Create: `components/PricingSection.tsx`

- [ ] **Step 1: components/PricingSection.tsx を作成する**

```typescript
// components/PricingSection.tsx
import CtaButton from './CtaButton'

const plans = [
  {
    name: '体験レッスン',
    price: '2,000',
    originalPrice: '2,500',
    unit: '（税込）',
    note: 'LINE登録で500円OFF',
    features: ['60分レッスン', 'ヨガマット無料貸出', '初めての方限定'],
    highlight: true,
  },
  {
    name: '月4回プラン',
    price: '8,000',
    originalPrice: '',
    unit: '円〜 / 月（税込）',
    note: '',
    features: ['週1回・選べる時間帯', '平日夜・土日クラスあり', '体験後から入会可'],
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">Pricing</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            料金・キャンペーン
          </h2>
        </div>

        {/* キャンペーンバナー */}
        <div className="bg-yoga-cta text-white rounded-2xl px-8 py-5 text-center mb-10 shadow-md">
          <p className="font-mincho text-xl mb-1">🎁 期間限定キャンペーン</p>
          <p className="text-white/90 text-sm">
            LINE登録でその場で使える<strong> 体験レッスン 500円OFFクーポン</strong>をプレゼント
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border-2 ${
                plan.highlight
                  ? 'border-yoga-cta bg-yoga-green/10 shadow-md'
                  : 'border-yoga-beige bg-yoga-base'
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-yoga-cta text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">
                  おすすめ
                </span>
              )}
              <h3 className="font-mincho text-xl text-yoga-brown mb-3">{plan.name}</h3>
              <div className="mb-1">
                {plan.originalPrice && (
                  <span className="text-yoga-muted text-sm line-through mr-2">
                    ¥{plan.originalPrice}
                  </span>
                )}
                <span className="font-mincho text-4xl text-yoga-brown">¥{plan.price}</span>
                <span className="text-yoga-muted text-sm ml-1">{plan.unit}</span>
              </div>
              {plan.note && (
                <p className="text-yoga-cta text-sm mb-5">✦ {plan.note}</p>
              )}
              <ul className="space-y-2 mb-0">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-yoga-muted text-sm">
                    <span className="text-yoga-cta">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CtaButton
            label="LINEで体験レッスンを予約する"
            size="lg"
            variant="line"
          />
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/PricingSection.tsx && \
git commit -m "feat: add PricingSection with plans and campaign banner"
```

---

## Task 13: FaqSection コンポーネント（Client Component）

**Files:**
- Create: `components/FaqSection.tsx`

- [ ] **Step 1: components/FaqSection.tsx を作成する**

```typescript
// components/FaqSection.tsx
'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: '運動が苦手でも参加できますか？',
    answer:
      'はい、もちろんです。Luna Yogaの体験レッスンは、ヨガが初めての方や運動習慣がまったくない方を対象に設計されています。激しいポーズや難しい動きは一切ありません。',
  },
  {
    question: 'ヨガマットや道具は必要ですか？',
    answer:
      'ヨガマットは無料でお貸出ししています。その他の道具は何もご用意いただく必要はありません。手ぶらでお越しください。',
  },
  {
    question: 'どんな服装で来ればいいですか？',
    answer:
      'ストレッチが効いて動きやすい服装であれば何でも構いません。ジャージやスウェット、ヨガウェアなど、ご自身が動きやすいものでお越しください。',
  },
  {
    question: '体験レッスンの予約はどうすればいいですか？',
    answer:
      'LINEの公式アカウントを追加していただき、ご希望の日時をメッセージでお送りください。担当スタッフが空き状況をご確認のうえ、折り返しご連絡いたします。',
  },
  {
    question: '体験後に入会しなければいけませんか？',
    answer:
      'いいえ、入会は任意です。体験レッスン後に強引なご案内や勧誘は一切行いません。「続けてみたい」と感じた方だけ、ご都合に合わせてご検討ください。',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-yoga-base">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yoga-cta text-xs tracking-[0.3em] uppercase mb-3">FAQ</p>
          <h2 className="font-mincho text-3xl md:text-4xl text-yoga-brown">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-yoga-green/20 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-yoga-green/5 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-yoga-brown pr-4 leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-yoga-cta/50 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  <span className="text-yoga-cta text-lg leading-none font-light">+</span>
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-yoga-muted leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/FaqSection.tsx && \
git commit -m "feat: add FaqSection accordion with useState (client component)"
```

---

## Task 14: FinalCtaSection コンポーネント

**Files:**
- Create: `components/FinalCtaSection.tsx`

- [ ] **Step 1: components/FinalCtaSection.tsx を作成する**

```typescript
// components/FinalCtaSection.tsx
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
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/FinalCtaSection.tsx && \
git commit -m "feat: add FinalCtaSection with closing copy and LINE CTA"
```

---

## Task 15: Footer コンポーネント

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: components/Footer.tsx を作成する**

```typescript
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-yoga-brown text-white/80 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* ロゴ・コンセプト */}
          <div>
            <p className="font-mincho text-2xl text-white mb-3 tracking-wider">Luna Yoga</p>
            <p className="text-sm leading-relaxed text-white/60">
              初心者が安心して始められる、<br />
              少人数制の女性向けヨガスタジオ。
            </p>
          </div>

          {/* スタジオ情報 */}
          <div>
            <h3 className="text-white text-sm font-medium mb-3 tracking-wide uppercase">Studio</h3>
            <address className="not-italic text-sm leading-relaxed text-white/60 space-y-1">
              <p>〒150-0001</p>
              <p>東京都渋谷区神宮前1-2-3</p>
              <p>サンプルビル 3F</p>
              <p className="mt-2">営業時間: 月〜土 10:00〜21:00</p>
            </address>
          </div>

          {/* アクセス */}
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
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add components/Footer.tsx && \
git commit -m "feat: add Footer with studio info and copyright"
```

---

## Task 16: page.tsx の組み立て

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: app/page.tsx を書き換える**

```typescript
// app/page.tsx
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ConcernSection from '@/components/ConcernSection'
import FeaturesSection from '@/components/FeaturesSection'
import TrialSection from '@/components/TrialSection'
import ReasonsSection from '@/components/ReasonsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import FinalCtaSection from '@/components/FinalCtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConcernSection />
        <FeaturesSection />
        <TrialSection />
        <ReasonsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: TypeScript確認**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add app/page.tsx && \
git commit -m "feat: assemble all LP sections in page.tsx"
```

---

## Task 17: lint・build 検証と最終コミット

**Files:** なし（確認のみ）

- [ ] **Step 1: ESLint を実行する**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npm run lint
```

Expected: エラーゼロ。警告が出た場合は内容を確認して修正する。

- [ ] **Step 2: ビルドを実行する**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && npm run build
```

Expected:
```
✓ Compiled successfully
✓ Generating static pages
```
エラーが出た場合は修正してから再実行する。

- [ ] **Step 3: 品質チェックリスト確認**

以下をすべて確認する:
- [ ] ファーストビューでCTAが見つかる
- [ ] PC表示（1280px）が崩れていない
- [ ] SP表示（390px相当）が崩れていない
- [ ] 横スクロールが発生していない
- [ ] 文字が読みやすい
- [ ] 余白が詰まりすぎていない
- [ ] 参考画像をそのまま貼っていない

- [ ] **Step 4: 最終コミット**

```bash
cd /Users/ogasawarayukiko/lp-portfolio && \
git add -A && \
git commit -m "feat: complete Luna Yoga LP implementation"
```

---

## スペックカバレッジ確認

| 仕様 | タスク |
|---|---|
| Next.js App Router初期化 | Task 1 |
| Tailwindカスタムカラー | Task 2 |
| Google Fonts（明朝+ゴシック） | Task 3 |
| animations (fadeInUp) | Task 3 |
| 共通CTAボタン | Task 4 |
| ナビゲーションヘッダー | Task 5 |
| ファーストビュー（HeroSection） | Task 6 |
| 悩み・共感セクション | Task 7 |
| スタジオ特徴セクション | Task 8 |
| 体験レッスン案内セクション | Task 9 |
| 選ばれる理由セクション | Task 10 |
| お客様の声セクション | Task 11 |
| 料金・キャンペーンセクション | Task 12 |
| FAQアコーディオン | Task 13 |
| 最終CTAセクション | Task 14 |
| フッター | Task 15 |
| page.tsx 組み立て | Task 16 |
| lint・build検証 | Task 17 |
