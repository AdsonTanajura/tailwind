import colors  from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple-C': '#4f2c4d',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      }
    },
  },
  plugins: [],
}