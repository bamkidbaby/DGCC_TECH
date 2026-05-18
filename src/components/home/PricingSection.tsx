import { useState } from "react";
import { FaCheckCircle, FaArrowRight, FaBolt } from "react-icons/fa";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: {
      training: "15,000",
      repairs: "5,000",
      design: "10,000",
    },
    description: "Perfect for individuals and students.",
    badge: null,
    accent: "#64748b",
    light: "#f1f5f9",
    features: [
      "1 ICT training module",
      "Basic repairs",
      "Simple logo design",
      "20 A4 print pages",
    ],
  },

  {
    id: "pro",
    name: "Professional",
    price: {
      training: "45,000",
      repairs: "15,000",
      design: "35,000",
    },
    description: "Best for growing businesses.",
    badge: "Most Popular",
    accent: "#2d3292",
    light: "#eef0ff",
    features: [
      "Full ICT training",
      "Advanced repairs",
      "Full branding package",
      "Website included",
      "Priority support",
    ],
  },

  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      training: "Custom",
      repairs: "Custom",
      design: "Custom",
    },
    description: "Tailored solutions for organisations.",
    badge: null,
    accent: "#0f172a",
    light: "#e2e8f0",
    features: [
      "Corporate training",
      "Bulk repairs",
      "Dedicated support",
      "Long-term partnership",
    ],
  },
];

const categories = ["training", "repairs", "design"];

const labels = {
  training: "ICT Training",
  repairs: "Repairs",
  design: "Design",
};

export default function Pricing() {
  const [category, setCategory] = useState("training");

  return (
    <section className="relative overflow-hidden bg-white py-28 px-4 sm:px-6 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#eef0ff] blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#eef0ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d3292]">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
            Simple pricing.
            <span className="block text-[#2d3292]">Powerful value.</span>
          </h2>

          <p className="mt-5 text-slate-500">
            Flexible packages for students, creators and businesses.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex rounded-2xl bg-slate-100 p-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  category === cat
                    ? "bg-[#2d3292] text-white shadow-lg"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {labels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative overflow-hidden rounded-[32px] border bg-white transition-all duration-500 hover:-translate-y-1 ${
                plan.badge
                  ? "border-[#2d3292] shadow-2xl shadow-[#2d3292]/10"
                  : "border-slate-200"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute right-5 top-5 rounded-full bg-[#2d3292] px-3 py-1 text-xs font-bold text-white">
                  {plan.badge}
                </div>
              )}

              {/* Accent */}
              <div className="h-1 w-full" style={{ background: plan.accent }} />

              <div className="p-8">
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                  style={{ background: plan.accent }}
                >
                  <FaBolt />
                </div>

                <h3
                  className="text-sm font-bold uppercase tracking-[0.2em]"
                  style={{ color: plan.accent }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4">
                  {plan.price[category] === "Custom" ? (
                    <h2 className="text-5xl font-black text-slate-900">
                      Custom
                    </h2>
                  ) : (
                    <h2 className="text-5xl font-black text-slate-900">
                      ₦{plan.price[category]}
                    </h2>
                  )}

                  <p className="mt-2 text-sm text-slate-500">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <FaCheckCircle
                        className="mt-1 shrink-0"
                        style={{ color: plan.accent }}
                      />

                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-white transition-all duration-300 hover:opacity-90"
                  style={{ background: plan.accent }}
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
