/**
 * Single source of truth for the canonical origin.
 *
 * Deliberately a constant, NOT derived from the request `Host` header. Deriving it
 * (the previous approach in app/layout.jsx) had two costs: it opted the route out of
 * static rendering — every response came back `no-store` with `x-vercel-cache: MISS` —
 * and it made every hostname advertise itself as canonical, so apex and www each
 * claimed to be the original.
 */
export const SITE_URL = "https://ahmetakkoc.com";

export const LOCALES = {
  tr: { htmlLang: "tr", ogLocale: "tr_TR", path: "/" },
  en: { htmlLang: "en", ogLocale: "en_US", path: "/en" },
};

export const DEFAULT_LOCALE = "tr";

/**
 * Flip to `true` only once /en actually exists and returns 200.
 *
 * hreflang annotations pointing at a URL that 404s are worse than no annotations at
 * all — search engines drop the entire cluster, including the self-reference. Adding
 * the /en route and flipping this constant belong in the same change.
 */
export const EN_ROUTE_LIVE = true;

const META = {
  tr: {
    title: "Ahmet Akkoç | Bilgisayar Mühendisi & Frontend Developer",
    description:
      "İzmir'de çalışan bilgisayar mühendisi Ahmet Akkoç. B2B SaaS, e-devlet entegrasyonu ve operasyon panelleri için Next.js, React ve TypeScript ile arayüz geliştiriyorum. Yeni projelere açığım.",
    ogDescription:
      "B2B SaaS, e-devlet entegrasyonu ve operasyon panelleri için Next.js, React ve TypeScript ile arayüz geliştiren bilgisayar mühendisi.",
    imageAlt: "Ahmet Akkoç - Bilgisayar Mühendisi & Frontend Developer",
  },
  en: {
    title: "Ahmet Akkoç | Computer Engineer & Frontend Developer",
    description:
      "Ahmet Akkoç is a computer engineer based in Izmir, Turkey. I build interfaces for B2B SaaS, e-government integrations and operational dashboards with Next.js, React and TypeScript. Open to new projects.",
    ogDescription:
      "Computer engineer building interfaces for B2B SaaS, e-government integrations and operational dashboards with Next.js, React and TypeScript.",
    imageAlt: "Ahmet Akkoç - Computer Engineer & Frontend Developer",
  },
};

/**
 * Builds the Next.js Metadata object for a locale.
 *
 * `alternates` declares the canonical URL plus the reciprocal hreflang pair. Both
 * locales must list both languages and agree with each other, or search engines
 * discard the whole cluster.
 */
export function buildMetadata(locale = DEFAULT_LOCALE) {
  const meta = META[locale] ?? META[DEFAULT_LOCALE];
  const { ogLocale, path } = LOCALES[locale] ?? LOCALES[DEFAULT_LOCALE];

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: path,
      ...(EN_ROUTE_LIVE
        ? {
            languages: {
              tr: LOCALES.tr.path,
              en: LOCALES.en.path,
              "x-default": LOCALES.tr.path,
            },
          }
        : {}),
    },
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      url: path,
      siteName: "Ahmet Akkoç",
      type: "website",
      locale: ogLocale,
      ...(EN_ROUTE_LIVE
        ? { alternateLocale: locale === "tr" ? [LOCALES.en.ogLocale] : [LOCALES.tr.ogLocale] }
        : {}),
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: meta.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.ogDescription,
      images: ["/og.jpg"],
    },
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}
