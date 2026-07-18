export const site = {
  name: 'Abu Hurairah Academy',
  established: 'April 1998',
  phone: '+44 (0)1274 668448',
  phoneHref: 'tel:+441274668448',
  email: 'info@abuhurairah.org',
  address: '28 Carrington Street, Bradford, BD3 8AE, West Yorkshire, UK',
  mapsEmbed:
    'https://www.google.com/maps?q=28+Carrington+Street,+Bradford,+BD3+8AE,+UK&output=embed',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/kids', label: 'Kids' },
  { to: '/salaah', label: 'Salaah Times' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

/* Indicative congregation times — the academy updates these seasonally.
   Replace with the current timetable supplied by the academy. */
export const salaahTimes = [
  { name: 'Fajr', arabic: 'الفجر', time: '4:15 AM', note: 'Dawn prayer' },
  { name: 'Zuhr', arabic: 'الظهر', time: '1:30 PM', note: 'Midday prayer' },
  { name: 'Asr', arabic: 'العصر', time: '6:45 PM', note: 'Afternoon prayer' },
  { name: 'Maghrib', arabic: 'المغرب', time: 'At sunset', note: 'Sunset prayer' },
  { name: 'Isha', arabic: 'العشاء', time: '10:45 PM', note: 'Night prayer' },
]
