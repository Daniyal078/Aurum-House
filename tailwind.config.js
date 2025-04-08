/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#C19A67',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
       content: {
        'lineVactor': 'url("accets/images/line Vector.png")',
      },
    },
  },
  plugins: [],
}

