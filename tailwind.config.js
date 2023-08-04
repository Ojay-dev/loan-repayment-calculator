/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'druk-wide': ['Druk Wide Bold', 'sans-serif'],
      'product-sans': ['Product Sans', 'sans-serif'],
      'clash-display': ['Clash Display', 'sans-serif'],
      'integral-CF': ['Integral CF', 'sans-serif']
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
};
