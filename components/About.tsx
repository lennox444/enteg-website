"use client";

import { Truck, Factory, FileCheck } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

const uspIcons = [Factory, Truck, FileCheck];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section header */}
        <div className="flex items-end gap-6 border-b border-gray-200 pb-8 mb-14">
          <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-gray-dark uppercase leading-none">
            {t.about.title}
          </h2>
          <div className="w-10 h-1 bg-brand-blue mb-2 flex-shrink-0" />
        </div>

        {/* Main grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-8 lg:gap-10 items-start">

          {/* ── COL 1: Image ── */}
          <div className="relative">
            {/* Decorative year */}
            <div
              className="absolute -top-4 -left-2 font-headline font-bold text-gray-100 leading-none select-none pointer-events-none z-0"
              style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
            >
              2026
            </div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl group">
              <div
                className="h-72 lg:h-[420px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/enteg-building.svg')",
                }}
              />
            </div>
          </div>

          {/* ── COL 2: Text ── */}
          <div className="flex flex-col justify-start lg:pt-2">
            <p className="text-brand-gray text-base leading-relaxed mb-4">
              {t.about.body}
            </p>
            <p className="text-brand-gray text-sm leading-relaxed text-brand-gray/70">
              {t.about.body2}
            </p>

            {/* Stats pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { value: "30+",  label: t.about.statLabels[0] },
                { value: "5",    label: t.about.statLabels[1] },
                { value: "2026", label: t.about.statLabels[2] },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline gap-1.5 bg-bg-light border border-gray-200 rounded-xl px-4 py-2.5"
                >
                  <span className="font-headline text-2xl font-bold text-brand-blue leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-brand-gray font-semibold">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-blue-dark transition-colors duration-200 group"
            >
              {t.about.cta}
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>

          {/* ── COL 3: USPs ── */}
          <div className="flex flex-col gap-0 divide-y divide-gray-100 lg:border-l lg:border-gray-100 lg:pl-8">
            {t.about.usps.map((usp, i) => {
              const Icon = uspIcons[i];
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5 group"
                >
                  <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-brand-blue/8 flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors duration-200">
                    <Icon size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-headline text-base font-bold text-brand-gray-dark uppercase mb-1 leading-tight">
                      {usp.title}
                    </h4>
                    <p className="text-brand-gray text-xs leading-relaxed">
                      {usp.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Cert badge row */}
            <div className="pt-5 flex flex-wrap gap-2">
              {["ISO 9001", "ISO 14001", "DIN 66399", "ElektroG"].map((c) => (
                <span
                  key={c}
                  className="text-xs font-semibold text-brand-blue bg-brand-blue/8 border border-brand-blue/20 px-2.5 py-1 rounded-lg"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
