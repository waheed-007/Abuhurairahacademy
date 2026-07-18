import { ReactNode, useCallback, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './bento.css'

/* Interactive card effects adapted from React Bits' MagicBento,
   recolored to the academy's teal/gold theme. Effects are skipped
   on mobile, where there is no hover. */

const SPOTLIGHT_RADIUS = 300
const PARTICLE_COUNT = 10
const MOBILE_BREAKPOINT = 768

const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT

function createParticle(x: number, y: number) {
  const el = document.createElement('div')
  el.className = 'bento-particle'
  el.style.left = `${x}px`
  el.style.top = `${y}px`
  return el
}

interface BentoProps {
  children: ReactNode
  className?: string
}

export function BentoCard({ children, className = '' }: BentoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const hovered = useRef(false)
  const timeouts = useRef<number[]>([])
  const particles = useRef<HTMLElement[]>([])

  const clearParticles = useCallback(() => {
    timeouts.current.forEach(clearTimeout)
    timeouts.current = []
    particles.current.forEach((p) =>
      gsap.to(p, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => p.remove(),
      }),
    )
    particles.current = []
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || isMobile()) return

    const spawnParticles = () => {
      const { width, height } = el.getBoundingClientRect()
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const id = window.setTimeout(() => {
          if (!hovered.current) return
          const p = createParticle(Math.random() * width, Math.random() * height)
          el.appendChild(p)
          particles.current.push(p)
          gsap.fromTo(
            p,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
          )
          gsap.to(p, {
            x: (Math.random() - 0.5) * 80,
            y: (Math.random() - 0.5) * 80,
            rotation: Math.random() * 360,
            duration: 2 + Math.random() * 2,
            ease: 'none',
            repeat: -1,
            yoyo: true,
          })
          gsap.to(p, {
            opacity: 0.4,
            duration: 1.5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
          })
        }, i * 100)
        timeouts.current.push(id)
      }
    }

    const onEnter = () => {
      hovered.current = true
      spawnParticles()
    }

    const onLeave = () => {
      hovered.current = false
      clearParticles()
      gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' })
    }

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      const cx = r.width / 2
      const cy = r.height / 2
      gsap.to(el, {
        rotateX: ((y - cy) / cy) * -5,
        rotateY: ((x - cx) / cx) * 5,
        x: (x - cx) * 0.03,
        y: (y - cy) * 0.03,
        duration: 0.2,
        ease: 'power2.out',
        transformPerspective: 1000,
      })
    }

    const onClick = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - r.width, y),
        Math.hypot(x, y - r.height),
        Math.hypot(x - r.width, y - r.height),
      )
      const ripple = document.createElement('div')
      ripple.className = 'bento-ripple'
      ripple.style.width = ripple.style.height = `${maxDistance * 2}px`
      ripple.style.left = `${x - maxDistance}px`
      ripple.style.top = `${y - maxDistance}px`
      el.appendChild(ripple)
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() },
      )
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('click', onClick)
    return () => {
      hovered.current = false
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('click', onClick)
      clearParticles()
    }
  }, [clearParticles])

  return (
    <div ref={ref} className={`magic-bento-card ${className}`}>
      {children}
    </div>
  )
}

export function BentoGrid({ children, className = '' }: BentoProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid || isMobile()) return

    const spotlight = document.createElement('div')
    spotlight.className = 'bento-spotlight'
    document.body.appendChild(spotlight)

    const proximity = SPOTLIGHT_RADIUS * 0.5
    const fadeDistance = SPOTLIGHT_RADIUS * 0.75

    const onMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect()
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      const cards = grid.querySelectorAll<HTMLElement>('.magic-bento-card')

      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: 'power2.out' })
        cards.forEach((c) => c.style.setProperty('--glow-intensity', '0'))
        return
      }

      let minDistance = Infinity
      cards.forEach((card) => {
        const r = card.getBoundingClientRect()
        const distance =
          Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)) -
          Math.max(r.width, r.height) / 2
        const d = Math.max(0, distance)
        minDistance = Math.min(minDistance, d)
        const intensity = d <= proximity ? 1 : d <= fadeDistance ? (fadeDistance - d) / (fadeDistance - proximity) : 0
        card.style.setProperty('--glow-x', `${((e.clientX - r.left) / r.width) * 100}%`)
        card.style.setProperty('--glow-y', `${((e.clientY - r.top) / r.height) * 100}%`)
        card.style.setProperty('--glow-intensity', intensity.toString())
      })

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' })
      const targetOpacity =
        minDistance <= proximity
          ? 0.7
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.7
            : 0
      gsap.to(spotlight, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out',
      })
    }

    const onLeave = () => {
      grid.querySelectorAll<HTMLElement>('.magic-bento-card').forEach((c) =>
        c.style.setProperty('--glow-intensity', '0'),
      )
      gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: 'power2.out' })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      spotlight.remove()
    }
  }, [])

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  )
}
