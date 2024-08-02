/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'proxima': ['Proxima Nova Regular', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#036635',
      },
    },
  },
  plugins: [],
}

