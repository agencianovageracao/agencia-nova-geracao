/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'effective': ['Effective', 'sans-serif']
    },
    extend: {
      colors: {
        green: {
          500: '#18FF6D',
          600: '#04E824'
        }
      }
    }
  },
  plugins: []
}
