/** @type {import("next").NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Stops Next.js advertising itself in `X-Powered-By` on every response.
  poweredByHeader: false,
};

module.exports = nextConfig;
