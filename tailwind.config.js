/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Bebas':[
          'Bebas Neue', 'sans-serif',
        ],
      },
      colors:{
        'Vanilla': '#F2F3AE',
        'Flax':'#EDD382',
        'SandyBrown':'#FC9E4F',
        'Cinnabar':'#F4442E',
        'OxfordBlue':'#020122',
      },
    },
  },
  plugins: [],
}

