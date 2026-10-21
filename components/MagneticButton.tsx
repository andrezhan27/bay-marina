import type { ReactNode } from 'react';
import Link from 'next/link';
import { reservationDestination } from '@/lib/restaurant';

// Shared booking link. The visual and hit target stay centered and stationary.
export function MagneticButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <Link className={`button primary ${className}`} href={reservationDestination}>{children}</Link>;
}
