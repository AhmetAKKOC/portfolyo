"use client";

import { MagneticLink } from "@/components/ui/MagneticLink";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Header() {
  const { language, setLanguage, copy } = useLanguage();

  return (
    <header className="experience-header">
      <a className="experience-brand" href="#top" aria-label={copy.header.homeLabel}>
        <img src="/logo.png" alt="" />
      </a>
      <nav className="experience-nav" aria-label={copy.header.navigationLabel}>
        <a href="#about">{copy.header.approach}</a>
        <a href="#work">{copy.header.work}</a>
        <a href="#skills">{copy.header.buildLog}</a>
      </nav>
      <div className="header-tools">
        <div className="language-switcher" role="group" aria-label={copy.header.languageLabel}>
          <button
            className={language === "tr" ? "is-active" : ""}
            type="button"
            aria-label={copy.header.turkishLabel}
            aria-pressed={language === "tr"}
            onClick={() => setLanguage("tr")}
          >
            TR
          </button>
          <button
            className={language === "en" ? "is-active" : ""}
            type="button"
            aria-label={copy.header.englishLabel}
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
        <MagneticLink className="experience-action" href="#contact">
          {copy.header.contact} <span aria-hidden="true">-&gt;</span>
        </MagneticLink>
      </div>
    </header>
  );
}
