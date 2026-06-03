import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

type HeroStat = {
  label: string;
  value: string;
};

type Props = {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  image?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: HeroStat[];
};

function ActionLink({
  href,
  label,
  primary = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  const className = primary
    ? "group relative inline-flex items-center gap-3 overflow-hidden rounded-none border border-[#fecb0b] bg-[#fecb0b] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-[#fecb0b]"
    : "group relative inline-flex items-center gap-3 overflow-hidden rounded-none border border-white/30 bg-transparent px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white hover:text-[#2d3292]";

  return href.startsWith("/") ? (
    <Link to={href} className={className}>
      <span className="relative z-10">{label}</span>
      <FiArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  ) : (
    <a href={href} className={className}>
      <span className="relative z-10">{label}</span>
      <FiArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export default function CorporatePageHero({
  badge,
  title,
  titleAccent,
  subtitle,
  image,
  cta,
  secondaryCta,
  stats = [],
}: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#2d3292] lg:min-h-[700px]">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d3292]/80 via-transparent to-[#1b1f44] pointer-events-none" />

      <div className="mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 py-20 lg:min-h-[700px] lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          className="relative z-10 w-full lg:w-[55%]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#fecb0b]"></span>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fecb0b]">
              {badge}
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl font-light leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {titleAccent ? (
              <>
                <span className="block font-extrabold text-[#fecb0b]">
                  {titleAccent}
                </span>
                {title}
              </>
            ) : (
              title
            )}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/80"
          >
            {subtitle}
          </motion.p>

          {(cta || secondaryCta) && (
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
              {cta && <ActionLink href={cta.href} label={cta.label} primary />}
              {secondaryCta && (
                <ActionLink href={secondaryCta.href} label={secondaryCta.label} />
              )}
            </motion.div>
          )}

          {stats.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <p className="text-3xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {image && (
          <motion.div
            className="relative mt-16 w-full lg:mt-0 lg:w-[45%]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -left-4 -top-4 bottom-8 right-8 border border-[#fecb0b]/30 z-0 hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 top-8 left-8 border border-white/10 z-0 hidden lg:block" />

            <div className="relative z-10 overflow-hidden bg-[#1b1f44] aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none shadow-2xl">
              <motion.img
                src={image}
                alt="Corporate Hero"
                className="h-full w-full object-cover grayscale-[15%]"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
