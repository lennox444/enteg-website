"use client";

import React, { useState } from "react";

export interface AccordionImageItem {
  id: number;
  title: string;
  label: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionImageItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter, onClick }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0
        transition-all duration-700 ease-in-out
        h-[320px] sm:h-[400px] md:h-[480px]
        ${isActive
          ? "w-[180px] xs:w-[200px] sm:w-[260px] md:w-[340px]"
          : "w-[30px] xs:w-[32px] sm:w-[44px] md:w-[58px]"
        }
      `}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {/* Certificate image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-contain bg-white"
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          t.onerror = null;
          t.src = "https://placehold.co/340x480/eef2f7/5a5a5a?text=Zertifikat";
        }}
      />

      {/* Gradient overlay — darker when inactive so text is readable */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-bg-dark/80 via-bg-dark/20 to-transparent ${
          isActive ? "opacity-60" : "opacity-90"
        }`}
      />

      {/* Zoom hint on active */}
      {isActive && (
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-2.5 py-1 text-white text-xs font-medium">
          Klick zum Vergrößern
        </div>
      )}

      {/* Caption */}
      <span
        className={`
          absolute text-white font-semibold whitespace-nowrap transition-all duration-300 ease-in-out
          font-headline tracking-wide
          ${
            isActive
              ? "bottom-5 left-1/2 -translate-x-1/2 rotate-0 text-base uppercase"
              : "bottom-20 left-1/2 -translate-x-1/2 rotate-90 text-sm"
          }
        `}
      >
        {item.title}
      </span>

      {/* Active indicator bar */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue" />
      )}
    </div>
  );
};

interface ImageAccordionProps {
  items: AccordionImageItem[];
  defaultActive?: number;
  onItemClick?: (index: number) => void;
}

export function ImageAccordion({ items, defaultActive = 0, onItemClick }: ImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className="flex flex-row items-stretch justify-center gap-1 sm:gap-1.5 md:gap-2">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => onItemClick?.(index)}
        />
      ))}
    </div>
  );
}
