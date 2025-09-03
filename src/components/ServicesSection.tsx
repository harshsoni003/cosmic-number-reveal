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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative cosmic-stars">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-cosmic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            What We Do?
          </h2>
          <p className="font-mystical text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our mystical services designed to unlock your spiritual potential
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card-cosmic rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-cosmic group"
            >
              {/* Service Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Service Title Overlay */}
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="font-cosmic text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1 sm:mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-4 sm:p-6">
                <p className="font-mystical text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm">
                  {service.description}
                </p>
                
                <Button 
                  variant="cosmic" 
                  className="w-full text-sm sm:text-base"
                  onClick={() => window.open('https://wa.me/918369981540', '_blank')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-card-cosmic rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="font-cosmic text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
              Ready to Begin Your Spiritual Journey?
            </h3>
            <p className="font-mystical text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Book a consultation and discover which service resonates with your soul
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-sm sm:text-base"
              onClick={() => window.open('https://wa.me/918369981540', '_blank')}
            >
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