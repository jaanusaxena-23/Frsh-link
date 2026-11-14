/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FBF9F3',
          100: '#F4F1E8',
          200: '#EAE5D6',
          300: '#DDD6C1',
        },
        forest: {
          DEFAULT: '#263F2C',
          50: '#EEF2EC',
          100: '#D8E1D4',
          600: '#1E3123',
          700: '#16251A',
          800: '#101B13',
        },
        olive: {
          DEFAULT: '#4A5D40',
          light: '#5C7050',
          dark: '#3B4B33',
        },
        sage: {
          DEFAULT: '#A8B59A',
          light: '#C2CCB6',
          dark: '#8B9A7C',
        },
        charcoal: {
          DEFAULT: '#22251F',
          light: '#3A3E35',
        },
        cream: '#F8F5EE',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(2.25rem, 5vw, 4.25rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      spacing: {
        18: '4.5rem',
        25: '6.25rem',
        35: '8.75rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
