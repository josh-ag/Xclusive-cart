/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'playStation': "url('../assets/images/ps5.png')",
        'womenCollection': 'url("../assets/images/women_wear.png")',
        'speakers': 'url("../assets/images/speakers.png")',
        'perfums': 'url("../assets/images/perfums.png")'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}