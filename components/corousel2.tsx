"use client";

import { useRef, ReactNode } from "react";
import categories from "./data/carousel.json";

// Visual content per tile, keyed by id (can't live in JSON since it's JSX).
function renderContent(id: string): ReactNode {
  switch (id) {
    case "verified-best-prices":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-dashed border-[#E4007C] text-center text-[8px] font-extrabold uppercase leading-tight text-[#E4007C]">
            Verified
            <span className="my-0.5 text-[10px]">Best Prices</span>
            Verified
          </div>
        </div>
      );
    case "bulk-price-drops":
      return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-0.5 text-center">
          <span className="text-lg font-black italic text-white">BULK</span>
          <span className="rounded bg-[#E4007C] px-1 text-[9px] font-bold text-white">
            PRICE DROPS
          </span>
        </div>
      );
    case "konganow":
      return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-center">
          <span className="text-[10px] font-bold text-white">
            <span className="text-[#E4007C]">e</span>kongaNow
          </span>
          <span className="text-xl font-black italic text-[#E4007C]">
            Now<span className="text-white">Now</span>
          </span>
          <span className="text-[8px] font-semibold text-white">
            SAME DAY
            <br />
            DELIVERY
          </span>
        </div>
      );
    case "buy-more-save-more":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-xl font-black italic text-[#E4007C]">
            SAVE <span className="text-white">MORE</span>
          </span>
        </div>
      );
    case "flash-sales-reloaded":
      return (
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <span className="text-lg font-black italic text-yellow-300">FLASH</span>
          <span className="text-lg font-black italic text-yellow-300">DEALS</span>
          <span className="text-[9px] font-bold text-[#E4007C]">RELOADED</span>
        </div>
      );
    case "home-essentials":
      return <div className="flex h-full w-full items-center justify-center text-3xl">🧺</div>;
    case "groceries":
      return <div className="flex h-full w-full items-center justify-center text-3xl">🛒</div>;
    case "hot-deal":
      return <div className="flex h-full w-full items-center justify-center text-3xl">🔥</div>;
    default:
      return null;
  }
}

export default function CategoryScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto w-full max-w-[1044px] bg-white px-4 py-6">
      {/* Left Arrow */}
      <button
        onClick={() => scrollBy(-300)}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md hover:bg-white"
      >
        &#10094;
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((cat) => (
          <a
            key={cat.id}
            href="#"
            className="flex w-[110px] flex-shrink-0 flex-col items-center gap-2"
          >
            <div className={`h-[110px] w-[110px] overflow-hidden rounded-xl ${cat.className}`}>
              {renderContent(cat.id)}
            </div>
            <span className="text-center text-[13px] font-medium leading-tight text-[#1a1a3d]">
              {cat.label}
            </span>
          </a>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollBy(300)}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md hover:bg-white"
      >
        &#10095;
      </button>
    </div>
  );
}