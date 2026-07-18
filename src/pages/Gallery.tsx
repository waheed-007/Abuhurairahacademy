import { Instagram } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { BentoCard, BentoGrid } from '../components/Bento'
import PhotoGlare from '../components/PhotoGlare'
import { site } from '../data/site'

const photos = [
  { src: '/images/gallery-1.jpg', alt: 'Students at the Annual Spelling Bee of Islamic Microschools, holding certificates and medals' },
  { src: '/images/gallery-2.jpg', alt: 'Ms. Mariam Saifuddin with academy students outdoors, celebrating with flowers' },
  { src: '/images/gallery-3.jpg', alt: 'Students playing together outdoors after class' },
  { src: '/images/gallery-4.jpg', alt: 'A student practicing Arabic letter writing in a workbook' },
  { src: '/images/gallery-5.jpg', alt: 'Students measuring angles with a protractor during a math activity' },
  { src: '/images/gallery-6.jpg', alt: 'Arts and crafts table with student drawings and markers' },
  { src: '/images/gallery-7.jpg', alt: 'Play-Doh activity with animal-shaped molds' },
  { src: '/images/gallery-8.jpg', alt: 'Reading and sentence-building activity with word cards' },
  { src: '/images/gallery-9.jpg', alt: 'Classroom library with a world map and "Our World of Learning" display' },
]

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Academy Pictures"
        title="Moments From Academy Life"
        intro="A look inside AbuHurairah Academy in Lombard — our classrooms, library and learning spaces."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <BentoGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <BentoCard key={photo.src} className="aspect-[4/3] w-full rounded-2xl border border-brand-100">
                <PhotoGlare src={photo.src} alt={photo.alt} className="h-full w-full" />
              </BentoCard>
            ))}
          </BentoGrid>
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
