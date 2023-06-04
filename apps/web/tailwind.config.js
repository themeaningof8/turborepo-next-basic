const Typography = require("@tailwindcss/typography");
const borderRadius = require("./style-dictionary/tokens/borderRadius.tailwind")
const borderWidth = require("./style-dictionary/tokens/borderWidth.tailwind")
const boxShadow = require("./style-dictionary/tokens/boxShadow.tailwind")
const colors = require("./style-dictionary/tokens/colors.tailwind")
const fontSize = require('./style-dictionary/tokens/fontSize.tailwind')
const fontWeight = require('./style-dictionary/tokens/fontWeight.tailwind')
const lineHeight = require('./style-dictionary/tokens/lineHeight.tailwind')
const opacity = require('./style-dictionary/tokens/opacity.tailwind')
const spacing = require('./style-dictionary/tokens/spacing.tailwind')

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
  plugins: [Typography],
} 