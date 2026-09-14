/** @type {import("next").NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Stops Next.js advertising itself in `X-Powered-By` on every response.
  poweredByHeader: false,

  /**
   * www -> apex, permanent.
   *
   * This lives here rather than in vercel.json: on a Next.js project Vercel applies
   * vercel.json `headers` (verified in production — CSP, HSTS and the rest all landed)
   * but the `redirects` block there never matched, and www kept answering 200 with
   * `x-matched-path: /`. Next.js `redirects()` is the layer that actually owns routing
   * for this framework, and it supports the same `has` host condition.
   *
   * Without this, apex and www both serve the full site, which splits the same content
   * across two hostnames.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ahmetakkoc.com" }],
        destination: "https://ahmetakkoc.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
