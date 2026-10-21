'use client';
import { useLanguage } from './LanguageProvider';
export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  return <div className="language-toggle" role="group" aria-label={t.language}>{(['pt', 'en'] as const).map(lang => <button key={lang} aria-pressed={language === lang} onClick={() => setLanguage(lang)}>{lang.toUpperCase()}</button>)}</div>;
}
