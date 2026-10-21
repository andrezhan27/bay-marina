'use client';
import Image from 'next/image';
import { sectionIds } from '@/lib/translations';
import { restaurant } from '@/lib/restaurant';
import type { LegalLinks } from '@/lib/legal';
import { assets } from '@/lib/assets';
import { useLanguage } from './LanguageProvider';
import { HomeLink } from './HomeLink';

export function Footer({ legalLinks }: { legalLinks: LegalLinks }) {
  const { t } = useLanguage();
  const policies = [
    { label: t.privacyPolicy, url: legalLinks.privacyPolicyUrl },
    { label: t.termsAndConditions, url: legalLinks.termsAndConditionsUrl },
  ];
  return <footer><div className="container">
    <div className="footer-top">
      <HomeLink aria-label="Bay Marina"><Image src={assets.logo} alt="Bay Marina Restaurante" width={110} height={94} /></HomeLink>
      <p>{t.footer}</p>
      <nav aria-label={t.openMenu}>{t.nav.map((label, i) => <a key={label} href={`#${sectionIds[i]}`}>{label}</a>)}{restaurant.socialLinks.map(link => <a key={link.url} href={link.url}>{link.label}</a>)}</nav>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Bay Marina, {t.designedBy} <a href="https://www.intelis.pt" target="_blank" rel="noreferrer">Intelis</a>, {t.rights}</span>
      <div className="footer-legal">{policies.map(policy => policy.url ? (
        <a href={policy.url} key={policy.label} target="_blank" rel="noreferrer">{policy.label}</a>
      ) : <span className="legal-pending" key={policy.label} title={t.legalUnavailable}>{policy.label}<small>{t.legalUnavailable}</small></span>)}</div>
    </div>
  </div></footer>;
}
