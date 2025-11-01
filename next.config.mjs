import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
      // General Redirects
      { source: '/skin-clinic-in-pune', destination: '/', permanent: true },
      { source: '/about', destination: '/about-us', permanent: true },

      // Service Redirects
      { source: '/dermal-fillers', destination: '/services/skin-boosters', permanent: true },
      { source: '/hifu-treatment', destination: '/services/hifu-treatment', permanent: true },
      { source: '/laser-resurfacing', destination: '/services/co2-laser-for-skin', permanent: true },
      { source: '/botulinum-toxin', destination: '/services/wrinkle-treatment', permanent: true },
      { source: '/intense-peels', destination: '/services/chemical-peel', permanent: true },
      { source: '/thread-lift', destination: '/services/face-lift-treatment', permanent: true },
      { source: '/vampire-facial', destination: '/services/vampire-facial', permanent: true },
      { source: '/dandruff-treatment', destination: '/services/gfc-therapy', permanent: true },
      { source: '/hair-mesotherapy', destination: '/services/hair-mesotherapy', permanent: true },
      { source: '/laser-hair-stimulation', destination: '/services/laser-hair-removal', permanent: true },
      { source: '/anti-aging-treatment', destination: '/services/anti-ageing-treatment', permanent: true },
      { source: '/anti-ageing-facials', destination: '/services/anti-ageing-treatment', permanent: true },
      { source: '/services/anti-ageing-facials', destination: '/services/anti-ageing-treatment', permanent: true },
      { source: '/laser-tattoo-removal', destination: '/services/tattoo-removal', permanent: true },
      { source: '/carbon-laser-toning', destination: '/services/carbon-laser-facial', permanent: true },
      { source: '/laser-strech-mark-removal', destination: '/services/stretch-marks-removal', permanent: true },
      
      // Category redirects to the main services page with a query param
      { source: '/skin-services', destination: '/services?tab=skin', permanent: true },
      { source: '/hair-services', destination: '/services?tab=hair', permanent: true },
      { source: '/laser-services', destination: '/services?tab=laser', permanent: true },

      // Legacy URL Redirects
      { source: '/professional-chemical-peels-in-pune', destination: '/services/chemical-peel', permanent: true },
      { source: '/advanced-skin-brightning-treatment', destination: '/services/skin-whitening', permanent: true },
    ];
  },
};

export default withPayload(nextConfig);
