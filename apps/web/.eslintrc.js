module.exports = {
  extends: ['next', 'custom'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  root: true,
}
