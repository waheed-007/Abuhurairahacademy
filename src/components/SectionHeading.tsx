interface SectionHeadingProps {
  eyebrow: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl text-forest-900 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink/70">{intro}</p>}
    </div>
  )
}
