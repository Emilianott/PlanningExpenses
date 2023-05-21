/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-down': {
          '0%': {
            top: '-70rem',
          },
          '100%': {
            top: '0rem',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '100%': {
            top:{
              top:"0rem"
            }
          },
          '0%': {
            top: '-70rem',
          },
        },
      },
      animation: {
        'fade-down': 'fade-down 1s',
        'fade-in': 'fade-in 1s forwards 1s ',
        'fade-out': 'fade-out 2s ',
      },
    },
  },
  plugins: [],
}
