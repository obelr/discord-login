/** @type {import('next').NextConfig} */
const nextConfig = {}
// next.config.js
module.exports = {
    reactStrictMode: true,
    // Specify the src directory as the source directory
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.alias['@'] = __dirname;
      }
      return config;
    },
  };
  