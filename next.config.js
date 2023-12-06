/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  webpack: (config, options) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('./webpack.config')(config, options);
    return config;
  },
};

module.exports = nextConfig;
