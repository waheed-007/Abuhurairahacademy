import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="pattern-dark text-forest-100">
      <div className="container-content grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="" className="h-10 w-10" />
            <span className="font-display text-xl text-white">Abu Hurairah Academy</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-200">
            A voluntary, non-profit registered charity providing Islamic education for children in
            Bradford since {site.established} — nurturing hearts, minds and character through the
            Quran and Sunnah.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-forest-200 transition hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact#donate" className="text-forest-200 transition hover:text-gold-300">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-forest-200">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-gold-400" />
              <a href={site.phoneHref} className="transition hover:text-gold-300">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-gold-400" />
              <a href={`mailto:${site.email}`} className="transition hover:text-gold-300">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-5 text-xs text-forest-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Abu Hurairah Academy. Registered charity, serving Bradford
            since 1998.
          </p>
          <p>28 Carrington Street, Bradford BD3 8AE</p>
        </div>
      </div>
    </footer>
  )
}
