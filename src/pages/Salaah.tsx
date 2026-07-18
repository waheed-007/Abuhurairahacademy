import { AlarmClock, Info, PhoneCall } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { salaahTimes, site } from '../data/site'

export default function Salaah() {
  return (
    <>
      <PageHero
        eyebrow="Salaah Times"
        title="Establishing Prayer, Together"
        intro="Daily prayers are established at the academy, and our students pray in congregation as part of their learning."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-forest-100 bg-white">
            <div className="pattern-dark flex items-center justify-between px-6 py-5 sm:px-8">
              <h2 className="font-display text-2xl text-white">Daily Prayer Times</h2>
              <AlarmClock className="text-gold-300" size={26} />
            </div>
            <ul className="divide-y divide-forest-100">
              {salaahTimes.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between gap-4 px-6 py-4 sm:px-8"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xl text-forest-900">{p.name}</span>
                    <span className="font-arabic text-lg text-gold-600">{p.arabic}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-forest-800">{p.time}</p>
                    <p className="text-xs text-ink/50">{p.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gold-200 bg-gold-100/60 p-5 text-sm leading-relaxed text-ink/80">
            <Info size={20} className="mt-0.5 shrink-0 text-gold-600" />
            <p>
              Times shown are indicative and change through the year with the seasons. For today's
              exact congregation times, or for Jumu'ah arrangements, please call the academy on{' '}
              <a href={site.phoneHref} className="font-semibold text-forest-800 underline">
                {site.phone}
              </a>{' '}
              — we'll be happy to help.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-forest-100 bg-white p-6 text-center">
            <PhoneCall size={28} className="mx-auto text-forest-700" />
            <p className="mt-3 text-ink/80">
              Want the monthly timetable? Email{' '}
              <a href={`mailto:${site.email}`} className="font-semibold text-forest-800 underline">
                {site.email}
              </a>{' '}
              and we'll send the latest copy.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Pray With Us"
        text="The academy doors are open to the community. Join us for salaah at 28 Carrington Street, Bradford."
      />
    </>
  )
}
