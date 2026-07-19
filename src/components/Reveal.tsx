import { createElement, ReactNode, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealProps {
  children: ReactNode
  className?: string
  /* Direction the content slides in from. */
  from?: 'left' | 'right' | 'up'
  /* Stagger direct children instead of animating this element as one block. */
  stagger?: boolean
  staggerAmount?: number
  delay?: number
  /* Wrapping tag — use 'ul' when children are <li> elements. */
  as?: 'div' | 'ul'
}

/* Generic scroll-triggered entrance: fades and slides content into place
   once as it enters the viewport. Used for sections that aren't already
   inside a BentoGrid (which has its own built-in reveal). */
export default function Reveal({
  children,
  className = '',
  from = 'up',
  stagger = false,
  staggerAmount = 0.12,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger ? el.querySelectorAll(':scope > *') : el
    const fromVars =
      from === 'left'
        ? { opacity: 0, x: -50 }
        : from === 'right'
          ? { opacity: 0, x: 50 }
          : { opacity: 0, y: 32 }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay,
        stagger: stagger ? staggerAmount : 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [from, stagger, staggerAmount, delay])

  return createElement(as, { ref, className }, children)
}
