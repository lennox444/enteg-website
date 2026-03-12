"use client";

import { Trash2, HardDrive, RefreshCw, Recycle, type LucideIcon } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const iconMap: Record<string, LucideIcon> = { Trash2, HardDrive, RefreshCw, Recycle };

const serviceImages = [
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
];

// Bento grid layout — 3 cols, 3 auto rows
const bentoClasses = [
  "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",  // large feature (2 cols, 2 rows)
  "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",  // small top-right
  "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",  // small bottom-right
  "lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-4",  // full-width bottom
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

        {/* Section header */}
        <div className="flex items-end gap-6 border-b border-gray-200 pb-8 mb-8">
          <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-gray-dark uppercase leading-none">
            {t.services.title}
          </h2>
          <p className="hidden md:block text-brand-gray text-base max-w-xs leading-snug mb-1">
            {t.services.subtitle}
          </p>
        </div>
        <p className="md:hidden text-brand-gray text-base mb-8 leading-relaxed">
          {t.services.subtitle}
        </p>

        {/* Bento grid */}
        <BentoGrid className="lg:grid-rows-3">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Recycle;
            return (
              <BentoCard
                key={service.title}
                name={service.title}
                description={service.description}
                href="#contact"
                cta={t.services.more}
                Icon={Icon}
                className={bentoClasses[i]}
                background={
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${serviceImages[i]}')` }}
                  />
                }
              />
            );
          })}
        </BentoGrid>

      </div>
    </section>
  );
}
