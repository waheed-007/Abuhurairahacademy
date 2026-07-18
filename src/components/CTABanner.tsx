import { Link } from 'react-router-dom'
import { Phone, Sparkles } from 'lucide-react'

interface CTABannerProps {
  title?: string
  text?: string
}

export default function CTABanner({
  title = 'Admission Now Open for Registration 2026',
  text = 'Spaces are limited and groups are kept small on purpose. Reserve your spot today.',
}: CTABannerProps) {
  return (
    <section className="pattern-dark">
      <div className="container-content flex flex-col items-center gap-6 py-14 text-center">
        <h2 className="max-w-2xl font-display text-3xl text-white sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-brand-100">{text}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact#register" className="btn-gold">
            <Sparkles size={16} />
            Register Now
          </Link>
          <Link
            to="/contact"
            className="btn-outline !border-brand-500 !bg-transparent !text-brand-100 hover:!bg-brand-800"
          >
            <Phone size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
