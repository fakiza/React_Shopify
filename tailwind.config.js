/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '400': '400px',
        '500': '500px',
        '600': '600px',
      },
    },
  },
  plugins: [],
}

