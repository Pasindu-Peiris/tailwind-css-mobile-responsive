/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  theme: {
    extend: {
      screens: {
        'xsm': {'min': '200px', 'max': '640px'},
      },
    },
  },
  plugins: [],
}

