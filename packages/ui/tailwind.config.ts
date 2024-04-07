import type { Config } from 'tailwindcss'

import tailwindcssTypography from '@tailwindcss/typography'
import animation from '@ui/tailwind/animation'
import borderRadius from '@ui/tailwind/borderRadius'
import borderWidth from '@ui/tailwind/borderWidth'
import colors from '@ui/tailwind/colors'
import fontSize from '@ui/tailwind/fontSize'
import keyframes from '@ui/tailwind/keyframes'
import opacity from '@ui/tailwind/opacity'
import spacing from '@ui/tailwind/spacing'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors,
      borderRadius,
      borderWidth,
      fontSize,
      opacity,
      spacing,
      animation,
      keyframes
    }
  },
  plugins: [tailwindcssTypography, tailwindcssAnimate]
} satisfies Config
