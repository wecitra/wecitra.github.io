/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}", "./dist/**/*{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'primary': '#31C3C3',
      'secondary': '#666666',
      'light': '#F3F3F3',
      'dark': '#15202B',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
