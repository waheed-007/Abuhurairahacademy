import { Link } from 'react-router-dom'
import { Phone, Sparkles } from 'lucide-react'
import ScrollFloat from './ScrollFloat'
import Reveal from './Reveal'
import { TealRimGlow, GoldRimGlow } from './SpecularButton'

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
        <ScrollFloat
          as="h2"
          containerClassName="max-w-2xl"
          textClassName="font-display text-3xl text-white sm:text-4xl"
        >
          {title}
        </ScrollFloat>
        <p className="max-w-2xl text-brand-100">{text}</p>
        <Reveal stagger className="flex flex-wrap items-center justify-center gap-3">
          <TealRimGlow>
            <Link to="/contact#register" className="btn-gold">
              <Sparkles size={16} />
              Register Now
            </Link>
          </TealRimGlow>
          <GoldRimGlow>
            <Link
              to="/contact"
              className="btn-outline !border-brand-500 !bg-transparent !text-brand-100 hover:!bg-brand-800"
            >
              <Phone size={16} />
              Contact Us
            </Link>
          </GoldRimGlow>
        </Reveal>
      </div>
    </section>
  )
}
