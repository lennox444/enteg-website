"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Truck, Wrench, ShieldX, Recycle, type LucideIcon } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { EASE } from "@/lib/utils";

const STEP_IMAGES = [
  "/step-abholung.jpg",
  "/step-demontage.jpg",
  "/step-datenvernichtung.jpg",
  "/step-rohstoff.png",
];

const STEP_ICONS: LucideIcon[] = [Truck, Wrench, ShieldX, Recycle];
const BLUE = "#4A8FE0";
const BG   = "#07101C";

export default function WhyEnteg() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why" ref={ref} className="relative overflow-hidden" style={{ background: BG }}>

      {/* ── Grid texture ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 15px, rgba(74,143,224,0.09) 15px, rgba(74,143,224,0.09) 17px)`,
        }}
      />
      {/* Radial glow — top center */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[640px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(74,143,224,0.08) 0%, transparent 64%)" }}
      />
      {/* Radial glow — bottom right accent */}
      <div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 62%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

        {/* ════════════════════════════════════════════════════════════
            HEADER
        ════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-16 lg:mb-20"
        >
          {/* Badge row */}
          <div className="inline-flex items-center gap-2.5 mb-5" style={{ color: BLUE }}>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
              className="block w-6 h-px origin-left"
              style={{ background: BLUE }}
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.26em]">
              {t.why.badgeLabel}
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-headline font-black text-white uppercase leading-[0.88] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)" }}
          >
            {t.why.processTitle}
          </h2>

          {/* Subline */}
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {t.why.processSub}
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════
            PROCESS FLOW
        ════════════════════════════════════════════════════════════ */}
        <div className="relative">

          {/* Connecting line — desktop only, runs through icon-node centers */}
          <div
            className="hidden lg:block absolute z-0 pointer-events-none"
            style={{ top: "208px", left: "12.5%", right: "12.5%" }}
          >
            {/* Dim base track */}
            <div
              className="h-px w-full"
              style={{ background: "rgba(74,143,224,0.13)" }}
            />
            {/* Animated glowing charge line */}
            <motion.div
              className="absolute inset-0 h-px origin-left"
              style={{
                background: `linear-gradient(90deg, ${BLUE}10, ${BLUE}80 35%, ${BLUE} 50%, ${BLUE}80 65%, ${BLUE}10)`,
                boxShadow: `0 0 8px 1px ${BLUE}45`,
              }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.65, ease: EASE }}
            />
          </div>

          {/* Step cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {t.why.processSteps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.11, ease: EASE }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 0 0 1px rgba(74,143,224,0.45), 0 24px 56px rgba(74,143,224,0.18)`,
                    transition: { duration: 0.22 },
                  }}
                  className="group relative rounded-2xl cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.026)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* ── Stock image ── */}
                  <div className="relative w-full h-52 rounded-t-2xl overflow-hidden">
                    <Image
                      src={STEP_IMAGES[i]}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient: keep top light, fade dark towards bottom for icon area */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, rgba(7,16,28,0.08) 0%, rgba(7,16,28,0.5) 70%, rgba(7,16,28,0.82) 100%)" }}
                    />
                    {/* Blue tint on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(160deg, rgba(74,143,224,0.15) 0%, transparent 60%)" }}
                    />
                    {/* Step number — top-left chip */}
                    <span
                      className="absolute top-3.5 left-4 font-mono text-[9px] font-bold tracking-[0.22em] z-10"
                      style={{ color: `${BLUE}cc` }}
                    >
                      {step.n}
                    </span>
                  </div>

                  {/* ── Icon node — straddling image/body boundary ── */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 z-20
                               w-13 h-13 rounded-full flex items-center justify-center
                               transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(74,143,224,0.45)]"
                    style={{
                      top: "calc(13rem - 1.625rem)", /* 13rem = h-52; 1.625rem = half of w-13 */
                      width: "3.25rem",
                      height: "3.25rem",
                      background: "rgba(7,16,28,1)",
                      border: `1.5px solid rgba(74,143,224,0.45)`,
                      boxShadow: "0 0 0 4px rgba(7,16,28,0.9), 0 0 20px rgba(74,143,224,0.15)",
                    }}
                  >
                    <Icon size={19} color={BLUE} strokeWidth={1.5} />
                  </div>

                  {/* ── Card body ── */}
                  <div className="flex flex-col items-center text-center px-5 pt-10 pb-7">
                    {/* Title */}
                    <h3
                      className="font-headline text-sm font-bold text-white uppercase tracking-widest leading-tight mb-3"
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-xs leading-relaxed mb-5"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {step.desc}
                    </p>

                    {/* Standard tag */}
                    <span
                      className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mt-auto"
                      style={{
                        background: "rgba(74,143,224,0.1)",
                        border: "1px solid rgba(74,143,224,0.25)",
                        color: `${BLUE}cc`,
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  {/* ── Hover: bottom glow line ── */}
                  <div
                    className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, transparent, ${BLUE}70, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
