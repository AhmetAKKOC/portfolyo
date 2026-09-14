"use client";

import { createContext, useContext, useMemo } from "react";
import { siteCopy } from "@/i18n/copy";

const LanguageContext = createContext(null);

/**
 * Language comes from the route now, not from localStorage.
 *
 * The previous version defaulted to `useState("tr")` and only switched after hydration
 * by reading localStorage, then wrote `document.documentElement.lang` and
 * `document.title` from an effect. Three problems, all fixed by moving the decision to
 * the route:
 *
 *   1. English copy never appeared in server-rendered HTML, so there was no crawlable
 *      source text for English queries and no URL to point an hreflang tag at.
 *   2. The client overwrote the server-rendered `<title>` on every mount, so the tag
 *      Google indexed and the tag a visitor saw could disagree.
 *   3. A visitor's language choice could not be linked, shared or bookmarked.
 *
 * `/` renders Turkish, `/en` renders English, each with its own root layout and its own
 * `<html lang>`.
 */
export function LanguageProvider({ children, language = "tr" }) {
  const value = useMemo(
    () => ({ language, copy: siteCopy[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) throw new Error("useLanguage must be used within LanguageProvider.");
  return context;
}
