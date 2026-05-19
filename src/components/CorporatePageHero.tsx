import { Link } from "react-router-dom";

type HeroStat = {
  label: string;
  value: string;
};

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  image?: string;
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
    ? "inline-flex items-center justify-center rounded-md bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
    : "inline-flex items-center justify-center rounded-md bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black";

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

export default function CorporatePageHero({
  badge,
  title,
  subtitle,
  image,
  cta,
  secondaryCta,
  align = "split",
  stats = [],
}: Props) {
  return (
    <section className="border-b border-[#e5e7eb] bg-white px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className={align === "split" ? "grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : "max-w-4xl"}>
          <div className="max-w-3xl">
            <p
              data-aos="fade-down"
              className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]"
            >
              {badge}
            </p>
            <h1
              data-aos="fade-down"
              data-aos-delay="90"
              className="mt-4 text-[2rem] font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl"
            >
              {title}
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="160"
              className="mt-5 max-w-2xl text-base leading-8 text-[#6b7280] sm:text-lg"
            >
              {subtitle}
            </p>

            {(cta || secondaryCta) ? (
              <div
                data-aos="fade-down"
                data-aos-delay="230"
                className="mt-8 flex flex-wrap gap-3"
              >
                {cta ? <ActionLink href={cta.href} label={cta.label} primary /> : null}
                {secondaryCta ? <ActionLink href={secondaryCta.href} label={secondaryCta.label} /> : null}
              </div>
            ) : null}

            {stats.length > 0 ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    data-aos="zoom-in"
                    data-aos-delay={280 + index * 80}
                    className="rounded-2xl border border-[#e5e7eb] bg-white p-5"
                  >
                    <p className="text-2xl font-semibold text-black">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6b7280]">{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {align === "split" && image ? (
            <div
              data-aos="fade-left"
              data-aos-delay="180"
              className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white"
            >
              <img src={image} alt={title} className="h-full min-h-[320px] w-full object-cover" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
