/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {

    screens: {
      'xs': '200px',
      // => @media (min-width: 640px) { ... }

      'sm': '400px',
      'md': '666px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
      '3xl': '1999px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      'primary': '#292F36',
      sky: colors.sky,
     
      gray: colors.trueGray,
      red: colors.red,
      green: colors.green,
      indigo: colors.indigo,
      slate:colors.slate,
      amber:colors.amber,
    },

  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
