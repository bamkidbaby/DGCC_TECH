/* =========================================================
   src/components/UI.tsx
========================================================= */

import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp, FaCheckCircle } from "react-icons/fa";

/* =========================================================
   ANIMATIONS
========================================================= */

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const childFade = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   SECTION
========================================================= */

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={className}>{children}</section>;
}

/* =========================================================
   SECTION HEADER
========================================================= */

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  desc?: string;
  center?: boolean;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  desc,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? "mx-auto max-w-3xl text-center" : ""}`}>
      {badge && (
        <span className="inline-flex rounded-full border border-[#2d3292]/10 bg-[#eef1ff] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#2d3292]">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
        {title}{" "}
        {highlight && <span className="text-[#2d3292]">{highlight}</span>}
      </h2>

      {desc && (
        <p className="mt-5 text-base leading-relaxed text-gray-500">{desc}</p>
      )}
    </div>
  );
}

/* =========================================================
   PAGE HERO
========================================================= */

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  desc?: string;
  cta?: string;
  ctaHref?: string;
}

export function PageHero({
  badge,
  title,
  highlight,
  desc,
  cta,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 pt-40 pb-28 sm:px-6 lg:px-12">
      {/* BG Effects */}
      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[#2d3292]/30 blur-3xl" />

      <div className="absolute bottom-[-160px] right-[-160px] h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        {badge && (
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-blue-200 backdrop-blur-xl">
            {badge}
          </span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {title}

          {highlight && (
            <span className="block text-[#6b7cff]">{highlight}</span>
          )}
        </motion.h1>

        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {desc}
          </motion.p>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="mt-10"
          >
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#2d3292] px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-[#2d3292]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4048d9]"
            >
              {cta}
              <FaArrowRight className="text-xs" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   CTA BANNER
========================================================= */

interface CTABannerProps {
  title: string;
  desc: string;
  cta: string;
  secondary?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title,
  desc,
  cta,
  secondary,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#020617] p-10 sm:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-blue-200">
              DGCC TECH
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              {desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#2d3292] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4048d9]"
            >
              {cta}
              <FaArrowRight className="text-xs" />
            </a>

            {secondary && (
              <a
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                {secondary}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

interface ServiceCardProps {
  label: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  features?: string[];
}

export function ServiceCard({
  label,
  desc,
  icon,
  color,
  href,
  features,
}: ServiceCardProps) {
  return (
    <motion.a
      href={href}
      variants={childFade}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${color}15`,
          color,
        }}
      >
        {icon}
      </div>

      <h3 className="mt-7 text-2xl font-black text-gray-900">{label}</h3>

      <p className="mt-4 text-sm leading-relaxed text-gray-500">{desc}</p>

      {features && (
        <div className="mt-6 space-y-3">
          {features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <FaCheckCircle className="text-xs" style={{ color }} />

              <p className="text-sm font-medium text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center gap-2 text-sm font-bold">
        <span style={{ color }}>Learn More</span>

        <FaArrowRight
          className="text-xs transition-transform duration-300 group-hover:translate-x-1"
          style={{ color }}
        />
      </div>
    </motion.a>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export function Footer() {
  return (
    <footer className="bg-[#020617] px-4 py-20 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-black">DGCC TECH</h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Modern digital solutions hub for training, branding, repairs,
              printing and web development.
            </p>

            <a
              href="https://wa.me/2348000000000"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#2d3292] px-5 py-3 text-sm font-bold text-white"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Home",
                "About",
                "Services",
                "Training",
                "Gallery",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href="/"
                  className="block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Web Design",
                "Graphic Design",
                "Printing",
                "Cybersecurity",
                "Repairs",
              ].map((link) => (
                <p key={link} className="text-sm text-slate-400">
                  {link}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <p>Lagos, Nigeria</p>
              <p>hello@dgcctech.com</p>
              <p>+234 800 000 0000</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} DGCC TECH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
