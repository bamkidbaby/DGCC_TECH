import { useEffect } from "react";
import CorporatePageHero from "../components/CorporatePageHero";
import {
  CTASection,
  GalleryGrid,
  SectionHeader,
  ShellSection,
} from "../components/CorporateUI";
import { galleryImages } from "../data/siteContent";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="DGCC TECH Gallery"
        title="A visual record of the work, training, and technical support behind DGCC TECH."
        subtitle="This gallery reflects the real environments where digital services, learning, and technical solutions are delivered with structure and consistency."
        image="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Showcase"
            title="Real work environments, real technical processes, and real service delivery."
            body="Each image represents the type of work DGCC TECH handles across development, support, training, design, and digital operations."
            align="split"
          />

          <div className="mt-12">
            <GalleryGrid items={galleryImages} />
          </div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Consistency"
            title="A focus on clarity, structure, and professional execution across every service."
            body="DGCC TECH maintains a consistent standard in how work is delivered, communicated, and supported across all client engagements."
            align="split"
          />
        </div>
      </ShellSection>

      <CTASection
        title="If you value clean execution and structured digital services, DGCC TECH matches that standard."
        body="We bring the same clarity shown in this gallery into every project, whether it’s development, training, or technical support."
        primary={{ label: "Contact DGCC TECH", href: "/contact" }}
      />
    </>
  );
}
