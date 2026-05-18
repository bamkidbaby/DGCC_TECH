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

import {
  FaCheckCircle,
  FaLaptopCode,
  FaShieldAlt,
  FaPrint,
  FaUsers,
  FaTools,
} from "react-icons/fa";

const values = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Solutions",
    desc: "We build digital solutions with modern tools, clean design and reliable technology.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Training",
    desc: "From cybersecurity to CBT preparation, we equip students with practical skills.",
  },
  {
    icon: <FaPrint />,
    title: "Fast Service",
    desc: "Printing, registrations and repairs delivered quickly without compromising quality.",
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "1k+", label: "Projects Completed" },
  { value: "24/7", label: "Support Access" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="About DGCC TECH"
          title="Technology made"
          highlight="simple."
          desc="DGCC TECH is a modern digital solutions hub helping students, individuals and businesses thrive with technology."
          cta="Contact Us"
          ctaHref="/contact"
        />

        <Section className="bg-white py-28 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[1fr_520px] items-center">
              <div>
                <SectionHeader
                  badge="Who We Are"
                  title="Connecting the"
                  highlight="dots in tech."
                  center={false}
                />

                <p className="mt-8 text-base leading-relaxed text-gray-600">
                  DGCC TECH combines technology, creativity and practical
                  solutions into one modern digital hub. From ICT training and
                  repairs to web development and branding, we help people
                  confidently navigate the digital world.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {[
                    "ICT Training",
                    "Web Development",
                    "Graphic Design",
                    "Computer Repairs",
                    "Cybersecurity",
                    "Online Registrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-[#fafafa] p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2d3292]/10 text-[#2d3292]">
                        <FaCheckCircle />
                      </div>

                      <p className="text-sm font-semibold text-gray-800">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                  alt="DGCC TECH"
                  className="h-[620px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    DGCC TECH
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-white">
                    Your trusted tech partner.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Our Values"
              title="Built on"
              highlight="excellence."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 grid gap-6 md:grid-cols-3"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={childFade}
                  className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2d3292]/10 text-2xl text-[#2d3292]">
                    {value.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-black text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        <Section className="bg-white py-24 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Our Impact"
              title="Numbers that"
              highlight="matter."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 text-center"
                >
                  <h3 className="text-5xl font-black text-[#2d3292]">
                    {stat.value}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <CTABanner
          title="Ready to work with DGCC TECH?"
          desc="Let's help you grow with technology."
          cta="Get Started"
        />
      </main>

      <Footer />
    </>
  );
}
