/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}", "./dist/*{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'primary': '#1D9BF0',
      'secondary': '#666666',
      'light': '#F0F0F0',
      'dark': '#15202B',
      'deep': '#1E2732',
      'danger': '#FF1D48'
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
