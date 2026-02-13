/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-dark': '#121212',
        'bg-second': '#202020',
        'main-gold': '#b68362',
        'soft-pink': '#e1bac5',
        'other-gray': '#8b8a91',
        'ann-color': '#c7c6d3',
        'alt-color': '#4b4b51',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e1bac5 0%, #b68362 100%)',
      }
    },
  },
  plugins: [],
}