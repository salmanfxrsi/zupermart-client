"use client";

type SidebarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-80 transform border-r border-black/10 bg-white/70 backdrop-blur-xl transition-transform duration-300 dark:border-white/10 dark:bg-black/70
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <h2 className="text-lg font-semibold tracking-wide text-black dark:text-white">
            ZUPER MART
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-xl text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-10 flex flex-col gap-6 px-6 text-base font-medium text-black dark:text-white">
          {[
            "Home",
            "Shop",
            "New Arrivals",
            "Categories",
            "About",
            "Contact",
          ].map((item) => (
            <span
              key={item}
              className="cursor-pointer tracking-wide transition-all hover:translate-x-1 hover:opacity-70"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 px-6 text-xs tracking-wide text-zinc-500">
          Developed by Team Nexico
        </div>
      </aside>
    </>
  );
}
