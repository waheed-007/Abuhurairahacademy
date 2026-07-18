import {
  BookOpen,
  Calculator,
  FlaskConical,
  Moon,
  Palette,
  PenTool,
  School,
  Sparkles,
  Users,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import { BentoCard, BentoGrid } from '../components/Bento'

const programs = [
  {
    icon: School,
    title: 'Elementary School Program',
    tag: 'Core',
    points: [
      'Small-group classes with daily individual attention',
      'Quran, tajweed and duas built into every school day',
      'Reading and writing through the Readers & Writers Workshop',
      'Math foundations with daily practice and challenges',
      'Play, art and outdoor time — childhood is part of the curriculum',
    ],
  },
  {
    icon: Users,
    title: 'Middle School Program',
    tag: 'Core',
    points: [
      'Rigorous academics taught by a teacher with Secondary Math and English endorsements',
      'Deeper Islamic studies: seerah, values and personal practice',
      'Writing workshops that prepare students for high school',
      'STEM projects that build real problem-solving skills',
      'A supportive setting where teens are known and encouraged',
    ],
  },
  {
    icon: BookOpen,
    title: 'Islamic Learning',
    tag: 'Every day',
    points: [
      'Quran with correct tajweed, recited daily',
      'Masnoon duas for everyday life',
      'Seerah class: the life of the Prophet ﷺ, told to inspire',
      'Wudu and Duhr salat prayed together at school',
      'Islamic values woven through every subject',
    ],
  },
  {
    icon: Sparkles,
    title: 'Enrichment',
    tag: 'Beyond academics',
    points: [
      'Art: oil pastels, crayons, watercolor, play dough, ceramics and collage',
      'Needle work: bracelet making, knitting and crochet',
      'Cooking and baking projects',
      'Outdoor activities and team games',
      'Spoken Persian sessions',
    ],
  },
]

const academics = [
  {
    icon: Calculator,
    title: 'Math',
    text: 'From number sense to secondary-level math, taught by a certified teacher with a Secondary Math endorsement — plus daily Math Challenge problems.',
  },
  {
    icon: PenTool,
    title: 'English Language Arts',
    text: 'The Lucy Calkins Readers & Writers Workshop model, delivered by a trained Reader and Writer Specialist, builds strong, confident readers and writers.',
  },
  {
    icon: FlaskConical,
    title: 'STEM',
    text: 'Water experiments, magnets, balancing and construction — hands-on projects that turn curiosity into understanding.',
  },
  {
    icon: Moon,
    title: 'Islamic Studies',
    text: 'Quran, tajweed, duas and seerah as core subjects — with an Islamic worldview carried into everything else the students learn.',
  },
  {
    icon: Palette,
    title: 'Arts & Crafts',
    text: 'Regular creative work across many media, because making things by hand builds patience, focus and joy.',
  },
  {
    icon: Users,
    title: 'Physical Education',
    text: 'Soccer, basketball, relay races and more — healthy bodies supporting healthy minds, with swimming sessions when available.',
  },
]

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Learning"
        title="Strong Islamic Values, Comprehensive Academics"
        intro="An Islamic school program for elementary and middle school students — where deen and a full secular curriculum are taught side by side, in small groups."
        videoBg="/video/mosaic-marquee.mp4"
      />

      <section className="py-16 sm:py-20">
        <BentoGrid className="container-content grid gap-8 lg:grid-cols-2">
          {programs.map((p) => (
            <BentoCard key={p.title} className="rounded-3xl border border-brand-100 bg-white p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-gold-300">
                  <p.icon size={24} />
                </div>
                <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                  {p.tag}
                </span>
              </div>
              <h2 className="mt-5 font-display text-2xl text-brand-900">{p.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {p.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </BentoCard>
          ))}
        </BentoGrid>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Academics"
            title="What Your Child Will Study"
            intro="Every subject is taught to a professional standard, in a setting small enough that no question goes unasked."
          />
          <BentoGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academics.map((a) => (
              <BentoCard key={a.title} className="rounded-2xl border border-brand-100 bg-cream p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-gold-300">
                  <a.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl text-brand-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{a.text}</p>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      <CTABanner
        title="Which Program Fits Your Child?"
        text="Tell us your child's age and current level, and we'll recommend the right starting point. Registration for 2026 is open now."
      />
    </>
  )
}
