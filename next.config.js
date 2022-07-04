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
    // Change this to FALSE when nearing completion of project
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // Change this when nearing completion of project
    ignoreBuildErrors: true,
  },
  pageExtensions: [
    // `.page.tsx` for page components
    'page.tsx',
    // `.api.ts` for API routes
    'api.ts',
  ],
};
