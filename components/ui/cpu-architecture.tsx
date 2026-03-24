import { cn } from "@/lib/utils";
import React from "react";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
  preserveAspectRatio?: string;
}

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  animateLines = true,
  animateMarkers = true,
  lineMarkerSize = 18,
  preserveAspectRatio = "xMidYMid meet",
}: CpuArchitectureSvgProps) => {
  return (
    <svg
      className={cn(className)}
      width={width}
      height={height}
      viewBox="0 0 200 100"
      preserveAspectRatio={preserveAspectRatio}
    >
      <defs>
        {/* ── Glow filters ── */}
        <filter id="el-glow-strong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="el-glow-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="el-node-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* ── Blue gradient pulses ── */}
        <radialGradient id="el-grad-1" fx="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="el-grad-2" fx="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="45%" stopColor="#4A8FE0" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="el-grad-3" fx="1">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="40%" stopColor="#477DCF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="el-grad-4" fx="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="el-grad-5" fx="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="el-grad-6" fx="1">
          <stop offset="0%" stopColor="#e0eaf8" />
          <stop offset="45%" stopColor="#477DCF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="el-grad-7" fx="1">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="40%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="el-grad-8" fx="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="45%" stopColor="#4A8FE0" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        {/* ── Masks (same paths as traces) ── */}
        <mask id="el-mask-1">
          <path d="M 5 12 h 79 q 5 0 5 5 v 28 q 0 5 5 5 h 6" strokeWidth="1" stroke="white" fill="none" />
        </mask>
        <mask id="el-mask-2">
          <path d="M 100 5 v 45" strokeWidth="1" stroke="white" fill="none" />
        </mask>
        <mask id="el-mask-3">
          <path d="M 195 12 h -79 q -5 0 -5 5 v 28 q 0 5 -5 5 h -6" strokeWidth="1" stroke="white" fill="none" />
        </mask>
        <mask id="el-mask-4">
          <path d="M 195 50 h -95" strokeWidth="1" stroke="white" fill="none" />
        </mask>
        <mask id="el-mask-5">
          <path d="M 195 88 h -79 q -5 0 -5 -5 v -28 q 0 -5 -5 -5 h -6" strokeWidth="1" stroke="white" fill="none" />
        </mask>
        <mask id="el-mask-6">
          <path d="M 100 95 v -45" strokeWidth="1" stroke="white" fill="none" />
        </mask>
        <mask id="el-mask-7">
          <path d="M 5 88 h 79 q 5 0 5 -5 v -28 q 0 -5 5 -5 h 6" strokeWidth="1" stroke="white" fill="none" />
        </mask>
        <mask id="el-mask-8">
          <path d="M 5 50 h 95" strokeWidth="1" stroke="white" fill="none" />
        </mask>

        <marker id="el-dot-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth={lineMarkerSize} markerHeight={lineMarkerSize}>
          <circle cx="5" cy="5" r="2" fill="#1e3a6a" stroke="#477DCF" strokeWidth="0.8">
            {animateMarkers && <animate attributeName="r" values="0; 2.5; 2" dur="0.5s" />}
          </circle>
        </marker>

        <linearGradient id="el-ambient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#07101C" />
        </linearGradient>
      </defs>

      {/* ── Background ── */}
      <rect width="200" height="100" fill="url(#el-ambient)" />

      {/* ── Ambient center glow ── */}
      <circle cx="100" cy="50" r="45" fill="rgba(71,125,207,0.06)" />
      <circle cx="100" cy="50" r="25" fill="rgba(71,125,207,0.05)" />

      {/* ── Traces ── */}
      <g
        stroke="rgba(71,125,207,0.25)"
        fill="none"
        strokeWidth="0.35"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#el-dot-marker)"
      >
        <path d="M 5 12 h 79 q 5 0 5 5 v 28 q 0 5 5 5 h 6" />
        <path d="M 100 5 v 45" />
        <path d="M 195 12 h -79 q -5 0 -5 5 v 28 q 0 5 -5 5 h -6" />
        <path d="M 195 50 h -95" />
        <path d="M 195 88 h -79 q -5 0 -5 -5 v -28 q 0 -5 -5 -5 h -6" />
        <path d="M 100 95 v -45" />
        <path d="M 5 88 h 79 q 5 0 5 -5 v -28 q 0 -5 5 -5 h 6" />
        <path d="M 5 50 h 95" />
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100" to="0" dur="1.2s" fill="freeze"
            calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1"
          />
        )}
      </g>

      {/* ── Secondary faint traces (branch lines for depth) ── */}
      <g stroke="rgba(71,125,207,0.1)" fill="none" strokeWidth="0.2">
        <path d="M 40 12 v 10 h 20 v -10" />
        <path d="M 155 12 v 10 h -20 v -10" />
        <path d="M 40 88 v -10 h 20 v 10" />
        <path d="M 155 88 v -10 h -20 v 10" />
        <path d="M 5 30 h 20 v 8 h -20" />
        <path d="M 195 30 h -20 v 8 h 20" />
        <path d="M 5 65 h 20 v 8 h -20" />
        <path d="M 195 65 h -20 v 8 h 20" />
      </g>

      {/* ── Pulse circles travelling the traces ── */}
      <g mask="url(#el-mask-1)" filter="url(#el-glow-soft)">
        <circle className="cpu-architecture cpu-line-1" cx="0" cy="0" r="6" fill="url(#el-grad-1)" />
      </g>
      <g mask="url(#el-mask-2)" filter="url(#el-glow-soft)">
        <circle className="cpu-architecture cpu-line-2" cx="0" cy="0" r="6" fill="url(#el-grad-2)" />
      </g>
      <g mask="url(#el-mask-3)" filter="url(#el-glow-soft)">
        <circle className="cpu-architecture cpu-line-3" cx="0" cy="0" r="6" fill="url(#el-grad-3)" />
      </g>
      <g mask="url(#el-mask-4)" filter="url(#el-glow-soft)">
        <circle className="cpu-architecture cpu-line-4" cx="0" cy="0" r="6" fill="url(#el-grad-4)" />
      </g>
      <g mask="url(#el-mask-5)" filter="url(#el-glow-soft)">
        <circle className="cpu-architecture cpu-line-5" cx="0" cy="0" r="6" fill="url(#el-grad-5)" />
      </g>
      <g mask="url(#el-mask-6)" filter="url(#el-glow-soft)">
        <circle className="cpu-architecture cpu-line-6" cx="0" cy="0" r="6" fill="url(#el-grad-6)" />
      </g>
      <g mask="url(#el-mask-7)" filter="url(#el-glow-soft)">
        <circle className="cpu-architecture cpu-line-7" cx="0" cy="0" r="6" fill="url(#el-grad-7)" />
      </g>
      <g mask="url(#el-mask-8)" filter="url(#el-glow-soft)">
        <circle className="cpu-architecture cpu-line-8" cx="0" cy="0" r="6" fill="url(#el-grad-8)" />
      </g>

      {/* ── Lightning bolts near center ── */}
      {/* Bolt A */}
      <path
        d="M 97 44 L 94 50.5 L 98 50.5 L 95 57"
        fill="none" stroke="#93c5fd" strokeWidth="0.7"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#el-glow-strong)"
      >
        <animate attributeName="opacity"
          values="0;0;0;1;0.9;0.5;0;0;0;0;0;0"
          dur="7s" repeatCount="indefinite" begin="1.5s" />
      </path>
      {/* Bolt A secondary */}
      <path
        d="M 96.5 45 L 94.5 50 L 98 50 L 96 56"
        fill="none" stroke="#dbeafe" strokeWidth="0.4"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <animate attributeName="opacity"
          values="0;0;0;0.7;0;0;0;0;0;0;0;0"
          dur="7s" repeatCount="indefinite" begin="1.6s" />
      </path>

      {/* Bolt B — offset timing */}
      <path
        d="M 103 44 L 100 51 L 104 51 L 101 57"
        fill="none" stroke="#60a5fa" strokeWidth="0.65"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#el-glow-strong)"
      >
        <animate attributeName="opacity"
          values="0;0;0;0;0;0;1;0.8;0.3;0;0;0"
          dur="9s" repeatCount="indefinite" begin="3s" />
      </path>

      {/* Bolt C — top area */}
      <path
        d="M 99 20 L 97 25 L 100.5 25 L 98.5 30"
        fill="none" stroke="#93c5fd" strokeWidth="0.5"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#el-glow-soft)"
      >
        <animate attributeName="opacity"
          values="0;0;0;0;1;0.6;0;0;0;0;0;0"
          dur="11s" repeatCount="indefinite" begin="2s" />
      </path>

      {/* Bolt D — bottom area */}
      <path
        d="M 101 70 L 99 75 L 102 75 L 100 80"
        fill="none" stroke="#477DCF" strokeWidth="0.5"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#el-glow-soft)"
      >
        <animate attributeName="opacity"
          values="0;0;0;0;0;0;0;1;0.5;0;0;0"
          dur="13s" repeatCount="indefinite" begin="0.5s" />
      </path>

      {/* ── Central node ── */}
      {/* Outer glow ring */}
      <circle cx="100" cy="50" r="5" fill="rgba(71,125,207,0.15)" filter="url(#el-node-glow)">
        <animate attributeName="r" values="4;6.5;4" dur="4.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" keyTimes="0;0.5;1" />
        <animate attributeName="opacity" values="0.12;0.28;0.12" dur="4.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" keyTimes="0;0.5;1" />
      </circle>
      {/* Mid ring */}
      <circle cx="100" cy="50" r="3" fill="#0d1f3c" stroke="#477DCF" strokeWidth="0.5" filter="url(#el-glow-soft)">
        <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="4.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" keyTimes="0;0.5;1" />
      </circle>
      {/* Inner dot */}
      <circle cx="100" cy="50" r="1.4" fill="#93c5fd" filter="url(#el-glow-strong)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" keyTimes="0;0.5;1" />
      </circle>

      {/* ── Corner junction dots ── */}
      {[
        [89,17],[100,5],[111,17],
        [195,50],[111,83],[100,95],
        [89,83],[5,50]
      ].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.2"
          fill="#0d1f3c" stroke="rgba(71,125,207,0.5)" strokeWidth="0.4"
          filter="url(#el-glow-soft)"
        />
      ))}
    </svg>
  );
};

export { CpuArchitecture };
