/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'company-background': "url('/images/company-background.jpeg')"
      }
    },
  },
  plugins: [],
}