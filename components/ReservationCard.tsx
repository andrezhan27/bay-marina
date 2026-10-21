'use client';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { restaurant } from '@/lib/restaurant';
import { useLanguage } from './LanguageProvider';
import { MagneticButton } from './MagneticButton';
export function ReservationCard() {
  const { t } = useLanguage();
  return <section className="reservation-section"><div className="container reservation-card"><div className="reservation-copy"><p className="eyebrow">BAY MARINA · SETÚBAL</p><h2>{t.reserveTitle}</h2><p>{t.reserveBody}</p><MagneticButton>{t.book}</MagneticButton>{!restaurant.reservationUrl && !restaurant.phone && <small>{t.reserveNote}</small>}</div><div className="map-panel">{restaurant.mapsEmbedUrl ? <iframe src={restaurant.mapsEmbedUrl} title={t.mapTitle} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <div className="map-placeholder"><div className="map-grid" aria-hidden="true" /><MapPin size={30} strokeWidth={1} /><p>{t.mapPending}</p><small>{t.mapNote}</small></div>}{restaurant.directionsUrl && <a className="directions" href={restaurant.directionsUrl} target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={16} /></a>}</div></div></section>;
}
