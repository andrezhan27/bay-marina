'use client';
import Link from 'next/link';
import type { ReactNode, MouseEvent } from 'react';

export function HomeLink({ children, className, onHome, 'aria-label': label }: {
  children: ReactNode;
  className?: string;
  onHome?: () => void;
  'aria-label'?: string;
}) {
  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    onHome?.();
    if (window.location.pathname !== '/') return;
    event.preventDefault();
    window.history.replaceState(window.history.state, '', '/#home');
    // Run after the mobile navigation releases its scroll lock.
    requestAnimationFrame(() => window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    }));
  };
  return <Link href="/#home" scroll className={className} aria-label={label} onClick={goHome}>{children}</Link>;
}
