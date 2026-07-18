import { BookOpen, GraduationCap, Moon, ScrollText, Sparkles, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'

const programs = [
  {
    icon: BookOpen,
    title: 'Quran Programme',
    tag: 'Core',
    points: [
      'Qaidah for beginners: letters, sounds and fluency',
      'Recitation with correct tajweed, taught step by step',
      'Structured memorisation with daily review (sabaq, sabqi, manzil)',
      'Small teacher-to-student ratios and differentiated instruction',
      'Monthly "Gems of the Quran" reflections to build love and understanding',
    ],
  },
  {
    icon: Moon,
    title: 'Islamic Studies',
    tag: 'Core',
    points: [
      'Aqeedah: knowing Allah with certainty and love',
      'Fiqh of daily worship: wudu, salaah, fasting',
      'Seerah and stories of the Prophets, told to inspire',
      'Masnoon duas and adhkar for everyday life',
      'Akhlaq and adab: character before everything',
    ],
  },
  {
    icon: Users,
    title: 'Youth Tarbiyyah Programme',
    tag: 'Boys & Girls',
    points: [
      'Separate, age-appropriate groups for boys and girls',
      'Mentoring that connects young people to the mosque',
      'Discussion circles on real challenges young Muslims face',
      'Leadership, service and confidence-building activities',
      'Sports and recreation woven into the programme',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Adult Learning Programme',
    tag: 'Outside academy hours',
    points: [
      'Classes scheduled outside normal academy hours',
      'Quran reading and tajweed improvement for adults',
      'Essential knowledge: purification, prayer and daily fiqh',
      'A welcoming setting for beginners and returners alike',
    ],
  },
]

const approach = [
  {
    icon: ScrollText,
    title: 'Clear Syllabus & Reports',
    text: 'Every class follows a written syllabus. Parents receive homework, progress updates, written reports and one-to-one consultations.',
  },
  {
    icon: Sparkles,
    title: 'Love Before Memorisation',
    text: 'We build a genuine connection with the Quran first — children who love the Book keep it for life.',
  },
  {
    icon: Users,
    title: 'Small Groups',
    text: 'Low teacher-student ratios mean recitation is heard, corrected and praised every single lesson.',
  },
]

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Learning"
        title="A Complete Path of Sacred Learning"
        intro="From a child's first Qaidah lesson to youth tarbiyyah and adult classes — structured, loving and rooted in the Quran and Sunnah."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid gap-8 lg:grid-cols-2">
          {programs.map((p) => (
            <div key={p.title} className="rounded-3xl border border-forest-100 bg-white p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-800 text-gold-300">
                  <p.icon size={24} />
                </div>
                <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                  {p.tag}
                </span>
              </div>
              <h2 className="mt-5 font-display text-2xl text-forest-900">{p.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="How We Teach"
            title="Structured, Personal, Joyful"
            intro="Method matters as much as material. Three principles run through every classroom at the academy."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map((a) => (
              <div key={a.title} className="rounded-2xl border border-forest-100 bg-cream p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-gold-300">
                  <a.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl text-forest-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Begin?"
        text="Tell us your child's age and previous learning, and we will recommend the right class to start with."
      />
    </>
  )
}
