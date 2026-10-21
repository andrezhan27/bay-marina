'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
export function Reveal({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return <motion.div initial={false} whileInView={{ opacity: [0.7, 1], y: reduced ? [0, 0] : [12, 0] }} viewport={{ once: true, amount: .08 }} transition={{ duration: reduced ? 0 : .65 }}>{children}</motion.div>;
}
