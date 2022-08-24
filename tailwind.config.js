/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'synpulse-background': "url('/images/synpulse-background.jpeg')"
      }
    },
  },
  plugins: [],
}