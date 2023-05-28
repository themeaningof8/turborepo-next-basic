import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";
import { filterTokensByType } from "./fns";
import * as tokens from "./tokens/light.json"

const colors = filterTokensByType('color', tokens)

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    ...colors,
    fontFamily: {
      sans: [
        `"system-ui", "-apple-system", "BlinkMacSystemFont", "Hiragino Kaku Gothic ProN", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        {
          fontFeatureSettings: '"palt"',
        },
      ],
    },
    extend: {},
  },
  plugins: [Typography],
} satisfies Config;