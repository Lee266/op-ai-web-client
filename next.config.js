/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('./webpack.config')(config, options);
    return config;
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.MODE === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
});

module.exports = withPWA(nextConfig);
