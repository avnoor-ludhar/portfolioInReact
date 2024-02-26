/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '400px',
      },
      backgroundImage: {
        'gradient-109': 'linear-gradient(109.6deg, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [require("daisyui")],
}

