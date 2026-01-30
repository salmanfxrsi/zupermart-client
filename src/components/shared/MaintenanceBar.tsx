"use client";

import { AlertTriangle } from "lucide-react";

export default function MaintenanceBar() {
  return (
    <section className="w-full bg-red-600 py-4 text-white dark:bg-red-900/80 dark:backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 md:flex-row md:gap-6">
        <div className="flex items-center gap-2">
          <AlertTriangle size={18} className="animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] md:text-sm">
            Software Under Maintenance
          </span>
        </div>

        <div className="hidden h-4 w-px bg-white/30 md:block" />

        <p className="text-[10px] tracking-widest uppercase opacity-90 md:text-xs">
          Engineered & Managed by{" "}
          <span className="font-black underline decoration-white/40 underline-offset-4">
            Nexico
          </span>
        </p>
      </div>
    </section>
  );
}
