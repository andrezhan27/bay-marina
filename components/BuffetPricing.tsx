'use client';
import { buffetPrices } from '@/lib/restaurant';
import { useLanguage } from './LanguageProvider';

export function BuffetPricing() {
  const { t, language } = useLanguage();
  const currency = (price: number) => new Intl.NumberFormat(language === 'pt' ? 'pt-PT' : 'en-IE', { style: 'currency', currency: 'EUR' }).format(price);
  const services = [
    { title: t.weekdayLunch, prices: buffetPrices.weekdayLunch },
    { title: t.otherService, prices: buffetPrices.dinnerWeekendHoliday },
  ];
  return <div className="container buffet-pricing" id="precos">
    <div className="pricing-heading"><h3>{t.pricingTitle}</h3><p>{t.perPerson}</p></div>
    <div className="pricing-services">{services.map(service => <div className="pricing-service" key={service.title}>
      <h4>{service.title}</h4><dl>
        <div><dt>{t.adult}</dt><dd>{currency(service.prices.adult)}</dd></div>
        <div><dt>{t.child}</dt><dd>{currency(service.prices.child)}</dd></div>
      </dl>
    </div>)}</div>
    <p className="pricing-note">{t.priceNote}</p>
  </div>;
}
