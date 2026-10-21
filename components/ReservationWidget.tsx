'use client';
import { restaurant } from '@/lib/restaurant';
import { useLanguage } from './LanguageProvider';
export function ReservationWidget() {
  const { t } = useLanguage();
  return <iframe className="reservation-widget block h-full w-full border-0" loading="eager" src={restaurant.reservationWidgetUrl} title={t.bookingTitle} />;
}
