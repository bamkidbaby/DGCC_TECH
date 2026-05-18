import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Repairs", href: "/repairs" },
  { label: "Registration", href: "/online-registration" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[26px] border border-white/10 bg-[rgba(7,11,29,0.72)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/6 p-2">
              <img
                src={logo}
                alt="DGCC TECH"
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              />
            </div>
            <div>
              <p className="editorial-title text-sm font-black tracking-tight text-white">
                DGCC TECH
              </p>
              <p className="text-[5px] sm:text-[6px] md:text-[11px] uppercase tracking-[0.14em] text-white/45">
                Connecting the dots in tech
              </p>
            </div>
          </Link>

          <nav className="hidden xl:block">
            <div className="flex items-center gap-1 rounded-full border border-white/8 bg-white/6 p-1">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-white text-[#050816]"
                        : "text-white/72 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden xl:block">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-[#2d3292] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3b41b8]"
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-black xl:hidden"
            aria-label="Toggle navigation"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden xl:hidden"
            >
              <div className="mt-4 space-y-2 border-t border-white/8 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/74 transition hover:bg-white/8 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-2xl bg-[#2d3292] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Start a project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
