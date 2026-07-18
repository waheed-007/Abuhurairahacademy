interface PageHeroProps {
  eyebrow: string
  title: string
  intro: string
}

export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="pattern-dark">
      <div className="container-content py-16 text-center sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">{eyebrow}</p>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-forest-100 sm:text-lg">
          {intro}
        </p>
      </div>
    </section>
  )
}
