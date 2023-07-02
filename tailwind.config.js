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
        fadein: {
          '0%': {
              opacity: '0',
          },
          '100%': {
              opacity: '1',
          }
        },
        gradientAnimation: {
          '0%': {
            'background-position': '0% 50%', /* Initial background position */
          },
          '50%': {
            'background-position': '100% 50%', /* Final background position */
          },
          '100%': {
            'background-position': '0% 50%', /* Final background position */
          }
        }
      },
      animation: {
        'slide-in': 'slideIn 2s forwards',
        'reappear': 'reappear 5s forwards',
        'gradientanimate': 'gradientAnimation 5s linear infinite',
        'fadein':'animation: fade-in 0.5s ease-in-out',
      }
      },
    },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
};
