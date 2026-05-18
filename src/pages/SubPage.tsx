import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CorporatePageHero from "../components/CorporatePageHero";
import {
  CTASection,
  ProcessTimeline,
  SectionHeader,
  ServiceCard,
  ShellSection,
  StatsStrip,
  SurfaceCard,
  WhatsAppCTAButton,
} from "../components/CorporateUI";
import { serviceItems, trainingItems, type CourseItem, type ShowcaseItem } from "../data/siteContent";

function getCollection(category: "services" | "training") {
  return category === "services" ? serviceItems : trainingItems;
}

function findItem(items: ShowcaseItem[], slug?: string) {
  return items.find((item) => item.slug === slug) ?? items[0];
}

function isCourse(item: ShowcaseItem): item is CourseItem {
  return item.kind === "course";
}

export default function SubPage({ category }: { category: "services" | "training" }) {
  const { slug } = useParams();
  const item = useMemo(() => findItem(getCollection(category), slug), [category, slug]);
  const courseItem = isCourse(item) ? item : null;
  const relatedItems = useMemo(
    () => getCollection(category).filter((entry) => entry.slug !== item.slug).slice(0, 3),
    [category, item.slug],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge={item.eyebrow}
        title={item.title}
        subtitle={item.summary}
        image={item.hero}
        cta={
          category === "services"
            ? { label: "Discuss this service", href: "/contact" }
            : { label: "Ask about this course", href: "/contact" }
        }
        secondaryCta={{ label: category === "services" ? "Back to services" : "Back to training", href: category === "services" ? "/services" : "/training" }}
        stats={item.stats}
      />

      <ShellSection className="pt-10">
        <div className="mx-auto max-w-7xl">
          <StatsStrip items={item.stats} />
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <SurfaceCard className="overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full min-h-[360px] w-full object-cover" />
            </SurfaceCard>

            <SurfaceCard className="p-7 sm:p-8">
              <SectionHeader
                eyebrow={category === "services" ? "Overview" : "Course details"}
                title={
                  category === "services"
                    ? "A dedicated service page with enough depth to support a real enquiry."
                    : "A course page that reads like a real training offer, not a placeholder card."
                }
                body={
                  category === "services"
                    ? "These pages are structured like lightweight corporate articles so each service can stand on its own."
                    : "Each course page combines pricing, audience fit, outcomes, and enrollment action in one clear place."
                }
              />
              <div className="mt-8 space-y-8">
                {item.articleSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xl font-semibold text-black">{section.title}</h3>
                    <div className="mt-3 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-[#6b7280]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>

          <div className="space-y-6">
            <SurfaceCard className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
                {category === "services" ? "Included in this service" : "Course summary"}
              </p>
              {courseItem ? (
                <div className="mt-4 border-b border-[#e5e7eb] pb-5">
                  <p className="text-3xl font-semibold text-[#2a308e]">{courseItem.price}</p>
                  <p className="mt-2 text-sm text-[#6b7280]">{courseItem.duration}</p>
                  <p className="mt-4 text-sm leading-7 text-[#6b7280]">{courseItem.audience}</p>
                </div>
              ) : null}
              <div className="mt-5 space-y-3">
                {item.features.map((feature) => (
                  <div key={feature} className="rounded-xl border border-[#e5e7eb] px-4 py-4 text-sm leading-7 text-black">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                {courseItem ? (
                  <WhatsAppCTAButton courseName={courseItem.title} fullWidth />
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#2a308e] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
                  >
                    Contact DGCC TECH
                  </Link>
                )}
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#2a308e] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
                >
                  Ask a question
                </Link>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeader
              eyebrow="Process"
              title={category === "services" ? "How the service typically moves forward." : "How the learning path is structured."}
              body="The process section adds practical context so the page reads like a real offer rather than a generic marketing block."
            />
          </div>
          <ProcessTimeline items={item.process} />
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Related pages"
            title={category === "services" ? "Explore other services." : "Explore other courses."}
            body="These related links make the detail pages behave more like a connected content and conversion system."
            align="split"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {relatedItems.map((related) => (
              <ServiceCard
                key={related.slug}
                title={related.title}
                summary={related.summary}
                image={related.image}
                href={`${category === "services" ? "/services" : "/training"}/${related.slug}`}
                eyebrow={related.eyebrow}
              />
            ))}
          </div>
        </div>
      </ShellSection>

      <CTASection
        title={
          category === "services"
            ? `Need help with ${item.title.toLowerCase()}?`
            : `Ready to begin ${item.title.toLowerCase()}?`
        }
        body="The next step can cover timing, requirements, scope, or any questions you need answered before moving forward."
        primary={{ label: category === "services" ? "Contact DGCC TECH" : "Contact the training desk", href: "/contact" }}
      />
    </>
  );
}
