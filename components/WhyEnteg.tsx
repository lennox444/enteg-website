"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
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

// Fixed particle data (no Math.random — avoids hydration mismatch)
const PARTICLES = [
  { left: "3%",  size: 2,   delay: 0,   dur: 9,  repeatDelay: 1.8 },
  { left: "10%", size: 2.5, delay: 1.4, dur: 11, repeatDelay: 2.2 },
  { left: "18%", size: 1.5, delay: 3.1, dur: 8,  repeatDelay: 1.6 },
  { left: "25%", size: 3,   delay: 0.5, dur: 12, repeatDelay: 2.5 },
  { left: "33%", size: 1.5, delay: 2.2, dur: 9,  repeatDelay: 1.9 },
  { left: "41%", size: 2.5, delay: 0.9, dur: 10, repeatDelay: 2.1 },
  { left: "49%", size: 2,   delay: 3.8, dur: 8,  repeatDelay: 1.7 },
  { left: "57%", size: 3,   delay: 1.1, dur: 11, repeatDelay: 2.3 },
  { left: "65%", size: 1.5, delay: 2.7, dur: 9,  repeatDelay: 1.5 },
  { left: "73%", size: 2.5, delay: 0.3, dur: 12, repeatDelay: 2.0 },
  { left: "81%", size: 2,   delay: 1.9, dur: 10, repeatDelay: 1.8 },
  { left: "88%", size: 3,   delay: 3.3, dur: 9,  repeatDelay: 2.4 },
  { left: "95%", size: 1.5, delay: 0.7, dur: 11, repeatDelay: 1.6 },
];

export default function WhyEnteg() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // ── Cursor-tracking for the connector line ──────────────────────────
  const rawX    = useMotionValue(-0.5);           // normalised 0-1, -0.5 = offscreen
  const smoothX = useSpring(rawX, { stiffness: 180, damping: 28, restDelta: 0.0001 });
  const hoverOp = useMotionValue(0);
  const smoothOp = useSpring(hoverOp, { stiffness: 200, damping: 30 });

  const lineHighlight = useTransform(
    smoothX,
    (x) =>
      `radial-gradient(ellipse 220px 100% at ${x * 100}% 50%, ${BLUE} 0%, ${BLUE}bb 16%, ${BLUE}44 42%, transparent 66%)`,
  );

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!lineRef.current) return;
    const rect = lineRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width);
  }
  function handleMouseEnter() { hoverOp.set(1); }
  function handleMouseLeave() { hoverOp.set(0); }

  return (
    <section
      id="why"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: BG }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 15px, rgba(74,143,224,0.09) 15px, rgba(74,143,224,0.09) 17px)`,
        }}
      />

      {/* ── Floating ambient particles ── */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            bottom: "0",
            width: p.size,
            height: p.size,
            background: `${BLUE}99`,
            boxShadow: `0 0 ${p.size * 4}px ${p.size + 1}px ${BLUE}55`,
          }}
          animate={{
            y: [0, -260],
            opacity: [0, 0.85, 0.55, 0],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: p.repeatDelay,
            ease: "linear",
          }}
        />
      ))}


      {/* ── Radial glow top center ── */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[640px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(74,143,224,0.08) 0%, transparent 64%)" }}
      />
      {/* ── Radial glow bottom right ── */}
      <div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 62%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24">

        {/* ════════════════════════════════════════════════════════════
            HEADER
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-8 lg:mb-10">

          {/* Badge row */}
          <div className="inline-flex items-center gap-2.5 mb-6" style={{ color: BLUE }}>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
              className="block w-6 h-px origin-left flex-shrink-0"
              style={{ background: BLUE }}
            />
            <motion.span
              className="text-[10px] font-bold uppercase tracking-[0.26em]"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.38, delay: 0.2, ease: EASE }}
            >
              {t.why.badgeLabel}
            </motion.span>
          </div>

          {/* Headline — each word clips upward */}
          <h2
            className="font-headline font-black text-white uppercase leading-[0.88] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)" }}
            aria-label={t.why.processTitle}
          >
            {t.why.processTitle.split(" ").map((word, wi) => (
              <span
                key={wi}
                className="inline-block overflow-hidden leading-[0.95]"
                style={{ marginRight: "0.3em" }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.16 + wi * 0.1, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Subline — each word fades in with stagger */}
          <p className="text-sm leading-relaxed max-w-xs" aria-label={t.why.processSub}>
            {t.why.processSub.split(" ").map((chunk, ci) => (
              <motion.span
                key={ci}
                className="inline-block mr-1.5"
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.38, delay: 0.65 + ci * 0.13, ease: EASE }}
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                {chunk}
              </motion.span>
            ))}
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════
            PROCESS FLOW
        ════════════════════════════════════════════════════════════ */}
        <div className="relative">

          {/* Connecting line — desktop only */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute z-0 pointer-events-none"
            style={{ top: "256px", left: "12.5%", right: "12.5%", height: "3px" }}
          >
            {/* Base dim track */}
            <div
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
              style={{ background: "rgba(74,143,224,0.13)" }}
            />
            {/* ── Cursor-following highlight ── */}
            <motion.div
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 rounded-full"
              style={{
                height: "5px",
                marginTop: "-2px",
                backgroundImage: lineHighlight,
                opacity: smoothOp,
                filter: `blur(1px) drop-shadow(0 0 6px ${BLUE}99)`,
              }}
            />
          </div>

          {/* Step cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {t.why.processSteps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              const cardDelay = 0.1 + i * 0.14;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 44 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 24, delay: cardDelay }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 0 0 1px rgba(74,143,224,0.5), 0 28px 60px rgba(74,143,224,0.2)`,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative rounded-2xl cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.026)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* ── Image: outer Ken Burns wrapper ── */}
                  <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                    {/* Ken Burns: entry scale 1.1 → 1 */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1.1 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 2.4, delay: cardDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {/* CSS hover zoom lives here, separate from FM */}
                      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.07]">
                        <Image
                          src={STEP_IMAGES[i]}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    </motion.div>

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to bottom, rgba(7,16,28,0.06) 0%, rgba(7,16,28,0.48) 68%, rgba(7,16,28,0.88) 100%)",
                      }}
                    />
                    {/* Blue tint on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(150deg, rgba(74,143,224,0.2) 0%, transparent 65%)" }}
                    />

                    {/* Step number — CRT flicker on entry */}
                    <motion.span
                      className="absolute top-3.5 left-4 font-mono text-[9px] font-bold tracking-[0.22em] z-10"
                      style={{ color: `${BLUE}cc` }}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: [0, 1, 0.15, 1, 0.55, 1] } : {}}
                      transition={{
                        duration: 0.65,
                        delay: cardDelay + 0.35,
                        times: [0, 0.22, 0.38, 0.58, 0.78, 1],
                      }}
                    >
                      {step.n}
                    </motion.span>
                  </div>

                  {/* ── Icon node — flex wrapper for true centering (avoids CSS/FM transform conflict) ── */}
                  <div
                    className="absolute inset-x-0 z-20 flex justify-center"
                    style={{ top: "calc(16rem - 1.625rem)" }}
                  >
                    <motion.div
                      className="rounded-full flex items-center justify-center"
                      style={{
                        width: "3.25rem",
                        height: "3.25rem",
                        background: "rgba(7,16,28,1)",
                        border: `1.5px solid rgba(74,143,224,0.45)`,
                        boxShadow: "0 0 0 4px rgba(7,16,28,0.95), 0 0 20px rgba(74,143,224,0.16)",
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 440,
                        damping: 16,
                        delay: cardDelay + 0.48,
                      }}
                      whileHover={{
                        scale: 1.18,
                        boxShadow: "0 0 0 4px rgba(7,16,28,0.95), 0 0 32px rgba(74,143,224,0.55)",
                        transition: { duration: 0.18 },
                      }}
                    >
                      <Icon size={19} color={BLUE} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* ── Card body ── */}
                  <div className="flex flex-col items-center text-center px-5 pt-11 pb-7">

                    {/* Title — clips up from behind invisible wall */}
                    <div className="overflow-hidden mb-3 w-full">
                      <motion.h3
                        className="font-headline text-sm font-bold text-white uppercase tracking-widest leading-tight"
                        initial={{ y: "110%" }}
                        animate={inView ? { y: 0 } : {}}
                        transition={{ duration: 0.52, delay: cardDelay + 0.6, ease: EASE }}
                      >
                        {step.title}
                      </motion.h3>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-xs leading-relaxed mb-5"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      initial={{ opacity: 0, y: 6 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.45, delay: cardDelay + 0.72, ease: EASE }}
                    >
                      {step.desc}
                    </motion.p>

                    {/* Tag — scale pop */}
                    <motion.span
                      className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mt-auto"
                      style={{
                        background: "rgba(74,143,224,0.1)",
                        border: "1px solid rgba(74,143,224,0.25)",
                        color: `${BLUE}cc`,
                      }}
                      initial={{ scale: 0.55, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 18,
                        delay: cardDelay + 0.86,
                      }}
                    >
                      {step.tag}
                    </motion.span>
                  </div>

                  {/* Bottom glow line on hover */}
                  <div
                    className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, transparent, ${BLUE}77, transparent)` }}
                  />

                  {/* Corner glow dots on hover */}
                  <div
                    className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-tl-2xl"
                    style={{ background: `radial-gradient(circle at top left, ${BLUE}20, transparent 70%)` }}
                  />
                  <div
                    className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-tr-2xl"
                    style={{ background: `radial-gradient(circle at top right, ${BLUE}14, transparent 70%)` }}
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
