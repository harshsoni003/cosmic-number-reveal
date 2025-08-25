import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InteractiveSection } from "@/components/InteractiveSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <InteractiveSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
