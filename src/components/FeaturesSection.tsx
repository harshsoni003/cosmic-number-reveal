import { Button } from "@/components/ui/button";
import lifePathIcon from "@/assets/life-path-icon.jpg";
import destinyIcon from "@/assets/destiny-icon.jpg";
import personalityIcon from "@/assets/personality-icon.jpg";

export const FeaturesSection = () => {
  const features = [
    {
      icon: lifePathIcon,
      title: "Life Path Number",
      description: "Reveal your soul's true journey and discover the path you're meant to walk in this lifetime.",
      color: "from-primary to-accent"
    },
    {
      icon: destinyIcon,
      title: "Destiny Number",
      description: "Understand your divine purpose and unlock the potential that lies within your full name.",
      color: "from-accent to-secondary"
    },
    {
      icon: personalityIcon,
      title: "Personality Number",
      description: "Uncover how others see you and learn about the impression you make on the world.",
      color: "from-secondary to-primary"
    }
  ];

  return (
    <section className="py-20 px-6 relative cosmic-stars">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Your Cosmic Numbers Revealed
          </h2>
          <p className="font-mystical text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the mystical power of numerology through these essential readings
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card-cosmic rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-cosmic group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-glow group-hover:shadow-mystical transition-all duration-300">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                     style={{ background: `linear-gradient(135deg, var(--primary), var(--accent))` }} />
              </div>
              
              <h3 className="font-cosmic text-2xl font-semibold mb-4 text-center bg-gradient-to-r text-transparent bg-clip-text" 
                  style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))` }}>
                {feature.title}
              </h3>
              
              <p className="font-mystical text-muted-foreground text-center leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <div className="text-center">
                <Button variant="cosmic" className="w-full">
                  Discover Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};