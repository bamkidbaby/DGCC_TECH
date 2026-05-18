import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

/* ─── animation styles ──────────────────────────────────── */
const animStyles = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes subtextSlide {
    from { opacity: 0; transform: translateX(-6px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .animate-marquee {
    animation: marquee 28s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
  .footer-brand-visible .brand-name {
    animation: fadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.1s both;
  }
  .footer-brand-visible .brand-subtext {
    animation: subtextSlide 0.5s cubic-bezier(.22,1,.36,1) 0.22s both;
  }
`;

/* ─── data ─────────────────────────────────────────────── */
const services = [
  "Website Design",
  "Graphic Design",
  "Cybersecurity",
  "Computer Repairs",
  "Printing",
  "Online Registrations",
  "ICT Training",
  "Branding",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Training", href: "/training" },
  { name: "Repairs", href: "/repairs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const contactItems = [
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+234 800 000 0000",
    href: "https://wa.me/2348000000000",
    iconBg: "bg-[#25D366]/10",
    iconColor: "text-[#25D366]",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "hello@dgcctech.com",
    href: "mailto:hello@dgcctech.com",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "DGCC TECH Centre, Lagos",
    href: null,
    iconBg: "bg-amber-400/10",
    iconColor: "text-amber-400",
  },
  {
    icon: <FaClock />,
    label: "Hours",
    value: "Mon – Sat · 8am – 6pm",
    href: null,
    iconBg: "bg-emerald-400/10",
    iconColor: "text-emerald-400",
  },
];

/* ─── hook ──────────────────────────────────────────────── */
function useInView(
  threshold = 0.12,
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── fade-up helper ────────────────────────────────────── */
function fadeUp(visible: boolean, delay = "0ms") {
  return [
    "transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)]",
    `delay-[${delay}]`,
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
  ].join(" ");
}

/* ─── component ─────────────────────────────────────────── */
export default function FooterSection() {
  const [bannerRef, bannerVisible] = useInView(0.15);
  const [colsRef, colsVisible] = useInView(0.08);

  return (
    <>
      <style>{animStyles}</style>
      <footer className="relative overflow-hidden bg-[#09090f] text-[#e2e2e8]">
        {/* ambient glows — hidden on tiny screens to avoid overflow weirdness */}
        <div className="pointer-events-none absolute -left-44 top-[10%] hidden size-[420px] rounded-full bg-[radial-gradient(circle,rgba(45,50,146,0.22)_0%,transparent_70%)] sm:block" />
        <div className="pointer-events-none absolute -right-40 bottom-[5%] hidden size-[360px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.07)_0%,transparent_70%)] sm:block" />

        {/* ── marquee ───────────────────────────────────────── */}
        <div className="overflow-hidden border-y border-white/[0.07] bg-white/[0.02] py-3">
          <div className="animate-marquee flex w-max">
            {[...services, ...services].map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 whitespace-nowrap px-6 text-[10px] font-medium uppercase tracking-[0.14em] text-[#6b6b80] transition-colors duration-200 hover:text-[#e2e2e8] sm:px-8 sm:text-[11px]"
              >
                <span className="size-1 shrink-0 rounded-full bg-[#2d3292]" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── banner ────────────────────────────────────────── */}
        <div
          ref={bannerRef}
          className={[
            "relative mx-3 sm:mx-6 lg:mx-12",
            "overflow-hidden rounded-b-[20px] border border-t-0 border-white/[0.08] sm:rounded-b-[28px]",
            "flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between",
            "px-5 py-7 sm:px-10 sm:py-10 lg:px-14 lg:py-14",
            fadeUp(bannerVisible),
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 rounded-b-[20px] bg-gradient-to-br from-[#2d3292]/[0.12] to-transparent sm:rounded-b-[28px]" />

          <div className="relative">
            <p className="mb-3 font-[Syne,sans-serif] text-[10px] font-bold uppercase tracking-[0.22em] text-amber-400">
              DGCC TECH
            </p>
            <h2 className="mb-2 font-[Syne,sans-serif] text-[clamp(20px,5vw,36px)] font-extrabold leading-[1.15] text-white sm:max-w-[480px]">
              Ready to grow with technology?
            </h2>
            <p className="text-sm leading-relaxed text-[#6b6b80] sm:max-w-[420px]">
              From training to repairs, branding to web development — we help
              students, businesses and organisations thrive in the digital
              world.
            </p>
          </div>

          <a
            href="/contact"
            className="group relative inline-flex w-full shrink-0 items-center justify-center gap-2.5 rounded-[14px] bg-[#2d3292] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3d43b5] active:translate-y-0 sm:w-auto"
          >
            Start a project
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* ── main columns ──────────────────────────────────── */}
        <div
          ref={colsRef}
          className="grid grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:px-6 sm:py-14 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1fr] lg:gap-x-12 lg:gap-y-0 lg:px-12 lg:py-20"
        >
          {/* ── brand ── */}
          <div
            className={[
              fadeUp(colsVisible, "50ms"),
              "sm:col-span-2 lg:col-span-1",
              colsVisible ? "footer-brand-visible" : "",
            ].join(" ")}
          >
            {/* logo + name + subtext */}
            <a href="/" className="mb-6 inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="DGCC TECH logo"
                className="h-10 w-auto shrink-0 object-contain transition-opacity duration-200 group-hover:opacity-90 sm:h-11"
              />
              <div>
                <p className="brand-name font-[Syne,sans-serif] text-[17px] font-extrabold leading-none tracking-tight text-white sm:text-lg">
                  DGCC TECH
                </p>
                <p className="brand-subtext mt-[5px] text-[11px] font-medium tracking-[0.06em] text-[#4a4a60]">
                  Connecting the dots in tech
                </p>
              </div>
            </a>

            <p className="mb-6 text-[13.5px] leading-[1.8] text-[#56566e]">
              A modern digital solutions hub in Lagos — ICT training, repairs,
              printing, branding, registrations and web development.
            </p>

            {/* call + whatsapp pills */}
            <div className="mb-7 flex flex-wrap gap-2.5">
              <a
                href="tel:+2348000000000"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-[12.5px] font-medium text-[#9090a8] transition-all duration-200 hover:border-white/25 hover:bg-white/[0.04] hover:text-white active:scale-95"
              >
                <FaPhoneAlt className="text-[10px]" />
                Call us
              </a>
              <a
                href="https://wa.me/2348000000000"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-[12.5px] font-medium text-[#9090a8] transition-all duration-200 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 hover:text-[#25D366] active:scale-95"
              >
                <FaWhatsapp className="text-sm" />
                WhatsApp
              </a>
            </div>

            {/* socials */}
            <div className="flex gap-2">
              {[
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedin, label: "LinkedIn" },
                { Icon: FaTwitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-[10px] border border-white/[0.08] text-sm text-[#4a4a60] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2d3292] hover:bg-[#2d3292] hover:text-white active:translate-y-0"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── navigation ── */}
          <div className={fadeUp(colsVisible, "150ms")}>
            <p className="mb-5 font-[Syne,sans-serif] text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Navigation
            </p>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="group flex items-center text-[13.5px] text-[#56566e] transition-colors duration-[180ms] hover:text-[#c5c5d8]"
                  >
                    <span className="mr-0 inline-block h-px w-0 shrink-0 bg-amber-400 transition-all duration-200 group-hover:mr-2 group-hover:w-3" />
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── services ── */}
          <div className={fadeUp(colsVisible, "250ms")}>
            <p className="mb-5 font-[Syne,sans-serif] text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Services
            </p>
            <ul className="flex flex-col gap-3.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="group flex items-center text-[13.5px] text-[#56566e] transition-colors duration-[180ms] hover:text-[#c5c5d8]"
                  >
                    <span className="mr-0 inline-block h-px w-0 shrink-0 bg-amber-400 transition-all duration-200 group-hover:mr-2 group-hover:w-3" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── contact ── */}
          <div
            className={[
              fadeUp(colsVisible, "350ms"),
              "sm:col-span-2 lg:col-span-1",
            ].join(" ")}
          >
            <p className="mb-5 font-[Syne,sans-serif] text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Get in touch
            </p>

            {/* on mobile: 2-col grid for the contact items so they don't stack too tall */}
            <div className="grid grid-cols-1 gap-0 xs:grid-cols-2 xs:gap-x-4 lg:grid-cols-1">
              {contactItems.map((item, i) => (
                <div
                  key={item.label}
                  className={[
                    "group flex items-start gap-3 py-3.5",
                    // on mobile grid: only bottom borders within the same column
                    "border-b border-white/[0.05] last:border-0",
                    // on desktop: always border except last
                    "lg:py-4",
                    i === contactItems.length - 1
                      ? "lg:border-0"
                      : "lg:border-b",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "flex size-9 shrink-0 items-center justify-center rounded-[10px] text-sm transition-transform duration-200 group-hover:scale-105",
                      item.iconBg,
                      item.iconColor,
                    ].join(" ")}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#3a3a52]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block truncate text-[13px] leading-snug text-[#9090a8] transition-colors duration-200 hover:text-[#e2e2e8]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="block text-[13px] leading-snug text-[#9090a8]">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── bottom bar ────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-3 border-t border-white/[0.05] px-4 py-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6 lg:px-12">
          <p className="text-[12.5px] text-[#3a3a52]">
            © {new Date().getFullYear()} DGCC TECH. All rights reserved.
          </p>
          <div className="flex gap-5 sm:gap-6">
            {["Privacy", "Terms", "Support"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[12.5px] text-[#3a3a52] transition-colors duration-200 hover:text-amber-400"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
