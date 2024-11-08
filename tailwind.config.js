/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Serif"', 'serif'],   // Global font
        sourGummy: ['"Sour Gummy"', 'sans-serif'], // Custom font for specific use
      },
    },
  },
  plugins: [],
}