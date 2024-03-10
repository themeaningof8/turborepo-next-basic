import type { Config } from 'tailwindcss'
import borderRadius from './tokens/borderRadius.tokens'
import borderWidth from './tokens/borderWidth.tokens'
import colors from './tokens/colors.tokens'
import fontSize from './tokens/fontSize.tokens'
import opacity from './tokens/opacity.tokens'
import spacing from './tokens/spacing.tokens'

export default {
  content: [],
  theme: {
    extend: {
      colors,
      borderRadius,
      borderWidth,
      fontSize,
      opacity,
      spacing
    }
  }
} satisfies Config
