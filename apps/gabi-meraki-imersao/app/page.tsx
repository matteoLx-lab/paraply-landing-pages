import {
  AboutSection,
  BenefitsSection,
  ChecklistSection,
  DorMirrorSection,
  Footer,
  Header,
  Hero,
  HowItWorksSection,
  MaterialsSection,
  OvenSection,
  PricingSection,
  QualificationSection,
  StatHighlightSection,
  SupportSection,
  TechniquesSection,
  TestimonialSection,
  TransitionSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatHighlightSection />
        <DorMirrorSection />
        <TransitionSection />
        <TechniquesSection />
        <OvenSection />
        <HowItWorksSection />
        <MaterialsSection />
        <ChecklistSection />
        <BenefitsSection />
        <QualificationSection />
        <TestimonialSection />
        <PricingSection />
        <AboutSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
