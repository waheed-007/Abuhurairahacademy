import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarCheck, Instagram, MapPin, MessageSquareText, Phone, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ScrollFloat from '../components/ScrollFloat'
import { site, summerCamp } from '../data/site'

const inputClass =
  'w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200'

export default function Contact() {
  const [form, setForm] = useState({ name: '', childAge: '', message: '' })

  /* No backend yet — submitting opens the visitor's messaging app with a
     text to the academy's number pre-filled. */
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const body = `Assalamu alaikum, this is ${form.name}. Child's age: ${form.childAge}. ${form.message}`
    window.location.href = `${site.smsHref}?&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        intro="Registration, summer camp, or any question about the academy — call, text, or message us on Instagram."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid gap-10 lg:grid-cols-[1fr,1.1fr]">
          {/* Details */}
          <div>
            <SectionHeading align="left" eyebrow="Get In Touch" title="Academy Details" />
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-gold-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-brand-900">Location</p>
                  <p className="text-sm text-ink/70">{site.locationDetail}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-gold-300">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="font-semibold text-brand-900">Instagram</p>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink/70 hover:text-brand-800"
                  >
                    {site.instagramHandle}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-brand-100">
              <iframe
                title="Map — AbuHurairah Academy area, Lombard, IL"
                src={site.mapsEmbed}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-brand-100 bg-white p-8 sm:p-10">
            <ScrollFloat as="h2" textClassName="font-display text-2xl text-brand-900">
              Send Us a Text
            </ScrollFloat>
            <p className="mt-2 text-sm text-ink/60">
              Fill in the form and press send — it opens your messaging app with a text to the
              academy, ready to go.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-brand-900">Your name</span>
                  <input
                    required
                    className={inputClass}
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-brand-900">
                    Child's age
                  </span>
                  <input
                    className={inputClass}
                    placeholder="e.g. 7"
                    value={form.childAge}
                    onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brand-900">Message</span>
                <textarea
                  required
                  rows={5}
                  className={inputClass}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send size={16} /> Send Message
              </button>
            </form>
            <p className="mt-4 flex items-start gap-2 text-xs text-ink/50">
              <MessageSquareText size={14} className="mt-0.5 shrink-0" />
              Prefer to talk? Our number is just below, in the Registration section.
            </p>
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="bg-white py-16 sm:py-20">
        <div className="container-content max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-brand-950">
            <CalendarCheck size={28} />
          </div>
          <ScrollFloat
            as="h2"
            containerClassName="mt-5"
            textClassName="font-display text-3xl text-brand-900 sm:text-4xl"
          >
            Registration 2026 Is Open
          </ScrollFloat>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">
            School admission is now open for registration 2026 — elementary and middle school
            programs in a small, supportive Islamic environment. Summer camp (ages {summerCamp.ages})
            runs {summerCamp.dates}; register by {summerCamp.registerBy}. Space is limited, so get in
            touch early to reserve your child's spot.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/summer-camp#register" className="btn-gold">
              <CalendarCheck size={16} /> Summer Camp Registration
            </Link>
            <a href={site.phoneHref} className="btn-outline">
              <Phone size={16} /> {site.phone}
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-outline">
              <Instagram size={16} /> {site.instagramHandle}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
