/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  compiler: {
    reactRemoveProperties: true,
  },
};

module.exports = nextConfig;
