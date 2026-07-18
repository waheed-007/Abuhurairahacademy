import { Instagram } from 'lucide-react'
import PageHero from '../components/PageHero'
import Placeholder from '../components/Placeholder'
import CTABanner from '../components/CTABanner'
import { site } from '../data/site'

/* Labels describe the real photos from the academy's Instagram —
   replace each placeholder with the actual image file when supplied. */
const photos = [
  'Reading corner: students with the classroom library (images/gallery-1.jpg)',
  'Word-building activity with sentence cards (images/gallery-2.jpg)',
  'Presentation day at the podium (images/gallery-3.jpg)',
  'Outdoor games: basketball on the field (images/gallery-4.jpg)',
  'Arts & crafts session (images/gallery-5.jpg)',
  'STEM project in action (images/gallery-6.jpg)',
  'Summer camp group activity (images/gallery-7.jpg)',
  'Baking and cooking fun (images/gallery-8.jpg)',
  'Quran and duas circle (images/gallery-9.jpg)',
]

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Academy Pictures"
        title="Moments From Academy Life"
        intro="Learning, making, playing and praying together at AbuHurairah Academy in Lombard."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((label) => (
              <Placeholder key={label} label={label} className="aspect-[4/3] w-full" />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex"
            >
              <Instagram size={18} /> Follow us on Instagram {site.instagramHandle}
            </a>
            <p className="mt-4 text-sm text-ink/60">
              Photos of students are shared with parental consent.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Your Child's Story Starts Here"
        text="The next photo could be your child's first day. Registration for 2026 is open now."
      />
    </>
  )
}
