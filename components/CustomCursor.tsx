'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const wideScreen = window.matchMedia('(min-width: 768px)').matches

    if (!finePointer || !wideScreen) return

    const enableFrame = requestAnimationFrame(() => setIsEnabled(true))
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: mouse.x, y: mouse.y }
    const size = { current: 18, target: 18 }
    let animationFrame = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const getCursorTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return null
      return target.closest(
        'a, button, [data-cursor], [data-cursor-hover], [role="button"], article, h1, h2, h3, .card, .faq, .nav-link, .cta, .soft-card',
      )
    }

    const handlePointerOver = (event: PointerEvent) => {
      if (getCursorTarget(event.target)) {
        size.target = 54
      }
    }

    const handlePointerOut = (event: PointerEvent) => {
      const fromTarget = getCursorTarget(event.target)
      const toTarget = getCursorTarget(event.relatedTarget)

      if (fromTarget && fromTarget !== toTarget) {
        size.target = 18
      }
    }

    const render = () => {
      const ringElement = ringRef.current
      const dotElement = dotRef.current

      ring.x += (mouse.x - ring.x) * 0.16
      ring.y += (mouse.y - ring.y) * 0.16
      size.current += (size.target - size.current) * 0.18

      if (ringElement) {
        ringElement.style.width = `${size.current}px`
        ringElement.style.height = `${size.current}px`
        ringElement.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }

      if (dotElement) {
        dotElement.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
      }

      animationFrame = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)
    animationFrame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(enableFrame)
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
    }
  }, [])

  if (!isEnabled) return null

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-layer cursor-ring pointer-events-none fixed left-0 top-0 z-[999999] h-[18px] w-[18px] rounded-full border border-yoga-brown/75 bg-white/20 opacity-100 shadow-[0_0_0_1px_rgb(255_255_255/0.7),0_10px_28px_rgb(61_53_48/0.14)] will-change-transform"
        style={{
          borderRadius: '9999px',
          opacity: 1,
          mixBlendMode: 'normal',
        }}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="custom-cursor-layer cursor-dot pointer-events-none fixed left-0 top-0 z-[1000000] h-1.5 w-1.5 rounded-full bg-yoga-brown opacity-100 shadow-[0_0_0_2px_rgb(255_255_255/0.72)] will-change-transform"
        style={{
          borderRadius: '9999px',
          opacity: 1,
          mixBlendMode: 'normal',
        }}
        aria-hidden="true"
      />
    </>
  )
}
