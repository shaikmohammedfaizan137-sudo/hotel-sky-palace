/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hotel-sky-palace',
  assetPrefix: '/hotel-sky-palace',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
