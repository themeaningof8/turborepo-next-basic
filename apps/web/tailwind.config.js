module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  presets: [
    require('design-token/config')
  ],
  plugins: [
    require("@tailwindcss/typography")
  ],
} 