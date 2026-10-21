'use client';
import Image from 'next/image';
import { HomeLink } from './HomeLink';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { assets } from '@/lib/assets';
import { reservationDestination } from '@/lib/restaurant';
import { sectionIds } from '@/lib/translations';
import { useLanguage } from './LanguageProvider';
import { LanguageToggle } from './LanguageToggle';
import { MagneticButton } from './MagneticButton';
export function Navbar({ reservation = false }: { reservation?: boolean }) {
  const { t } = useLanguage(); const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null); const panel = useRef<HTMLDivElement>(null);
  useEffect(() => { const scroll = () => setScrolled(window.scrollY > 40); scroll(); window.addEventListener('scroll', scroll, { passive: true }); return () => window.removeEventListener('scroll', scroll); }, []);
  useEffect(() => {
    if (!open) return;
    const triggerElement = trigger.current;
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; panel.current?.querySelector<HTMLElement>('a')?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') {
        const items = [trigger.current, ...Array.from(panel.current?.querySelectorAll<HTMLElement>('a,button') ?? [])].filter(Boolean) as HTMLElement[];
        const first = items[0]; const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', key); triggerElement?.focus(); };
  }, [open]);
  return <><a className="skip-link" href="#main">{t.skip}</a><header className={`navbar ${scrolled || open || reservation ? 'solid' : ''}`}><HomeLink className="nav-logo" aria-label="Bay Marina"><Image src={assets.logo} alt="Bay Marina Restaurante" width={1361} height={1156} /></HomeLink><nav className="desktop-nav" aria-label={t.openMenu}><HomeLink>{t.home}</HomeLink>{t.nav.map((label, i) => <a key={sectionIds[i]} href={`${reservation ? "/" : ""}#${sectionIds[i]}`}>{label}</a>)}</nav><div className="nav-actions"><LanguageToggle /><MagneticButton className="nav-book">{t.book}</MagneticButton><button className="menu-trigger" ref={trigger} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.closeMenu : t.openMenu} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-menu" id="mobile-menu" ref={panel} role="dialog" aria-modal="true" aria-label={t.openMenu}><nav><HomeLink onHome={() => setOpen(false)}>{t.home}</HomeLink>{t.nav.map((label, i) => <a key={sectionIds[i]} href={`${reservation ? "/" : ""}#${sectionIds[i]}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="button primary" href={reservationDestination} onClick={() => setOpen(false)}>{t.book}</a></nav></div>}</header></>;
}
