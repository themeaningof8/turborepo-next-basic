/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ['ui'],
}
