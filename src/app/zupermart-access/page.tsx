"use client";

import React, { useState } from "react";
import { ShieldAlert, Fingerprint } from "lucide-react";

export default function ZuperMartAccess() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auth Attempt for:", email);
  };

  return (
    <section className="bg-white dark:bg-black min-h-screen flex flex-col justify-center py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Top Warning Badge */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 border border-red-600/40 px-6 py-2 text-[10px] tracking-[0.5em] uppercase text-red-600 dark:text-red-500 font-bold">
            <ShieldAlert size={14} className="animate-pulse" />
            Restricted Entry
          </div>
        </div>

        <h2 className="brand-font mb-4 text-xl font-medium uppercase tracking-[0.4em] text-zinc-900 dark:text-zinc-100 md:text-3xl">
          Zuper Mart Core Access
        </h2>

        <p className="mx-auto max-w-xl mb-14 text-xs tracking-[0.2em] uppercase leading-relaxed text-zinc-500 dark:text-zinc-400">
          Admin and Moderator Gateway. Standard users are not required to log
          in.
        </p>

        {/* Input Section */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-2xl flex-col items-stretch gap-0 sm:flex-row shadow-sm"
        >
          <input
            type="email"
            required
            placeholder="GMAIL ADDRESS"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-zinc-200 bg-transparent px-6 py-5 text-xs tracking-widest outline-none transition-colors focus:border-black dark:border-zinc-800 dark:text-white dark:focus:border-white sm:border-r-0"
          />

          <input
            type="password"
            required
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-zinc-200 bg-transparent px-6 py-5 text-xs tracking-widest outline-none transition-colors focus:border-black dark:border-zinc-800 dark:text-white dark:focus:border-white sm:border-r-0"
          />

          <button
            type="submit"
            className="group relative min-w-[200px] overflow-hidden border border-zinc-900 bg-zinc-900 px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase text-white transition-all duration-500 dark:border-white dark:bg-white dark:text-black"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black dark:group-hover:text-white">
              Verify
            </span>
            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0 dark:bg-black" />
          </button>
        </form>

        {/* The Warning Footer */}
        <div className="mt-20 mx-auto max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-zinc-100 dark:border-zinc-900">
            {/* Box 1: Technical Disclosure */}
            <div className="p-8 text-left border-b sm:border-b-0 sm:border-r border-zinc-100 dark:border-zinc-900">
              <div className="flex items-center gap-2 mb-4">
                <Fingerprint size={14} className="text-zinc-400" />
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-zinc-900 dark:text-zinc-100 font-bold">
                  Tracking Active
                </h4>
              </div>
              <p className="text-[10px] tracking-widest leading-loose text-zinc-500 dark:text-zinc-500 uppercase">
                IP Address, Geolocation, and Device IDs are logged. Every
                attempt is traced.
              </p>
            </div>

            {/* Box 2: Legal Threat */}
            <div className="p-8 text-left bg-zinc-50/50 dark:bg-zinc-950/50">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-red-600 mb-4 font-bold">
                Security Squadron
              </h4>
              <p className="text-[10px] tracking-widest leading-loose text-zinc-600 dark:text-zinc-400 uppercase">
                We will take immediate steps if you try to attack without
                authorized moderator clearance.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[9px] tracking-[0.4em] text-zinc-400 uppercase">
            System Monitored by Team Nexico
          </p>
        </div>
      </div>
    </section>
  );
}
