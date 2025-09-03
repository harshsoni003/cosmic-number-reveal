import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is numerology and how does it work?",
      answer: "Numerology is an ancient practice that studies the mystical relationship between numbers and life events. It uses your birth date and full name to calculate significant numbers that reveal insights about your personality, life path, and destiny. Each number carries specific vibrations and meanings that can guide your decisions and help you understand your purpose."
    },
    {
      question: "How accurate are numerology readings?",
      answer: "Our numerology readings are based on ancient Pythagorean principles and interpreted by experienced numerologists with 15+ years of practice. While numerology provides insights and guidance, it should be used as a tool for self-reflection and personal growth rather than absolute predictions. We have a 98% customer satisfaction rate and offer a money-back guarantee."
    },
    {
      question: "What's included in a complete numerology reading?",
      answer: "A complete reading includes your Life Path Number (soul's journey), Destiny Number (life purpose), Personality Number (how others see you), Soul Urge Number (inner desires), and Birthday Number (special talents). You'll receive a detailed PDF report explaining each number's meaning and how they work together to influence your life."
    },
    {
      question: "How long does it take to receive my reading?",
      answer: "Basic calculations are instant on our website. Detailed PDF reports are delivered within 24-48 hours via email. Premium personal consultations are scheduled within the same day by appointment. Rush delivery is available for urgent readings with additional fees."
    },
    {
      question: "Can numerology predict my future?",
      answer: "Numerology doesn't predict specific future events but rather reveals your natural tendencies, potential challenges, and opportunities. It helps you understand your strengths and weaknesses, making it easier to make informed decisions and navigate life's journey with greater awareness and confidence."
    },
    {
      question: "Do you offer tarot and sigil services too?",
      answer: "Yes! In addition to numerology, we offer professional tarot readings for guidance and clarity on life questions, and sigil creation services to help you manifest your desires and intentions. Each service can be booked separately or combined for a comprehensive spiritual consultation."
    },
    {
      question: "What information do you need for a reading?",
      answer: "For numerology readings, we need your full legal name (as it appears on your birth certificate) and your complete birth date (month, day, and year). For tarot readings, we just need your specific questions or areas of concern. All information is kept strictly confidential."
    },
    {
      question: "Are your services suitable for beginners?",
      answer: "Absolutely! Our readings are designed for both beginners and those familiar with numerology. We provide clear explanations and guidance that anyone can understand and apply to their life. Our numerologists are also available for follow-up questions to ensure you get the most from your reading."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 relative cosmic-stars">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="font-mystical text-xl text-muted-foreground">
            Everything you need to know about our mystical services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-card-cosmic rounded-xl border border-border/30 overflow-hidden hover:shadow-mystical transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors duration-200"
              >
                <h3 className="font-cosmic font-semibold text-lg text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="text-primary flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border/20">
                  <p className="font-mystical text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-card-cosmic rounded-xl p-6 border border-border/30">
            <h3 className="font-cosmic text-xl font-semibold text-foreground mb-3">
              Still have questions?
            </h3>
            <p className="font-mystical text-muted-foreground mb-4">
              Our spiritual advisors are here to help guide your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <div className="font-mystical text-foreground">
                📞 Call or message on
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
                <a 
                  href="https://wa.me/918369981540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mystical text-primary hover:text-accent transition-colors"
                >
                  +91 8369981540
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a 
                  href="https://wa.me/919004649055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mystical text-primary hover:text-accent transition-colors"
                >
                  +91 9004649055
                </a>
              </div>
              <div className="mt-2">
                <a 
                  href="mailto:mystticflame@gmail.com"
                  className="font-mystical text-primary hover:text-accent transition-colors"
                >
                  📧 mystticflame@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-32 left-16 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};