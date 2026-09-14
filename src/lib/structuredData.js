import { contact } from "@/data/profile";
import { education } from "@/data/education";
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
 *   - worksFor — removed at the site owner's request along with the employment section;
 *     the page no longer names an employer, and schema should not assert what the page
 *     does not show
 *   - alumniOf.url — no university URL exists in the data
 *   - image — no headshot asset exists; /og.jpg is a text banner, and pointing Person.image
 *     at it would misrepresent the property
 *   - telephone — it exists in profile.js but is not rendered anywhere on the page, so
 *     publishing it in markup would both leak it and describe content that is not there
 * Add them once real values exist; do not substitute approximations.
 */

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
      "Computer engineer and frontend developer based in İzmir, Türkiye. Builds scalable user interfaces for B2B SaaS dashboards, operations screens and integration-led platforms with Next.js, React and TypeScript.",
    // "Ahmet Akkoç" is shared with at least two better-established people — a
    // veterinary pathology academic at Uludağ Üniversitesi and a data scientist.
    // This property exists precisely to separate same-name entities.
    disambiguatingDescription:
      "Frontend developer and computer engineer in İzmir, Türkiye, working on B2B SaaS and enterprise operations interfaces. Not the veterinary pathology academic or the data scientist of the same name.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressCountry: "TR",
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
    // Both locales are declared here rather than the current one: this node has a
    // single @id shared across /  and /en, so a per-page value would make the same
    // node contradict itself depending on which page dereferenced it.
    inLanguage: [LOCALES.tr.htmlLang, LOCALES.en.htmlLang],
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
    description:
      locale === "tr"
        ? "Ahmet Akkoç'un kişisel portfolyosu: B2B SaaS, operasyon panelleri ve entegrasyon odaklı platformlar için frontend geliştirme."
        : "Personal portfolio of Ahmet Akkoç: frontend development for B2B SaaS, operations dashboards and integration-led platforms.",
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
