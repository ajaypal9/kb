/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark:    '#1E1B4B',
          light:   '#EEF2FF',
          mid:     '#6366F1',
          50:      '#EEEEFF',
        },
      },
      keyframes: {
        slideInRight: {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to:   { transform: 'translateX(0)',    opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96) translateY(6px)' },
          to:   { opacity: '1', transform: 'scale(1)    translateY(0)'   },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.25s ease forwards',
        fadeIn:       'fadeIn 0.2s ease forwards',
        scaleIn:      'scaleIn 0.2s ease forwards',
      },
    },
  },
  plugins: [],
}
