import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // output: 'export',
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      }
    ]
  },
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/',
        },
      ],
    };
  },
};

export default nextConfig;
