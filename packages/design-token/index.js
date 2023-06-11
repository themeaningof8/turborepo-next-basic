const borderRadius = require('./tokens/borderRadius.tailwind')
const borderWidth = require('./tokens/borderWidth.tailwind')
const boxShadow = require('./tokens/boxShadow.tailwind')
const colors = require('./tokens/colors.tailwind')
const fontSize = require('./tokens/fontSize.tailwind')
const fontWeight = require('./tokens/fontWeight.tailwind')
const lineHeight = require('./tokens/lineHeight.tailwind')
const opacity = require('./tokens/opacity.tailwind')
const spacing = require('./tokens/spacing.tailwind')

module.exports = {
  theme: {
    borderRadius,
    borderWidth,
    boxShadow,
    colors,
    fontFamily: {
      sans: [
        `"system-ui", "-apple-system", "BlinkMacSystemFont", "Hiragino Kaku Gothic ProN", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        {
          fontFeatureSettings: '"palt"',
        },
      ],
    },
    fontSize,
    fontWeight,
    lineHeight,
    opacity,
    spacing,
  },
}
