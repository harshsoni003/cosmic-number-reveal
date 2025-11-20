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
        <source src="https://res.cloudinary.com/dquljxbwp/video/upload/204926-925688162_yzhqhy.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full blur-sm opacity-80 float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full blur-sm opacity-60 float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary rounded-full blur-sm opacity-70 float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center min-h-screen pt-4 sm:pt-10">
          {/* Logo at top with glow effect */}
          <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="relative">
              <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-primary/30 blur-xl animate-pulse"></div>
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-primary/10 p-2 sm:p-3 shadow-glow border border-primary/20">
                <img 
                  src="/lovable-uploads/3e79a7f6-4997-4841-9741-8f0f44c9b212.png" 
                  alt="Mysttic Numbers Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Centered Content */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="font-cosmic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 text-white animate-fade-in leading-tight text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                <span className="whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">ILLUMINATE YOUR PATH WITH</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-primary drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">MYSTTIC FLAME</span>
                <span className="inline-block ml-2 sm:ml-3">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary animate-pulse drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]" />
                </span>
              </div>
            </h1>
            
            <p className="font-mystical text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Experience the power of intuitive guidance and unlock your full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold hover-scale w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/918369981540', '_blank')}
              >
                Get My Reading ✨
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold hover-scale w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('spiritual-journey');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
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