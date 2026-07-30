"use client";

import { contact } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="experience-footer">
      <span>{contact.name} / {new Date().getFullYear()}</span>
      <a href="#top">{copy.footer.backToTop} <span aria-hidden="true">-&gt;</span></a>
    </footer>
  );
}
