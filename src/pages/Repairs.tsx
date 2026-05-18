import { useEffect } from "react";
import CorporatePageHero from "../components/CorporatePageHero";
import { CTASection, ProcessTimeline, SectionHeader, ShellSection, SurfaceCard } from "../components/CorporateUI";

export default function Repairs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="Repairs"
        title="Repair support for devices that need dependable attention."
        subtitle="DGCC TECH provides a clean and professional route for diagnostics, software fixes, performance recovery, and practical computer support."
        image="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Request repair support", href: "/contact" }}
        secondaryCta={{ label: "See all services", href: "/services" }}
      />

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SurfaceCard className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=1400&q=80"
              alt="Device repair"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </SurfaceCard>
          <SurfaceCard className="p-7 sm:p-8">
            <SectionHeader
              eyebrow="Repair desk"
              title="Diagnostics, cleanup, installation support, and performance recovery."
              body="The repair page focuses on clarity because people usually arrive here when a device problem is already slowing them down."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Laptop and desktop troubleshooting",
                "Software installation and cleanup",
                "Performance recovery and maintenance",
                "Guidance on upgrade and replacement decisions",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-[#e5e7eb] px-4 py-4 text-sm text-black">
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeader
              eyebrow="Repair flow"
              title="A simple process that keeps customers informed."
              body="The goal is to reduce stress and make the next step obvious even when the issue itself is technical."
            />
          </div>
          <ProcessTimeline
            items={[
              { title: "Explain or drop off the device", detail: "We gather the symptoms, urgency, and likely fault path." },
              { title: "Run diagnostics", detail: "The system is reviewed before major repair action begins." },
              { title: "Fix and return", detail: "The device is tested, returned, and paired with practical guidance." },
            ]}
          />
        </div>
      </ShellSection>

      <CTASection
        title="Need a device restored to reliable working condition?"
        body="Use the contact page to describe the issue and DGCC TECH will guide the next step."
        primary={{ label: "Book a repair", href: "/contact" }}
      />
    </>
  );
}
