import { PublicLayout } from "../layouts/PublicLayout";
import { HeroSection } from "../components/home/HeroSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { ProductsOverview } from "../components/home/ProductsOverview";
import { FinalExpenseHighlight } from "../components/home/FinalExpenseHighlight";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { CarrierBanner } from "../components/home/CarrierBanner";
import { AgentRecruitCTA } from "../components/home/AgentRecruitCTA";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { LeadCaptureSection } from "../components/home/LeadCaptureSection";

export function LandingPage() {
  return (
    <PublicLayout>
      <HeroSection />
      <HowItWorksSection />
      <ProductsOverview />
      <FinalExpenseHighlight />
      <WhyChooseUs />
      <CarrierBanner />
      <AgentRecruitCTA />
      <TestimonialsSection />
      <LeadCaptureSection />
    </PublicLayout>
  );
}
