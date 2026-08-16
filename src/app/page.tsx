import HeroSection from "@/components/sections/HeroSection";
import MobileActionSection from "@/components/sections/MobileActionSection";
import MobileCloseSection from "@/components/sections/MobileCloseSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GeographySection from "@/components/sections/GeographySection";
import TrustSection from "@/components/sections/TrustSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <MobileActionSection />

      <div className="lg:hidden">
        <ServicesSection />
        <GeographySection />
      </div>

      <MobileCloseSection />

      <div className="hidden lg:block">
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <GeographySection />
        <TrustSection />
        <FinalCTASection />
      </div>

      <Footer />
      <MobileStickyCTA />
    </main>
  );
}