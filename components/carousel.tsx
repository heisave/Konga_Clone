"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Picture from "@/public/img1.jpg";

const slides = [
  {
    src: Picture,
    alt: "Beautiful Mountain Landscape",
  },
  {
    src: Picture,
    alt: "Foggy Forest at Sunrise",
  },
  {
    src: Picture,
    alt: "Wooden Bridge in Nature",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-play feature
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="flex w-full max-w-[1044px] h-[280px] gap-3 mx-auto py-4 px-4">
      {/* Carousel */}
      <div className="relative group flex-[2] h-full">
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0} // Eager load the first slide for LCP performance
                  className="object-cover"
                  sizes="(max-width: 700px) 100vw, 700px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className=" group-hover:block absolute top-[50%] -translate-y-1/2 left-3 text-base rounded-full p-1.5 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors"
        >
          &#10094;
        </button>

        {/* Right Arrow Controls */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className=" group-hover:block absolute top-[50%] -translate-y-1/2 right-3 text-base rounded-full p-1.5 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors"
        >
          &#10095;
        </button>

        {/* Dot Indicators — overlaid at the bottom of the image */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              aria-label={`Go to slide ${slideIndex + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === slideIndex ? "bg-white w-5" : "bg-white/50 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Side Promo Grid */}
      <div className="hidden md:grid flex-1 grid-cols-2 grid-rows-2 gap-3 h-full">
        {/* Now Available */}
        <Link
          href="#"
          className="flex flex-col items-center justify-center rounded-xl bg-black px-2 text-center leading-tight hover:scale-105 transition-transform"
        >
          <span className="text-lg font-extrabold text-orange-500">NOW</span>
          <span className="text-lg font-extrabold text-white">AVAILABLE</span>
        </Link>

        {/* Xclusive Plus */}
        <Link
          href="#"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#1B5E3A] px-2 text-center hover:scale-105 transition-transform"
        >
          <span className="text-[11px] font-semibold text-white">
            XclusivePlus <span className="text-gray-300">by</span> access
          </span>
          <span className="text-sm font-bold text-white leading-tight">
            GET UP TO
            <br />
            <span className="text-lime-400">₦1,000</span>
          </span>
          <span className="text-[10px] text-white">off your shopping cart</span>
          <span className="text-[9px] text-gray-300">T&amp;C Apply</span>
          <span className="mt-1 rounded bg-yellow-400 px-3 py-1 text-[11px] font-bold text-black">
            Sign Up &gt;
          </span>
        </Link>

        {/* Genuine Products */}
        <Link
          href="#"
          className="flex items-center justify-center rounded-xl bg-[#F6DFB4] hover:scale-105 transition-transform"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-[#E4007C] text-center text-[9px] font-bold uppercase leading-tight text-[#E4007C]">
            Genuine
            <br />
            Products
          </div>
        </Link>

        {/* Shop Now */}
        <Link
          href="#"
          className="flex items-center justify-center rounded-xl bg-black hover:scale-105 transition-transform"
        >
          <span className="rounded-full bg-[#E4007C] px-4 py-2 text-xs font-bold text-white">
            Shop Now
          </span>
        </Link>
      </div>
    </div>
  );
}