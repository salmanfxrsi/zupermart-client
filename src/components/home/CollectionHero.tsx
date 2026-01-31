"use client";

import React from "react";
import Image from "next/image";

export default function SeasonalCollections() {
  const collections = [
    {
      title: "Winter Collection",
      subtitle: "Season of Elegance",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2022",
      link: "/winter-collection",
    },
    {
      title: "Summer Collection",
      subtitle: "Golden Sun Vibes",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070",
      link: "/summer-collection",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {collections.map((item, index) => (
          <div
            key={index}
            className="group relative h-[75vh] w-full md:w-1/2 overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
            />

            {/* Dynamic Overlay */}
            <div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/45" />

            {/* Content Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <p className="mb-3 text-[10px] tracking-[0.5em] uppercase text-white/80">
                {item.subtitle}
              </p>

              <h2 className="brand-font mb-10 text-4xl font-medium uppercase tracking-[0.2em] text-white md:text-5xl lg:text-6xl">
                {item.title}
              </h2>

              {/* Button */}
              <button
                onClick={() => (window.location.href = item.link)}
                className="group/btn relative overflow-hidden border border-white bg-transparent px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase text-white transition-all duration-500"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black">
                  See Collection
                </span>
                <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover/btn:translate-y-0" />
              </button>
            </div>

            {/* Subtle separator line for desktop */}
            {index === 0 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-32 w-[1px] bg-white/10 z-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
