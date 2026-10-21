'use client';
import Image from 'next/image';
import { assets } from '@/lib/assets';
import { useLanguage } from './LanguageProvider';
export function EnvironmentGallery() {
  const { t, language } = useLanguage();
  return <section id="espaco" className="space-section section"><div className="container"><div className="section-intro"><div><p className="eyebrow">{t.spaceLabel}</p><h2>{t.spaceTitle}</h2></div><p>{t.spaceBody}</p></div><div className="gallery-container"><div className="environment-grid">{assets.spaces.map((photo, i) => <div className={`editorial-photo gallery-photo ${i === 3 || i === 4 ? 'gallery-wide' : ''}`} key={photo.id}><Image src={photo.src} alt={photo.alt[language === 'pt' ? 0 : 1]} fill sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>)}</div></div><div className="gallery-footnote"><span>BAY MARINA</span><p>{t.spaceNote}</p></div></div></section>;
}
