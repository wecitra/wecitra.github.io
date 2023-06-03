/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*{html,js}", "./dist/**/*{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'primary': '#DE2FA3',
      'secondary': '#666666',
      'light': '#F3F3F3',
      'soft': '#C2C2C2',
      'soft-dark': '#1F2937',
      'dark': '#15202B',
    },
    letterSpacing: {
      wide: '.020em',
    }
  },
  plugins: [],
}
