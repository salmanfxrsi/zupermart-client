"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function BrandLogos() {
  const brands = [
    { name: "GUCCI", font: "serif" },
    { name: "ZARA", font: "sans" },
    { name: "Dior", font: "serif" },
    { name: "BURBERRY", font: "sans" },
    { name: "PRADA", font: "sans" },
    { name: "ARMANI", font: "serif" },
  ];

  return (
    <section className="relative w-full bg-white py-16 dark:bg-black">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent dark:from-black md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent dark:from-black md:w-40" />

      <div className="mx-auto max-w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView={2}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 80 },
            1024: { slidesPerView: 5, spaceBetween: 100 },
          }}
          className="brand-swiper-linear"
        >
          {[...brands, ...brands].map((brand, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <span
                className={`
                  cursor-default text-xl md:text-2xl tracking-[0.2em] uppercase
                  transition-all duration-700 ease-in-out
                  text-black dark:text-white
                  hover:text-black dark:hover:text-white hover:scale-110
                  ${brand.font === "serif" ? "font-serif" : "font-sans font-bold"}
                `}
              >
                {brand.name}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .brand-swiper-linear .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
