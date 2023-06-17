module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  presets: [require('@themeaningof8/design-token')],
  plugins: [require('tailwindcss-animate')],
}
