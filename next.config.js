/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  env: {
    G_TAG_MANAGER: process.env.G_TAG_MANAGER
  },
  experimental: {
    appDir: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  eslint: {
    dirs: [
      'pages',
      'components',
      'lib',
      'utils',
      'types',
      'scenes',
      'hooks',
      'styles'
    ]
  }
};

module.exports = nextConfig;
