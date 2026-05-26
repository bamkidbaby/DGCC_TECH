import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShieldAlt,
  FaTools,
  FaPrint,
  FaPaintBrush,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
  },
  {
    title: "Cybersecurity",
    icon: <FaShieldAlt />,
  },
  {
    title: "Device Repairs",
    icon: <FaTools />,
  },
  {
    title: "Printing Services",
    icon: <FaPrint />,
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush />,
  },
  {
    title: "Online Services",
    icon: <FaGlobe />,
  },
];

const stats = [
  { number: "500+", label: "Students Trained" },
  { number: "24/7", label: "Support" },
  { number: "100%", label: "Practical Learning" },
  { number: "6+", label: "Core Services" },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute left-[-120px] top-[-60px] h-[320px] w-[320px] rounded-full bg-[#2d3292]/10 blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[260px] w-[260px] rounded-full bg-[#fecb0b]/10 blur-3xl" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-[#2d3292]/10 bg-[#2d3292]/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2d3292]">
              About DGCC TECH
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:mx-0 lg:text-6xl">
              Building Digital Skills
              <span className="block text-[#2d3292]">For The Future.</span>
            </h2>

            {/* Paragraph */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
              DGCC TECH is a modern technology and innovation hub focused on
              empowering students, businesses, and individuals through practical
              digital training and professional ICT services.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
              From web development and cybersecurity to branding, repairs,
              printing, and online registrations, we provide solutions that help
              people grow in today’s digital world.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#2d3292] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#1f256e]">
                Learn More
                <FaArrowRight className="text-xs" />
              </button>

              <button className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-700 transition-all duration-300 hover:border-[#2d3292]/30 hover:bg-[#2d3292]/5">
                Our Services
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-2xl font-black text-[#2d3292] sm:text-3xl">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-wide text-gray-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2d3292]/20 hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#2d3292]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2d3292]/10" />

                {/* Icon */}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2d3292]/10 text-2xl text-[#2d3292] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2d3292] group-hover:text-white">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="relative text-lg font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Text */}
                <p className="relative mt-3 text-sm leading-7 text-gray-500">
                  Professional technology solutions designed to help individuals
                  and businesses succeed digitally.
                </p>

                {/* Bottom Line */}
                <div className="mt-5 h-[2px] w-12 rounded-full bg-[#fecb0b] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
