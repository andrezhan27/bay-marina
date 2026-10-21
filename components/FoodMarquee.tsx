'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { assets } from '@/lib/assets';
import { useLanguage } from './LanguageProvider';
import { BuffetPricing } from './BuffetPricing';
import { MagneticButton } from './MagneticButton';

export function FoodMarquee() {
  const { t, language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);

  return (
    <section id="sabores" className="food-section section" ref={ref}>
      <div className="container food-heading">
        <p className="eyebrow">{t.foodLabel}</p><h2>{t.foodTitle}</h2><p>{t.foodBody}</p>
      </div>
      <div className={`food-rows ${visible ? 'running' : ''}`}>
        {[0, 1].map(row => (
          <div className="food-row" key={row}>
            <div className={`food-track track-${row}`}>
              {[0, 1].map(copy => (
                <div className="food-sequence" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {assets.food.slice(row * 4, row * 4 + 4).map(photo => (
                    <div className="food-tile" key={photo.id}>
                      <Image src={photo.src} alt={copy === 1 ? '' : photo.alt[language === 'pt' ? 0 : 1]} fill sizes="(max-width: 600px) 245px, (max-width: 1280px) 320px, 25vw" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BuffetPricing />
      <div className="food-booking"><MagneticButton>{t.book}</MagneticButton></div>
    </section>
  );
}
