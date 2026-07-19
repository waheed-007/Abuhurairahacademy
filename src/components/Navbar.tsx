import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles, X } from 'lucide-react'
import { TealRimGlow } from './SpecularButton'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-cream/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/favicon.svg" alt="" className="h-9 w-9" />
          <span className="font-display text-lg leading-tight text-brand-900 sm:text-xl">
            AbuHurairah Academy
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-100 text-brand-900'
                    : 'text-brand-800/80 hover:bg-brand-50 hover:text-brand-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <TealRimGlow className="ml-2">
            <Link to="/contact#register" className="btn-gold !px-5 !py-2">
              <Sparkles size={16} />
              Register 2026
            </Link>
          </TealRimGlow>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-brand-900 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-100 bg-cream lg:hidden" aria-label="Mobile">
          <div className="container-content flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-brand-100 text-brand-900' : 'text-brand-800/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <TealRimGlow className="mt-2 self-start">
              <Link
                to="/contact#register"
                onClick={() => setOpen(false)}
                className="btn-gold !px-5 !py-2"
              >
                <Sparkles size={16} />
                Register 2026
              </Link>
            </TealRimGlow>
          </div>
        </nav>
      )}
    </header>
  )
}
