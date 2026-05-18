import { useEffect } from "react";
import CorporatePageHero from "../components/CorporatePageHero";
import { CTASection, CourseGrid, SectionHeader, ShellSection, SurfaceCard } from "../components/CorporateUI";
import { trainingItems } from "../data/siteContent";

export default function Training() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="DGCC TECH Training"
        title="Courses with pricing, clear structure, and direct WhatsApp enrollment."
        subtitle="The training experience is designed like a real commercial education offer, with transparent pricing, course-specific pages, and a simple path to ask questions or enroll."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Contact the training desk", href: "/contact" }}
        secondaryCta={{ label: "View all services", href: "/services" }}
        stats={trainingItems[2].stats}
      />

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Courses"
              title="Each course has a dedicated detail page with article-style information."
              body="Visitors can see the course price, overview, practical outcomes, audience fit, and then continue straight into WhatsApp with a pre-filled enrollment message."
            />
          </div>
          <SurfaceCard className="p-7 sm:p-8">
            <p className="text-sm leading-7 text-[#6b7280]">
              DGCC TECH training is designed for beginners, practical learners, and people who want useful technology skills they can apply quickly in school, work, or business.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Transparent pricing for every listed course",
                "Direct WhatsApp enrollment from each course card",
                "Dedicated course pages with practical detail",
                "Business-friendly learning paths for real-world use",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-[#e5e7eb] px-4 py-4 text-sm text-black">
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
