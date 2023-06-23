/* eslint-disable import/no-extraneous-dependencies */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          100: '#787878',
          200: '#5E5E5E',
          300: '#E2081E',
          400: '#2B2B2B',
          500: '#121212',
        },
        secondary: {
          100: '#DCFEEA',
          200: '#AAFDCD',
          300: '#79FCAF',
          400: '#333333',
          500: '#867D77',
          600: '#68605B',
        },
        background: {
          200: '#FCFCFC',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
});
