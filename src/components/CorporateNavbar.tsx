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

export default function CorporateNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="DGCC TECH" className="h-11 w-11 object-contain" />
          <div>
            <p className="text-base font-semibold tracking-tight text-black">DGCC TECH</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">Connecting the dots in tech</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`border-b-2 pb-1 text-sm font-medium transition ${
                  active
                    ? "border-[#2a308e] text-[#2a308e]"
                    : "border-transparent text-black hover:border-[#2a308e] hover:text-[#2a308e]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-[#e5e7eb] text-black lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-out ${
                open ? "translate-y-[7px] rotate-45" : "rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-out ${
                open ? "-translate-y-[7px] -rotate-45" : "rotate-0"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#e5e7eb] bg-white lg:hidden"
          >
            <div className="space-y-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-black transition hover:bg-[#f9fafb] hover:text-[#2a308e]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-[#facc15] px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-[#2a308e] hover:text-black"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
