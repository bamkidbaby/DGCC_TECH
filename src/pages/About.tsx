import { useEffect } from "react";
import CorporatePageHero from "../components/CorporatePageHero";
import {
  CTASection,
  SectionHeader,
  ShellSection,
  StatsStrip,
  SurfaceCard,
  TeamGrid,
} from "../components/CorporateUI";
import { brandStats, teamMembers } from "../data/siteContent";

const principles = [
  "Present technology services with clarity and professionalism.",
  "Support both business clients and learners with practical guidance.",
  "Build trust through clean communication, not visual noise.",
];

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CorporatePageHero
        badge="About DGCC TECH"
        title="A technology company focused on practical outcomes and clean communication."
        subtitle="DGCC TECH exists to help people and organizations handle digital work, training, support, and operational tasks through a more dependable and business-ready experience."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Talk to our team", href: "/contact" }}
        secondaryCta={{ label: "Explore services", href: "/services" }}
        stats={brandStats.slice(1)}
      />

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SurfaceCard className="p-7 sm:p-8">
            <SectionHeader
              eyebrow="Company overview"
              title="DGCC TECH brings multiple digital and technical support lines under one clear brand."
              body="That includes websites, design, training, computer support, registrations, and related services that people often need from one dependable source."
            />
          </SurfaceCard>
          <SurfaceCard className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
              alt="DGCC TECH workspace"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </SurfaceCard>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <StatsStrip items={brandStats} />
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Team"
            title="The company is presented through clear operating roles, not just service labels."
            body="Placing the team here strengthens trust at the exact point where visitors are learning who DGCC TECH is, how the company works, and who supports the client experience."
            align="split"
          />
          <div className="mt-12">
            <TeamGrid items={teamMembers} />
          </div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Principles"
            title="Three ideas guide how the company shows up online and serves clients."
            body="The goal is to keep the experience useful, credible, and easy to trust."
            align="split"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle} data-aos="fade-up">
                <SurfaceCard className="h-full p-7">
                  <p className="text-lg font-semibold leading-8 text-black">{principle}</p>
                </SurfaceCard>
              </div>
            ))}
          </div>
        </div>
      </ShellSection>

      <CTASection
        title="If you need technology support that feels more organized and more professional, DGCC TECH is built for that."
        body="The team can support one focused request or help shape a broader service path around your business or training need."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}
