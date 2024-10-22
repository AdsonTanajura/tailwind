/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background-img1': "url('/09_background/src/img/bg_cidade.jpg')",
        'background-img2': "url('/09_background/src/img/tailwind.png')"

      }
    },
  },
  plugins: [],
}