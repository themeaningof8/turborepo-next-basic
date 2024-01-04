module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
