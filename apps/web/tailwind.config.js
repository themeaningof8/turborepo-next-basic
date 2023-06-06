module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  presets: [
    require('design-token')
  ],
  plugins: [
    require("@tailwindcss/typography")
  ],
} 