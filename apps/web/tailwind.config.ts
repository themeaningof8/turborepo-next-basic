import Presets from '@themeaningof8/ui/tailwind.config'
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  presets: [Presets]
} satisfies Config
