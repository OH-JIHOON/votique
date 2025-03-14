/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Next.js 15+에서 App Router 활성화
    turboMode: true, // Turbopack 활성화
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig;