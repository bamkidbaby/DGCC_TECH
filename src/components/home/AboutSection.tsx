import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShieldAlt,
  FaTools,
  FaPrint,
  FaPaintBrush,
  FaGlobe,
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Glow */}
      <div className="absolute left-[-120px] top-0 h-[250px] w-[250px] rounded-full bg-[#2d3292]/10 blur-3xl sm:h-[350px] sm:w-[350px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2d3292]/10 bg-[#2d3292]/5 px-4 py-2 text-[10px] sm:text-xs font-semibold tracking-wider text-[#2d3292] uppercase">
              About DGCC TECH
            </div>

            {/* Heading */}
            <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:mx-0">
              Empowering People Through Technology.
            </h2>

            {/* Paragraphs */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:mx-0">
              DGCC TECH is a modern ICT hub focused on practical tech training,
              digital services, repairs, printing, and creative solutions. We
              help students, businesses, and individuals gain real-world digital
              skills while providing reliable technology services.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:mx-0">
              From cybersecurity and web development to device repairs,
              registrations, branding, and design, DGCC TECH connects technology
              with opportunity.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:max-w-xl">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-gray-100 bg-[#fafafa] p-4 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-[#2d3292] sm:text-2xl">
                    {stat.number}
                  </h3>

                  <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group cursor-pointer rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#2d3292]/20 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2d3292]/10 text-xl text-[#2d3292] transition-all duration-300 group-hover:bg-[#2d3292] group-hover:text-white sm:h-14 sm:w-14 sm:text-2xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                  {service.title}
                </h3>

                {/* Text */}
                <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                  Professional and reliable tech solutions tailored to modern
                  needs.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
