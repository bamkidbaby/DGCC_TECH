import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

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
    ? "inline-flex items-center gap-2 rounded-md bg-[#fecb0b] px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-[#f5c000] hover:scale-[1.02]"
    : "inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-white/10 hover:scale-[1.02]";

  return href.startsWith("/") ? (
    <Link to={href} className={className}>
      {label}
      <FiArrowRight className="h-4 w-4" />
    </Link>
  ) : (
    <a href={href} className={className}>
      {label}
      <FiArrowRight className="h-4 w-4" />
    </a>
  );
}

export default function DgccHero({
  badge,
  title,
  titleAccent,
  subtitle,
  image,
  cta,
  secondaryCta,
  stats = [],
}: Props) {
  return (
    <>
      <style>{`
        @keyframes ripple {
          0%   { transform: scale(0.85); opacity: 0.5; }
          50%  { opacity: 0.2; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        .dgcc-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.18);
          animation: ripple 3s ease-out infinite;
          pointer-events: none;
        }

        .dgcc-ring:nth-child(1) { animation-delay: 0s; }
        .dgcc-ring:nth-child(2) { animation-delay: 1s; }
        .dgcc-ring:nth-child(3) { animation-delay: 2s; }
      `}</style>

      <section className="relative flex min-h-[520px] flex-col overflow-hidden bg-[#2d3292] lg:min-h-[560px] lg:flex-row">
        {/* Left Panel */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:w-[52%] lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d3292] via-[#262b75] to-[#1b1f44] opacity-95" />

          {/* Ripple Rings */}
          <span
            className="dgcc-ring"
            style={{ width: 220, height: 220, bottom: -60, left: -60 }}
          />
          <span
            className="dgcc-ring"
            style={{ width: 220, height: 220, bottom: -60, left: -60 }}
          />
          <span
            className="dgcc-ring"
            style={{ width: 220, height: 220, bottom: -60, left: -60 }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <p
              data-aos="fade-down"
              data-aos-duration="400"
              className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#fecb0b]"
            >
              {badge}
            </p>

            {/* Title */}
            <h1
              data-aos="fade-down"
              data-aos-duration="450"
              data-aos-delay="90"
              className="mt-4 text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {titleAccent ? (
                <>
                  <span className="font-extrabold text-[#fecb0b]">
                    {titleAccent}
                  </span>
                  <br />
                  {title}
                </>
              ) : (
                title
              )}
            </h1>

            {/* Subtitle */}
            <p
              data-aos="fade-down"
              data-aos-duration="450"
              data-aos-delay="160"
              className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg"
            >
              {subtitle}
            </p>

            {/* CTA Buttons */}
            {(cta || secondaryCta) && (
              <div
                data-aos="fade-down"
                data-aos-duration="450"
                data-aos-delay="230"
                className="mt-8 flex flex-wrap gap-4"
              >
                {cta && (
                  <ActionLink href={cta.href} label={cta.label} primary />
                )}

                {secondaryCta && (
                  <ActionLink
                    href={secondaryCta.href}
                    label={secondaryCta.label}
                  />
                )}
              </div>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-delay={280 + i * 80}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel */}
        {image && (
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="180"
            className="relative w-full overflow-hidden lg:w-[48%]"
          >
            <div className="absolute inset-0 z-10 bg-[#2d3292]/30" />

            <div className="absolute bottom-0 left-0 z-20 h-28 w-28 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#fecb0b]/20" />

            <img
              src={image}
              alt=""
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-full"
            />
          </div>
        )}
      </section>
    </>
  );
}
