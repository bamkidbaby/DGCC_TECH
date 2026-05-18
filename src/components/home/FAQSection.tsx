import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    category: "Services",
    q: "What services does DGCC TECH offer?",
    a: "We offer six core services: ICT & cybersecurity training, laptop and phone repairs, professional graphic design, printing, web development, and a range of online digital services like form submissions and account setups.",
  },
  {
    category: "Repairs",
    q: "Do you offer same-day repairs?",
    a: "Yes! Most device repairs — including screen replacements, battery swaps, and software fixes — are available same-day depending on parts availability. Drop in or call ahead to confirm.",
  },
  {
    category: "Training",
    q: "How long does ICT training take?",
    a: "Training duration varies by course. Starter modules run 1–2 weeks, while full programmes like our cybersecurity certification prep can span 4–8 weeks. We also offer weekend and evening classes.",
  },
  {
    category: "Web Design",
    q: "Can I get a custom website for my business?",
    a: "Absolutely. We design and develop custom websites tailored to your business — from simple landing pages to multi-page business sites with contact forms, galleries, and more.",
  },
  {
    category: "Printing",
    q: "What file formats do you accept for printing?",
    a: "We accept PDF, JPEG, PNG, Word (.docx), and CorelDRAW files. For best quality, we recommend sending print-ready PDFs at 300 DPI. We can also help convert your files if needed.",
  },
  {
    category: "Printing",
    q: "Do you offer bulk or contract printing?",
    a: "Yes, we cater to businesses and organisations needing regular or bulk printing. Contact us to discuss volume pricing and turn-around agreements.",
  },
  {
    category: "Repairs",
    q: "Is there a warranty on device repairs?",
    a: "Yes. We offer a 30-day warranty on all repair jobs. If the same fault reoccurs within that period, we'll fix it at no extra charge.",
  },
  {
    category: "General",
    q: "How do I get started or request a quote?",
    a: "You can walk into our centre, send us a message via WhatsApp or email, or fill out the contact form on this page. We typically respond within a few hours.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const answerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#f7f7f9] py-24 px-4 sm:px-6 lg:px-12">
      {/* Background glows */}
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-[#2d3292]/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#facc15]/8 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-[#eef0ff] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#2d3292]">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Got questions?{" "}
            <span className="text-[#2d3292]">We've got answers.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            Everything you need to know before you reach out.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`rounded-2xl bg-white overflow-hidden transition-shadow duration-300 ${
                  isOpen
                    ? "ring-2 ring-[#2d3292]/25 shadow-md shadow-[#2d3292]/8"
                    : "ring-1 ring-black/6 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start gap-4 px-6 py-5 text-left group cursor-pointer"
                >
                  {/* Number badge */}
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold transition-colors duration-200"
                    style={
                      isOpen
                        ? { background: "#2d3292", color: "#fff" }
                        : { background: "#f3f4f6", color: "#9ca3af" }
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Category tag */}
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-[#2d3292]/60">
                      {faq.category}
                    </span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-[15px] leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.span
                    animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.22 }}
                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
                    style={
                      isOpen
                        ? { background: "#2d3292", color: "#fff" }
                        : { background: "#f3f4f6", color: "#6b7280" }
                    }
                  >
                    {isOpen ? (
                      <FaMinus className="text-[10px]" />
                    ) : (
                      <FaPlus className="text-[10px]" />
                    )}
                  </motion.span>
                </button>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-16">
                        <div className="h-px w-full bg-gray-100 mb-4" />
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-gray-500">
            Still have a question?{" "}
            <a
              href="#contact"
              className="font-semibold text-[#2d3292] underline underline-offset-2 hover:text-[#1f2570] transition-colors"
            >
              Reach out to us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
