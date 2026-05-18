/* =========================================================
   GALLERY PAGE — src/pages/Gallery.tsx
========================================================= */

import Navbar from "../components/Navbar";
import { Footer, PageHero, Section, SectionHeader } from "../components/UI";

const images = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="Gallery"
          title="A look into"
          highlight="our work."
          desc="Projects, training sessions, branding and digital solutions by DGCC TECH."
          cta="Contact Us"
          ctaHref="/contact"
        />

        <Section className="bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Our Gallery"
              title="Captured"
              highlight="moments."
            />

            <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
              {images.map((image, i) => (
                <div key={i} className="mb-6 overflow-hidden rounded-[32px]">
                  <img
                    src={image}
                    alt="DGCC TECH"
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
