import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

type HeroStat = {
  label: string;
  value: string;
};

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: "left" | "split";
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
    ? "inline-flex items-center rounded-full bg-[#2d3292] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(45,50,146,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#3b41b8]"
    : "inline-flex items-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-[#eef2ff] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/10";

  return href.startsWith("/") ? (
    <Link to={href} className={className}>
      {label}
    </Link>
  ) : (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

export default function PageHero({
  badge,
  title,
  subtitle,
  image,
  cta,
  secondaryCta,
  align = "split",
  stats = [],
}: Props) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#09101f] sm:rounded-[40px]">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <img src={image} alt={title} className="h-full w-full object-cover opacity-55" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,8,22,0.96)_18%,rgba(5,8,22,0.82)_46%,rgba(5,8,22,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,141,255,0.24),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(45,50,146,0.22),transparent_26%)]" />
        <div className="noise-overlay" />

        <div className="relative mx-auto max-w-7xl px-2 py-16 sm:px-4 sm:py-24 lg:px-8 lg:py-28">
          <div
            className={
              align === "split"
                ? "grid items-end gap-10 lg:grid-cols-[1.15fr_0.65fr]"
                : "max-w-4xl"
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-white/72 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#7c8dff]" />
                {badge}
              </div>

              <h1 className="editorial-title mt-8 max-w-4xl text-5xl font-black tracking-tight text-[#f8fafc] sm:text-6xl lg:text-7xl xl:text-[5.5rem] xl:leading-[0.92]">
                {title}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {subtitle}
              </p>

              {(cta || secondaryCta) && (
                <div className="mt-10 flex flex-wrap gap-4">
                  {cta && <ActionLink href={cta.href} label={cta.label} primary />}
                  {secondaryCta && (
                    <ActionLink href={secondaryCta.href} label={secondaryCta.label} />
                  )}
                </div>
              )}
            </motion.div>

            {align === "split" && (
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-5 backdrop-blur-2xl"
                  >
                    <p className="text-3xl font-black tracking-tight text-white">{stat.value}</p>
                    <p className="mt-2 max-w-[14rem] text-sm leading-6 text-white/62">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
