/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./views/**/*.handlebars",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-10%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        reappear: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          }
        },
      },
      animation: {
        'slide-in': 'slideIn 2s forwards',
        'reappear': 'reappear 5s forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

