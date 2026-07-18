import { Dumbbell, Leaf, Medal, Palette, Smile, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Placeholder from '../components/Placeholder'
import CTABanner from '../components/CTABanner'

const sports = [
  { name: 'Badminton', icon: Trophy },
  { name: 'Table Tennis', icon: Medal },
  { name: 'Football', icon: Dumbbell },
  { name: 'Cricket', icon: Trophy },
]

const enrichment = [
  {
    icon: Palette,
    title: 'Creative Corner',
    text: 'Islamic art, calligraphy practice and craft projects that let children express what they learn.',
  },
  {
    icon: Leaf,
    title: 'Reflecting on Creation',
    text: 'Nature walks and simple science moments that point young hearts to the signs of Allah all around them.',
  },
  {
    icon: Smile,
    title: 'Celebrations & Rewards',
    text: 'Certificates, prize days and Eid celebrations — achievement at the academy is always celebrated together.',
  },
]

export default function Kids() {
  return (
    <>
      <PageHero
        eyebrow="Kids & Student Life"
        title="Serious Learning, Joyful Childhood"
        intro="A child who is happy at the academy learns better. Alongside their studies, our students play, compete, create and celebrate together."
      />

      {/* Sports */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Sports & Activities"
            title="Healthy Bodies, Strong Character"
            intro="Regular sports sessions build fitness, teamwork and brotherhood — with fair play and good adab as the first rule of every game."
          />
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {sports.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-forest-100 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-gold-300">
                  <s.icon size={22} />
                </div>
                <span className="font-display text-lg text-forest-900">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A day at the academy */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-content grid items-center gap-10 lg:grid-cols-2">
          <Placeholder
            label="Real photo goes here: students during activities (images/placeholder-kids.jpg)"
            className="aspect-[4/3] w-full"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Student Life"
              title="What a Session Looks Like"
              intro=""
            />
            <ol className="mt-6 space-y-4">
              {[
                ['Arrival & settling', 'A calm start with duas and a smile from the teacher.'],
                ['Quran time', 'Individual recitation, memorisation and review in small groups.'],
                ['Islamic studies', 'A short, lively lesson — stories, questions and discussion.'],
                ['Salaah together', 'Praying in congregation, learning by doing.'],
                ['Activity & home time', 'Sports, enrichment or quiet reading before safe collection.'],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500 font-display text-sm text-forest-950">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-forest-900">{title}</p>
                    <p className="text-sm text-ink/70">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Enrichment */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Enrichment"
            title="Beyond the Classroom"
            intro="Extra experiences that round out an academy childhood."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {enrichment.map((e) => (
              <div key={e.title} className="rounded-2xl border border-forest-100 bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-gold-300">
                  <e.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl text-forest-900">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let Your Child Belong Here"
        text="Friendship, faith and fun — enquire today and give your child a community they'll love."
      />
    </>
  )
}
