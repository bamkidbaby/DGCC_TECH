import { useEffect } from "react";
import CorporatePageHero from "../components/CorporatePageHero";
import {
  CTASection,
  CourseGrid,
  SectionHeader,
  ShellSection,
  SurfaceCard,
} from "../components/CorporateUI";
import { trainingItems, trainingPolicies } from "../data/siteContent";

export default function Training() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="DGCC TECH Training"
        title="Professional training programs with clear fees, structured content, and direct WhatsApp enrollment."
        subtitle="Explore certificate and diploma programs across office productivity, graphics, publishing, web, and laptop engineering, with course-specific detail pages and a simple enrollment path."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Contact the training desk", href: "/contact" }}
        secondaryCta={{ label: "View all services", href: "/services" }}
        stats={[
          { label: "Programs", value: "9" },
          { label: "Entry Tuition", value: "₦35,000" },
          { label: "Longest Duration", value: "6 Months" },
        ]}
      />

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Courses"
              title="Each training program includes pricing, course content, and a direct WhatsApp enrollment path."
              body="Visitors can review tuition, duration, detailed content coverage, learner fit, and then continue straight into WhatsApp with a pre-filled message for the exact program they want."
            />
          </div>
          <SurfaceCard className="p-7 sm:p-8">
            <p className="text-sm leading-7 text-[#6b7280]">
              DGCC TECH training is structured for practical learners who want
              usable skills in office applications, design, technical support,
              publishing, and modern web delivery.
            </p>
            <div className="mt-6 grid gap-4">
              {trainingPolicies.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#e5e7eb] px-4 py-4 text-sm text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </ShellSection>

      <ShellSection className="pt-0">
        <div className="mx-auto max-w-7xl">
          <CourseGrid items={trainingItems} />
        </div>
      </ShellSection>

      <CTASection
        title="Want to enroll or ask which course fits your current level?"
        body="Use the course cards for direct WhatsApp enrollment or contact DGCC TECH for guidance before you start."
        primary={{ label: "Talk to DGCC TECH", href: "/contact" }}
      />
    </>
  );
}
