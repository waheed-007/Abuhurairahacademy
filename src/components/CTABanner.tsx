import { Link } from 'react-router-dom'
import { HeartHandshake, Phone } from 'lucide-react'

interface CTABannerProps {
  title?: string
  text?: string
}

export default function CTABanner({
  title = 'Give Your Child the Gift of the Quran',
  text = 'Spaces are limited and allocated in order of enquiry. Call us, email us, or visit the academy — we would love to meet your family.',
}: CTABannerProps) {
  return (
    <section className="pattern-dark">
      <div className="container-content flex flex-col items-center gap-6 py-14 text-center">
        <h2 className="max-w-2xl font-display text-3xl text-white sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-forest-100">{text}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="btn-gold">
            <Phone size={16} />
            Contact Us
          </Link>
          <Link
            to="/contact#donate"
            className="btn-outline !border-forest-500 !bg-transparent !text-forest-100 hover:!bg-forest-800"
          >
            <HeartHandshake size={16} />
            Support the Academy
          </Link>
        </div>
      </div>
    </section>
  )
}
