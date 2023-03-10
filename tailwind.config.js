/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          background: '#3d4957',
          primary: '#90adbb',
          secondary: '#a3b4ff',
          tertiary: '#3e3e70',
      },
      backgroundImage: {
        'hero': "url('/public/assets/imgs/san-francisco.jpg')"
      }
    }
  },
  plugins: [],
}
