import { FormEvent, useState } from 'react'
import { HeartHandshake, Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'

const inputClass =
  'w-full rounded-xl border border-forest-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-200'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' })

  /* No backend yet — submitting opens the visitor's own email app with the
     message pre-filled, addressed to the academy. */
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const body = `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`
    const url = `mailto:${site.email}?subject=${encodeURIComponent(
      form.subject || 'Enquiry from the website',
    )}&body=${encodeURIComponent(body)}`
    window.location.href = url
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        intro="Enrolment enquiries, salaah times, volunteering or anything else — call, email or visit us at the academy."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid gap-10 lg:grid-cols-[1fr,1.1fr]">
          {/* Details */}
          <div>
            <SectionHeading align="left" eyebrow="Get In Touch" title="Academy Details" />
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-gold-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Address</p>
                  <p className="text-sm text-ink/70">{site.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-gold-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Phone / Fax</p>
                  <a href={site.phoneHref} className="text-sm text-ink/70 hover:text-forest-800">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-gold-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-ink/70 hover:text-forest-800"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-forest-100">
              <iframe
                title="Map — Abu Hurairah Academy, 28 Carrington Street, Bradford"
                src={site.mapsEmbed}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-forest-100 bg-white p-8 sm:p-10">
            <h2 className="font-display text-2xl text-forest-900">Send Us a Message</h2>
            <p className="mt-2 text-sm text-ink/60">
              Fill in the form and press send — it opens your email app with the message ready to go.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-forest-900">Your name</span>
                  <input
                    required
                    className={inputClass}
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-forest-900">Phone</span>
                  <input
                    className={inputClass}
                    placeholder="Contact number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-forest-900">Subject</span>
                <input
                  className={inputClass}
                  placeholder="e.g. Enrolment enquiry"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-forest-900">Message</span>
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
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-white py-16 sm:py-20">
        <div className="container-content max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-forest-950">
            <HeartHandshake size={28} />
          </div>
          <h2 className="mt-5 font-display text-3xl text-forest-900 sm:text-4xl">
            Support the Academy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">
            Abu Hurairah Academy is a voluntary, non-profit registered charity. Every contribution —
            sadaqah, zakah where applicable, or ongoing lillah support — goes directly towards
            teaching the children of our community. To donate, or to discuss sponsoring a student,
            please contact us:
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={site.phoneHref} className="btn-gold">
              <Phone size={16} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}?subject=Donation%20enquiry`} className="btn-outline">
              <Mail size={16} /> {site.email}
            </a>
          </div>
          <p className="mt-6 text-xs text-ink/50">
            Bank transfer details and Gift Aid forms are available from the academy office.
          </p>
        </div>
      </section>
    </>
  )
}
