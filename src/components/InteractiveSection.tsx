import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Sparkles } from "lucide-react";

export const InteractiveSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: ""
  });
  const [results, setResults] = useState<any>(null);

  const calculateNumbers = () => {
    // Placeholder calculation - replace with actual numerology logic later
    const lifePathNumber = Math.floor(Math.random() * 9) + 1;
    const destinyNumber = Math.floor(Math.random() * 9) + 1;
    const personalityNumber = Math.floor(Math.random() * 9) + 1;
    
    setResults({
      lifePath: lifePathNumber,
      destiny: destinyNumber,
      personality: personalityNumber
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-cosmic opacity-20" />
      <div className="absolute inset-0 cosmic-stars" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-cosmic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Calculate Your Numbers
          </h2>
          <p className="font-mystical text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Enter your information to discover your personal numerology profile
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card-cosmic rounded-2xl p-6 sm:p-8 shadow-cosmic">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="font-mystical text-sm font-medium text-foreground mb-2 block">
                  Full Name
                </label>
                <Input
                  placeholder="Enter your full legal name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="text-base sm:text-lg"
                />
              </div>
              
              <div>
                <label className="font-mystical text-sm font-medium text-foreground mb-2 block">
                  Date of Birth
                </label>
                <Input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  className="text-base sm:text-lg"
                />
              </div>
              
              <Button 
                onClick={calculateNumbers}
                variant="hero" 
                size="lg" 
                className="w-full text-base sm:text-lg py-3 sm:py-4"
                disabled={!formData.fullName || !formData.birthDate}
              >
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Reveal My Numbers
              </Button>
            </div>
            
            {results && (
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <h3 className="font-cosmic text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-primary">
                  Your Cosmic Profile ✨
                </h3>
                
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-glow rounded-xl">
                    <div className="text-2xl sm:text-3xl font-cosmic font-bold text-primary mb-1 sm:mb-2">
                      {results.lifePath}
                    </div>
                    <div className="font-mystical text-xs sm:text-sm text-muted-foreground">Life Path</div>
                  </div>
                  
                  <div className="text-center p-3 sm:p-4 bg-glow rounded-xl">
                    <div className="text-2xl sm:text-3xl font-cosmic font-bold text-accent mb-1 sm:mb-2">
                      {results.destiny}
                    </div>
                    <div className="font-mystical text-xs sm:text-sm text-muted-foreground">Destiny</div>
                  </div>
                  
                  <div className="text-center p-3 sm:p-4 bg-glow rounded-xl">
                    <div className="text-2xl sm:text-3xl font-cosmic font-bold text-secondary mb-1 sm:mb-2">
                      {results.personality}
                    </div>
                    <div className="font-mystical text-xs sm:text-sm text-muted-foreground">Personality</div>
                  </div>
                </div>
                
                <div className="text-center mt-4 sm:mt-6">
                  <Button variant="cosmic" className="text-sm sm:text-base">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Get Full Reading
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};