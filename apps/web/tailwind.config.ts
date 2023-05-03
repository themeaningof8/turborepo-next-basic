import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import Typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    textColor: {
      primary: "#0c0a09",
      secondary: "#44403c",
      muted: "#737373",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.stone,
    },
    fontFamily: {
      sans: [
        "var(--font-ibm-plex-sans), var(--font-ibm-plex-mono), system-ui",
        {
          fontFeatureSettings: '"palt"',
        },
      ],
    },
    extend: {},
  },
  plugins: [Typography],
} satisfies Config;