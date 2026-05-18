import {
  FaClock,
  FaThumbsUp,
  FaUserGraduate,
  FaWrench,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate />,
    value: "500+",
    label: "Students Trained",
  },
  {
    icon: <FaWrench />,
    value: "1,200+",
    label: "Devices Repaired",
  },
  {
    icon: <FaThumbsUp />,
    value: "98%",
    label: "Satisfaction Rate",
  },
  {
    icon: <FaClock />,
    value: "Same Day",
    label: "Turnaround Available",
  },
];

const reasons = [
  {
    icon: <FaStar />,
    title: "All-in-one hub",
    body: "Training, repairs, design, printing — everything you need in one place.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Certified professionals",
    body: "Experienced experts delivering reliable and professional service every time.",
  },
  {
    icon: <FaClock />,
    title: "Fast turnaround",
    body: "Most repairs, prints and support requests are completed within 24 hours.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Honest pricing",
    body: "Transparent pricing with zero hidden charges or unnecessary upselling.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-28 px-4 sm:px-6 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top_right,white,transparent_35%)]" />

      <div className="pointer-events-none absolute -top-40 left-[-120px] h-96 w-96 rounded-full bg-[#2d3292]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
            Why Choose DGCC TECH
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Built on results.
            <br />
            <span className="text-yellow-400">Trusted by people.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            From ICT training to repairs and branding, we focus on speed,
            quality and customer satisfaction.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s, index) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#2d3292]/40 hover:bg-white/[0.06]"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(45,50,146,0.25),transparent_45%)]" />

              {/* Number */}
              <span className="absolute right-5 top-5 text-5xl font-black text-white/[0.04]">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2d3292] to-[#4f46e5] text-xl text-yellow-400 shadow-lg shadow-[#2d3292]/30">
                {s.icon}
              </div>

              <h3 className="relative text-4xl font-black text-white">
                {s.value}
              </h3>

              <p className="relative mt-2 text-sm uppercase tracking-wider text-slate-400">
                {s.label}
              </p>

              <div className="relative mt-6 h-[2px] overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/20 hover:bg-white/[0.06]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_40%)]" />

              <div className="relative flex items-start gap-5">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-lg text-yellow-400">
                  {r.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{r.title}</h3>

                  <p className="mt-3 leading-relaxed text-slate-400">
                    {r.body}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition-all duration-300 hover:gap-3">
                    Learn More
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
