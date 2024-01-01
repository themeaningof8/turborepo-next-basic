import type { Config } from 'tailwindcss'

import Presets from '@themeaningof8/design-token'
import Animate from 'tailwindcss-animate'

export default ({
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  plugins: [Animate],
  presets: [Presets]
} satisfies Config)
