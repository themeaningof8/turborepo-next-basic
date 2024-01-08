/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@themeaningof8/ui']
}

module.exports = withBundleAnalyzer(nextConfig)
