import { useEffect } from "react";
import CorporatePageHero from "../components/CorporatePageHero";
import {
  CTASection,
  CourseGrid,
  FAQAccordion,
  GalleryGrid,
  ProcessTimeline,
  SectionHeader,
  ServiceCard,
  ShellSection,
  StatsStrip,
  SurfaceCard,
} from "../components/CorporateUI";
import { brandStats, faqs, galleryImages, serviceItems, trainingItems } from "../data/siteContent";

const homeProcess = [
  {
    title: "Understand the real need",
    detail: "We start with the business problem, learner goal, or support issue before recommending a route.",
  },
  {
    title: "Match the right service mix",
    detail: "Training, design, support, repairs, and registration services can be combined around one client need.",
  },
  {
    title: "Deliver clearly and professionally",
    detail: "The final experience stays clean, practical, and easy to follow from first contact to final handover.",
  },
];

const valuePoints = [
  "A clean corporate presentation that helps clients trust the brand quickly.",
  "Practical technology support for both individuals and organizations.",
  "Training offers with pricing, detail pages, and direct WhatsApp enrollment.",
  "A service structure built for real local business and student needs.",
];

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="DGCC TECH"
        title="Technology services, training, and support built for real business use."
        subtitle="DGCC TECH helps clients with websites, design, training, repairs, registrations, and digital support through a clean corporate experience that feels credible from the first visit."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "Explore training", href: "/training" }}
        stats={brandStats.slice(0, 3)}
      />

      <ShellSection className="pt-10">
        <div className="mx-auto max-w-7xl">
          <StatsStrip items={brandStats} />
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SurfaceCard className="p-7 sm:p-8">
            <SectionHeader
              eyebrow="Who we serve"
              title="A dependable digital partner for companies, students, and growing teams."
              body="DGCC TECH combines technical delivery with business-friendly communication so every page, service, and support line feels more useful and more professional."
            />
          </SurfaceCard>
          <div className="grid gap-4 sm:grid-cols-2">
            {valuePoints.map((item) => (
              <div key={item} data-aos="fade-up">
                <SurfaceCard className="h-full p-6">
                  <p className="text-sm leading-7 text-[#6b7280]">{item}</p>
                </SurfaceCard>
              </div>
            ))}
          </div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Business services presented with enough detail to feel real."
            body="Every major service has its own dedicated detail page so visitors can move from overview to deeper understanding without friction."
            align="split"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceItems.slice(0, 3).map((item) => (
              <ServiceCard
                key={item.slug}
                title={item.title}
                summary={item.summary}
                image={item.image}
                href={`/services/${item.slug}`}
                eyebrow={item.eyebrow}
              />
            ))}
          </div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Training"
            title="Courses with clear pricing and direct WhatsApp enrollment."
            body="The training section is structured like a real commercial offer, with dedicated course pages, pricing visibility, and a simple enrollment path."
            align="split"
          />
          <div className="mt-12">
            <CourseGrid items={trainingItems} />
          </div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeader
              eyebrow="How we work"
              title="A straightforward process that keeps delivery organized."
              body="DGCC TECH keeps the experience clear because clients should understand what is happening, what comes next, and how to move forward."
            />
          </div>
          <ProcessTimeline items={homeProcess} />
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Gallery"
            title="A simple visual layer that shows the work environment behind the services."
            body="The gallery supports the brand with clean, business-oriented imagery rather than decorative filler."
            align="split"
          />
          <div className="mt-12">
            <GalleryGrid items={galleryImages} />
          </div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeader
              eyebrow="Frequently asked"
              title="Clear answers for the questions clients usually ask first."
              body="The website should reduce hesitation, especially around training, support, and how services are delivered."
            />
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </ShellSection>

      <CTASection
        title="Need a technology partner that can support both delivery and day-to-day business needs?"
        body="Use the contact page to discuss websites, design, training, repairs, registration support, or a broader combination of services."
        primary={{ label: "Contact DGCC TECH", href: "/contact" }}
        secondary={{ label: "View all services", href: "/services" }}
      />
    </>
  );
}
