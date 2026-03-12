"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FloatingImageProps {
  src: string;
  alt: string;
  className: string;
}

export interface FloatingHeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  badge?: React.ReactNode;
  cta?: React.ReactNode;
  scrollIndicator?: React.ReactNode;
  images: FloatingImageProps[];
  className?: string;
}

/**
 * Background swirl decorations — uses brand-blue tones.
 */
const Swirls = () => (
  <>
    <svg
      className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-brand-blue/10"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M480 160C360 40 100 130 30 280C-40 430 100 570 100 570"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
    <svg
      className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-brand-blue/10"
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 500C220 660 490 610 600 430C710 250 550 10 550 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  </>
);

/**
 * Reusable floating-items hero section.
 * Designed for Enteg's dark industrial aesthetic.
 */
export function FloatingHero({
  title,
  description,
  badge,
  cta,
  scrollIndicator,
  images,
  className,
}: FloatingHeroProps) {
  return (
    <section
      id="home"
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark py-20 md:py-32",
        className
      )}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Swirl decorations */}
      <div className="absolute inset-0 z-0">
        <Swirls />
      </div>

      {/* Radial glow — center */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-3xl" />
      </div>

      {/* Floating electronics images */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={cn(
              "absolute object-contain",
              "animate-float",
              image.className
            )}
            style={{
              animationDelay: `${index * 400}ms`,
              filter: "drop-shadow(0 8px 24px rgba(74,143,224,0.25))",
            }}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-3xl">
        {badge && <div className="mb-8">{badge}</div>}

        <div className="text-white">{title}</div>

        <div className="mt-6">{description}</div>

        {cta && <div className="mt-10">{cta}</div>}
      </div>

      {/* Scroll indicator */}
      {scrollIndicator && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          {scrollIndicator}
        </div>
      )}
    </section>
  );
}
