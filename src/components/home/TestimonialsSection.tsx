import { useState } from "react";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Amaka Osei",
    role: "Small Business Owner",
    service: "Web Dev + Branding",
    text: "DGCC TECH transformed our business presence completely. The website, branding and support were all top-notch.",
    rating: 5,
    initials: "AO",
    color: "#2d3292",
  },
  {
    name: "Emeka Nwosu",
    role: "Final Year Student",
    service: "Cybersecurity Training",
    text: "The cybersecurity training was practical, engaging and easy to follow. I learned more in weeks than months elsewhere.",
    rating: 5,
    initials: "EN",
    color: "#059669",
  },
  {
    name: "Grace Okonkwo",
    role: "Teacher",
    service: "Device Repairs",
    text: "My laptop was repaired the same day and it works perfectly now. Fast service and very professional team.",
    rating: 5,
    initials: "GO",
    color: "#b45309",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const t = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28 px-4 sm:px-6 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[#2d3292]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#eef0ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d3292]">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Real experiences.
            <span className="block text-[#2d3292]">Real satisfaction.</span>
          </h2>

          <p className="mt-5 text-slate-500">
            Here’s what clients and students say about working with DGCC TECH.
          </p>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-12">
          {/* Accent */}
          <div
            className="absolute inset-x-0 top-0 h-1"
            style={{ background: t.color }}
          />

          {/* Glow */}
          <div
            className="absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl opacity-10"
            style={{ background: t.color }}
          />

          <FaQuoteLeft
            className="relative mb-8 text-4xl"
            style={{ color: t.color }}
          />

          <p className="relative max-w-4xl text-xl font-medium leading-relaxed text-slate-700 sm:text-2xl">
            “{t.text}”
          </p>

          {/* Stars */}
          <div className="relative mt-8 flex gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>

          {/* Footer */}
          <div className="relative mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>

              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>

            <span
              className="rounded-full px-4 py-2 text-xs font-bold"
              style={{
                background: `${t.color}15`,
                color: t.color,
              }}
            >
              {t.service}
            </span>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "30px" : "8px",
                  background: i === current ? t.color : "#cbd5e1",
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: t.color }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
