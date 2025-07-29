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
  async redirects() {
    return [
      // Subdomain redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'pune.theskinfirm.in',
          },
        ],
        destination: 'https://theskinfirm.in/:path*',
        permanent: true,
      },
      // Service-related redirects
      { source: '/dermal-fillers', destination: '/services/skin-boosters', permanent: true },
      { source: '/hifu-treatment', destination: '/services/hifu-facelift', permanent: true },
      { source: '/laser-resurfacing', destination: '/services/co2-laser', permanent: true },
      { source: '/botulinum-toxin', destination: '/services/anti-wrinkle-injections', permanent: true },
      { source: '/intense-peels', destination: '/services/chemical-peels', permanent: true },
      { source: '/bridal-skincare', destination: '/services', permanent: true },
      { source: '/services/microneedling', destination: '/services/microneedling-mnrf', permanent: true },
      { source: '/thread-lift', destination: '/services/face-thread-lift', permanent: true },
      { source: '/vampire-facial', destination: '/services/vampire-facial', permanent: true },
      { source: '/dandruff-treatment', destination: '/services/gfc-hair-treatment', permanent: true },
      { source: '/hair-mesotherapy', destination: '/services/mesotherapy-hair', permanent: true },
      { source: '/services/yellow-peel', destination: '/services/yellow-peel', permanent: true },
      { source: '/services/underarm-whitening', destination: '/services/laser-hair-removal', permanent: true },
      { source: '/services/salicylic-peel', destination: '/services/salicylic-peel', permanent: true },
      { source: '/laser-hair-stimulation', destination: '/services/laser-hair-removal', permanent: true },
      { source: '/anti-aging-treatment', destination: '/services/anti-ageing-facials', permanent: true },
      { source: '/laser-tattoo-removal', destination: '/services/tattoo-removal', permanent: true },
      { source: '/services/skin-whitening', destination: '/services/skin-whitening-treatment', permanent: true },
      { source: '/carbon-laser-toning', destination: '/services/carbon-peel-laser', permanent: true },
      { source: '/services/cosmelan-peel', destination: '/services/cosmelan-peel', permanent: true },
      { source: '/services/gfc-therapy', destination: '/services/gfc-hair-treatment', permanent: true },
      { source: '/services/chemical-peel', destination: '/services/chemical-peels', permanent: true },
      { source: '/laser-strech-mark-removal', destination: '/services/stretch-marks-removal', permanent: true },
      { source: '/services/hydrafacial-treatment', destination: '/services/hydrafacial', permanent: true },
      { source: '/services/prp-hair-treatment', destination: '/services/prp-hair-treatment', permanent: true },
      { source: '/services/stretch-marks-removal', destination: '/services/stretch-marks-removal', permanent: true },
      { source: '/services/carbon-laser-facial', destination: '/services/carbon-peel-laser', permanent: true },
      { source: '/services/carbon-facial-treatment', destination: '/services/carbon-peel-laser', permanent: true },
      { source: '/services/laser-hair-removal', destination: '/services/laser-hair-removal', permanent: true },
      { source: '/services/anti-ageing-treatment', destination: '/services/anti-ageing-facials', permanent: true },
      { source: '/services/qswitch-nd-yag-laser', destination: '/services/q-switch-laser', permanent: true },
      { source: '/services/fire-and-ice-facial', destination: '/services/fire-and-ice-facial', permanent: true },

      // Generic redirects
      { source: '/category/:slug*', destination: '/services', permanent: true },
      { source: '/blog/:slug*', destination: '/services', permanent: true },
      { source: '/professional-chemical-peels-in-pune', destination: '/services/chemical-peels', permanent: true },
      { source: '/advanced-skin-brightning-treatment', destination: '/services/skin-whitening-treatment', permanent: true },
    ];
  },
};

export default nextConfig;
