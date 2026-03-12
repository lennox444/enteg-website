"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import type { Locale } from "@/lib/translations";
import { EntegLogoAnimated } from "@/components/ui/enteg-logo-animated";

export default function Navbar() {
  const { t, locale, toggleLocale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.certifications, href: "#certifications" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled
          ? "shadow-[0_1px_12px_rgba(0,0,0,0.08)] py-2"
          : "border-b border-gray-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <EntegLogoAnimated className="h-12 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: Language switcher + mobile trigger */}
          <div className="flex items-center gap-3">
            <LangSwitcher locale={locale} onToggle={toggleLocale} />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-gray hover:text-brand-blue hover:bg-bg-section transition-colors"
              aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 mb-2 rounded-xl border border-gray-100 shadow-lg overflow-hidden bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-5 py-3.5 text-sm font-medium text-brand-gray-dark hover:text-brand-blue hover:bg-bg-section transition-colors border-b border-gray-50 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function LangSwitcher({
  locale,
  onToggle,
}: {
  locale: Locale;
  onToggle: () => void;
}) {
  return (
    <div
      className="inline-flex items-center bg-bg-section rounded-lg p-0.5 gap-0.5"
      role="group"
      aria-label="Sprache / Language"
    >
      <FlagBtn
        src="https://flagcdn.com/w40/de.png"
        label="Deutsch"
        active={locale === "de"}
        onClick={locale !== "de" ? onToggle : undefined}
      />
      <FlagBtn
        src="https://flagcdn.com/w40/gb.png"
        label="English"
        active={locale === "en"}
        onClick={locale !== "en" ? onToggle : undefined}
      />
    </div>
  );
}

function FlagBtn({
  src,
  label,
  active,
  onClick,
}: {
  src: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={active}
      aria-pressed={active}
      aria-label={label}
      className={`
        flex items-center justify-center rounded-md w-[44px] h-[36px]
        transition-all duration-150
        ${active
          ? "bg-white shadow-sm cursor-default"
          : "opacity-40 hover:opacity-70 cursor-pointer hover:bg-white/50"
        }
      `}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        width={24}
        height={16}
        className="rounded-[3px] object-cover"
        style={{ width: 24, height: 16 }}
      />
    </button>
  );
}
