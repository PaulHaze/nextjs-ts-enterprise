/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  images: {
    domains: ['i.pravatar.cc', 'openclipart.org'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: [
    // `.page.tsx` for page components
    'page.tsx',
    // `.api.ts` for API routes
    'api.ts',
  ],
};
