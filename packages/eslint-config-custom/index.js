module.exports = {
  extends: [
    'next',
    'turbo',
    'plugin:perfectionist/recommended-alphabetical',
    'prettier',
  ],
  plugins: ['perfectionist'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/no-unescaped-entities': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
