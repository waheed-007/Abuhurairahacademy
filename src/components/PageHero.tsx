interface PageHeroProps {
  eyebrow: string
  title: string
  intro: string
  videoBg?: string
}

export default function PageHero({ eyebrow, title, intro, videoBg }: PageHeroProps) {
  return (
    <section className="pattern-dark relative overflow-hidden">
      {videoBg && (
        <>
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            src={videoBg}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 via-brand-950/50 to-brand-950/80" />
        </>
      )}
      <div className="container-content relative py-16 text-center sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">{eyebrow}</p>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
          {intro}
        </p>
      </div>
    </section>
  )
}
