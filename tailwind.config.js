/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.jsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      "xxs" : "280px",
      "xs" : "320px",
      "sm" : "640px",
      "md" : "768px",
      "lg" : "1024px",
      "xl" : "1280px",
      "xxl" : "1440px"
    }
  },
  plugins: [],
}

