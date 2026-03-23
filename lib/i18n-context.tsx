"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale, Translations } from "./translations";

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: "de",
  t: translations.de,
  toggleLocale: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "de" || saved === "en") setLocale(saved);
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === "de" ? "en" : "de";
      localStorage.setItem("locale", next);
      return next;
    });
  };

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
