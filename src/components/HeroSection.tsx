import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import simpleHeroBg from "@/assets/simple-hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-stars overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/dhea2aqxb/video/upload/1111_eu935d.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full blur-sm opacity-80 float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full blur-sm opacity-60 float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary rounded-full blur-sm opacity-70 float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex items-center justify-center min-h-screen">
          {/* Centered Content */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-primary/10 p-2 shadow-glow">
                <img 
                  src="/lovable-uploads/3e79a7f6-4997-4841-9741-8f0f44c9b212.png" 
                  alt="Mysttic Numbers Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="font-cosmic text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Unlock the Power of Your Numbers
              <span className="inline-block ml-3">
                <Sparkles className="w-12 h-12 text-primary" />
              </span>
            </h1>
            
            <p className="font-mystical text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Discover your Life Path, Destiny, and Personality with Professional Numerology Readings
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="px-8 py-4">
                Get My Reading ✨
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Orbs */}
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute top-32 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
    </section>
  );
};