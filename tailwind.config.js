/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
        casal: {
          100: '#DFEDF0',
          200: '#B6D6DB',
          300: '#8DBAC4',
          400: '#4E8796',
          500: '#21586B',
          600: '#1B4D61',
          700: '#123A4F',
          800: '#0C2B40',
          900: '#071E30',
        },
        buddhagold: {
          100: '#FAF8E1',
          200: '#F2ECB6',
          300: '#E8DD8B',
          400: '#D9C543',
          500: '#C6A502',
          600: '#B38F02',
          700: '#946D01',
          800: '#785001',
          900: '#593600',
        },
        dovegray: {
          100: '#F0EEED',
          200: '#DBD9D7',
          300: '#C7C3C1',
          400: '#9C9594',
          500: '#716969',
          600: '#665656',
          700: '#543B3B',
          800: '#422525',
          900: '#331515',
        },
        
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
