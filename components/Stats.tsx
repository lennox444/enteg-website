"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/lib/i18n-context";

const BLUE = "#4A8FE0";
const BG   = "#07101C";
const ease = [0.22, 1, 0.36, 1] as const;

/* ── Count-up hook ─────────────────────────────────────────── */
function useCountUp(target: number, inView: boolean, duration = 1600): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // For large numbers (like years), start near the target for readability
    const startFrom = target >= 1000 ? target - 12 : 0;
    let startTime: number | null = null;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.round(startFrom + easeOut(progress) * (target - startFrom));
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, inView, duration]);

  return count;
}

/* ── Single stat cell with count-up ───────────────────────── */
function StatCell({
  stat,
  index,
  inView,
}: {
  stat: { value: string; label: string; detail: string };
  index: number;
  inView: boolean;
}) {
  // Split "30+" → numeric=30, suffix="+"
  const numericPart = parseInt(stat.value) || 0;
  const suffix = stat.value.replace(/[0-9]/g, "");
  const counted = useCountUp(numericPart, inView, 1400 + index * 150);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.11, ease }}
      className="group relative px-6 sm:px-8 py-10 lg:py-12 cursor-default overflow-hidden"
      style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Hover wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, rgba(74,143,224,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Value with count-up */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.12 + index * 0.11, ease }}
        className="font-headline font-black leading-none mb-2 transition-colors duration-300 group-hover:text-[#4A8FE0] tabular-nums"
        style={{
          fontSize: "clamp(2.8rem, 5vw, 5rem)",
          color: "rgba(255,255,255,0.92)",
        }}
      >
        {counted}
        {suffix}
      </motion.div>

      {/* Label */}
      <div
        className="text-xs font-bold uppercase tracking-widest mb-1"
        style={{ color: BLUE }}
      >
        {stat.label}
      </div>

      {/* Detail */}
      <div
        className="text-xs leading-snug hidden sm:block"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        {stat.detail}
      </div>

      {/* Bottom accent on hover */}
      <div
        className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${BLUE}55, transparent)`,
        }}
      />
    </motion.div>
  );
}

/* ── Main section ──────────────────────────────────────────── */
export default function Stats() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const stats = [t.stats.years, t.stats.certs, t.stats.location, t.stats.founded];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 15px, rgba(74,143,224,0.09) 15px, rgba(74,143,224,0.09) 17px)`,
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(74,143,224,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.05)" }}
        >
          {stats.map((stat, i) => (
            <StatCell key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
