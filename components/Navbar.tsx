"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n-context";
import type { Locale } from "@/lib/translations";
import { EntegLogoAnimated } from "@/components/ui/enteg-logo-animated";

export default function Navbar() {
  const { t, locale, toggleLocale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: t.nav.home, href: "#home", id: "home" },
    { label: t.nav.services, href: "#services", id: "services" },
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.certifications, href: "#certifications", id: "certifications" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      const sections = navLinks
        .map((l) => document.getElementById(l.id))
        .filter(Boolean) as HTMLElement[];
      const offset = 100;
      let current = "home";
      for (const section of sections) {
        if (y + offset >= section.offsetTop) current = section.id;
      }
      setActiveSection(current);
    };

    // Run immediately so navbar reflects restored scroll position on refresh
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // On dark hero (not scrolled) → transparent with white text
  const onHero = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.07)] py-2"
          : "bg-transparent py-3"
      }`}
      style={{ paddingTop: `calc(env(safe-area-inset-top) + ${scrolled ? "0.5rem" : "0.75rem"})` }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <EntegLogoAnimated
              className="h-12 w-auto"
              noAnimation
              light={onHero}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-brand-blue"
                        : onHero
                        ? "text-white/75 hover:text-white"
                        : "text-brand-gray hover:text-brand-blue"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: "#4A8FE0",
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LangSwitcher locale={locale} onToggle={toggleLocale} onHero={onHero} />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
                onHero
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-brand-gray hover:text-brand-blue hover:bg-bg-section"
              }`}
              aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-2 mb-2 rounded-2xl border border-gray-100 shadow-xl overflow-hidden bg-white/98 backdrop-blur-xl"
            >
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18, delay: i * 0.04 }}
                    className={`flex items-center px-5 py-4 text-sm font-medium transition-colors border-b border-gray-50 last:border-0 min-h-[52px] ${
                      isActive
                        ? "text-brand-blue bg-blue-50"
                        : "text-brand-gray-dark hover:text-brand-blue hover:bg-bg-section"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1 h-4 rounded-full bg-brand-blue mr-3 flex-shrink-0" />
                    )}
                    {link.label}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function LangSwitcher({
  locale,
  onToggle,
  onHero,
}: {
  locale: Locale;
  onToggle: () => void;
  onHero: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-lg p-0.5 gap-0.5 transition-colors duration-300 ${
        onHero ? "bg-white/10" : "bg-bg-section"
      }`}
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
        transition-all duration-200
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
