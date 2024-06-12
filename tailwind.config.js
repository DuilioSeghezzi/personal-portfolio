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
        'OxfordBlue': '#020122',
        'Cinnabar':'#F4442E',
        'SandyBrown':'#FC934F',
        'Flax':'#EDD382',
        'Vanilla':'#F2F3AE',
      },
    },
  },
  plugins: [],
}

