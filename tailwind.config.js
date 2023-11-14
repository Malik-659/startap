/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      jomhuria:['Jomhuria']
    },
    extend: {
      backgroundImage: {
        homepage:"url('/src/image/Vector 1.svg')",
        bg1:"url('/src/image/Polygon 1.png')"
      }
    },
  },
  plugins: [],
}