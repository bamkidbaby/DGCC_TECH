import AboutSection from "../components/home/AboutSection";
import FAQSection from "../components/home/FAQSection";
import FooterSection from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import PricingSection from "../components/home/PricingSection";
import ProcessSection from "../components/home/ProcessSection";
import ServicesOverview from "../components/home/ServicesOverview";
import ServicesStrip from "../components/home/ServicesStrip";
import TestimonialsSection from "../components/home/TestimonialsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <div id="top" className="scroll-smooth bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#f8f1ff] to-[#fff4ed]">
        <div className="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-[#2d3292]/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-400/20 blur-3xl" />

        <HeroSection />
        <ServicesStrip />
      </div>

      <AboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
}
