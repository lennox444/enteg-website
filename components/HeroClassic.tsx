"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden"
    >
      {/* Subtle top-left color wash */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      {/* Subtle bottom-right accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-bg-section rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue-dark rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              Seit 2026 · Delbrück · Recycling Power
            </div>

            {/* Headline */}
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-brand-gray-dark leading-[0.95] mb-6">
              {t.hero.headline}
            </h1>

            {/* Subline */}
            <p className="text-brand-gray text-lg leading-relaxed mb-8 max-w-lg">
              {t.hero.subline}
            </p>

            {/* Trust points */}
            <ul className="space-y-2 mb-10">
              {[
                "ISO 9001 & ISO 14001 zertifiziert",
                "Eigene Schredderanlage & Fahrzeugflotte",
                "Lückenlose Entsorgungsnachweise",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-brand-gray">
                  <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:-translate-y-0.5 group"
              >
                {t.hero.cta1}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-brand-gray/20 hover:border-brand-blue text-brand-gray-dark hover:text-brand-blue font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* ── RIGHT: Images ── */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">

            {/* Main image — large, slightly tilted */}
            <div className="absolute right-0 top-0 w-[78%] h-[75%] rounded-2xl overflow-hidden shadow-2xl shadow-brand-gray/20 rotate-1">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85')",
                }}
              />
              {/* Thin blue border accent */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-blue/20" />
            </div>

            {/* Secondary image — overlapping bottom-left, counter-rotated */}
            <div className="absolute left-0 bottom-0 w-[58%] h-[52%] rounded-2xl overflow-hidden shadow-xl shadow-brand-gray/25 -rotate-2">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1565118531796-763e5082d113?w=700&q=85')",
                }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/30" />
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-6 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 flex items-center gap-3">
              <div className="bg-brand-blue/10 rounded-xl p-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A8FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <div className="font-headline text-xl font-bold text-brand-gray-dark leading-none">30+</div>
                <div className="text-xs text-brand-gray mt-0.5">Jahre Erfahrung</div>
              </div>
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-4 -left-6 w-32 h-32 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #4A8FE0 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
