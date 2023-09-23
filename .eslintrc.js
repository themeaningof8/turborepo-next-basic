module.exports = {
  // This tells ESLint to load the config from the package `@themeaningof8/eslint-config-custom`
  extends: ['@themeaningof8/eslint-config-custom'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
