'use client'

import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import CtaButton from './CtaButton'

const navItems = [
  { href: '#hero', label: 'トップ', id: 'hero' },
  { href: '#concern', label: 'はじめての方へ', id: 'concern' },
  { href: '#features', label: 'スタジオ紹介', id: 'features' },
  { href: '#trial', label: 'レッスン', id: 'trial' },
  { href: '#faq', label: 'よくある質問', id: 'faq' },
]

const mobileMenuItems = [
  { href: '#concern', label: 'はじめての方へ', id: 'concern' },
  { href: '#trial', label: 'レッスン', id: 'trial' },
  { href: '#features', label: 'スタジオ紹介', id: 'features' },
  { href: '#faq', label: 'よくある質問', id: 'faq' },
  { href: '#line', label: 'LINEで予約する', id: 'line' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMobileMenuClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    const target = document.getElementById(id)

    if (!target) {
      setIsMenuOpen(false)
      return
    }

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-[80] border-b border-yoga-green/15 bg-white/72 shadow-[0_10px_30px_rgb(75_61_51/0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="Luna Yoga トップへ">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-yoga-green/50 bg-white/70 text-yoga-cta transition-transform duration-300 group-hover:-rotate-6">
            <span className="font-mincho text-lg leading-none">L</span>
          </span>
          <span>
            <span className="block font-mincho text-xl font-medium tracking-[0.14em] text-yoga-cta md:text-2xl">
              Luna Yoga
            </span>
            <span className="hidden font-elegant text-xs font-medium text-yoga-muted md:block">
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
        <div className="hidden lg:block">
          <CtaButton label="LINEで予約する" size="sm" variant="line" />
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-yoga-green/35 bg-white/82 text-yoga-cta shadow-[0_10px_24px_rgb(75_61_51/0.08)] transition-colors duration-300 hover:bg-yoga-green/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoga-cta/35 focus-visible:ring-offset-2 lg:hidden"
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={[
                'absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300',
                isMenuOpen ? 'translate-y-2 rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-2 h-px w-5 bg-current transition-opacity duration-300',
                isMenuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-4 h-px w-5 bg-current transition-transform duration-300',
                isMenuOpen ? '-translate-y-2 -rotate-45' : '',
              ].join(' ')}
            />
          </span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={[
          'fixed inset-x-0 bottom-0 top-16 transition-opacity duration-300 md:top-[72px] lg:hidden',
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <button
          type="button"
          className="absolute inset-0 bg-yoga-brown/18 backdrop-blur-[2px]"
          aria-label="メニューを閉じる"
          onClick={() => setIsMenuOpen(false)}
        />
        <nav
          className={[
            'relative mx-4 mt-3 rounded-[1.5rem] border border-yoga-green/25 bg-white/95 px-5 py-5 shadow-[0_24px_60px_rgb(75_61_51/0.14)]',
            'transition-transform duration-300 ease-out',
            isMenuOpen ? 'translate-y-0' : '-translate-y-3',
          ].join(' ')}
        >
          <div className="flex flex-col divide-y divide-yoga-beige/80">
            {mobileMenuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => handleMobileMenuClick(event, item.id)}
                className={[
                  'flex items-center justify-between py-4 text-sm font-medium text-yoga-brown transition-colors duration-300',
                  item.id === 'line' ? 'text-yoga-cta' : 'hover:text-yoga-cta',
                ].join(' ')}
              >
                <span>{item.label}</span>
                <span className="font-mincho text-base text-yoga-rose" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
