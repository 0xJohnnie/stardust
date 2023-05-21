/**
 * @type {import('next').NextConfig}
 */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled:
    process.env.ANALYZE === 'true' && process.env.NODE_ENV !== 'development',
});

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
});

const nextConfig = withBundleAnalyzer(
  withPWA({
    eslint: {
      ignoreDuringBuilds: false,
    },
    reactStrictMode: true,
    poweredByHeader: false,
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },

    images: {
      domains: ['tokens.buildspace.so', 'ipfs.io'],
    },

    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
    ) => {
      config.plugins = [
        ...config.plugins,
        new webpack.DefinePlugin({
          __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
        }),
      ];
      config.resolve.fallback = { fs: false, net: false, tls: false };
      // Important: return the modified config
      return config;
    },

    /*
    async headers() {
      return [
        {
          // matching all API routes
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: '*' },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value:
                'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
            },
          ],
        },
      ];
    },
     */
  }),
);

module.exports = nextConfig;
