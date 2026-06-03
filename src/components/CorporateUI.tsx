import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {
  getCourseWhatsAppLink,
  type CourseItem,
  type StatItem,
  type TeamMember,
} from "../data/siteContent";

export const revealUp = {};
export const stagger = {};

export function ShellSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

export function SurfaceCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative border border-[#e5e7eb] bg-white transition-all duration-300 hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "split";
}) {
  return (
    <div
      className={
        align === "split"
          ? "grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          : "max-w-3xl"
      }
    >
      <div>
        <div data-aos="fade-down" className="flex items-center gap-4">
          <span className="h-px w-6 bg-[#2a308e]"></span>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a308e]">
            {eyebrow}
          </p>
        </div>
        <h2
          data-aos="fade-down"
          data-aos-delay="90"
          className="mt-5 text-3xl font-bold tracking-tight text-black sm:text-4xl"
        >
          {title}
        </h2>
      </div>
      {body ? (
        <p
          data-aos={align === "split" ? "fade-left" : "fade-down"}
          data-aos-delay="170"
          className="max-w-2xl text-base leading-relaxed text-[#6b7280]"
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function StatsStrip({ items }: { items: StatItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={item.label}
          data-aos="zoom-in-up"
          data-aos-delay={index * 70}
          className="relative flex flex-col border border-[#e5e7eb] bg-white p-6 sm:p-8 transition-all duration-300 hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
        >
          <p className="text-4xl font-light tracking-tight text-black">
            {item.value}
          </p>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b7280]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ServiceCard({
  title,
  summary,
  image,
  href,
  eyebrow,
}: {
  title: string;
  summary: string;
  image?: string;
  href: string;
  eyebrow: string;
}) {
  return (
    <div data-aos="fade-up" data-aos-duration="700" className="h-full">
      <Link
        to={href}
        className="group flex h-full flex-col overflow-hidden border border-[#e5e7eb] bg-white transition-all duration-300 hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
      >
        {image ? (
          <div className="relative h-56 w-full overflow-hidden border-b border-[#e5e7eb] bg-[#fafaf9]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b7280] transition-colors duration-300 group-hover:text-[#2a308e]">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-black">
            {title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-[#6b7280]">
            {summary}
          </p>
          <div className="mt-8 border-t border-dashed border-gray-200 pt-4">
            <span className="inline-flex items-center gap-3 text-sm font-semibold text-black transition-colors duration-300 group-hover:text-[#2a308e]">
              Explore service
              <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function WhatsAppCTAButton({
  courseName,
  className = "",
  fullWidth = false,
}: {
  courseName: string;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <a
      href={getCourseWhatsAppLink(courseName)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-md bg-[#2a308e] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black ${fullWidth ? "w-full" : ""} ${className}`}
    >
      Enroll on WhatsApp
    </a>
  );
}

export function CourseCard({
  title,
  summary,
  price,
  duration,
  href,
}: {
  title: string;
  summary: string;
  price: string;
  duration?: string;
  href: string;
}) {
  return (
    <div
      data-aos="zoom-in-up"
      className="relative flex flex-col border border-[#e5e7eb] bg-white p-6 sm:p-8 transition-all duration-300 hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b7280]">
        Course Details
      </p>
      <h3 className="mt-3 text-2xl font-bold tracking-tight text-black">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#6b7280]">
        {summary}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-gray-200 pt-5">
        <p className="text-xl font-bold tracking-tight text-black">{price}</p>
        {duration ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b7280]">
            {duration}
          </p>
        ) : null}
      </div>
      <div className="mt-8 grid gap-4 border-t border-[#e5e7eb] pt-4 sm:grid-cols-2">
        <WhatsAppCTAButton courseName={title} fullWidth />
        <Link
          to={href}
          className="inline-flex w-full items-center justify-center border border-black bg-transparent px-4 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          Read full details
        </Link>
      </div>
    </div>
  );
}

export function CourseGrid({ items }: { items: CourseItem[] }) {
  return (
    <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {items.map((item, index) => (
        <div
          key={item.slug}
          data-aos="fade-up"
          data-aos-delay={index * 50}
          className="group relative flex flex-col bg-white border border-[#e5e7eb] transition-all duration-300 hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
        >
          <div className="relative h-48 w-full overflow-hidden border-b border-[#e5e7eb] bg-[#fafaf9] sm:h-[220px]">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:opacity-0" />
          </div>

          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-gray-200 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b7280] transition-colors duration-300 group-hover:text-[#2a308e]">
                {item.duration}
              </span>
              <span className="text-sm font-semibold tracking-tight text-black">
                {item.price}
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-black line-clamp-2">
              {item.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6b7280] line-clamp-3">
              {item.summary}
            </p>

            <div className="mt-8 pt-4">
              <Link
                to={`/training/${item.slug}`}
                className="group/btn inline-flex items-center gap-4 text-sm font-semibold text-black outline-none"
              >
                <span className="relative overflow-hidden inline-block">
                  <span className="inline-block transition-transform duration-300 ease-out group-hover/btn:-translate-y-full">
                    View Course Details
                  </span>
                  <span className="absolute left-0 top-0 inline-block translate-y-full text-[#2a308e] transition-transform duration-300 ease-out group-hover/btn:translate-y-0">
                    View Course Details
                  </span>
                </span>

                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 ease-out group-hover/btn:border-[#2a308e] group-hover/btn:bg-[#2a308e]">
                  <FaArrowRight className="text-[10px] text-black transition-colors duration-300 group-hover/btn:text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function GalleryGrid({
  items,
}: {
  items: { title: string; image: string; size?: string }[];
}) {
  return (
    <div className="grid auto-rows-[200px] gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const span =
          item.size === "large"
            ? "md:col-span-2 md:row-span-2"
            : item.size === "wide"
              ? "xl:col-span-2"
              : item.size === "tall"
                ? "md:row-span-2"
                : "";

        return (
          <div
            key={item.title}
            data-aos={
              item.size === "large"
                ? "zoom-in"
                : item.size === "tall"
                  ? "fade-left"
                  : "fade-up"
            }
            className={span}
          >
            <div className="flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white">
              <div className="flex-1 min-h-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-t border-[#e5e7eb] p-4">
                <p className="text-sm font-medium text-black">{item.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function TeamGrid({ items }: { items: TeamMember[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <div key={item.name} data-aos="fade-up" data-aos-delay={index * 70}>
          <SurfaceCard className="group flex h-full flex-col overflow-hidden">
            <div className="relative h-[320px] w-full overflow-hidden border-b border-[#e5e7eb] bg-[#fafaf9]">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a308e]">
                {item.role}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-black">
                {item.name}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#6b7280]">
                {item.bio}
              </p>
            </div>
          </SurfaceCard>
        </div>
      ))}
    </div>
  );
}

export function CTASection({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <ShellSection className="pt-4 pb-12">
      <div
        data-aos="zoom-in-up"
        className="relative mx-auto max-w-7xl overflow-hidden border border-[#e5e7eb] bg-white px-6 py-12 sm:px-12 sm:py-16"
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-6 bg-[#2a308e]"></span>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a308e]">
                Ready to move forward
              </p>
            </div>
            <h2 className="mt-6 text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#6b7280]">
              {body}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:pb-2">
            <Link
              to={primary.href}
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#2a308e] bg-[#2a308e] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#2a308e]"
            >
              <span className="relative z-10">{primary.label}</span>
            </Link>
            {secondary ? (
              <Link
                to={secondary.href}
                className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#e5e7eb] bg-transparent px-7 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:border-black hover:bg-black hover:text-white"
              >
                <span className="relative z-10">{secondary.label}</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </ShellSection>
  );
}

export function ProcessTimeline({
  items,
}: {
  items: { title: string; detail: string }[];
}) {
  return (
    <div className="relative space-y-8 before:absolute before:left-[12px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-[#e5e7eb]">
      {items.map((item, index) => (
        <div
          key={item.title}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay={index * 70}
          className="relative pl-10"
        >
          <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2a308e] text-xs font-semibold text-white">
            {index + 1}
          </div>
          <h3 className="text-xl font-semibold text-black">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#6b7280]">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div
            key={item.question}
            data-aos="fade-up"
            data-aos-delay={index * 60}
            className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span className="text-lg font-semibold text-black">
                {item.question}
              </span>
              <span className="text-xl font-medium text-[#2a308e]">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden pt-4 text-sm leading-7 text-[#6b7280]"
                >
                  {item.answer}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
