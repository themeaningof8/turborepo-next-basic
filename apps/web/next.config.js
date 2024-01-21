/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@themeaningof8/ui'],
  experimental: {
    optimizePackageImports: ["@keystatic/core", "@keystatic/next", "@keystatic/ui"],
  }
}

module.exports = withBundleAnalyzer(nextConfig)
