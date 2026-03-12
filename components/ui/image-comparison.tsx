"use client";

import { useState } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

interface ImageComparisonProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialInset?: number;
}

export function ImageComparison({
  beforeSrc,
  afterSrc,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
  initialInset = 78,
}: ImageComparisonProps) {
  const [inset, setInset] = useState<number>(initialInset);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let x = 0;
    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = (e as React.MouseEvent).clientX - rect.left;
    }
    setInset(Math.max(4, Math.min(96, (x / rect.width) * 100)));
  };

  return (
    <div className="flex flex-col gap-3 select-none w-full">
      {/* Slider container */}
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-white/10 cursor-ew-resize"
        style={{ aspectRatio: "4/3" }}
        onMouseMove={handleMove}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchMove={handleMove}
        onTouchEnd={() => setDragging(false)}
      >
        {/* Corner labels */}
        <div className="absolute top-3 left-3 z-30 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white/75 text-[10px] font-semibold tracking-widest uppercase pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute top-3 right-3 z-30 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white/75 text-[10px] font-semibold tracking-widest uppercase pointer-events-none">
          {afterLabel}
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-px bg-white/70"
          style={{
            left: `${inset}%`,
            boxShadow: "0 0 10px rgba(74,143,224,0.5), 0 0 2px rgba(255,255,255,0.8)",
          }}
        >
          <button
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-150"
            style={{ boxShadow: "0 0 0 3px rgba(74,143,224,0.25), 0 4px 16px rgba(0,0,0,0.4)" }}
            onMouseDown={(e) => { e.preventDefault(); setDragging(true); }}
            onTouchStart={() => setDragging(true)}
            onTouchEnd={() => setDragging(false)}
          >
            <GripVertical className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Before – assembled (base layer, always visible) */}
        <Image
          src={beforeSrc}
          alt={beforeLabel}
          fill
          className="object-cover"
          priority
          unoptimized
        />

        {/* After – disassembled (top layer, clipped to reveal from right) */}
        <Image
          src={afterSrc}
          alt={afterLabel}
          fill
          className="object-cover"
          style={{ clipPath: `inset(0 0 0 ${inset}%)` }}
          priority
          unoptimized
        />
      </div>

      {/* Caption row */}
      <div className="flex items-center justify-between text-[10px] text-white/25 tracking-wide px-1">
        <span>← {beforeLabel}</span>
        <span className="text-white/20">Regler zum Vergleichen ziehen</span>
        <span>{afterLabel} →</span>
      </div>
    </div>
  );
}
