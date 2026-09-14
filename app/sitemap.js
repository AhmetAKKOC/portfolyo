/**
 * MetadataRoute.Sitemap — Next.js App Router convention.
 * Emits /sitemap.xml automatically at build time. No file in public/ needed.
 *
 * Canonical host is hardcoded to the apex domain. A sitemap route has no `request`
 * argument, and it should not have one: a sitemap must declare exactly one host.
 * vercel.json 301-redirects www to apex, so this is a guarantee rather than a preference.
 */
import { SITE_URL, LOCALES } from "@/lib/seo";

// Bump this ISO date only when page content actually changes in a way a reader would
// notice (new project, new role, rewritten copy). Do NOT wire it to `new Date()` —
// a lastmod that moves on every deploy regardless of content is the "all identical /
// meaningless lastmod" pattern Google discounts.
const LAST_CONTENT_UPDATE = "2026-09-14";

export default function sitemap() {
  const languages = {
    tr: `${SITE_URL}${LOCALES.tr.path === "/" ? "" : LOCALES.tr.path}`,
    en: `${SITE_URL}${LOCALES.en.path}`,
  };

  // Both locale URLs are listed, each carrying the full reciprocal hreflang set.
  // Search engines discard a cluster whose annotations disagree, so these are built
  // from the same source as the <link rel="alternate"> tags in src/lib/seo.js.
  return Object.values(languages).map((url) => ({
    url,
    lastModified: LAST_CONTENT_UPDATE,
    alternates: { languages },
  }));
}
