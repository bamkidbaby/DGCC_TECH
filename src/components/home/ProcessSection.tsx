import { FaClipboardCheck, FaHeadset, FaRocket } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Tell us what you need",
    description: "Start with training, repair, printing, design or any online support request.",
    icon: <FaHeadset />,
  },
  {
    title: "Get the right solution",
    description: "We guide you to the best service path and keep the process clear and practical.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Move forward with confidence",
    description: "Leave with a repaired device, completed task or new skill that creates momentum.",
    icon: <FaRocket />,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="A clean path from first contact to final result."
          description="This gives the homepage a useful flow and helps first-time visitors understand what working with DGCC TECH feels like."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-[28px] border border-slate-200 bg-slate-50 p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2d3292] text-xl text-white">
                {step.icon}
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d3292]">
                Step {index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
