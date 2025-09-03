import { Instagram, Mail, Phone, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 relative cosmic-stars border-t border-border/30">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary mr-3" />
            <h3 className="font-cosmic text-2xl font-bold text-foreground">
              Mysttic Flame
            </h3>
            <Sparkles className="w-8 h-8 text-primary ml-3" />
          </div>
          
          <p className="font-mystical text-muted-foreground mb-8 max-w-md mx-auto">
            Unlocking the cosmic mysteries of numbers to guide your spiritual journey
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.instagram.com/mystticflame/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mystticflame@gmail.com" 
              className="flex items-center justify-center w-12 h-12 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/918369981540" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          <div className="font-mystical text-sm text-muted-foreground">
            © 2025 Mysttic Flame. All Rights Reserved.
          </div>
        </div>
      </div>
      
      {/* Floating cosmic elements */}
      <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-0 right-1/4 w-12 h-12 bg-accent/10 rounded-full blur-xl" />
    </footer>
  );
};