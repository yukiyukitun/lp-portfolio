'use client'

import { useEffect, useState } from 'react'
import CtaButton from './CtaButton'

const navItems = [
  { href: '#hero', label: 'トップ', id: 'hero' },
  { href: '#concern', label: 'はじめての方へ', id: 'concern' },
  { href: '#features', label: 'スタジオ紹介', id: 'features' },
  { href: '#trial', label: 'レッスン', id: 'trial' },
  { href: '#faq', label: 'よくある質問', id: 'faq' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-34% 0px -54% 0px',
        threshold: [0.08, 0.18, 0.32, 0.48],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-yoga-green/15 bg-white/72 shadow-[0_10px_30px_rgb(75_61_51/0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="Luna Yoga トップへ">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-yoga-green/50 bg-white/70 text-yoga-cta transition-transform duration-300 group-hover:-rotate-6">
            <span className="font-mincho text-lg leading-none">L</span>
          </span>
          <span>
            <span className="block font-mincho text-xl font-medium tracking-[0.14em] text-yoga-cta md:text-2xl">
              Luna Yoga
            </span>
            <span className="hidden text-[10px] tracking-[0.22em] text-yoga-muted md:block">
              for your life
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-medium tracking-[0.12em] text-yoga-muted lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'group relative inline-flex items-center py-2 transition-all duration-300 ease-out',
                  'hover:-translate-y-0.5 hover:text-yoga-brown hover:opacity-95',
                  isActive ? 'text-yoga-cta' : 'text-yoga-muted',
                ].join(' ')}
              >
                <span>{item.label}</span>
                <span
                  className={[
                    'pointer-events-none absolute -bottom-0.5 left-0 h-px rounded-full bg-yoga-cta transition-all duration-300 ease-out',
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80',
                  ].join(' ')}
                  aria-hidden="true"
                />
                <span
                  className={[
                    'pointer-events-none absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-yoga-cta transition-all duration-300 ease-out',
                    isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
                  ].join(' ')}
                  aria-hidden="true"
                />
              </a>
            )
          })}
        </nav>
        <div className="hidden sm:block">
          <CtaButton label="LINEで予約する" size="sm" variant="line" />
        </div>
      </div>
    </header>
  )
}
