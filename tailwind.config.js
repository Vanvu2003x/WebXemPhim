/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'font-logo' : "'Syne Mono', monospace",
        'font-nav' : "'Markazi Text', sans-serif"
      }
    },
  },
  plugins: [],
}

