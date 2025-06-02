/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  env: {
    G_TAG_MANAGER: process.env.G_TAG_MANAGER
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
  },
  i18n: {
    defaultLocale: 'en',
    localeDetection: false,
    locales: ['en']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

module.exports = nextConfig;
