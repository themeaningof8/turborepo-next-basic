module.exports = {
  content: ['./app/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/typography')],
  presets: [require('@themeaningof8/ui/tailwind-config')],
}
