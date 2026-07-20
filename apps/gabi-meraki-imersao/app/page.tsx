import {
  AboutSection,
  BenefitsSection,
  ChecklistSection,
  Footer,
  Header,
  Hero,
  HowItWorksSection,
  MaterialsSection,
  OvenSection,
  PainPointsSection,
  PricingSection,
  SupportSection,
  TechniquesSection,
  TestimonialSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPointsSection />
        <TechniquesSection />
        <OvenSection />
        <HowItWorksSection />
        <MaterialsSection />
        <ChecklistSection />
        <PricingSection />
        <BenefitsSection />
        <TestimonialSection />
        <AboutSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
