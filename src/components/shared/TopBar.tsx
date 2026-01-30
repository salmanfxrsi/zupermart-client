"use client";

import Marquee from "react-fast-marquee";

export default function TopBar() {
  return (
    <div className="fixed top-0 z-50 w-full bg-black text-center text-xs tracking-wide text-white">
      <div className="py-2 uppercase">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          <span className="mx-8">We deliver products internationally</span>
          <span className="mx-8">Secure payments & easy returns</span>
          <span className="mx-8">Fast shipping worldwide</span>
          <span className="mx-8">60% Discount on all products</span>
          <span className="mx-8">We deliver products internationally</span>
          <span className="mx-8">Secure payments & easy returns</span>
          <span className="mx-8">Fast shipping worldwide</span>
          <span className="mx-8">60% Discount on all products</span>
        </Marquee>
      </div>
    </div>
  );
}
