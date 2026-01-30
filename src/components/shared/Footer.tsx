import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white/60 backdrop-blur-lg dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h2 className="brand-font text-lg font-medium uppercase tracking-widest text-zinc-900 dark:text-zinc-100 mb-4">
            Zuper Mart
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Elevate your style with premium clothing. Timeless designs, modern
            touch, and a professional look.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Shop
          </h3>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
            {["Men", "Women", "New Arrivals", "Best Sellers"].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition hover:text-black dark:hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
            {["FAQ", "Shipping", "Returns", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition hover:text-black dark:hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 text-zinc-600 dark:text-zinc-400">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full p-2 transition hover:bg-black/5 hover:text-black dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <Icon size={14} />
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/5 dark:border-white/10 py-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Zuper Mart. All rights reserved. <br />
        Developed and maintained by{" "}
        <span className="text-zinc-700 dark:text-zinc-300 font-medium">
          Team Nexico
        </span>
      </div>
    </footer>
  );
}
