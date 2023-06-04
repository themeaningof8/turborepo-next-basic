const typography = require("@tailwindcss/typography");
const borderRadius = require('design-token/tokens/borderRadius.tailwind')
const borderWidth = require('design-token/tokens/borderWidth.tailwind')
const boxShadow = require('design-token/tokens/boxShadow.tailwind')
const colors = require('design-token/tokens/colors.tailwind')
const fontSize = require('design-token/tokens/fontSize.tailwind')
const fontWeight = require('design-token/tokens/fontWeight.tailwind')
const lineHeight = require('design-token/tokens/lineHeight.tailwind')
const opacity = require('design-token/tokens/opacity.tailwind')
const spacing = require('design-token/tokens/spacing.tailwind')

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    borderRadius,
    borderWidth,
    boxShadow,
    colors,
    fontSize,
    fontWeight,
    lineHeight,
    opacity,
    spacing,
    fontFamily: {
      sans: [
        `"system-ui", "-apple-system", "BlinkMacSystemFont", "Hiragino Kaku Gothic ProN", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        {
          fontFeatureSettings: '"palt"',
        },
      ],
    },
    extend: {},
  },
  plugins: [typography],
} 