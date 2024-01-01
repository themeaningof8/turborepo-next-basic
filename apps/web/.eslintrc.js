module.exports = {
  extends: ['@themeaningof8/eslint-config-custom'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')]
    }
  },
  root: true
}
