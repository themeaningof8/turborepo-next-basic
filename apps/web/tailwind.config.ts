import Presets from '@themeaningof8/ui/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    '../../node_modules/@themeaningof8/ui/**/*.{ts,tsx}'
  ],
  darkMode: ['class'],
  presets: [Presets]
}

export default config
