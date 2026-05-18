import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

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
  "Computer Repairs",
  "Cybersecurity",
  "Printing",
  "Online Registration",
];

export default function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-white/10 bg-[#070d1b]">
        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.7fr_0.8fr_0.9fr] lg:px-10 lg:py-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-2">
                <img src={logo} alt="DGCC TECH" className="h-10 w-10 object-contain" />
              </div>
              <div>
                <p className="editorial-title text-lg font-black tracking-tight text-white">DGCC TECH</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">Connecting the dots in tech</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              A premium technology hub blending training, production services, repair support, and digital execution for modern clients.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@dgcctech.com"
                className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-black transition hover:bg-white/10"
              >
                hello@dgcctech.com
              </a>
              <a
                href="https://wa.me/2348000000000"
                className="rounded-full bg-[#2d3292] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3b41b8]"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7c8dff]">Navigation</p>
            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link key={link.name} to={link.href} className="block text-sm text-white/58 transition hover:text-white">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7c8dff]">Capabilities</p>
            <div className="mt-5 space-y-3">
              {capabilities.map((item) => (
                <p key={item} className="text-sm text-white/58">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7c8dff]">Visit or call</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/58">
              <p>Lagos, Nigeria</p>
              <p>Mon - Sat / 8:00 AM - 6:00 PM</p>
              <p>+234 800 000 0000</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 px-6 py-4 text-sm text-white/38 sm:px-8 lg:px-10">
          © {new Date().getFullYear()} DGCC TECH. Crafted for real-world digital growth.
        </div>
      </div>
    </footer>
  );
}
