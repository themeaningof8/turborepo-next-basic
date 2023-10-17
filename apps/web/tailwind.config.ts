import type { Config } from 'tailwindcss'

import Typography from '@tailwindcss/typography'
import Presets from '@themeaningof8/design-token'

export default {
  content: ['./src/app/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  plugins: [Typography],
  presets: [Presets],
} satisfies Config
