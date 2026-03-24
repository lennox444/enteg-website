"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Building2,
  ArrowRight,
  ArrowDown,
  LucideIcon,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { EASE as ease } from "@/lib/utils";

/* ─── Constants ──────────────────────────────────────────── */
const CARD_ICONS: LucideIcon[] = [Award, ShieldCheck, Building2];
const BLUE = "#4A8FE0";
const BG   = "#07101C";

const STEP_IMGS = [
  "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=700&q=82",                                      // Festplatte – HDD ✓
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=82",                                         // Demontage – Schrottteile ✓
  "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=700",           // Trennung – Elektroschrott
  "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=700",           // Rohstoffe – Kupferkabel
];


/* ─── ProcessCard ────────────────────────────────────────── */
function ProcessCard({
  step,
  delay,
  inView,
}: {
  step: { n: string; title: string; sub: string; img: string };
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease }}
      whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
      className="relative rounded-xl overflow-hidden group cursor-default"
      style={{ aspectRatio: "4/3" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
        style={{ backgroundImage: `url('${step.img}')` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, rgba(7,16,28,0.1) 0%, rgba(7,16,28,0.52) 50%, rgba(7,16,28,0.96) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "rgba(74,143,224,0.06)" }}
      />

      {/* Badge */}
      <div
        className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest"
        style={{
          background: "rgba(7,16,28,0.55)",
          border: "1px solid rgba(74,143,224,0.5)",
          backdropFilter: "blur(10px)",
          color: BLUE,
        }}
      >
        {step.n}
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="font-headline text-lg font-bold text-white uppercase leading-tight tracking-wide">
          {step.title}
        </p>
        <p className="text-[9px] uppercase tracking-[0.18em] mt-0.5" style={{ color: "rgba(255,255,255,0.42)" }}>
          {step.sub}
        </p>
      </div>

      {/* Bottom glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${BLUE}77, transparent)` }}
      />
    </motion.div>
  );
}

/* ─── Main section ───────────────────────────────────────── */
export default function WhyEnteg() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="why"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: BG }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 15px, rgba(74,143,224,0.09) 15px, rgba(74,143,224,0.09) 17px)`,
        }}
      />
      {/* Radial glow – right */}
      <div
        className="absolute -top-40 right-0 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,143,224,0.08) 0%, transparent 62%)" }}
      />
      {/* Radial glow – left */}
      <div
        className="absolute bottom-0 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 62%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3" style={{ color: BLUE }}>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.28 }}
                className="block w-5 h-px origin-left"
                style={{ background: BLUE }}
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.26em]">
                {t.why.badgeLabel}
              </span>
            </div>
            <h2
              className="font-headline font-black text-white uppercase leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
            >
              {t.why.titleWord}{" "}
              <span style={{ color: BLUE }}>Enteg</span>
              <span style={{ color: "rgba(255,255,255,0.18)" }}>?</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="text-xs max-w-[200px] sm:text-right leading-relaxed hidden sm:block"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            {t.why.subtitle}
          </motion.p>
        </motion.div>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">

          {/* ═══ LEFT: Feature Cards ═══ */}
          <div className="flex flex-col gap-2.5">
            {t.why.items.map((item, i) => {
              const Icon = CARD_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -32 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease }}
                  whileHover={{ y: -3, transition: { duration: 0.18 } }}
                  className="group relative rounded-xl p-4 sm:p-5 cursor-default overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.026)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 2px 18px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Hover gradient wash */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                    style={{ background: "linear-gradient(105deg, rgba(74,143,224,0.08) 0%, transparent 55%)" }}
                  />
                  {/* Hover border */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                    style={{ border: "1px solid rgba(74,143,224,0.3)", boxShadow: "0 0 24px rgba(74,143,224,0.06)" }}
                  />
                  {/* Ghost number */}
                  <span
                    className="absolute -bottom-2 right-3 font-headline font-black select-none pointer-events-none leading-none"
                    style={{ fontSize: "5.5rem", color: "rgba(74,143,224,0.052)", lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start gap-3.5">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(74,143,224,0.1)",
                        border: "1px solid rgba(74,143,224,0.22)",
                        boxShadow: "0 0 14px rgba(74,143,224,0.12)",
                      }}
                    >
                      <Icon size={17} color={BLUE} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-white uppercase tracking-wide leading-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.36)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom line */}
                  <div
                    className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, transparent, ${BLUE}50, transparent)` }}
                  />
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.45 }}
              className="flex items-center justify-between pt-1.5 px-1"
            >
              <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.13)" }}>
                {t.why.location}
              </span>
              <motion.a
                href="#contact"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center gap-1.5 font-semibold text-sm"
                style={{ color: BLUE }}
              >
                {t.why.cta}
                <ArrowRight size={13} />
              </motion.a>
            </motion.div>
          </div>

          {/* ═══ RIGHT: Process 2×2 ═══ */}
          <div className="flex flex-col gap-3">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-6 h-px flex-shrink-0" style={{ background: `linear-gradient(to right, transparent, ${BLUE})` }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(74,143,224,0.6)" }}>
                {t.why.processLabel}
              </span>
            </motion.div>

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-2.5">
              {t.why.steps.slice(0, 2).map((step, i) => (
                <ProcessCard key={i} step={{ n: `0${i + 1}`, ...step, img: STEP_IMGS[i] }} delay={0.18 + i * 0.09} inView={inView} />
              ))}
            </div>

            {/* Connector */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={inView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="flex justify-center origin-top"
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, ${BLUE}50, ${BLUE}aa)` }} />
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(74,143,224,0.09)", border: `1px solid rgba(74,143,224,0.32)` }}
                >
                  <ArrowDown size={12} color={`${BLUE}bb`} />
                </div>
                <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, ${BLUE}aa, ${BLUE}40)` }} />
              </div>
            </motion.div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-2.5">
              {t.why.steps.slice(2, 4).map((step, i) => (
                <ProcessCard key={i + 2} step={{ n: `0${i + 3}`, ...step, img: STEP_IMGS[i + 2] }} delay={0.38 + i * 0.09} inView={inView} />
              ))}
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.58 }}
              className="grid grid-cols-3 gap-2 mt-0.5"
            >
              {t.why.statsStrip.map((s) => (
                <div
                  key={s.lbl}
                  className="text-center py-2.5 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="font-headline text-xs font-bold uppercase tracking-wide leading-none mb-1" style={{ color: BLUE }}>
                    {s.val}
                  </div>
                  <div className="text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>
                    {s.lbl}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
