import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import {
  officeAddress,
  officeMapLink,
  whatsappNumber,
  whatsappSecondaryNumber,
} from "../data/siteContent";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Training", href: "/training" },
  { name: "Repairs", href: "/repairs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const capabilities = [
  "Website Design",
  "Graphic Design",
  "Computer Services",
  "Cybersecurity Support",
  "Printing & Photocopy",
  "Online Registration Support",
];

export default function CorporateFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0b1024] to-[#050816]" />

        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#2a308e]/30 via-transparent to-transparent blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-[#facc15]/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* NEWSLETTER SECTION */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Stay updated with DGCC TECH
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Get updates on training, services, tech tips, and new solutions
                we’re building.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#2a308e]"
              />

              <button className="rounded-lg bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#fdcb0b]">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="DGCC TECH"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="text-base font-semibold">DGCC TECH</p>
                <p className="text-xs text-white/60">
                  Practical technology. Real results.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/60">
              DGCC TECH delivers structured digital services, training, and
              technical support designed for individuals, businesses, and
              growing organizations.
            </p>

            <div className="mt-6 flex gap-4 text-sm text-white/60">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="hover:text-white transition"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hello@dgcctech.com"
                className="hover:text-white transition"
              >
                Email
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              Navigation
            </p>
            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              Services
            </p>
            <div className="mt-5 space-y-3">
              {capabilities.map((item) => (
                <p key={item} className="text-sm text-white/60">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Office */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              Office
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a
                href={officeMapLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                {officeAddress}
              </a>

              <p>Mon – Sat · 8:00 AM – 7:00 PM</p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="hover:text-white transition"
              >
                +234 708 252 3166
              </a>

              <a
                href={`https://wa.me/${whatsappSecondaryNumber}`}
                className="hover:text-white transition"
              >
                +234 704 537 1328
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} DGCC TECH. Built for structured digital
          growth and real-world execution.
        </div>
      </div>
    </footer>
  );
}
