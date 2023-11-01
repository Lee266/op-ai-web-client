/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  webpack:(config, options) => {
    require('./webpack.config')(config, options);
    return config;
  },
}

module.exports = nextConfig
