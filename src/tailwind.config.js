/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            top: '0',
            // transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            top: '14',
            // transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
