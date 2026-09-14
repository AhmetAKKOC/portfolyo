/**
 * MetadataRoute.Robots — Next.js App Router convention.
 * Emits /robots.txt automatically. No file in public/ needed.
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ahmetakkoc.com/sitemap.xml",
  };
}
