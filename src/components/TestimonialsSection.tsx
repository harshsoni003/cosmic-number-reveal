import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      image: "/lovable-uploads/Screenshot 2025-09-03 125100.png"
    },
    {
      rating: 5,
      image: "/lovable-uploads/Screenshot 2025-09-03 125111.png"
    },
    {
      rating: 5,
      image: "/lovable-uploads/Screenshot 2025-09-03 125125.png"
    },
    {
      rating: 5,
      image: "/lovable-uploads/Screenshot 2025-09-03 125145.png"
    },
    {
      rating: 5,
      image: "/lovable-uploads/Screenshot 2025-09-03 125157.png"
    }
  ];

  return (
    <section className="py-20 relative cosmic-stars">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cosmic Testimonials
          </h2>
          <p className="font-mystical text-xl text-muted-foreground max-w-2xl mx-auto">
            See how numerology has transformed lives across the universe
          </p>
        </div>
      </div>
        
      {/* Rotating carousel container - with small side margins */}
      <div className="relative overflow-hidden w-full px-8">
          <div className="flex animate-scroll-left">
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-96 mx-6 bg-card-cosmic rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-mystical relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Image Section */}
                  <div className="h-64 overflow-hidden rounded-t-2xl">
                    <img 
                      src={testimonial.image} 
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Rating Section */}
                  <div className="p-6">
                    <div className="flex justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-primary fill-primary mx-1" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating sparkle */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-60" />
              </div>
            ))}
          </div>
        </div>
      
      {/* Background cosmic elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
    </section>
  );
};