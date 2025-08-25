import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "The numerology reading was incredibly accurate! It helped me understand my life purpose and gave me clarity about my career path.",
      rating: 5,
      location: "New York"
    },
    {
      name: "Michael R.",
      text: "I was skeptical at first, but the insights about my personality number were spot on. It's changed how I approach relationships.",
      rating: 5,
      location: "California"
    },
    {
      name: "Luna P.",
      text: "The cosmic energy and depth of the reading was amazing. I finally understand why certain patterns keep appearing in my life.",
      rating: 5,
      location: "Toronto"
    }
  ];

  return (
    <section className="py-20 px-6 relative cosmic-stars">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cosmic Testimonials
          </h2>
          <p className="font-mystical text-xl text-muted-foreground max-w-2xl mx-auto">
            See how numerology has transformed lives across the universe
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card-cosmic rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-mystical relative overflow-hidden"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                
                <p className="font-mystical text-muted-foreground text-center italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <div className="font-cosmic font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </div>
                  <div className="font-mystical text-sm text-muted-foreground">
                    {testimonial.location}
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