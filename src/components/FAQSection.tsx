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
      question: "What can I expect from a numerology consultation?",
      answer: "During a numerology consultation, we analyze your name and birthdate to determine your unique numerical profile. We will then interpret the significance of these numbers in relation to your personality, life path, and potential future outcomes. This can provide insights into your strengths, weaknesses, opportunities, and challenges, allowing you to make more informed decisions in various aspects of your life."
    },
    {
      question: "What can I expect from a tarot consultation?",
      answer: "In a tarot consultation, we use a deck of tarot cards to perform a reading for you. We shuffle the cards and lay them out in a spread, interpreting the cards' symbolism and positions to provide insights into your current circumstances, past influences, and potential future developments. Tarot readings can offer guidance, clarity, and perspective on various aspects of your life, including relationships, career, finances, and personal growth."
    },
    {
      question: "What can I expect from a Vastu consultation?",
      answer: "During a Vastu consultation, an expert will assess the layout, design, and energy flow of your living or working space according to Vastu principles. We will identify any imbalances or disharmonies in the environment and provide recommendations for adjustments or remedies to improve the flow of positive energy and enhance overall well-being. We provide non invasive, completely reliable & result oriented Vastu & Feng Shui solutions."
    },
    {
      question: "How can I use sigils and switch words for remedies?",
      answer: "Sigils and Switch Words can be incorporated into various healing and manifestation practices to address specific issues or goals. To use sigils, we create or find a sigil that represents your intention, charge it with energy and intention, and then focus on it during meditation or visualization to facilitate manifestation. Switch words, Mantras, Chants can be similarly incorporated into meditation, affirmation, or visualization practices by repeating them with focused intention to shift energy and align with desired outcomes."
    },
    {
      question: "How accurate are numerology readings?",
      answer: "Our numerology readings are based on ancient Pythagorean principles and interpreted by experienced numerologists with 15+ years of practice. While numerology provides insights and guidance, it should be used as a tool for self-reflection and personal growth rather than absolute predictions. We have a 98% customer satisfaction rate and offer a money-back guarantee."
    },
    {
      question: "How long does it take to receive my reading?",
      answer: "Basic calculations are instant on our website. Detailed PDF reports are delivered within 24-48 hours via email. Premium personal consultations are scheduled within the same day by appointment. Rush delivery is available for urgent readings with additional fees."
    },
    {
      question: "What information do you need for a reading?",
      answer: "For numerology readings, we need your full legal name (as it appears on your birth certificate) and your complete birth date (month, day, and year). For tarot readings, we just need your specific questions or areas of concern. All information is kept strictly confidential."
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
          <div className="bg-card-cosmic rounded-xl p-6 sm:p-8 border border-border/30 hover:shadow-mystical transition-all duration-300">
            <h3 className="font-cosmic text-xl sm:text-2xl font-semibold text-foreground mb-3">
              Still have questions?
            </h3>
            <p className="font-mystical text-muted-foreground mb-6">
              Our spiritual advisors are here to help guide your journey
            </p>
            
            {/* Contact Info Section */}
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="flex flex-col items-center">
                <div className="font-mystical text-foreground mb-2 flex items-center gap-2">
                  <span className="text-lg">📞</span>
                  <span>Call or message on</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <a 
                    href="https://wa.me/918369981540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mystical text-primary hover:text-accent transition-colors text-lg font-semibold hover:scale-105 transform duration-200"
                  >
                    +91 8369981540
                  </a>
                  <span className="hidden sm:inline text-muted-foreground text-lg">•</span>
                  <a 
                    href="https://wa.me/919004649055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mystical text-primary hover:text-accent transition-colors text-lg font-semibold hover:scale-105 transform duration-200"
                  >
                    +91 9004649055
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex justify-center">
                <a 
                  href="mailto:mystticflame@gmail.com"
                  className="font-mystical text-primary hover:text-accent transition-colors flex items-center gap-2 text-lg font-semibold hover:scale-105 transform duration-200"
                >
                  <span className="text-lg">📧</span>
                  <span>mystticflame@gmail.com</span>
                </a>
              </div>
              
              {/* Reviews/Feedback Button */}
              <div className="flex justify-center mt-6 pt-4 border-t border-border/20">
                <a 
                  href="https://www.google.co.in/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6uLVLCOZTV_OzuDqOzQJPcrLZYX3T6l1cRJ9aaBxdMrj57ze-QgEI10pK2mV52ladLbcEDiZcbLK-pQu2Yqc-KFELdo&q=Mysttic+Flame+Reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary hover:text-accent px-4 py-2 rounded-lg font-mystical font-semibold transition-all duration-300 hover:scale-105 border border-primary/20 hover:border-primary/30"
                >
                  <span className="text-lg">⭐</span>
                  <span>View Reviews & Leave Feedback</span>
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