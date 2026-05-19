import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import CorporatePageHero from "../components/CorporatePageHero";
import {
  SectionHeader,
  ShellSection,
  SurfaceCard,
} from "../components/CorporateUI";
import {
  officeAddress,
  officeMapLink,
  whatsappNumber,
  whatsappSecondaryNumber,
} from "../data/siteContent";

const FORM_ENDPOINT = ["https://api.", "web3forms.com", "/submit"].join("");
const ACCESS_KEY = String.fromCharCode(
  49,
  53,
  51,
  100,
  51,
  98,
  57,
  99,
  45,
  57,
  98,
  55,
  48,
  45,
  52,
  53,
  102,
  52,
  45,
  56,
  51,
  52,
  55,
  45,
  56,
  100,
  50,
  53,
  56,
  55,
  100,
  51,
  55,
  50,
  99,
  50,
);

const contactMeta = [
  {
    label: "Email",
    value: "hello@dgcctech.com",
    href: "mailto:hello@dgcctech.com",
  },
  {
    label: "WhatsApp",
    value: "+234 708 252 3166",
    href: `https://wa.me/${whatsappNumber}`,
  },
  { label: "Office Hours", value: "Mon - Sat / 8:00 AM - 6:00 PM" },
  { label: "Location", value: officeAddress, href: officeMapLink },
  {
    label: "Alt WhatsApp",
    value: "+234 704 537 1328",
    href: `https://wa.me/${whatsappSecondaryNumber}`,
  },
];

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", ACCESS_KEY);

    setLoading(true);
    setResult("Sending...");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult("Message sent successfully");
        form.reset();
      } else {
        setResult("Something went wrong");
      }
    } catch (error) {
      console.error("Web3Forms submission failed", error);
      setResult("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <CorporatePageHero
        badge="Contact DGCC TECH"
        title="Speak with a team that handles technology requests clearly and professionally."
        subtitle="Use the contact page for service requests, project enquiries, training questions, repairs, registrations, or general business communication."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
        cta={{ label: "Explore services", href: "/services" }}
        secondaryCta={{ label: "View training", href: "/training" }}
      />

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <SectionHeader
              eyebrow="Send a message"
              title="Tell us what you need."
              body="The contact form is open for websites, design requests, technical support, course enquiries, repairs, and business support needs."
            />
            <SurfaceCard className="mt-8 p-6 sm:p-8">
              <div data-aos="fade-up" className="mx-auto w-full max-w-xl">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-black"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      autoComplete="name"
                      className="w-full rounded-md border border-[#e5e7eb] px-4 py-3 text-black outline-none transition-colors duration-200 placeholder:text-[#6b7280] focus:border-[#2a308e]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-black"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      autoComplete="email"
                      className="w-full rounded-md border border-[#e5e7eb] px-4 py-3 text-black outline-none transition-colors duration-200 placeholder:text-[#6b7280] focus:border-[#2a308e]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="text-sm font-medium text-black"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="w-full rounded-md border border-[#e5e7eb] px-4 py-3 text-black outline-none transition-colors duration-200 placeholder:text-[#6b7280] focus:border-[#2a308e]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md bg-[#2a308e] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>

                {result ? (
                  <p
                    className={`mt-5 text-sm ${result === "Message sent successfully" ? "text-[#2a308e]" : "text-[#6b7280]"}`}
                  >
                    {result}
                  </p>
                ) : null}
              </div>
            </SurfaceCard>
          </div>

          <aside className="space-y-4">
            {contactMeta.map((item) => (
              <SurfaceCard key={item.label} className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
                  {item.label}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("https://")
                        ? "noreferrer"
                        : undefined
                    }
                    className="mt-3 block text-base text-black transition hover:text-[#2a308e]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-base text-black">{item.value}</p>
                )}
              </SurfaceCard>
            ))}
          </aside>
        </div>
      </ShellSection>
    </>
  );
}
