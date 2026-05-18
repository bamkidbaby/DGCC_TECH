import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import bg from "../../assets/hero.jpg";

interface HeroTextProps {
  text: string;
  colorClass?: string;
}

function HeroText({ text, colorClass }: HeroTextProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`text-4xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl ${
        colorClass ?? "text-black"
      }`}
    >
      {text}
    </motion.h1>
  );
}

export default function HeroSection() {
  return (
    <main className="relative z-10 flex min-h-screen items-center pt-24">
      <div className="container mx-auto grid items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8d2ff] bg-[#f7f3ff] px-4 py-2 text-xs font-medium tracking-wider text-[#4338ca] shadow-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#f59e0b]" />
            DGCC TECH • CONNECTING PEOPLE WITH TECHNOLOGY
          </motion.div>

          <div className="space-y-1">
            <HeroText text="Learn Tech." />
            <HeroText text="Repair Devices." colorClass="text-gray-500" />
            <HeroText text="Build Your Future." colorClass="text-[#2d3292]" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-gray-600"
          >
            ICT training, device repairs, printing, graphic design and online services all
            under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-2xl bg-[#2d3292] px-6 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1f2675]"
            >
              Get Started
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="rounded-2xl border border-gray-200 bg-white px-6 py-4 text-center text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2d3292] hover:text-[#2d3292]"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#2d3292]/10 blur-3xl" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[520px] rounded-[32px] border border-white/60 bg-white/80 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
          >
            <img
              src={bg}
              alt="DGCC TECH"
              className="h-[420px] w-full rounded-[24px] object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            <div className="absolute -left-8 top-10 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-xs text-gray-500">Training</p>
              <h3 className="mt-1 text-sm font-semibold text-[#2d3292]">Cybersecurity</h3>
            </div>

            <div className="absolute -right-8 bottom-10 rounded-2xl bg-[#2d3292] px-5 py-4 text-white shadow-xl">
              <p className="text-xs text-blue-100">Services</p>
              <h3 className="mt-1 text-sm font-semibold">Repairs & Printing</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
