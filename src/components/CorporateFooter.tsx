import { Link } from "react-router-dom";
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
  return (
    <footer className="border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="DGCC TECH"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight text-black">
                DGCC TECH
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
                Connecting the dots in tech
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#6b7280]">
            DGCC TECH provides practical digital services, training, repairs,
            and registration support for businesses, students, and growing
            teams.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@dgcctech.com"
              className="inline-flex items-center rounded-md border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-black transition hover:border-[#9ca3af] hover:bg-[#f9fafb]"
            >
              hello@dgcctech.com
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-[#2a308e] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#facc15] hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
            Navigation
          </p>
          <div className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-sm text-[#6b7280] transition hover:text-[#2a308e]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
            Services
          </p>
          <div className="mt-5 space-y-3">
            {capabilities.map((item) => (
              <p key={item} className="text-sm text-[#6b7280]">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
            Office
          </p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-[#6b7280]">
            <a
              href={officeMapLink}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-[#2a308e]"
            >
              {officeAddress}
            </a>
            <p>Mon - Sat / 8:00 AM - 7:00 PM</p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-[#2a308e]"
            >
              +234 708 252 3166
            </a>
            <a
              href={`https://wa.me/${whatsappSecondaryNumber}`}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-[#2a308e]"
            >
              +234 704 537 1328
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5e7eb] px-4 py-4 text-sm text-[#6b7280] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          Copyright {new Date().getFullYear()} DGCC TECH. Built for real
          business technology needs.
        </div>
      </div>
    </footer>
  );
}
