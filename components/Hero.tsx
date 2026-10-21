'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { assets } from '@/lib/assets';
import { useLanguage } from './LanguageProvider';
import { MagneticButton } from './MagneticButton';
import { WaterAtmosphere } from './WaterAtmosphere';

export function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Image className="hero-photo" src={assets.hero} alt="" fill preload unoptimized sizes="100vw" />
      <div className="hero-shade" />
      <WaterAtmosphere />
      <motion.div className="hero-content" initial={false} animate={{ opacity: [0.6, 1], y: reduced ? [0, 0] : [12, 0] }} transition={{ duration: reduced ? 0 : .8 }}>
        <h1 id="hero-title">
          <span className="sr-only">Bay Marina — Sushi à la carte, Setúbal</span>
          <Image className="hero-logo" src={assets.logo} alt="" width={1361} height={1156} preload sizes="(max-width: 600px) 260px, 340px" />
        </h1>
        <div className="hero-buttons"><MagneticButton>{t.book}</MagneticButton></div>
      </motion.div>
    </section>
  );
}
