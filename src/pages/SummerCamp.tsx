import {
  Baby,
  CalendarDays,
  ChefHat,
  Clock,
  FlaskConical,
  Info,
  Palette,
  Scissors,
  Sun,
  Trophy,
  Waves,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import { site, summerCamp } from '../data/site'

const activities = [
  {
    icon: Palette,
    title: 'Art Activities',
    text: 'Oil pastels, crayons, watercolor painting, play dough, ceramics and collage.',
  },
  {
    icon: Scissors,
    title: 'Needle Work',
    text: 'Bracelet making, knitting and crochet.',
  },
  {
    icon: ChefHat,
    title: 'Cooking',
    text: 'Baking, sandwich making and cookie decoration.',
  },
  {
    icon: FlaskConical,
    title: 'STEM Projects',
    text: 'Water experiments, magnets, balancing and construction.',
  },
  {
    icon: Trophy,
    title: 'Outdoor Activities',
    text: 'Soccer, baseball, basketball, hopscotch, relay races, tug of war, jump rope, scavenger hunt and more.',
  },
  {
    icon: Waves,
    title: 'Swimming Sessions',
    text: 'For girls and boys under 5, depending on pool availability and interest. Pool rental is a separate charge; lessons are free for academy students.',
  },
]

export default function SummerCamp() {
  return (
    <>
      <PageHero
        eyebrow={summerCamp.name}
        title="A Summer of Faith, Fun and Learning"
        intro={`Ages ${summerCamp.ages} · ${summerCamp.days} · ${summerCamp.dates} · Near the Roosevelt & Meyers intersection in Lombard. Small groups for enhanced learning and fun!`}
      />

      {/* Key facts + pricing */}
      <section className="py-16 sm:py-20">
        <div className="container-content grid gap-8 lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <Baby size={22} className="text-brand-700" />
                <h3 className="font-display text-xl text-brand-900">Ages {summerCamp.ages}</h3>
              </div>
              <p className="mt-2 text-sm text-ink/70">
                Reserve your spot now — space is limited and groups are kept small for enhanced
                learning and fun.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <CalendarDays size={22} className="text-brand-700" />
                <h3 className="font-display text-xl text-brand-900">{summerCamp.dates}</h3>
              </div>
              <p className="mt-2 text-sm text-ink/70">
                {summerCamp.days}. Register by <strong>{summerCamp.registerBy}</strong>.
              </p>
            </div>
            <div className="rounded-2xl border border-gold-200 bg-gold-100/60 p-6">
              <div className="flex items-center gap-3">
                <Sun size={22} className="text-gold-600" />
                <h3 className="font-display text-xl text-brand-900">Pricing</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink/80">
                {summerCamp.pricing.map((p) => (
                  <li key={p.option} className="flex items-center justify-between">
                    <span>
                      <strong>{p.option}</strong> ({p.time})
                    </span>
                    <span className="font-semibold text-brand-800">{p.price}</span>
                  </li>
                ))}
                <li className="flex items-center justify-between border-t border-gold-200 pt-2">
                  <span>Materials</span>
                  <span className="font-semibold text-brand-800">{summerCamp.materialsFee}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Daily schedule */}
          <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white">
            <div className="pattern-dark flex items-center justify-between px-6 py-5 sm:px-8">
              <h2 className="font-display text-2xl text-white">Daily Schedule</h2>
              <Clock className="text-gold-300" size={26} />
            </div>
            <ul className="divide-y divide-brand-100">
              {summerCamp.schedule.map((s) => (
                <li key={s.time} className="flex items-center gap-4 px-6 py-3 sm:px-8">
                  <span className="w-14 shrink-0 font-display text-brand-800">{s.time}</span>
                  <span className="text-sm text-ink/80">{s.activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Camp Activities"
            title="Something to Love Every Single Day"
            intro="Mornings start with Quran, tajweed and duas — then the fun fans out across art, STEM, sports and more."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <div key={a.title} className="rounded-2xl border border-brand-100 bg-cream p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-gold-300">
                  <a.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl text-brand-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{a.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-gold-200 bg-gold-100/60 p-5 text-sm leading-relaxed text-ink/80">
            <Info size={20} className="mt-0.5 shrink-0 text-gold-600" />
            <p>
              To register or ask a question, call or text {site.teacher} at{' '}
              <a href={site.phoneHref} className="font-semibold text-brand-800 underline">
                {site.phone}
              </a>
              . Space is limited — register by {summerCamp.registerBy}.
            </p>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Registration"
            title="How to Reserve Your Child's Spot"
            intro={`Registration closes ${summerCamp.registerBy}. See you on June 8, insha'Allah!`}
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Fill Out the Form',
                text: 'Complete the registration form below — please fill out a separate form for each child.',
              },
              {
                step: '2',
                title: 'Pay via Zelle',
                text: `Send your payment via Zelle to ${summerCamp.zelle} to secure your child's spot. Add the ${summerCamp.materialsFee} materials fee to your module price.`,
              },
              {
                step: '3',
                title: "You're In!",
                text: `That's it — camp begins June 8. Questions? Call or text ${site.phone}.`,
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-brand-100 bg-white p-6 text-center"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg text-brand-950">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-xl text-brand-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </div>
            ))}
          </div>

          {summerCamp.registrationFormUrl ? (
            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-brand-100 bg-white">
              <div className="pattern-dark px-6 py-4 text-center">
                <h3 className="font-display text-xl text-white">
                  {summerCamp.name} 2026 — Registration Form
                </h3>
              </div>
              <iframe
                title="Summer camp registration form"
                src={summerCamp.registrationFormUrl}
                className="h-[1200px] w-full"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          ) : (
            <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink/60">
              The online registration form will appear here shortly. In the meantime, call or text{' '}
              <a href={site.phoneHref} className="font-semibold text-brand-800 underline">
                {site.phone}
              </a>{' '}
              to register.
            </p>
          )}
        </div>
      </section>

      <CTABanner
        title="Reserve Your Child's Summer Spot"
        text={`${summerCamp.dates}, ages ${summerCamp.ages}. Register by ${summerCamp.registerBy} — call or text ${site.phone}.`}
      />
    </>
  )
}
