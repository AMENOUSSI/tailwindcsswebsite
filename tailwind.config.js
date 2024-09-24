/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif ",
        playwrite: " 'Playwrite DE Grund', cursive",
        lato: " 'Lato', sans-serif",
      },
    },
  },
  plugins: [],
};
