/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    // "./dist/*.html",
    "./views/**/*.handlebars",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

