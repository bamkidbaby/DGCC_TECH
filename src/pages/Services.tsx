import { useEffect } from "react";
import { motion } from "framer-motion";
import CorporatePageHero from "../components/CorporatePageHero";
import {
  CTASection,
  ProcessTimeline,
  SectionHeader,
  ServiceCard,
  ShellSection,
  stagger,
} from "../components/CorporateUI";
import { serviceItems, type ServiceItem } from "../data/siteContent";

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="DGCC TECH Services"
        title="Business and technical services structured like a real company offering."
        subtitle="The services page brings together digital, design, support, and operational capabilities in one clean corporate layout with dedicated detail pages for each offer."
        image="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Talk about your project", href: "/contact" }}
        secondaryCta={{ label: "Explore training", href: "/training" }}
        stats={serviceItems[0].stats}
      />

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="All services"
            title="Each service leads to its own full detail page."
            body="That gives visitors a better view of what DGCC TECH does, who each offer is for, and how the work typically moves from request to delivery."
            align="split"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {serviceItems.map((item: ServiceItem) => (
              <ServiceCard
                key={item.slug}
                title={item.title}
                summary={item.summary}
                image={item.image}
                href={`/services/${item.slug}`}
                eyebrow={item.eyebrow}
              />
            ))}
          </motion.div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeader
              eyebrow="Delivery approach"
              title="The service model stays simple even when the work spans multiple needs."
              body="Clients can come in for one request and still receive joined-up support when a wider service combination makes sense."
            />
          </div>
          <ProcessTimeline
            items={[
              {
                title: "Clarify the request",
                detail:
                  "We define the business need, urgency, and likely service fit.",
              },
              {
                title: "Scope the right route",
                detail:
                  "A focused service plan is shaped around the actual requirement.",
              },
              {
                title: "Execute and support",
                detail:
                  "The work is delivered with clear communication and practical next steps.",
              },
            ]}
          />
        </div>
      </ShellSection>

      <CTASection
        title="Need one service or a broader digital support package?"
        body="DGCC TECH can help you move from a single request into a more complete service flow when the project calls for it."
        primary={{ label: "Contact DGCC TECH", href: "/contact" }}
      />
    </>
  );
}
