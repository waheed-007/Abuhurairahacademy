import PageHero from '../components/PageHero'
import Placeholder from '../components/Placeholder'
import CTABanner from '../components/CTABanner'

const photos = [
  'Quran class in session (images/placeholder-1.jpg)',
  'Students reciting together (images/placeholder-2.jpg)',
  'Prize-giving day (images/placeholder-3.jpg)',
  'Sports afternoon — badminton (images/placeholder-4.jpg)',
  'Islamic art and craft work (images/placeholder-5.jpg)',
  'Congregational salaah (images/placeholder-6.jpg)',
  'Eid celebration at the academy (images/placeholder-7.jpg)',
  'Table tennis tournament (images/placeholder-8.jpg)',
  'Youth tarbiyyah circle (images/placeholder-9.jpg)',
]

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Academy Pictures"
        title="Moments From Academy Life"
        intro="A glimpse of learning, worship, sport and celebration at Abu Hurairah Academy. Real photographs will appear here soon, insha'Allah."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((label) => (
              <Placeholder key={label} label={label} className="aspect-[4/3] w-full" />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink/60">
            Photographs of students are only published with written parental consent, in line with
            our safeguarding policy.
          </p>
        </div>
      </section>

      <CTABanner
        title="Make Your Own Memories Here"
        text="The next photo on this wall could be your child's prize day. Get in touch to enrol."
      />
    </>
  )
}
