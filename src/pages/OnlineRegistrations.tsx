import { useEffect } from "react";
import CorporatePageHero from "../components/CorporatePageHero";
import { CTASection, ProcessTimeline, SectionHeader, ShellSection, SurfaceCard } from "../components/CorporateUI";

export default function OnlineRegistrations() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="Online Registration"
        title="Application support that stays careful, clear, and dependable."
        subtitle="DGCC TECH helps with digital application workflows where accuracy matters, including school forms, exam registrations, and guided online submissions."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Get registration help", href: "/contact" }}
        secondaryCta={{ label: "Explore services", href: "/services" }}
      />

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <SurfaceCard className="p-7 sm:p-8">
            <SectionHeader
              eyebrow="Coverage"
              title="Support for admissions, exam forms, recruitment, and digital applications."
              body="The value here is accuracy, guidance, and follow-through, especially for users who do not want to risk mistakes on important submissions."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "JAMB and WAEC processing",
                "Recruitment forms",
                "Online profile setup",
                "General digital application support",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-[#e5e7eb] px-4 py-4 text-sm text-black">
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
              alt="Online registration support"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </SurfaceCard>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeader
              eyebrow="Process"
              title="A careful flow for important submissions."
              body="Clarity is especially valuable on registration work because the cost of small errors can be high."
            />
          </div>
          <ProcessTimeline
            items={[
              { title: "Check requirements", detail: "We confirm the documents, deadlines, and application path first." },
              { title: "Complete submission carefully", detail: "Forms and entries are reviewed before final submission." },
              { title: "Share next steps", detail: "Important receipts, reminders, and follow-up actions are communicated clearly." },
            ]}
          />
        </div>
      </ShellSection>

      <CTASection
        title="If the application matters, it deserves more than guesswork."
        body="DGCC TECH helps reduce submission errors, missed steps, and unnecessary stress."
        primary={{ label: "Ask for support", href: "/contact" }}
      />
    </>
  );
}
