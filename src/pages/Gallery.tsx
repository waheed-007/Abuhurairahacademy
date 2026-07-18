import { Instagram } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { BentoCard, BentoGrid } from '../components/Bento'
import { site } from '../data/site'

const photos = [
  { src: '/images/gallery-1.jpg', alt: 'Classroom library corner with a world map and "Our World of Learning" display' },
  { src: '/images/gallery-2.jpg', alt: 'Reading nook shelf with picture books for students' },
  { src: '/images/gallery-3.jpg', alt: 'Writing workshop table with prewriting, drafting and editing anchor charts' },
  { src: '/images/gallery-4.jpg', alt: 'Bookshelf display of leveled reading bins and picture books' },
  { src: '/images/gallery-5.jpg', alt: 'Classroom library with sorted book bins by subject' },
  { src: '/images/gallery-6.jpg', alt: 'Whiteboard and study table in the classroom' },
  { src: '/images/gallery-7.jpg', alt: 'Classroom with whiteboard, round table and chairs' },
  { src: '/images/gallery-8.jpg', alt: "Teacher's desk with a globe and classroom storage" },
  { src: '/images/gallery-9.jpg', alt: 'Hallway alphabet chart for early learners' },
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
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full rounded-2xl object-cover"
                />
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
