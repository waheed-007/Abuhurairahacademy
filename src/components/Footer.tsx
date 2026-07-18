import { Link } from 'react-router-dom'
import { Instagram, MapPin } from 'lucide-react'
import { navLinks, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="pattern-dark text-brand-100">
      <div className="container-content grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="" className="h-10 w-10" />
            <span className="font-display text-xl text-white">AbuHurairah Academy</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200">
            An Islamic school program in Lombard, Illinois offering elementary and middle school
            education in a small, supportive environment where strong Islamic values meet a
            comprehensive secular curriculum.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-brand-200 transition hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact#register"
                className="text-brand-200 transition hover:text-gold-300"
              >
                Register 2026
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{site.locationDetail}</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={18} className="shrink-0 text-gold-400" />
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-gold-300"
              >
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-300 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} AbuHurairah Academy, Lombard, IL.</p>
          <p>Admission now open for registration 2026</p>
        </div>
      </div>
    </footer>
  )
}
