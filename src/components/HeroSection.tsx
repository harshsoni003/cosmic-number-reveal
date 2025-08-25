import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import cosmicHeroMain from "@/assets/cosmic-hero-main.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-stars overflow-hidden">
      {/* Epic Cosmic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicHeroMain})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/30" />
      
      {/* Mystical Energy Overlays */}
      <div className="absolute inset-0">
        {/* Flowing energy patterns */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-secondary/8 rounded-full blur-3xl animate-spin" style={{ animationDuration: '35s' }} />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Logo with Cosmic Aura */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Cosmic Aura Background */}
              <div className="absolute inset-0 w-32 h-32 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-2 rounded-full bg-gradient-to-l from-accent/35 via-primary/25 to-accent/35 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 animate-spin" style={{ animationDuration: '25s' }} />
              </div>
              
              {/* Logo Container */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-primary/20 p-4 shadow-cosmic backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/3e79a7f6-4997-4841-9741-8f0f44c9b212.png" 
                  alt="Mysttic Numbers Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-cosmic text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight">
            Illuminate Your Path with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mt-2">
              MYSTTIC NUMBERS
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-mystical text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Experience the power of ancient numerology and unlock your full spiritual potential through cosmic number wisdom
          </p>
          
          {/* Call to Action Button */}
          <div className="flex justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="px-12 py-6 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-cosmic hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              GET STARTED
            </Button>
          </div>
          
          {/* Mystical Energy Indicators */}
          <div className="flex justify-center space-x-8 opacity-60">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <span className="font-mystical text-sm text-muted-foreground">Life Path</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <span className="font-mystical text-sm text-muted-foreground">Destiny</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <span className="font-mystical text-sm text-muted-foreground">Purpose</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cosmic Wave Pattern at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C150,80 350,40 600,60 C850,80 1050,120 1200,100 L1200,120 Z" fill="hsl(var(--background))" fillOpacity="0.8"/>
          <path d="M0,120 C200,60 400,80 600,70 C800,60 1000,90 1200,80 L1200,120 Z" fill="hsl(var(--background))" fillOpacity="0.6"/>
        </svg>
      </div>
    </section>
  );
};