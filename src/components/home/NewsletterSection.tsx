"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="bg-white  dark:bg-black pt-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="brand-font mb-3 text-xl font-medium uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 md:text-2xl">
          Be a ZuperMart Army
        </h2>

        <p className="mb-10 text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
          Be the first to know about new collections and exclusive offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-lg flex-col items-stretch gap-0 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-zinc-200 bg-transparent px-6 py-4 text-xs tracking-widest outline-none transition-colors focus:border-black dark:border-zinc-800 dark:text-white dark:focus:border-white sm:border-r-0"
          />

          <button
            type="submit"
            className="group relative overflow-hidden border border-zinc-900 bg-zinc-900 px-10 py-4 text-xs tracking-[0.2em] uppercase text-white transition-all duration-500 dark:border-white dark:bg-white dark:text-black"
          >
            <span className="relative md:pr-6 z-10 transition-colors duration-500 group-hover:text-black dark:group-hover:text-white">
              Subscribe
            </span>
            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0 dark:bg-black" />
          </button>
        </form>
      </div>
    </section>
  );
}
