/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        button: '#3da9fc',
        buttonText: '#fffffe',
        headLine: '#094067',
        paragraph: '#5f6c7b',
        highlight: '#3da9fc',
        main: '#fffffe',
        secondary: '#90b4ce',
        tertiary: '#ef4565',
        cardHeading: '#094067',
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
        'hero': "url('/public/assets/imgs/san-francisco.jpg')"
      }
    }
  },
  plugins: [],
}
