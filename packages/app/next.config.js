/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['shared'],
  images: { domains: [process.env.IMAGE_SERVER_DOMAIN] },
  async rewrites() {
    return [
      {
        source: '/server/:path*', // 프론트엔드에서 요청하는 경로에 대한 리다이렉트
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`, // 백엔드 도메인
      },
    ]
  },
}

module.exports = nextConfig
