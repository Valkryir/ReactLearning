/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'platinum': "#dce0d9ff",
        'sand': '#fbf6efff',
        'almond': "#ead7c3ff",
        'rich-black': '#1c222e',
        'asparagus': '#60935Dff'
      }
    },
  },
  plugins: [],
}

