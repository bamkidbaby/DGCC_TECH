import { motion } from "framer-motion";
import {
  FaGlobe,
  FaLaptopCode,
  FaPaintBrush,
  FaPrint,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

const bottomServices = [
  {
    title: "Web Dev",
    description: "Modern websites",
    icon: <FaLaptopCode />,
  },
  {
    title: "Cybersecurity",
    description: "Security training",
    icon: <FaShieldAlt />,
  },
  {
    title: "Repairs",
    description: "Laptop & phones",
    icon: <FaTools />,
  },
  {
    title: "Design",
    description: "Branding solutions",
    icon: <FaPaintBrush />,
  },
  {
    title: "Printing",
    description: "Fast print services",
    icon: <FaPrint />,
  },
  {
    title: "Online",
    description: "Digital services",
    icon: <FaGlobe />,
  },
];

export default function ServicesStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="relative z-20 px-4 pb-10"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-[32px] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:grid-cols-3 lg:grid-cols-6">
        {bottomServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ y: -8 }}
            className="group rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-[#f7f8ff] p-4 transition-all duration-300 hover:bg-[#2d3292] hover:shadow-xl"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2d3292]/10 text-[#2d3292] transition-all duration-300 group-hover:bg-white group-hover:text-[#2d3292]">
              {service.icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-white">
              {service.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-gray-500 group-hover:text-blue-100">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
