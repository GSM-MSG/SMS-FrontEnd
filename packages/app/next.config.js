const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZER === 'true',
  openAnalyzer: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['shared'],
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [process.env.IMAGE_SERVER_DOMAIN],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
