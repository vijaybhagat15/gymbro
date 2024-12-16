/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo Bhai"', 'cursive'], // Add 'Baloo Bhai' as a custom font
        zenDots: ['"Zen Dots"', 'cursive'],
      },
      colors: {
        'navy': '#0d3b66',
        'custom-beige': '#faf0ca',
        'sunshine': '#f4d35e',
        'sunset-orange': '#ee964b',
         'custom-orange': '#f95738',
      },
    },
  },
  plugins: [],
}

