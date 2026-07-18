import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Clock,
  HeartHandshake,
  Moon,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Placeholder from '../components/Placeholder'
import CTABanner from '../components/CTABanner'
import { salaahTimes } from '../data/site'

const provides = [
  {
    icon: BookOpen,
    title: 'Quran & Tajweed',
    text: 'Fluent recitation, correct tajweed and a structured memorisation-and-review programme that builds a lifelong bond with the Book of Allah.',
  },
  {
    icon: Moon,
    title: 'Islamic Studies',
    text: 'Aqeedah, fiqh, seerah and adab taught in a way children understand, love and carry into daily life.',
  },
  {
    icon: Users,
    title: 'Youth Tarbiyyah',
    text: 'Dedicated tarbiyyah programmes for boys and girls that shape confident, well-mannered young Muslims.',
  },
  {
    icon: Sparkles,
    title: 'Adult Learning',
    text: 'A separate adult programme outside normal academy hours, so parents and the wider community keep learning too.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Environment',
    text: 'Safe recruitment, child-protection procedures and DBS checks for every member of staff and every volunteer.',
  },
  {
    icon: HeartHandshake,
    title: 'Parent Partnership',
    text: 'Homework, progress updates, written reports and one-to-one consultations keep parents part of the journey.',
  },
]

const stats = [
  { value: '1998', label: 'Serving Bradford since' },
  { value: '25+', label: 'Years of Islamic education' },
  { value: '100%', label: 'DBS-checked staff & volunteers' },
  { value: 'B & G', label: 'Programmes for boys and girls' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pattern-dark relative overflow-hidden">
        <div className="container-content grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="font-arabic text-2xl text-gold-300">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Nurturing Hearts with the Quran, Since 1998
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-forest-100">
              Abu Hurairah Academy is a voluntary, non-profit registered charity in the heart of
              Bradford, providing children with a safe, structured and joyful Islamic education —
              rooted in the Quran and Sunnah, delivered by qualified teachers who love what they do.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Enrol Your Child <ArrowRight size={16} />
              </Link>
              <Link
                to="/programs"
                className="btn-outline !border-forest-500 !bg-transparent !text-forest-100 hover:!bg-forest-800"
              >
                Explore Programmes
              </Link>
            </div>
          </div>
          <Placeholder
            label="Real photo goes here: children learning at the academy (images/placeholder-hero.jpg)"
            className="aspect-[4/3] w-full !border-forest-600 !bg-forest-900/60 !text-forest-300"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-forest-100 bg-white">
        <div className="container-content grid grid-cols-2 gap-6 py-10 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-forest-800 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="container-content grid items-center gap-10 lg:grid-cols-2">
          <Placeholder
            label="Real photo goes here: academy building / classroom (images/placeholder-intro.jpg)"
            className="aspect-[4/3] w-full"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Welcome"
              title="A Second Home for Your Child's Deen"
              intro="Established in April 1998, Abu Hurairah Academy has served the families of Bradford for over two decades. We believe Islamic learning should be safe, structured, child-centred — and genuinely enjoyable."
            />
            <ul className="mt-6 space-y-3 text-ink/80">
              {[
                'Qualified, caring teachers who motivate children to achieve',
                'Small groups with attention for every learner',
                'Clear syllabus, homework and regular progress reports',
                'A warm community rooted in the mosque and the Quran',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Sparkles size={18} className="mt-1 shrink-0 text-gold-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary mt-8">
              About the Academy <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="What We Provide"
            title="Everything a Young Muslim Needs to Flourish"
            intro="From first letters of the Quran to youth tarbiyyah and adult classes, our programmes grow with your family."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {provides.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-forest-100 bg-cream p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-100"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-800 text-gold-300">
                  <item.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl text-forest-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salaah callout */}
      <section className="py-16 sm:py-20">
        <div className="container-content overflow-hidden rounded-3xl border border-forest-100 bg-white">
          <div className="grid lg:grid-cols-[1.1fr,1fr]">
            <div className="p-8 sm:p-10">
              <SectionHeading
                align="left"
                eyebrow="Salaah Times"
                title="Prayer at the Heart of the Day"
                intro="Daily prayers are established at the academy. Times change with the seasons — see the full timetable or call us for today's congregation times."
              />
              <Link to="/salaah" className="btn-primary mt-8">
                <Clock size={16} /> Full Salaah Timetable
              </Link>
            </div>
            <div className="pattern-dark p-8 sm:p-10">
              <ul className="divide-y divide-forest-700">
                {salaahTimes.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-3">
                    <span className="flex items-baseline gap-3">
                      <span className="font-display text-lg text-white">{p.name}</span>
                      <span className="font-arabic text-gold-300">{p.arabic}</span>
                    </span>
                    <span className="text-sm font-semibold text-forest-100">{p.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
