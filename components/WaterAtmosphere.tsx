'use client';
import { useRef, type CSSProperties } from 'react';
import { useInView } from 'framer-motion';

export function WaterAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className={`water-atmosphere ${visible ? 'running' : ''}`} aria-hidden="true">
      {Array.from({ length: 20 }, (_, i) => (
        <i key={i} style={{
          '--x': `${i % 2 === 0 ? 4 + (i * 1.7) % 26 : 72 + (i * 1.3) % 24}%`,
          '--delay': `${i * -2.3}s`,
          '--duration': `${14 + i % 5 * 2}s`,
          '--size': `${3 + i % 3}px`,
          '--drift': `${i % 2 === 0 ? 18 : -18}px`,
        } as CSSProperties} />
      ))}
    </div>
  );
}
