/* =========================================================
   CONTACT PAGE — src/pages/Contact.tsx
========================================================= */

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Footer, PageHero, Section, SectionHeader } from "../components/UI";

import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const contactMeta = [
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+234 800 000 0000",
    href: "https://wa.me/2348000000000",
    color: "#25D366",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "hello@dgcctech.com",
    href: "mailto:hello@dgcctech.com",
    color: "#2d3292",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
    color: "#f59e0b",
  },
  {
    icon: <FaClock />,
    label: "Working Hours",
    value: "Mon - Sat • 8am - 6pm",
    href: null,
    color: "#10b981",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="Contact Us"
          title="Let's build something"
          highlight="amazing."
          desc="Reach out to DGCC TECH and we'll respond as quickly as possible."
          cta="Chat on WhatsApp"
          ctaHref="https://wa.me/2348000000000"
        />

        <Section className="bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
              <div className="rounded-[36px] bg-white p-8 shadow-xl sm:p-10">
                {sent ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2d3292]/10 text-4xl text-[#2d3292]">
                      <FaCheckCircle />
                    </div>

                    <h3 className="mt-6 text-3xl font-black text-gray-900">
                      Message Sent
                    </h3>

                    <p className="mt-3 max-w-md text-gray-500">
                      Thanks for contacting DGCC TECH.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 outline-none focus:border-[#2d3292]"
                      />

                      <input
                        type="email"
                        placeholder="Email Address"
                        className="rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 outline-none focus:border-[#2d3292]"
                      />
                    </div>

                    <select className="w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 outline-none focus:border-[#2d3292]">
                      <option>Select Service</option>
                      <option>Website Design</option>
                      <option>Cybersecurity</option>
                      <option>Repairs</option>
                    </select>

                    <textarea
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 outline-none focus:border-[#2d3292]"
                    />

                    <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2d3292] py-4 text-sm font-bold text-white transition-all hover:bg-[#1f2570]">
                      Send Message
                      <FaArrowRight className="text-xs" />
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-5">
                {contactMeta.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
                        style={{
                          background: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="overflow-hidden rounded-[32px]">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                    alt="Contact DGCC TECH"
                    className="h-[280px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
