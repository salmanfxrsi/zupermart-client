"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/bundle";

export default function HeroBanner() {
  const slides = ["/image1.jpeg", "/image1.jpg.webp", "/image2.jpeg"];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        {/* LOGO */}
        <Image
          src="/logo.jpg"
          alt="Zuper Mart Logo"
          width={120}
          height={120}
          className="mb-6 object-contain"
        />

        {/* Shop Now */}
        <button className="group relative overflow-hidden text-sm md:text-base tracking-[0.3em] uppercase border border-white/40 px-10 py-3 backdrop-blur-md bg-white/10 transition-all duration-500">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
            Shop Now
          </span>
          <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest uppercase opacity-80">
            Scroll
          </span>
          <div className="h-6 w-px bg-white/60" />
        </div>
      </div>
    </section>
  );
}
