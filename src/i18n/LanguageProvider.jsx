"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteCopy } from "@/i18n/copy";

const LanguageContext = createContext(null);
const STORAGE_KEY = "ahmet-akkoc-language";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("tr");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage === "tr" || storedLanguage === "en") setLanguage(storedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = siteCopy[language].documentTitle;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, copy: siteCopy[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) throw new Error("useLanguage must be used within LanguageProvider.");
  return context;
}
