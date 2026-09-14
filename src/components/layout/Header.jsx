"use client";

import Image from "next/image";
import Link from "next/link";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Header() {
  const { language, copy } = useLanguage();

  return (
    <header className="experience-header">
      <a className="experience-brand" href="#top" aria-label={copy.header.homeLabel}>
        {/* Rendered at 48x48; the source is 144x144 to cover 3x DPR. Explicit
            width/height reserve the box before the bitmap arrives. */}
        <Image src="/logo.png" alt="" width={48} height={48} priority />
      </a>
      <nav className="experience-nav" aria-label={copy.header.navigationLabel}>
        <a href="#about">{copy.header.approach}</a>
        <a href="#work">{copy.header.work}</a>
        <a href="#skills">{copy.header.buildLog}</a>
      </nav>
      <div className="header-tools">
        {/* Real links, not buttons. Each language is its own URL now, so the choice can
            be linked, shared and crawled — and hreflang has somewhere to point. */}
        <div className="language-switcher" aria-label={copy.header.languageLabel}>
          <Link
            className={language === "tr" ? "is-active" : ""}
            href="/"
            hrefLang="tr"
            lang="tr"
            aria-label={copy.header.turkishLabel}
            aria-current={language === "tr" ? "true" : undefined}
          >
            TR
          </Link>
          <Link
            className={language === "en" ? "is-active" : ""}
            href="/en"
            hrefLang="en"
            lang="en"
            aria-label={copy.header.englishLabel}
            aria-current={language === "en" ? "true" : undefined}
          >
            EN
          </Link>
        </div>
        <MagneticLink className="experience-action" href="#contact">
          {copy.header.contact} <span aria-hidden="true">-&gt;</span>
        </MagneticLink>
      </div>
    </header>
  );
}
