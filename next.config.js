/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: false
  },
  env: {
    gTagManager: 'GTM-MQQFNVH'
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
