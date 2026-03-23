"use client";

import { useTranslation } from "@/lib/i18n-context";
import { EntegLogoAnimated } from "@/components/ui/enteg-logo-animated";

const BLUE = "#4A8FE0";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#07101C", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 15px, rgba(74,143,224,0.07) 15px, rgba(74,143,224,0.07) 17px)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${BLUE}40 40%, ${BLUE}40 60%, transparent)` }}
      />

      <div
        className="relative flex flex-col items-center gap-4 px-4 py-8"
        style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
      >
        {/* Logo + links in one row, vertically centered */}
        <div className="flex items-center gap-8">
          <EntegLogoAnimated light className="h-10 w-auto" />

          <div className="flex items-center gap-5 text-sm">
            <a href="/impressum" className="text-gray-400 hover:text-white transition-colors">
              {t.footer.imprint}
            </a>
            <span className="text-gray-700">·</span>
            <a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
          </div>
        </div>

        <p className="text-gray-600 text-xs">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
