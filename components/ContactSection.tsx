'use client';
import Image from 'next/image';
import { MapPin, Clock3, Phone, Mail, Truck, ArrowUpRight } from 'lucide-react';
import { restaurant } from '@/lib/restaurant';
import { assets } from '@/lib/assets';
import { useLanguage } from './LanguageProvider';

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section className="contact-section section" id="contactos">
      <div className="container contact-grid">
        <div className="editorial-photo contact-photo">
          <Image src={assets.contact} alt={t.contactPhotoAlt} fill sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div className="contact-copy">
          <p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p className="contact-lead">{t.contactBody}</p>
          <dl>
            <div><MapPin className="contact-field-icon" size={20} aria-hidden="true" /><dt>{t.address}</dt><dd>
              <a className="contact-link" href={restaurant.directionsUrl} target="_blank" rel="noreferrer">
                <span>{restaurant.address}</span><ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </dd></div>
            <div><Clock3 className="contact-field-icon" size={20} aria-hidden="true" /><dt>{t.hours}</dt><dd>{t.everyDay}<br />{restaurant.hours.lunch} · {restaurant.hours.dinner}</dd></div>
            <div><Phone className="contact-field-icon" size={20} aria-hidden="true" /><dt>{t.phone}</dt><dd>
              <a className="contact-link" href={restaurant.phoneHref}><span>{restaurant.phone}</span><ArrowUpRight size={18} aria-hidden="true" /></a>
            </dd></div>
            {restaurant.email && <div><Mail className="contact-field-icon" size={20} aria-hidden="true" /><dt>{t.email}</dt><dd><a className="contact-link" href={`mailto:${restaurant.email}`}><span>{restaurant.email}</span><ArrowUpRight size={18} aria-hidden="true" /></a></dd></div>}
            <div><Truck className="contact-field-icon" size={20} aria-hidden="true" /><dt>{t.delivery}</dt><dd>
              <a className="contact-link" href={restaurant.deliveryUrl} target="_blank" rel="noreferrer"><span>{t.deliveryLink}</span><ArrowUpRight size={18} aria-hidden="true" /></a>
            </dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
