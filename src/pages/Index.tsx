import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { InteractiveSection } from "@/components/InteractiveSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <InteractiveSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
