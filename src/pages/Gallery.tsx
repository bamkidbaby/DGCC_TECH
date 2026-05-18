import { useEffect } from "react";
import { motion } from "framer-motion";
import CorporatePageHero from "../components/CorporatePageHero";
import { CTASection, GalleryGrid, SectionHeader, ShellSection, stagger } from "../components/CorporateUI";
import { galleryImages } from "../data/siteContent";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="DGCC TECH Gallery"
        title="A visual snapshot of the work environment behind the services."
        subtitle="The gallery keeps the site grounded in real technology, training, and support activity while staying clean and business-focused."
        image="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Showcase"
            title="Clean imagery that supports the company story."
            body="Rather than filling the page with decorative effects, the gallery shows the kind of work, learning, and service atmosphere the business operates in."
            align="split"
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="mt-12">
            <GalleryGrid items={galleryImages} />
          </motion.div>
        </div>
      </ShellSection>

      <CTASection
        title="If the company style feels like the standard you want, let’s talk."
        body="DGCC TECH can bring that same clarity to your website, design work, training setup, or support request."
        primary={{ label: "Contact DGCC TECH", href: "/contact" }}
      />
    </>
  );
}
