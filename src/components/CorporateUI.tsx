import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
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
      className={`rounded-2xl border border-[#e5e7eb] bg-white ${className}`}
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
          ? "grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          : "max-w-3xl"
      }
    >
      <div>
        <p
          data-aos="fade-down"
          className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]"
        >
          {eyebrow}
        </p>
        <h2
          data-aos="fade-down"
          data-aos-delay="90"
          className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl"
        >
          {title}
        </h2>
      </div>
      {body ? (
        <p
          data-aos={align === "split" ? "fade-left" : "fade-down"}
          data-aos-delay="170"
          className="max-w-2xl text-base leading-7 text-[#6b7280]"
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
          className="rounded-2xl border border-[#e5e7eb] bg-white p-6"
        >
          <p className="text-3xl font-semibold tracking-tight text-black">
            {item.value}
          </p>
          <p className="mt-3 text-sm leading-6 text-[#6b7280]">{item.label}</p>
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
    <div data-aos="fade-up" data-aos-duration="700">
      <Link
        to={href}
        className="group block overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white transition duration-200 hover:border-[#9ca3af]"
      >
        {image ? (
          <img src={image} alt={title} className="h-56 w-full object-cover" />
        ) : null}
        <div className="p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#6b7280]">{summary}</p>
          <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#2a308e] transition group-hover:text-black">
            Read more
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
      className="rounded-2xl border border-[#e5e7eb] bg-white p-6 transition duration-200 hover:border-[#9ca3af]"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
        Course
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#6b7280]">{summary}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#e5e7eb] pt-5">
        <p className="text-2xl font-semibold text-[#2a308e]">{price}</p>
        {duration ? <p className="text-sm text-[#6b7280]">{duration}</p> : null}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <WhatsAppCTAButton courseName={title} fullWidth />
        <Link
          to={href}
          className="inline-flex items-center justify-center rounded-md bg-[#2a308e] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
        >
          View course details
        </Link>
      </div>
    </div>
  );
}

export function CourseGrid({ items }: { items: CourseItem[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <CourseCard
          key={item.slug}
          title={item.title}
          summary={item.summary}
          price={item.price}
          duration={item.duration}
          href={`/training/${item.slug}`}
        />
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
            data-aos={item.size === "large" ? "zoom-in" : item.size === "tall" ? "fade-left" : "fade-up"}
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
          <SurfaceCard className="h-full overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
                {item.role}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black">
                {item.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
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
    <ShellSection className="pt-4">
      <div
        data-aos="zoom-in-up"
        className="mx-auto max-w-7xl rounded-2xl border border-[#e5e7eb] bg-white px-6 py-8 sm:px-8 sm:py-10"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
              Ready to move forward
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b7280]">
              {body}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={primary.href}
              className="inline-flex items-center justify-center rounded-md bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
            >
              {primary.label}
            </Link>
            {secondary ? (
              <Link
                to={secondary.href}
                className="inline-flex items-center justify-center rounded-md bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
              >
                {secondary.label}
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
