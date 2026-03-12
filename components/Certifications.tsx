"use client";

import { useState } from "react";
import { X, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { ImageAccordion } from "@/components/ui/interactive-image-accordion";

// Static image URLs — same regardless of language
const CERT_IMAGE_URLS = [
  "/certs/CERT9001_latest.png",
  "/certs/CERT14001_latest.png",
  "/certs/Entsorgungsfachbetrieb_latest.png",
  "/certs/DIN66399_latest.png",
  "/certs/ElektroG_latest.png",
];

export default function Certifications() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Merge translated data with static image URLs
  const certs = t.certs.data.map((d, i) => ({
    id: i + 1,
    title: d.title,
    label: d.label,
    description: d.description,
    imageUrl: CERT_IMAGE_URLS[i],
  }));

  const current = lightbox !== null ? certs[lightbox] : null;
  const prev = () => setLightbox((o) => (o !== null ? (o - 1 + certs.length) % certs.length : null));
  const next = () => setLightbox((o) => (o !== null ? (o + 1) % certs.length : null));

  return (
    <section id="certifications" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3 block">
            {t.certs.badge}
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-brand-gray-dark uppercase mb-4">
            {t.certs.title}
          </h2>
        </div>

        {/* Main layout: Text left + Accordion right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── LEFT: Text Content ── */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6 lg:pr-8">
            <p className="text-brand-gray text-lg leading-relaxed">
              {t.certs.body}
            </p>

            {/* Cert list */}
            <ul className="space-y-3">
              {certs.map((cert, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => setLightbox(i)}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                    <CheckCircle2 size={16} className="text-brand-blue" />
                  </div>
                  <div>
                    <span className="font-semibold text-brand-gray-dark text-sm group-hover:text-brand-blue transition-colors">
                      {cert.title}
                    </span>
                    <span className="text-brand-gray text-sm"> — {cert.label}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust badge */}
            <div className="flex items-start gap-3 bg-white border border-brand-blue/20 rounded-xl p-4 mt-2">
              <Award size={20} className="text-brand-blue flex-shrink-0 mt-0.5" />
              <p className="text-sm text-brand-gray leading-snug">
                {t.certs.hint}
              </p>
            </div>
          </div>

          {/* ── RIGHT: Image Accordion ── */}
          <div className="w-full lg:w-3/5 overflow-x-auto pb-2">
            <ImageAccordion
              items={certs}
              defaultActive={0}
              onItemClick={(i) => setLightbox(i)}
            />
          </div>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-brand-blue/10 rounded-lg p-2">
                  <ShieldCheck size={18} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase text-brand-gray-dark">
                    {current.title}
                  </h3>
                  <p className="text-xs text-brand-gray">{current.label}</p>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-brand-gray"
                aria-label={t.certs.close}
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate image */}
            <div className="flex-1 overflow-auto bg-gray-50 flex items-center justify-center p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.imageUrl}
                alt={current.title}
                className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Description */}
            <div className="px-6 py-4 border-t border-gray-50 bg-bg-light">
              <p className="text-sm text-brand-gray leading-relaxed">{current.description}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100 bg-white">
              <button
                onClick={prev}
                className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors px-3 py-1.5 rounded-lg hover:bg-bg-section"
              >
                {t.certs.prev}
              </button>
              <span className="text-xs text-gray-400">
                {(lightbox ?? 0) + 1} / {certs.length}
              </span>
              <button
                onClick={next}
                className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors px-3 py-1.5 rounded-lg hover:bg-bg-section"
              >
                {t.certs.next}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
