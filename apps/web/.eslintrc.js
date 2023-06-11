module.exports = {
  extends: ['custom'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  root: true,
}
