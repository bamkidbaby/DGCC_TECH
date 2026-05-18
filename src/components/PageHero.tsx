// components/PageHero.tsx

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  badge: string;
  title: string;
  highlight: string;
  desc: string;
  image: string;
  cta?: string;
  ctaHref?: string;
}

export default function PageHero({
  badge,
  title,
  highlight,
  desc,
  image,
  cta,
  ctaHref,
}: Props) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/85 to-transparent" />

        {/* Ambient */}
        <div className="absolute left-[-150px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#2d3292]/30 blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#5d6bff]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">
              {badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
            {title}

            <span className="mt-2 block bg-gradient-to-r from-[#7c8dff] via-white to-cyan-300 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>

          {/* Desc */}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {desc}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            {cta && (
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2d3292] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#3c42b8]"
              >
                {cta}
                <FaArrowRight className="text-xs" />
              </a>
            )}

            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
            >
              View Gallery
            </a>
          </div>

          {/* Bottom Stats */}
          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Fast Delivery", "24/7"],
              ["Projects", "150+"],
              ["Students", "500+"],
              ["Support", "Reliable"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="text-2xl font-black text-white">{value}</p>

                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
