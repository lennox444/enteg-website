"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

const BLUE = "#4A8FE0";
const BG   = "#07101C";

export default function LegalLayout({
  title,
  badge,
  children,
}: {
  title: string;
  badge: string;
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen" style={{ background: "#f8f9fa" }}>

      {/* ── Dark header band ── */}
      <header className="relative overflow-hidden" style={{ background: BG }}>
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 15px, rgba(74,143,224,0.09) 15px, rgba(74,143,224,0.09) 17px)`,
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(74,143,224,0.08) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          {/* Back link */}
          <a
            href="/"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-8 transition-colors duration-200 hover:text-white w-fit"
            style={{ color: "rgba(74,143,224,0.7)" }}
          >
            <ArrowLeft size={13} />
            {t.legal.backToHome}
          </a>

          {/* Title */}
          <h1
            className="font-headline font-black text-white uppercase leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            {title}
          </h1>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="prose-legal">
          {children}
        </div>
      </main>

      {/* ── Bottom bar ── */}
      <div
        className="border-t py-6 text-center"
        style={{ borderColor: "rgba(0,0,0,0.07)" }}
      >
        <div className="max-w-4xl mx-auto px-4 flex flex-row flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Enteg GmbH" className="h-7 w-auto opacity-60" />
          <div className="flex items-center gap-5 text-xs" style={{ color: "#9ca3af" }}>
            <a href="/" className="hover:text-brand-blue transition-colors">{t.nav.home}</a>
            <span>·</span>
            <a href="/impressum" className="hover:text-brand-blue transition-colors">{t.footer.imprint}</a>
            <span>·</span>
            <a href="/datenschutz" className="hover:text-brand-blue transition-colors">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
