/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f3',
          100: '#dfece2',
          200: '#c1d9c8',
          300: '#97bfa4',
          400: '#699f7c',
          500: '#48835e',
          600: '#356849',
          700: '#2b533c',
          800: '#244332',
          900: '#1e372a',
          950: '#101f17',
        },
        gold: {
          100: '#f7efd8',
          200: '#eeddad',
          300: '#e2c67d',
          400: '#d5ab53',
          500: '#c9a227',
          600: '#a98420',
          700: '#86651c',
        },
        cream: '#faf8f1',
        ink: '#1c2a22',
      },
      fontFamily: {
        display: ['Marcellus', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
