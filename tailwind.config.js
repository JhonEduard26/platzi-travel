/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cardHeading: '#094067',
        headLine: '#094067',
        highlight: '#3da9fc',
      },
      backgroundImage: {
        'cartagena': "url('/public/assets/imgs/cartagena.jpg')",
        'florencia': "url('/public/assets/imgs/florencia.jpg')",
        'madrid': "url('/public/assets/imgs/madrid.jpg')",
        'medellin': "url('/public/assets/imgs/medellin.jpg')",
        'monaco': "url('/public/assets/imgs/monaco.jpg')",
        'new-york': "url('/public/assets/imgs/new-york.jpg')",
        'paris': "url('/public/assets/imgs/paris.jpg')",
        'san-francisco': "url('/public/assets/imgs/san-francisco.jpg')",
        'venecia': "url('/public/assets/imgs/venecia.jpg')",
        'hero': "url('/public/assets/imgs/san-francisco.jpg')",
        'hotel1': "url('/public/assets/imgs/hotel-1.jpg')",
        'hotel2': "url('/public/assets/imgs/hotel-2.jpg')",
        'hotel3': "url('/public/assets/imgs/hotel-3.jpg')",
        'hotel4': "url('/public/assets/imgs/hotel-4.jpg')",
        'hotel5': "url('/public/assets/imgs/hotel-5.jpg')",
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}
