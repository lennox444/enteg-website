'use client';

import { useState } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { EntegLogoAnimated } from '@/components/ui/enteg-logo-animated';
import { useTranslation } from '@/lib/i18n-context';

export default function Hero() {
  const { t } = useTranslation();
  const [logoProgress, setLogoProgress] = useState(0);

  return (
    <section id="home">
      <ScrollExpandMedia
        bgImageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85"
        mediaNode={<EntegLogoAnimated className="w-full h-full" scrollProgress={logoProgress} />}
        title={t.hero.heroTitle}
        date={t.hero.heroBadge}
        scrollToExpand={t.hero.scrollToExpand}
        textBlend
        onScrollProgress={setLogoProgress}
      />
    </section>
  );
}
