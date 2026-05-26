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
  "Focus on solutions that are practical, scalable, and easy to maintain.",
  "Create a smoother experience for clients through organized workflows and dependable support.",
  "Keep digital services accessible for students, startups, organizations, and growing businesses.",
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
              body="We operate as a structured technology service hub delivering development, design, training, repairs, and digital support with consistency and reliability."
            />

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#52525b] sm:text-base">
              <p>
                DGCC TECH is built on the idea that technology services should
                not feel scattered or difficult to access. We bring everything
                together into a single system that is easy to understand and
                dependable to use.
              </p>

              <p>
                Our focus is delivering real outcomes—helping clients complete
                tasks, build skills, and improve digital systems without
                unnecessary complexity or confusion.
              </p>
            </div>
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
        <div className="mx-auto max-w-5xl">
          <SurfaceCard className="p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2a308e]">
                  Operational Focus
                </p>

                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-black">
                  Built to support both service delivery and digital learning.
                </h3>
              </div>

              <div className="space-y-4 text-sm leading-7 text-[#52525b] sm:text-base">
                <p>
                  DGCC TECH combines practical technology services with hands-on
                  guidance that helps clients understand and use digital tools
                  effectively.
                </p>

                <p>
                  We don’t only provide solutions—we ensure users can actually
                  work with them confidently, whether for business, education,
                  or personal growth.
                </p>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Team"
            title="The company is presented through clear operating roles, not just service labels."
            body="Every role within DGCC TECH contributes to a structured experience that prioritizes clarity, communication, and reliable delivery."
            align="split"
          />

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#52525b] sm:text-base">
            DGCC TECH operates as a coordinated team where technical work,
            client support, design, and training all work together to ensure
            consistent service quality across every project.
          </p>

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
                  <p className="text-lg font-semibold leading-8 text-black">
                    {principle}
                  </p>
                </SurfaceCard>
              </div>
            ))}
          </div>
        </div>
      </ShellSection>

      <CTASection
        title="If you need technology support that feels more organized and more professional, DGCC TECH is built for that."
        body="We help clients move from ideas or problems to structured digital solutions that actually work in real environments."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}
