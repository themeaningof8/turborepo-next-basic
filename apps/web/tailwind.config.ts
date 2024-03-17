import Presets from '@themeaningof8/ui/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  presets: [Presets]
}

export default config
