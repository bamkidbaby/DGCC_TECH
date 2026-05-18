/* =========================================================
   src/pages/Training.tsx
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

import { FaArrowRight, FaClock, FaUsers } from "react-icons/fa";

/* =========================================================
   TRAINING DATA
========================================================= */

const trainings = [
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop",
    desc: "Learn ethical hacking, online protection and digital security skills.",
    duration: "12 Weeks",
    students: "150+ Students",
    color: "#2563eb",
  },

  {
    title: "Web Development",
    slug: "web-development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    desc: "Frontend and backend development with real-world projects.",
    duration: "10 Weeks",
    students: "200+ Students",
    color: "#7c3aed",
  },

  {
    title: "Graphic Design",
    slug: "graphic-design",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop",
    desc: "Master branding, Photoshop, social media design and print design.",
    duration: "8 Weeks",
    students: "300+ Students",
    color: "#db2777",
  },

  {
    title: "CBT Preparation",
    slug: "cbt-preparation",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    desc: "Prepare for WAEC, JAMB and computer-based examinations.",
    duration: "6 Weeks",
    students: "500+ Students",
    color: "#ea580c",
  },
];

/* =========================================================
   TRAINING PAGE
========================================================= */

export default function TrainingPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="DGCC TECH Training"
          title="Learn modern"
          highlight="digital skills."
          desc="Practical ICT training programs designed for students, creators and future tech professionals."
          cta="Start Learning"
          ctaHref="/contact"
        />

        {/* TRAINING GRID */}
        <Section className="bg-[#f8fafc] py-28 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Training Programs"
              title="Choose your"
              highlight="learning path."
              desc="Industry-relevant training designed to help you build real skills."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid gap-7 md:grid-cols-2"
            >
              {trainings.map((training) => (
                <motion.a
                  key={training.slug}
                  href={`/training/${training.slug}`}
                  variants={childFade}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-[320px] overflow-hidden">
                    <img
                      src={training.image}
                      alt={training.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div
                      className="absolute left-6 top-6 rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white"
                      style={{
                        background: `${training.color}`,
                      }}
                    >
                      DGCC TECH
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white">
                        {training.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                        {training.desc}
                      </p>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <div className="flex flex-wrap gap-3">
                      <div className="inline-flex items-center gap-2 rounded-2xl bg-[#f5f7ff] px-4 py-3 text-sm font-semibold text-gray-700">
                        <FaClock
                          style={{
                            color: training.color,
                          }}
                        />

                        {training.duration}
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-2xl bg-[#f5f7ff] px-4 py-3 text-sm font-semibold text-gray-700">
                        <FaUsers
                          style={{
                            color: training.color,
                          }}
                        />

                        {training.students}
                      </div>
                    </div>

                    <div className="mt-7 flex items-center justify-between">
                      <p className="text-sm font-bold text-gray-900">
                        View Training Details
                      </p>

                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          background: training.color,
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

        {/* WHY TRAIN WITH US */}
        <Section className="bg-white py-28 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-3">
              {[
                {
                  title: "Hands-on Learning",
                  desc: "Practical sessions with real projects and live demonstrations.",
                },

                {
                  title: "Modern Tools",
                  desc: "Learn with industry-standard software and modern workflows.",
                },

                {
                  title: "Career Support",
                  desc: "Get guidance, mentorship and project support throughout your learning journey.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-gray-200 bg-[#fafafa] p-8"
                >
                  <h3 className="text-2xl font-black text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <CTABanner
          title="Ready to start learning?"
          desc="Join DGCC TECH today and build practical digital skills that matter."
          cta="Enroll Now"
          secondary="Contact Us"
          secondaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
