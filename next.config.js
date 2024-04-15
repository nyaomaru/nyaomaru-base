// @type {import('next').NextConfig}
module.exports = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'custom',
  },
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
};
