import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";

interface NavLinkItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

const MotionAnchor = motion.a;

const navLinks: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Computer Services", href: "/services/computer" },
      { name: "Printing & Photocopy", href: "/services/printing" },
      { name: "Website Design", href: "/services/website" },
      { name: "Graphic Design", href: "/services/graphic" },
    ],
  },
  {
    name: "Training",
    href: "/training",
    dropdown: [
      { name: "Cybersecurity", href: "/training/cybersecurity" },
      { name: "Web Development", href: "/training/web-development" },
      { name: "Graphic Design", href: "/training/graphic" },
      { name: "CBT Preparation", href: "/training/cbt-preparation" },
    ],
  },
  { name: "Repairs", href: "/services/repairs" },
  { name: "Online Registrations", href: "/services/online-registrations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.08 },
  },
};

const navItemVariant = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
};

const dropdownVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.26, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const desktopDropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  exit: { opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const boxShadow = useTransform(
    scrollY,
    [0, 30],
    ["0 0px 0px rgba(0,0,0,0)", "0 4px 28px rgba(0,0,0,0.07)"],
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <motion.header
      style={{ boxShadow }}
      className="fixed top-0 z-[999] w-full border-b border-black/5 bg-white/88 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          <div className="overflow-hidden rounded-xl bg-[#f8f8ff] p-1 shadow-sm">
            <img
              src={logo}
              alt="DGCC TECH Logo"
              className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="leading-tight">
            <h2 className="text-sm font-semibold tracking-wide text-[#111827]">
              DGCC TECH
            </h2>
            <p className="text-[11px] text-gray-500">
              Connecting the dots in tech
            </p>
          </div>
        </a>

        <nav className="hidden xl:block">
          <ul className="flex items-center gap-1 rounded-2xl border border-black/5 bg-[#fafafa] p-2 shadow-sm">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-[#2d3292] hover:text-white"
                >
                  {link.name}
                  {link.dropdown && (
                    <motion.span
                      animate={{ rotate: hoveredLink === link.name ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FaChevronDown className="text-[10px]" />
                    </motion.span>
                  )}
                </a>

                <AnimatePresence>
                  {link.dropdown && hoveredLink === link.name && (
                    <motion.div
                      key="desktop-dd"
                      variants={desktopDropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 top-[115%] z-50 w-64 rounded-2xl border border-black/5 bg-white p-2 shadow-2xl"
                    >
                      <div className="space-y-1">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-[#f3f4ff] hover:text-[#2d3292]"
                          >
                            {item.name}
                            <FaArrowRight className="text-[10px] opacity-40" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <MotionAnchor
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-black/10 bg-[#2d3292] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-[#1f2570]"
          >
            Get Started
          </MotionAnchor>
        </div>

        <motion.button
          onClick={() => {
            setMobileOpen(!mobileOpen);
            if (mobileOpen) {
              setOpenDropdown(null);
            }
          }}
          whileTap={{ scale: 0.94 }}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-black/10 bg-[#fafafa] text-gray-700 xl:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28 }}
            className="origin-center block h-[1.5px] w-[18px] rounded-full bg-gray-700"
          />
          <motion.span
            animate={
              mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.2 }}
            className="block h-[1.5px] w-[18px] rounded-full bg-gray-700"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.28 }}
            className="origin-center block h-[1.5px] w-[18px] rounded-full bg-gray-700"
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-black/5 bg-white xl:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-h-[62vh] space-y-1 overflow-y-auto px-4 pt-3 pb-2"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={navItemVariant}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-[#f0f1ff] hover:text-[#2d3292]"
                      >
                        <span>{link.name}</span>
                        <motion.span
                          animate={{
                            rotate: openDropdown === link.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                          className={
                            openDropdown === link.name
                              ? "text-[#2d3292]"
                              : "text-gray-400"
                          }
                        >
                          <FaChevronDown className="text-[10px]" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {openDropdown === link.name && (
                          <motion.div
                            key={`dd-${link.name}`}
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 mb-2 space-y-0.5 border-l-2 border-[#e5e7ff] pl-3">
                              {link.dropdown.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition-all duration-150 hover:bg-[#f5f7ff] hover:text-[#2d3292]"
                                >
                                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d1d5ff]" />
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenDropdown(null);
                      }}
                      className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-[#f0f1ff] hover:text-[#2d3292]"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <div className="space-y-3 border-t border-black/5 px-4 py-4">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="block w-full cursor-pointer rounded-xl bg-[#2d3292] px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1f2570]"
              >
                Get Started
              </motion.a>
              <p className="text-center text-[11px] tracking-wide text-gray-400">
                Your trusted tech partner in Nigeria
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
