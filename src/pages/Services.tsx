/* =========================================================
   src/pages/Services.tsx
========================================================= */

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import {
  Footer,
  PageHero,
  CTABanner,
  Section,
  SectionHeader,
  stagger,
  childFade,
} from "../components/UI";

import { FaArrowRight } from "react-icons/fa";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    title: "Website Design",
    slug: "web-design",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop",
    desc: "Modern responsive websites for businesses, brands and organisations.",
    color: "#2563eb",
  },

  {
    title: "Graphic Design",
    slug: "graphic-design",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop",
    desc: "Creative branding, flyers, social media graphics and print materials.",
    color: "#db2777",
  },

  {
    title: "Computer Repairs",
    slug: "computer-services",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    desc: "Laptop repairs, software installation and device troubleshooting.",
    color: "#16a34a",
  },

  {
    title: "Printing & Photocopy",
    slug: "printing",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1400&auto=format&fit=crop",
    desc: "High-quality printing, photocopy and document services.",
    color: "#ea580c",
  },

  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop",
    desc: "Digital security services and cybersecurity awareness solutions.",
    color: "#7c3aed",
  },

  {
    title: "Online Registrations",
    slug: "online-registrations",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    desc: "JAMB, WAEC, recruitment forms and online application assistance.",
    color: "#0891b2",
  },
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="DGCC TECH Services"
          title="Everything you need,"
          highlight="one place."
          desc="Professional digital services designed for students, individuals and businesses."
          cta="Get Started"
          ctaHref="/contact"
        />

        <Section className="bg-[#f8fafc] py-28 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Our Services"
              title="Explore our"
              highlight="solutions."
              desc="Modern digital services tailored for growth, productivity and creativity."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
            >
              {services.map((service) => (
                <motion.a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  variants={childFade}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-[280px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div
                      className="absolute left-6 top-6 rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white"
                      style={{
                        background: service.color,
                      }}
                    >
                      DGCC TECH
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <p className="text-sm leading-relaxed text-gray-500">
                      {service.desc}
                    </p>

                    <div className="mt-7 flex items-center justify-between">
                      <p className="text-sm font-bold text-gray-900">
                        View Service
                      </p>

                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          background: service.color,
                        }}
                      >
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </Section>

        <CTABanner
          title="Need a custom solution?"
          desc="Talk to DGCC TECH and let's build something amazing together."
          cta="Contact Us"
          secondary="Chat on WhatsApp"
          secondaryHref="https://wa.me/2348000000000"
        />
      </main>

      <Footer />
    </>
  );
}
