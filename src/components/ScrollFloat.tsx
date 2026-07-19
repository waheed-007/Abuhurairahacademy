import { createElement, useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ScrollFloat.css'

gsap.registerPlugin(ScrollTrigger)

interface ScrollFloatProps {
  children: string
  as?: 'h1' | 'h2' | 'h3'
  containerClassName?: string
  textClassName?: string
  animationDuration?: number
  ease?: string
  scrollStart?: string
  scrollEnd?: string
  stagger?: number
}

export default function ScrollFloat({
  children,
  as = 'h2',
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLElement | null>(null)

  const splitText = useMemo(() => {
    /* Group each word's letters in their own inline-block wrapper so the
       browser can only wrap lines between words, never mid-word. The space
       after each word stays OUTSIDE that wrapper (as a sibling text node) —
       nesting it inside a white-space:nowrap span would get it collapsed
       away, gluing words together with no visible gap. */
    const words = children.split(' ')
    return words.map((word, wordIndex) => (
      <span key={wordIndex}>
        <span className="scroll-float-word">
          {word.split('').map((char, charIndex) => (
            <span className="char" key={charIndex}>
              {char}
            </span>
          ))}
        </span>
        {wordIndex < words.length - 1 ? ' ' : ''}
      </span>
    ))
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const charElements = el.querySelectorAll('.char')

    const anim = gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%',
      },
      {
        duration: animationDuration,
        ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      },
    )

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [children, animationDuration, ease, scrollStart, scrollEnd, stagger])

  return createElement(
    as,
    { ref: containerRef, className: `scroll-float ${containerClassName}` },
    <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>,
  )
}
