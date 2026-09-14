import { contact } from "@/data/profile";
import { education } from "@/data/education";
import { experiences } from "@/data/experiences";
import { skills } from "@/data/skills";
import { SITE_URL, LOCALES, DEFAULT_LOCALE } from "@/lib/seo";

/**
 * Person + WebSite JSON-LD.
 *
 * The site's primary query is a human name, and "Ahmet Akkoç" is shared with at least
 * two other people who currently outrank this domain for it (a veterinary pathology
 * academic and a data scientist). `sameAs` is the lever that binds this domain to this
 * person — it only works if the linked profiles point back here, so keep the GitHub and
 * LinkedIn "website" fields set to https://ahmetakkoc.com.
 *
 * Values are pulled from src/data/* rather than retyped. Three fields are deliberately
 * ABSENT rather than guessed:
 *   - worksFor.url / alumniOf.url — no employer or university URL exists in the data
 *   - image — no headshot asset exists; /og.jpg is a text banner, and pointing Person.image
 *     at it would misrepresent the property
 *   - telephone — it exists in profile.js but is not rendered anywhere on the page, so
 *     publishing it in markup would both leak it and describe content that is not there
 * Add them once real values exist; do not substitute approximations.
 */

const currentRole = experiences[0];

const knowsAbout = [
  ...new Set([
    ...skills.flatMap((group) => group.items),
    "B2B SaaS",
    "REST API",
    "Authentication",
    "i18n",
    "Design Systems",
  ]),
];

export function buildStructuredData(locale = DEFAULT_LOCALE) {
  const { htmlLang, path } = LOCALES[locale] ?? LOCALES[DEFAULT_LOCALE];
  const pageUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const personId = `${SITE_URL}/#person`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: contact.name,
    givenName: "Ahmet",
    familyName: "Akkoç",
    url: SITE_URL,
    email: `mailto:${contact.email}`,
    jobTitle: contact.title,
    description:
      locale === "tr"
        ? "Bilgisayar mühendisi. B2B SaaS, e-devlet entegrasyonu ve operasyon panelleri için Next.js, React ve TypeScript ile arayüz geliştiriyor."
        : "Computer engineer building interfaces for B2B SaaS, e-government integrations and operational dashboards with Next.js, React and TypeScript.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressCountry: "TR",
    },
    worksFor: {
      "@type": "Organization",
      name: currentRole.company,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    knowsLanguage: [
      { "@type": "Language", name: "Turkish", alternateName: "tr" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    knowsAbout,
    sameAs: [contact.github.href, contact.linkedin.href],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: contact.name,
    inLanguage: htmlLang,
    publisher: { "@id": personId },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${pageUrl}/#profilepage`,
    url: pageUrl,
    inLanguage: htmlLang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage],
  };
}

export function StructuredData({ locale = DEFAULT_LOCALE }) {
  return (
    <script
      type="application/ld+json"
      // Values come from local data files, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData(locale)) }}
    />
  );
}
