import { Award, BookHeart, GraduationCap, HandHeart, Ruler, Target, Waves } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import { BentoCard, BentoGrid } from '../components/Bento'
import { facilities, site } from '../data/site'

const values = [
  {
    icon: BookHeart,
    title: 'Islamic Values First',
    text: 'Quran, tajweed, duas, seerah and daily salat are part of the school rhythm — faith is lived at school, not just taught.',
  },
  {
    icon: Ruler,
    title: 'Small by Design',
    text: 'A smaller setting means every child gets real attention, and that is exactly what drives higher student achievement.',
  },
  {
    icon: Target,
    title: 'Serious Academics',
    text: 'A comprehensive secular curriculum — math, reading, writing, STEM — delivered to a professional, certified standard.',
  },
  {
    icon: HandHeart,
    title: 'Supportive Environment',
    text: 'Children learn best when they feel safe and encouraged. Confidence is built one small win at a time.',
  },
]

const credentials = [
  { icon: GraduationCap, text: 'Certified Illinois teacher for grades 1 to 9' },
  { icon: Award, text: 'Endorsements in Secondary Math and English' },
  { icon: BookHeart, text: '18 years of experience in Islamic and international schools' },
  {
    icon: Target,
    text: 'Trained Reader and Writer Specialist — 4 years of training in the Lucy Calkins Workshop model',
  },
  { icon: Waves, text: 'Swimming trainer for almost 9 years' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Small School with Big Standards"
        intro="AbuHurairah Academy was established in 2025 in Lombard, Illinois to offer education in a small, supportive environment that promotes higher student achievement."
      />

      {/* About the school */}
      <section className="py-16 sm:py-20">
        <div className="container-content grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About the School"
              title="Why We Started"
              intro=""
            />
            <div className="mt-4 space-y-4 leading-relaxed text-ink/80">
              <p>
                AbuHurairah Academy was established in 2025 with the goal of offering education in a
                small, supportive environment that promotes higher student achievement. The academy
                provides an Islamic school program for elementary and middle school students that
                integrates strong Islamic values and education alongside a comprehensive secular
                curriculum.
              </p>
              <p>
                In practice, that means a day where Quran, tajweed and duas sit naturally next to
                math, reading and science; where the seerah of the Prophet ﷺ shapes character; and
                where wudu and Duhr salat are prayed together as part of school life.
              </p>
              <p>
                We keep our groups deliberately small. When a teacher truly knows every child, no one
                slips through the cracks — and children achieve more than they thought they could.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="/images/intro.jpg"
              alt="The academy's classroom library with a world map and sorted book bins"
              className="aspect-[4/3] w-full rounded-2xl border border-brand-100 object-cover shadow-xl shadow-brand-200/60"
            />
            <div className="rounded-2xl border border-gold-200 bg-gold-100/60 p-6">
              <h3 className="font-display text-lg text-brand-900">Our Facilities</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-ink/80">
                {facilities.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the teacher */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-content grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/images/teacher.jpg"
            alt="Ms. Mariam with her students outdoors, holding bouquets of flowers"
            className="aspect-square w-full rounded-2xl border border-brand-100 object-cover shadow-xl shadow-brand-200/60"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Meet the Teacher"
              title={site.teacher}
              intro="The academy is founded and led by an experienced educator who brings professional training and genuine warmth to every class."
            />
            <ul className="mt-6 space-y-3">
              {credentials.map((c) => (
                <li key={c.text} className="flex items-start gap-3 text-ink/80">
                  <c.icon size={20} className="mt-0.5 shrink-0 text-brand-600" />
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="What We Stand For"
            intro="Four commitments shape every school day at AbuHurairah Academy."
          />
          <BentoGrid className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <BentoCard
                key={v.title}
                className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-gold-300">
                  <v.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-brand-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.text}</p>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      <CTABanner
        title="Come Meet Us"
        text={`The best way to know the academy is to talk to us. Call or text ${site.teacher} at ${site.phone}.`}
      />
    </>
  )
}
