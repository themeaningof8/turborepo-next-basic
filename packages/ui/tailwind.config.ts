import type { Config } from 'tailwindcss'

import Typography from '@tailwindcss/typography'
import Animate from 'tailwindcss-animate'

import borderRadius from '@themeaningof8/design-token/borderRadius'
import borderWidth from '@themeaningof8/design-token/borderWidth'
import colors from '@themeaningof8/design-token/colors'
import fontSize from '@themeaningof8/design-token/fontSize'
import opacity from '@themeaningof8/design-token/opacity'
import spacing from '@themeaningof8/design-token/spacing'

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
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      }
    }
  },
  plugins: [Typography, Animate]
} satisfies Config
