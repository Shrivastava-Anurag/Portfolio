// tailwind.config.js
const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.500rem',
      '6xl': '4.592rem',
      '7xl': '5.052rem',
      '8xl': '6.500rem',
      '9xl': '9.124rem',
      'name': '10.789rem'
    },
    extend: {
      colors: {
      'background': '#1a1a1a',
      'background-inv': '#d9d6c8',
    },
  },
  },

}
