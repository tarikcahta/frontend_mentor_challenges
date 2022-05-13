const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/qr_code_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'light-gray': '#d6e2f0',
        grayish: '#7b879d',
        'd-blue': '#1f3251',
      },
      fontFamily: {
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mob: '375px',
        // => @media (min-width: 375px) { ... }
        desk: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
  variants: {},
}