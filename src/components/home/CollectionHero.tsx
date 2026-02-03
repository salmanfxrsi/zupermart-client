"use client";

import React from "react";
import Image from "next/image";

export default function SeasonalCollections() {
  const collections = [
    {
      title: "Winter Collection",
      subtitle: "Season of Elegance",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2022",
      link: "/winter-collection",
    },
    {
      title: "Summer Collection",
      subtitle: "Golden Sun Vibes",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070",
      link: "/summer-collection",
    },
  ];

  return (
    // Added py-12 px-4 to create the outer margin/padding
    <section className="w-full bg-slate-50 dark:bg-zinc-950 py-12 px-4 md:px-8 lg:px-16">
      {/* Gap-6 creates space between the cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {collections.map((item, index) => (
          <div
            key={index}
            className="group relative h-[60vh] md:h-[75vh] w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />

            {/* Darker base overlay for contrast */}
            <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/40" />

            {/* Glassmorphic Card Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/40">
                <p className="mb-3 text-[10px] tracking-[0.5em] uppercase text-white/90">
                  {item.subtitle}
                </p>

                <h2 className="mb-10 text-3xl font-medium uppercase tracking-[0.2em] text-white md:text-4xl lg:text-5xl drop-shadow-md">
                  {item.title}
                </h2>

                {/* Glass Button */}
                <button
                  onClick={() => (window.location.href = item.link)}
                  className="group/btn relative overflow-hidden rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span className="relative z-10">
                    See Collection
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}