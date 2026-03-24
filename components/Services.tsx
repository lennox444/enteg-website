"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trash2, HardDrive, RefreshCw, Recycle, ArrowRight, type LucideIcon } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

const iconMap: Record<string, LucideIcon> = { Trash2, HardDrive, RefreshCw, Recycle };

const serviceImages = [
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
];

// Bento grid layout — 3 cols, 3 auto rows
const bentoClasses = [
  "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  "lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-4",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="flex items-end gap-6 border-b border-gray-200 pb-8 mb-8"
        >
          <div className="flex-1">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.1, ease }}
              className="inline-flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-widest mb-3"
            >
              <span className="w-4 h-px bg-brand-blue inline-block" />
              {t.services.title}
            </motion.span>
            <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-gray-dark uppercase leading-none">
              {t.services.title}
            </h2>
          </div>
          <p className="hidden md:block text-brand-gray text-base max-w-xs leading-snug mb-1">
            {t.services.subtitle}
          </p>
        </motion.div>

        <p className="md:hidden text-brand-gray text-base mb-8 leading-relaxed">
          {t.services.subtitle}
        </p>

        {/* Bento grid */}
        <div className="grid w-full auto-rows-[22rem] grid-cols-3 gap-4 lg:grid-rows-3">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Recycle;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.07 + i * 0.08, ease }}
                className={`group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl bg-bg-dark [box-shadow:0_2px_4px_rgba(0,0,0,.15),0_12px_24px_rgba(0,0,0,.15)] ${bentoClasses[i]}`}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${serviceImages[i]}')` }}
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Content */}
                <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-1 p-6 pt-8 transition-all duration-300 group-hover:-translate-y-10 mt-auto">
                  <Icon className="h-9 w-9 origin-left transform-gpu text-brand-blue transition-all duration-300 ease-in-out group-hover:scale-75 mb-2" />
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-brand-blue leading-none">
                    {service.title}
                  </h3>
                  <p className="max-w-lg text-white text-sm leading-relaxed mt-1">
                    {service.description}
                  </p>
                </div>

                {/* CTA on hover */}
                <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href="#contact"
                    className="pointer-events-auto inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wide hover:text-brand-blue transition-colors"
                  >
                    {t.services.more}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Hover blue tint */}
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-brand-blue/5" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
