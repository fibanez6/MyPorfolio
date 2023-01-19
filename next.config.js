/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  eslint: {
    dirs: ['pages', 'components', 'utils', 'types', 'scenes', 'hooks']
  }
};

module.exports = nextConfig;
