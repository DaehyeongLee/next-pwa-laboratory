/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production';

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: prod ? false : true
});
const { i18n } = require('./next-i18next.config')

const nextConfig = withPWA({
  // next config
  pwa: {
    dest: 'public'
  },
  i18n,
  trailingSlash: true,
});
module.exports = nextConfig;