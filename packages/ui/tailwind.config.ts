import type { Config } from 'tailwindcss'

import animation from './src/tailwind/animation'
import borderRadius from './src/tailwind/borderRadius'
import borderWidth from './src/tailwind/borderWidth'
import colors from './src/tailwind/colors'
import fontSize from './src/tailwind/fontSize'
import keyframes from './src/tailwind/keyframes'
import opacity from './src/tailwind/opacity'
import spacing from './src/tailwind/spacing'

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
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')]
} satisfies Config
