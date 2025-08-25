import numerologyService from "@/assets/numerology-service.jpg";
import tarotService from "@/assets/tarot-service.jpg";
import sigilsService from "@/assets/sigils-service.jpg";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      title: "NUMEROLOGY",
      image: numerologyService,
      description: "Discover the ancient art of Numerology and decode the secrets of your destiny! Join us for an enlightening journey into the power of numbers and how they shape every aspect of your life. Whether you're seeking guidance in love, career, or personal growth, Numerology offers profound insights and pathways to fulfillment."
    },
    {
      title: "TAROT READING",
      image: tarotService,
      description: "Embark on a journey of self-discovery and enlightenment through the mystical art of Tarot! Join us for an extraordinary experience where ancient wisdom meets modern insight. Gain clarity and guidance on life's most pressing questions and challenges."
    },
    {
      title: "SIGILS",
      image: sigilsService,
      description: "Harness the Power of Sigils. Enter the realm of ancient magic and unlock your transformative potential to craft and activate sigils. Manifest your deepest desires and intentions. Explore various methods to charge and activate your sigils for maximum potency."
    }
  ];

  return (
    <section className="py-20 px-6 relative cosmic-stars">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What We Do?
          </h2>
          <p className="font-mystical text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our mystical services designed to unlock your spiritual potential
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card-cosmic rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-cosmic group"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Service Title Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-cosmic text-2xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <p className="font-mystical text-muted-foreground leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                
                <Button variant="cosmic" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-cosmic rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              Ready to Begin Your Spiritual Journey?
            </h3>
            <p className="font-mystical text-muted-foreground mb-6">
              Book a consultation and discover which service resonates with your soul
            </p>
            <Button variant="hero" size="lg">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};