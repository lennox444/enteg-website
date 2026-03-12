"use client";

import { useTranslation } from "@/lib/i18n-context";
import { EntegLogoAnimated } from "@/components/ui/enteg-logo-animated";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden" style={{ background: "#07101C", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* IBM-style vertical stripes */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 15px,
            rgba(74,143,224,0.09) 15px,
            rgba(74,143,224,0.09) 17px
          )`,
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(74,143,224,0.07) 0%, transparent 70%)" }}
      />
      <div className="relative h-full min-h-[120px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Logo */}
          <EntegLogoAnimated light className="h-10 w-auto" />

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="/impressum"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.footer.imprint}
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="/datenschutz"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </a>
          </div>
        </div>

        <p className="text-gray-600 text-xs mt-5">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

