/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand': '#CEBF8E',
        'lightbrown': '#DCCEA1',
        'darkbrown': '#614115',
      }
    },
  },
  plugins: [],
}

