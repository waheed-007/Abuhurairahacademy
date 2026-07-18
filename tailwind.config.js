/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Teal brand palette drawn from the academy's flyers and ahA logo */
        brand: {
          50: '#effaf8',
          100: '#d7f2ee',
          200: '#b0e5de',
          300: '#7dd6ca',
          400: '#4dd8c0',
          500: '#2aa99b',
          600: '#1f8a80',
          700: '#1b6e67',
          800: '#175752',
          900: '#134442',
          950: '#0a2827',
        },
        gold: {
          100: '#faf1d7',
          200: '#f3e0a8',
          300: '#eccb72',
          400: '#e6b93c',
          500: '#d9a520',
          600: '#b8871a',
          700: '#8f6816',
        },
        coral: {
          100: '#fde4e1',
          300: '#f8a49b',
          500: '#ef6f61',
          600: '#d9534f',
        },
        cream: '#f8fbfa',
        ink: '#12302d',
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
