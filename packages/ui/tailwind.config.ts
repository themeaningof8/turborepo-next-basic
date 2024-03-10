import type { Config } from 'tailwindcss'

import Typography from '@tailwindcss/typography'
import Presets from '@themeaningof8/design-token'
import Animate from 'tailwindcss-animate'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
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
  plugins: [Typography, Animate],
  presets: [Presets, Animate]
} satisfies Config
