"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Heart, ShoppingBag, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801715820393", "_blank");
  };

  return (
    <>
      <header className="fixed top-8 z-40 w-full border-b border-black/5 bg-white/60 backdrop-blur-lg dark:border-white/10 dark:bg-black/60">
        <div className="mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Left */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => setOpen(true)}
              className="text-lg text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
              aria-label="Open menu"
            >
              ☰
            </button>

            {/* Desktop only links */}
            <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <span className="cursor-pointer transition hover:text-black dark:hover:text-white">
                Shop
              </span>
              <span className="cursor-pointer transition hover:text-black dark:hover:text-white">
                About
              </span>
            </nav>
          </div>

          {/* Center Logo – Desktop Only */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <h2 className="brand-font text-lg font-medium uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
              Zuper Mart
            </h2>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* --- Whatsapp Button --- */}
            <button
              onClick={handleWhatsAppClick}
              className="group flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-green-700 transition-all hover:bg-green-500 hover:text-white dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black"
            >
              <MessageCircle
                size={16}
                className="transition-transform group-hover:rotate-12"
              />
              <span className="hidden text-[11px] font-bold uppercase tracking-wider md:block">
                Message Us
              </span>
            </button>

            {/* Wishlist */}
            <button
              aria-label="Wishlist"
              className="rounded-full p-2 text-zinc-700 transition hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10"
            >
              <Heart size={18} />
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="relative rounded-full p-2 text-zinc-700 transition hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10"
            >
              <ShoppingBag size={18} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-800 text-[10px] text-white dark:bg-zinc-200 dark:text-black">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}
