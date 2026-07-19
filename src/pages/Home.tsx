import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Calculator,
  FlaskConical,
  Library,
  Moon,
  Palette,
  PenTool,
  Sparkles,
  Sun,
  Trees,
  Users,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import { BentoCard, BentoGrid } from '../components/Bento'
import CurvedLoop from '../components/CurvedLoop'
import ScrollFloat from '../components/ScrollFloat'
import PhotoGlare from '../components/PhotoGlare'
import Reveal from '../components/Reveal'
import { TealRimGlow, GoldRimGlow } from '../components/SpecularButton'
import { facilities, site, summerCamp } from '../data/site'

const provides = [
  {
    icon: BookOpen,
    title: 'Quran, Tajweed & Duas',
    text: 'Daily Quran time with correct tajweed and the duas of everyday life, so recitation and remembrance become second nature.',
  },
  {
    icon: Moon,
    title: 'Seerah & Islamic Values',
    text: 'The life of the Prophet ﷺ and strong Islamic values woven through the whole school day, including wudu and Duhr salat together.',
  },
  {
    icon: Calculator,
    title: 'Math',
    text: 'Taught by a certified Illinois teacher with a Secondary Math endorsement, from foundations to daily Math Challenge problems.',
  },
  {
    icon: PenTool,
    title: 'Readers & Writers Workshop',
    text: 'English language arts in the Lucy Calkins Workshop model, led by a trained Reader and Writer Specialist.',
  },
  {
    icon: FlaskConical,
    title: 'STEM Projects',
    text: 'Hands-on water experiments, magnets, balancing and construction projects that make science stick.',
  },
  {
    icon: Palette,
    title: 'Arts & Enrichment',
    text: 'Oil pastels, watercolor, ceramics, needle work, baking and more, because creativity belongs in a full education.',
  },
]

const stats = [
  { value: '2025', label: 'Academy established' },
  { value: '1–9', label: 'Illinois-certified teaching grades' },
  { value: '18', label: 'Years of teaching experience' },
  { value: 'Small', label: 'Groups for higher achievement' },
]

const facilityIcons = [Users, Library, Trees, Sparkles]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pattern-dark relative overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/cover-flow.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/15 via-brand-950/10 to-brand-950/45" />
        <div className="container-content relative mx-auto max-w-3xl py-20 text-center sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-950">
            <Sun size={14} /> School Admission Now Open for 2026
          </span>
          <ScrollFloat
            as="h1"
            containerClassName="mt-5"
            textClassName="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Islamic School, Bigger Achievements, Smaller Setting
          </ScrollFloat>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
            AbuHurairah Academy in {site.location} offers an elementary and middle school Islamic
            program in a small, supportive environment that promotes higher student achievement —
            strong Islamic values alongside a comprehensive secular curriculum.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TealRimGlow>
              <Link to="/contact#register" className="btn-gold">
                Register Your Child <ArrowRight size={16} />
              </Link>
            </TealRimGlow>
            <GoldRimGlow>
              <Link
                to="/programs"
                className="btn-outline !border-brand-500 !bg-transparent !text-brand-100 hover:!bg-brand-800"
              >
                Explore Programs
              </Link>
            </GoldRimGlow>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-brand-100 bg-white">
        <Reveal
          stagger
          className="container-content grid grid-cols-2 gap-6 py-10 text-center md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-brand-800 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="container-content grid items-center gap-10 lg:grid-cols-2">
          <Reveal from="left">
            <PhotoGlare
              src="/images/intro.jpg"
              alt="The academy's reading corner with a world map, book bins and 'Our World of Learning' display"
              className="aspect-square w-full border border-brand-100 shadow-xl shadow-brand-200/60"
            />
          </Reveal>
          <Reveal from="right">
            <SectionHeading
              align="left"
              eyebrow="Welcome"
              title="A School Built Around Your Child"
              intro="The aim of the school is simple: education in a smaller setting for higher student achievement. Every child is seen, heard and stretched — academically and spiritually."
            />
            <ul className="mt-6 space-y-3 text-ink/80">
              {[
                `Led by ${site.teacher}, a certified Illinois teacher for grades 1 to 9`,
                'Endorsements in Secondary Math and English',
                '18 years of experience in Islamic and international schools',
                'Trained Reader and Writer Specialist (Lucy Calkins Workshop model)',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Sparkles size={18} className="mt-1 shrink-0 text-gold-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <GoldRimGlow className="mt-8 inline-block">
              <Link to="/about" className="btn-primary">
                About the Academy <ArrowRight size={16} />
              </Link>
            </GoldRimGlow>
          </Reveal>
        </div>
      </section>

      {/* What we provide */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="What We Provide"
            title="Deen and Dunya, Taught Together"
            intro="An Islamic school program that integrates strong Islamic values and education alongside a comprehensive secular curriculum."
          />
          <BentoGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {provides.map((item) => (
              <BentoCard
                key={item.title}
                className="rounded-2xl border border-brand-100 bg-cream p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-gold-300">
                  <item.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </BentoCard>
            ))}
          </BentoGrid>

          {/* Facilities strip */}
          <Reveal stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facilities.map((f, i) => {
              const Icon = facilityIcons[i]
              return (
                <div
                  key={f}
                  className="flex items-center justify-center gap-2 rounded-xl border border-brand-100 bg-cream px-4 py-3 text-sm font-semibold text-brand-800"
                >
                  <Icon size={18} className="text-gold-500" /> {f}
                </div>
              )
            })}
          </Reveal>

          <div className="mt-6">
            <CurvedLoop
              marqueeText="Registration Open ✦ Small Groups ✦ Islamic Values ✦ Quality Education ✦"
              speed={1.2}
              curveAmount={180}
              className="curved-loop-text"
            />
          </div>
        </div>
      </section>

      {/* Summer camp callout */}
      <section className="py-16 sm:py-20">
        <div className="container-content overflow-hidden rounded-3xl border border-brand-100 bg-white">
          <div className="grid lg:grid-cols-[1.1fr,1fr]">
            <Reveal from="left" className="p-8 sm:p-10">
              <SectionHeading
                align="left"
                eyebrow="Ms. M's Summer Camp"
                title="Summer Camp for Ages 4–12"
                intro={`${summerCamp.days}, ${summerCamp.dates}. Quran, seerah, STEM, arts, sports and more — register by ${summerCamp.registerBy}, space is limited!`}
              />
              <TealRimGlow className="mt-8 inline-block">
                <Link to="/summer-camp" className="btn-primary">
                  <Sun size={16} /> Summer Camp Details
                </Link>
              </TealRimGlow>
            </Reveal>
            <Reveal from="right" className="pattern-dark p-8 sm:p-10">
              <ul className="divide-y divide-brand-700">
                {summerCamp.pricing.map((p) => (
                  <li key={p.option} className="flex items-center justify-between py-3">
                    <span className="flex items-baseline gap-3">
                      <span className="font-display text-lg text-white">{p.option}</span>
                      <span className="text-sm text-brand-200">{p.time}</span>
                    </span>
                    <span className="text-sm font-semibold text-gold-300">{p.price}</span>
                  </li>
                ))}
                <li className="flex items-center justify-between py-3">
                  <span className="font-display text-lg text-white">Materials</span>
                  <span className="text-sm font-semibold text-gold-300">
                    {summerCamp.materialsFee}
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
