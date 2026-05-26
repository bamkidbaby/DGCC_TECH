import { motion } from "framer-motion";
import { partnerLogos } from "../data/siteContent";

export default function LogoSlider() {
  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-white py-10">
      {/* Fade Edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      {/* Label */}
      <div className="mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
          Trusted technologies & platforms
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 24,
          }}
          className="flex w-max items-center gap-14"
        >
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <div
              key={i}
              className="group flex h-20 min-w-[180px] items-center justify-center rounded-2xl border border-black/5 bg-[#fafafa] px-8 transition-all duration-300 hover:border-[#2d3292]/20 hover:bg-white hover:shadow-lg"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="h-8 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
