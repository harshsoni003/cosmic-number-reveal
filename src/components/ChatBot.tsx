import { useState } from "react";
import { MessageCircle, X, Phone, Mail, Clock, DollarSign, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessage {
  id: string;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<ChatMessage | null>(null);

  const fixedQuestions: ChatMessage[] = [
    {
      id: "contact",
      question: "Contact Information",
      answer: "📞 Phone: +1 (555) 123-MYSTIC\n✉️ Email: hello@mystic-numbers.com\n🌟 Available Monday-Friday, 9 AM - 6 PM EST",
      icon: <Phone className="w-4 h-4" />
    },
    {
      id: "pricing",
      question: "Pricing & Packages",
      answer: "✨ Basic Reading: $29 (Life Path Number)\n🌟 Complete Profile: $59 (All 3 Numbers)\n🔮 Premium Consultation: $99 (1-hour personal session)\n💫 All readings include detailed PDF report",
      icon: <DollarSign className="w-4 h-4" />
    },
    {
      id: "how-it-works",
      question: "How Numerology Works",
      answer: "🔢 Numerology uses your name and birth date to reveal cosmic insights\n🌌 Life Path Number: Your soul's journey\n✨ Destiny Number: Your life purpose\n🎭 Personality Number: How others see you\n📖 Based on ancient Pythagorean principles",
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: "timing",
      question: "Reading Delivery Time",
      answer: "⚡ Instant: Basic calculations (like on our website)\n📧 24-48 hours: Detailed PDF reports\n🎯 Same day: Premium consultations (by appointment)\n🌙 Rush delivery available for urgent readings",
      icon: <Clock className="w-4 h-4" />
    },
    {
      id: "accuracy",
      question: "Reading Accuracy",
      answer: "🎯 Our numerologists have 15+ years experience\n⭐ 98% customer satisfaction rate\n🔮 Ancient methods combined with modern insights\n💫 Thousands of life-changing readings delivered\n🌟 Money-back satisfaction guarantee",
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  const handleQuestionClick = (message: ChatMessage) => {
    setSelectedMessage(message);
  };

  const goBack = () => {
    setSelectedMessage(null);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="hero"
          size="lg"
          className="rounded-full w-16 h-16 shadow-cosmic hover:shadow-glow pulse-glow"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-card-cosmic rounded-2xl shadow-cosmic border border-border z-40 overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-cosmic font-semibold">Mysttic Assistant</span>
            </div>
          </div>

          {/* Content */}
          <div className="h-full pb-16 overflow-hidden">
            {!selectedMessage ? (
              /* Questions List */
              <div className="p-4 space-y-3 h-full overflow-y-auto">
                <div className="text-center mb-4">
                  <p className="font-mystical text-sm text-muted-foreground">
                    Choose a question to get instant answers ✨
                  </p>
                </div>
                
                {fixedQuestions.map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full p-3 bg-glow rounded-lg text-left hover:scale-105 transition-all duration-300 hover:shadow-mystical group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-primary group-hover:text-accent transition-colors">
                        {question.icon}
                      </div>
                      <span className="font-mystical text-sm text-foreground group-hover:text-primary transition-colors">
                        {question.question}
                      </span>
                    </div>
                  </button>
                ))}
                
                <div className="text-center pt-4 border-t border-border/30">
                  <p className="font-mystical text-xs text-muted-foreground">
                    Need more help? Contact us directly!
                  </p>
                </div>
              </div>
            ) : (
              /* Answer Display */
              <div className="p-4 h-full flex flex-col">
                <button
                  onClick={goBack}
                  className="flex items-center space-x-2 text-primary hover:text-accent transition-colors mb-4 text-sm font-mystical"
                >
                  <span>← Back to questions</span>
                </button>
                
                <div className="bg-glow rounded-lg p-4 flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="text-primary">
                      {selectedMessage.icon}
                    </div>
                    <h3 className="font-cosmic font-semibold text-foreground">
                      {selectedMessage.question}
                    </h3>
                  </div>
                  
                  <div className="font-mystical text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedMessage.answer}
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="cosmic" size="sm" className="text-xs">
                    <Mail className="w-3 h-3 mr-1" />
                    Contact for More Info
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};