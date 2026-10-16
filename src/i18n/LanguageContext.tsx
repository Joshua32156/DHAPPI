import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Retourne la valeur correspondant à la langue active : t("Bonjour", "Hello") */
  t: <T,>(fr: T, en: T) => T;
};

const STORAGE_KEY = "dhappi-lang";

const META: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: "D. HAPPI Avocats - Expertise juridique depuis 1985 | Douala, Cameroun",
    description:
      "Cabinet d'avocats d'affaires indépendant depuis 1985. Conseil juridique, contentieux, fiscalité, conformité. Douala, Cameroun.",
  },
  en: {
    title: "D. HAPPI Attorneys - Legal expertise since 1985 | Douala, Cameroon",
    description:
      "Independent business law firm since 1985. Legal advisory, litigation, tax and compliance. Douala, Cameroon.",
  },
};

const getInitialLang = (): Lang => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") return stored;
  } catch {
    // stockage indisponible (navigation privée, etc.)
  }
  if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("en")) {
    return "en";
  }
  return "fr";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignoré
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", META[lang].description);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: (fr, en) => (lang === "en" ? en : fr) }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage doit être utilisé dans <LanguageProvider>");
  return ctx;
};
