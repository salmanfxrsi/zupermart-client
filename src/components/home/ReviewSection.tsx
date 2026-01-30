"use client";

import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Alexander Rivers",
    comment:
      "The quality of the fabric is exceptional. It's rare to find a brand that balances modern aesthetics with such high-end durability.",
  },
  {
    id: 2,
    name: "Elena Sophia",
    comment:
      "Zuper Mart has become my go-to for essentials. The minimalist design makes these pieces incredibly versatile for any occasion.",
  },
  {
    id: 3,
    name: "Marcus Chen",
    comment:
      "Fast shipping and the packaging was beautiful. You can tell they care about the customer experience from start to finish.",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    comment:
      "Absolutely love the fit! It's rare to find clothes that look exactly like the photos online. Truly impressed.",
  },
];

export default function ReviewSlider() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        autoHeight={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // On small screens, show 1 full card
          640: { slidesPerView: 2 },
          // On desktop, show 3 cards with equal width
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="review-swiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-auto pb-16">
            <div className="flex h-full flex-col items-start border border-black/5 bg-white/50 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/30">
              <Quote
                size={24}
                className="mb-6 text-zinc-900 dark:text-zinc-100 opacity-20"
                strokeWidth={1.5}
              />

              <p className="mb-8 text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                {review.comment}
              </p>

              <h4 className="mt-auto text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">
                — {review.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .review-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #71717a !important;
          opacity: 0.3;
          border-radius: 0; /* Square bullets match your minimalist brand better */
          transition: all 0.3s ease;
        }
        .review-swiper .swiper-pagination-bullet-active {
          width: 24px; /* Elongated active bullet for a premium feel */
          background: #18181b !important;
          opacity: 1;
        }
        .dark .review-swiper .swiper-pagination-bullet-active {
          background: #f4f4f5 !important;
        }
        /* Ensure all slides in a row are the same height */
        .swiper-wrapper {
          display: flex;
        }
      `}</style>
    </section>
  );
}
