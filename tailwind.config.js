/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}", "./dist/*{js}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'primary': '#1D9BF0',
      'secondary': '#828282',
      'light': '#F8F8F8',
      'dark': '#141D26',
      'danger': '#FF1D48'
    },
    fontFamily: {
      
    }
  },
  plugins: [],
}
