module.exports = {
  env: {
    es2020: true,
  },
  extends: ['@themeaningof8/eslint-config-custom'],
  ignorePatterns: ['node_modules', 'dist'],
  parserOptions: {
    sourceType: 'module',
  },
  root: true,
}
