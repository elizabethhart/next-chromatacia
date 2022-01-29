const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['live.staticflickr.com', 'i.gr-assets.com'],
  },
};

module.exports = nextConfig;
