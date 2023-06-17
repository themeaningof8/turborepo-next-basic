module.exports = {
  extends: [
    'next',
    'turbo',
    'plugin:perfectionist/recommended-alphabetical',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['perfectionist'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/no-unescaped-entities': 'off',
    "tailwindcss/no-custom-classname": "off",
  },
  settings: {
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl", "cn"],
    }
  }
}
