/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        walkerDark: '#0b0b0b',
        walkerCard: '#141414',
        walkerOrange: '#ff5722',
        walkerCyan: '#00e5ff',
      },
    },
  },
  plugins: [],
};
