export const site = {
  name: 'AbuHurairah Academy',
  established: '2025',
  teacher: 'Ms. Mariam Saifuddin',
  phone: '630-347-4030',
  phoneHref: 'tel:+16303474030',
  smsHref: 'sms:+16303474030',
  instagram: 'https://www.instagram.com/abuhurairahacademy',
  instagramHandle: '@abuhurairahacademy',
  location: 'Lombard, IL',
  locationDetail: 'Near the Roosevelt Rd & Meyers Rd intersection, Lombard, Illinois',
  mapsEmbed:
    'https://www.google.com/maps?q=Roosevelt+Rd+%26+Meyers+Rd,+Lombard,+IL&output=embed',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/summer-camp', label: 'Summer Camp' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export const facilities = ['Classroom', 'Library', 'Outdoor Play Area', 'Bathroom']

/* Ms. M's Summer Camp — from the academy's 2026 flyer */
export const summerCamp = {
  name: "Ms. M's Summer Camp",
  ages: '4 – 12',
  days: 'Monday – Friday',
  dates: 'June 8 – July 3',
  registerBy: 'May 8, 2026',
  pricing: [
    { option: 'Full Day', time: '9:15 – 1:30', price: '$575' },
    { option: 'Module I', time: '9:15 – 11:30', price: '$325' },
    { option: 'Module II', time: '11:15 – 1:30', price: '$325' },
  ],
  materialsFee: '$35',
  schedule: [
    { time: '9:15', activity: 'Quran, Tajweed & Duas' },
    { time: '10:15', activity: 'Seerah Class' },
    { time: '10:35', activity: 'STEM / Needle Work / Arts & Crafts / Baking' },
    { time: '11:00', activity: 'Outdoor Activities' },
    { time: '11:30', activity: 'Lunch' },
    { time: '11:50', activity: 'Readers & Writers Workshop' },
    { time: '12:20', activity: 'Spoken Persian' },
    { time: '12:35', activity: 'Math Challenge' },
    { time: '1:05', activity: 'Wudu & Duhr Salat' },
    { time: '1:30', activity: 'Dismissal' },
  ],
}
