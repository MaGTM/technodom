/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#053EFF",
        "placeholder": "#00000066",
        "error": "#E31D1D",
        "black-40": "rgba(0, 0, 0, 0.4)"
      },
      fontSize: {
        "heading": '1.8rem',
        'small': '0.625rem',
      },
      height: {
        "input": "2.375rem"
      },
      borderWidth: {
        "basic": "0.01rem"
      },
    },
  },
  plugins: [],
}

