import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeartHandshake, Menu, X } from 'lucide-react'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-forest-100 bg-cream/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/favicon.svg" alt="" className="h-9 w-9" />
          <span className="font-display text-lg leading-tight text-forest-900 sm:text-xl">
            Abu Hurairah Academy
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
                    ? 'bg-forest-100 text-forest-900'
                    : 'text-forest-800/80 hover:bg-forest-50 hover:text-forest-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact#donate" className="btn-gold ml-2 !px-5 !py-2">
            <HeartHandshake size={16} />
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-forest-900 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest-100 bg-cream lg:hidden" aria-label="Mobile">
          <div className="container-content flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-forest-100 text-forest-900' : 'text-forest-800/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact#donate"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 self-start !px-5 !py-2"
            >
              <HeartHandshake size={16} />
              Donate
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
