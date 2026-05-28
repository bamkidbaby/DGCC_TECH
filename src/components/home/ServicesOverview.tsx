import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaLaptopCode,
  FaShieldAlt,
  FaTools,
  FaPaintBrush,
  FaPrint,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    id: "webdev",
    icon: <FaLaptopCode />,
    label: "Web Dev",
    title: "Web Development",
    tagline: "Modern websites that convert.",
    description:
      "We design and develop high-performance websites and web applications tailored to your business goals — fast, responsive, and built for growth.",
    perks: [
      "Responsive modern UI",
      "SEO-ready structure",
      "Fast loading performance",
      "Custom business solutions",
    ],
    accent: "#2d3292",
    lightAccent: "#eef0ff",
  },

  {
    id: "cyber",
    icon: <FaShieldAlt />,
    label: "Cybersecurity",
    title: "Cybersecurity Training",
    tagline: "Learn to secure digital systems.",
    description:
      "Hands-on cybersecurity education focused on real-world protection, ethical hacking, system security, and modern cyber defense techniques.",
    perks: [
      "Ethical hacking basics",
      "Network protection",
      "Practical training",
      "Certification preparation",
    ],
    accent: "#111827",
    lightAccent: "#f3f4f6",
  },

  {
    id: "repairs",
    icon: <FaTools />,
    label: "Repairs",
    title: "Sales & Repairs",
    tagline: "Reliable repairs done properly.",
    description:
      "Professional laptop, desktop, and phone repairs with fast diagnostics and quality maintenance solutions you can trust.",
    perks: [
      "Hardware replacement",
      "Software troubleshooting",
      "Virus cleanup",
      "System optimization",
    ],
    accent: "#b45309",
    lightAccent: "#fff7ed",
  },

  {
    id: "design",
    icon: <FaPaintBrush />,
    label: "Design",
    title: "General Printing",
    tagline: "Creative visuals that stand out.",
    description:
      "We create professional branding materials, social media graphics, flyers, logos, and visual identities that leave lasting impressions.",
    perks: [
      "Logo design",
      "Social media creatives",
      "Flyers & posters",
      "Brand identity kits",
    ],
    accent: "#7c3aed",
    lightAccent: "#f5f3ff",
  },

  {
    id: "printing",
    icon: <FaPrint />,
    label: "Printing",
    title: "Printing Services",
    tagline: "Fast and professional printing.",
    description:
      "High-quality printing and photocopy services for students, businesses, and organizations with reliable turnaround times.",
    perks: [
      "Color & B/W printing",
      "Photocopy services",
      "Binding & lamination",
      "Bulk document printing",
    ],
    accent: "#0e7490",
    lightAccent: "#ecfeff",
  },

  {
    id: "online",
    icon: <FaGlobe />,
    label: "Online",
    title: "Online Services",
    tagline: "Digital tasks made easier.",
    description:
      "We assist with online registrations, portal applications, digital documentation, and internet-based support services.",
    perks: [
      "School registrations",
      "Online applications",
      "Portal assistance",
      "Document processing",
    ],
    accent: "#059669",
    lightAccent: "#ecfdf5",
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0].id);

  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-24">
      {/* BACKGROUND GLOWS */}
      <div
        className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full blur-3xl opacity-10"
        style={{ background: current.accent }}
      />

      <div
        className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full blur-3xl opacity-10"
        style={{ background: current.accent }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span
            className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              background: current.lightAccent,
              color: current.accent,
            }}
          >
            DGCC TECH SERVICES
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Technology solutions
            <br />
            <span style={{ color: current.accent }}>
              built for modern needs.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
            From tech education and cybersecurity to repairs, branding,
            printing, and digital support — DGCC TECH provides practical
            solutions that help individuals and businesses grow.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* SIDEBAR */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {services.map((service, index) => {
              const isActive = active === service.id;

              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setActive(service.id)}
                  className={`group relative flex min-w-[220px] cursor-pointer items-center gap-4 rounded-3xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-transparent shadow-xl"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                  }`}
                  style={
                    isActive
                      ? {
                          background: service.accent,
                          color: "#fff",
                        }
                      : {}
                  }
                >
                  {/* ICON */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl transition-all duration-300 ${
                      isActive ? "bg-white/10 text-yellow-400" : ""
                    }`}
                    style={
                      !isActive
                        ? {
                            background: service.lightAccent,
                            color: service.accent,
                          }
                        : {}
                    }
                  >
                    {service.icon}
                  </div>

                  {/* TEXT */}
                  <div className="flex-1">
                    <p
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        isActive ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      Service
                    </p>

                    <h3 className="mt-1 text-sm font-bold sm:text-base">
                      {service.title}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <FaArrowRight
                    className={`text-sm transition-all duration-300 ${
                      isActive
                        ? "translate-x-1 opacity-100"
                        : "opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* DETAIL CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[36px] border border-white bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10"
            >
              {/* TOP BAR */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: current.accent }}
              />

              {/* HEADER */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-3xl text-2xl text-yellow-400 shadow-lg"
                    style={{ background: current.accent }}
                  >
                    {current.icon}
                  </div>

                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ color: current.accent }}
                    >
                      {current.label}
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <div
                  className="rounded-2xl px-4 py-3 text-sm font-semibold"
                  style={{
                    background: current.lightAccent,
                    color: current.accent,
                  }}
                >
                  DGCC TECH
                </div>
              </div>

              {/* TAGLINE */}
              <p
                className="mt-8 text-xl font-bold"
                style={{ color: current.accent }}
              >
                {current.tagline}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-500 sm:text-lg">
                {current.description}
              </p>

              {/* PERKS */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {current.perks.map((perk, index) => (
                  <motion.div
                    key={perk}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafafa] p-4"
                  >
                    <div
                      className="mt-0.5 text-base"
                      style={{ color: current.accent }}
                    >
                      <FaCheckCircle />
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      {perk}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90 active:scale-95"
                  style={{
                    background: current.accent,
                    boxShadow: `0 15px 35px ${current.accent}30`,
                  }}
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </button>

                <button className="cursor-pointer rounded-2xl border border-gray-200 bg-[#fafafa] px-7 py-4 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-white active:scale-95">
                  Learn More
                </button>
              </div>

              {/* DECORATIVE ELEMENT */}
              <div
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full opacity-[0.04]"
                style={{ background: current.accent }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
