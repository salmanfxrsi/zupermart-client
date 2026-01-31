"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/bundle";

export default function HeroBanner() {
  const slides = ["/heroImage1.jpeg", "/heroImage2.jpeg"];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white dark:bg-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              <Image
                src={img}
                alt="Banner"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="mb-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase">
          New Season <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Arrivals
          </span>
        </h1>

        <p className="mb-8 max-w-lg text-sm md:text-lg text-gray-200 font-light tracking-wide">
          Discover our latest collection featuring premium quality and modern
          designs.
        </p>

        {/* Button */}
        <div className="flex w-full max-w-lg flex-col items-stretch justify-center sm:flex-row">
          <button className="group relative overflow-hidden border border-white bg-transparent px-12 py-4 text-xs tracking-[0.2em] uppercase text-white transition-all duration-500">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Shop Now
            </span>
            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
          </button>
        </div>

        {/* Minimalist Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-60">
            Discover
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
