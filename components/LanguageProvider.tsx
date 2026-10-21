'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Language, type Copy } from '@/lib/translations';
const Context = createContext<{ language: Language; setLanguage: (language: Language) => void; t: Copy } | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, update] = useState<Language>('pt');
  useEffect(() => {
    const saved = localStorage.getItem('bay-marina-language');
    if (saved === 'pt' || saved === 'en') {
      // Read after hydration so the server and initial client content agree.
      requestAnimationFrame(() => update(saved));
    }
  }, []);
  useEffect(() => { document.documentElement.lang = language === 'pt' ? 'pt-PT' : 'en'; }, [language]);
  const setLanguage = (value: Language) => { update(value); localStorage.setItem('bay-marina-language', value); };
  return <Context.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</Context.Provider>;
}
export function useLanguage() { const value = useContext(Context); if (!value) throw new Error('LanguageProvider is required'); return value; }
