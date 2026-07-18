import { BadgeCheck, BookHeart, HandHeart, Landmark, ShieldCheck, Target } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Placeholder from '../components/Placeholder'
import CTABanner from '../components/CTABanner'

const values = [
  {
    icon: BookHeart,
    title: 'Quran First',
    text: 'Every part of academy life begins and ends with the Book of Allah — recited beautifully, understood deeply and lived sincerely.',
  },
  {
    icon: HandHeart,
    title: 'Child-Centred Care',
    text: 'Children learn best when they feel safe and valued. Our teachers encourage, never intimidate, and celebrate every step of progress.',
  },
  {
    icon: Landmark,
    title: 'Community Rooted',
    text: 'As a voluntary, non-profit registered charity, we exist purely to serve the families of Bradford — as we have since April 1998.',
  },
  {
    icon: Target,
    title: 'Excellence & Effort',
    text: 'High expectations with warm support: a clear syllabus, regular assessment and honest reporting to parents.',
  },
]

const safeguarding = [
  'Safe recruitment policies for every appointment',
  'Enhanced DBS checks for all staff and volunteers',
  'Clear child-protection procedures known to the whole team',
  'A named safeguarding lead parents can always speak to',
  'Safe collection and drop-off routines for younger children',
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Serving Bradford's Families Since 1998"
        intro="Abu Hurairah Academy is a voluntary, non-profit registered charity providing Islamic education for children — built by the community, for the community."
      />

      {/* History & mission */}
      <section className="py-16 sm:py-20">
        <div className="container-content grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="A Legacy Built on Love of Knowledge"
              intro=""
            />
            <div className="mt-4 space-y-4 leading-relaxed text-ink/80">
              <p>
                Abu Hurairah Academy was established in April 1998 with a simple conviction: the
                children of our community deserve an Islamic education that is safe, structured and
                delivered with excellence. What began as a small local effort has grown, alhamdulillah,
                into an academy that has nurtured a generation of young Muslims in Bradford.
              </p>
              <p>
                We are named after the great companion Abu Hurairah (may Allah be pleased with him),
                the most prolific narrator of the Prophet's ﷺ words — a reminder to our students that
                preserving and living sacred knowledge is a noble inheritance.
              </p>
              <p>
                Our mission today is unchanged: to help every child recite the Quran beautifully,
                understand their deen confidently, and carry Islamic character into every part of
                their lives.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Placeholder
              label="Real photo goes here: the academy through the years (images/placeholder-history.jpg)"
              className="aspect-[4/3] w-full"
            />
            <div className="rounded-2xl border border-gold-200 bg-gold-100/60 p-6">
              <p className="font-arabic text-xl text-forest-900">
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </p>
              <p className="mt-2 text-sm italic text-ink/70">
                "The best of you are those who learn the Quran and teach it." — Prophet Muhammad ﷺ
                (Sahih al-Bukhari)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="What We Stand For"
            intro="Four commitments shape everything we do, from the youngest beginner to our adult learners."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-2xl border border-forest-100 bg-cream p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-gold-300">
                  <v.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="py-16 sm:py-20">
        <div className="container-content grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Safeguarding"
              title="Your Child's Safety Comes Before Everything"
              intro="Parents trust us with what is most precious to them. We honour that trust with robust, transparent safeguarding."
            />
            <ul className="mt-6 space-y-3">
              {safeguarding.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <BadgeCheck size={20} className="mt-0.5 shrink-0 text-forest-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-forest-100 bg-white p-8 text-center sm:p-10">
            <ShieldCheck size={48} className="mx-auto text-forest-700" />
            <h3 className="mt-4 font-display text-2xl text-forest-900">DBS-Checked, Always</h3>
            <p className="mt-3 leading-relaxed text-ink/70">
              Every member of staff and every volunteer at Abu Hurairah Academy undergoes an enhanced
              DBS check before working with children — no exceptions. Copies of our safeguarding and
              child-protection policies are available to parents on request.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Come and See the Academy for Yourself"
        text="The best way to know us is to visit. Call or email to arrange a time — we welcome every family."
      />
    </>
  )
}
