import { useState } from "react";
import { MessageCircle, X, Phone, Mail, Clock, DollarSign, BookOpen, Sparkles, Instagram, Share2 } from "lucide-react";
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
      answer: "📞 Call or message on\n‪+91 8369981540‬\n‪+91 9004649055‬\n📧 mystticflame@gmail.com\n📱 Instagram: https://www.instagram.com/mystticflame/\n🕒 Available Any time in IST",
      icon: <Phone className="w-4 h-4" />
    },
    {
      id: "pricing",
      question: "Pricing & Packages",
      answer: "✨ First 15mins consultation free\n💰 Then charges (discuss within consultation)",
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
    },
    {
      id: "reviews",
      question: "Reviews & Feedback",
      answer: "⭐ See what our clients say about their transformative experiences\n📝 Share your own journey and help others discover their path\n🌟 Join thousands of satisfied customers\n💫 Your feedback helps us serve you better",
      icon: <Instagram className="w-4 h-4" />
    }
  ];

  const handleQuestionClick = (message: ChatMessage) => {
    setSelectedMessage(message);
  };

  const goBack = () => {
    setSelectedMessage(null);
  };

  const handleShare = () => {
    const contactInfo = `📞 Call or message on\n‪+91 8369981540‬\n‪+91 9004649055‬\n📧 mystticflame@gmail.com\n📱 Instagram: https://www.instagram.com/mystticflame/\n🕒 Available Any time in IST`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Mysttic Flame - Contact Information',
        text: contactInfo,
      });
    } else {
      navigator.clipboard.writeText(contactInfo);
      alert('Contact information copied to clipboard!');
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="hero"
          size="lg"
          className="rounded-full w-12 h-12 sm:w-16 sm:h-16 shadow-cosmic hover:shadow-glow"
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 sm:bottom-20 md:bottom-24 right-2 sm:right-4 md:right-6 w-[calc(100vw-16px)] sm:w-[calc(100vw-32px)] md:w-96 h-[400px] sm:h-[450px] md:h-[500px] bg-card-cosmic rounded-2xl shadow-cosmic border border-border z-40 overflow-hidden backdrop-blur-xl">
          {/* Professional Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-3 sm:p-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-background/20 p-1">
                <img 
                  src="/lovable-uploads/3e79a7f6-4997-4841-9741-8f0f44c9b212.png" 
                  alt="Mysttic Numbers Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-cosmic font-semibold text-base sm:text-lg">Mysttic Numbers</h3>
                <p className="font-mystical text-xs opacity-90">Professional Numerology Assistant</p>
              </div>
            </div>
          </div>

          {/* Professional Content */}
          <div className="h-full pb-20 overflow-hidden bg-background/5">
            {!selectedMessage ? (
              /* Questions List */
              <div className="p-5 space-y-3 h-full overflow-y-auto">
                <div className="text-center mb-6">
                  <p className="font-mystical text-sm text-muted-foreground leading-relaxed">
                    Select a topic below for instant expert guidance
                  </p>
                </div>
                
                {fixedQuestions.map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full p-4 bg-card rounded-xl text-left hover:scale-[1.02] transition-all duration-300 hover:shadow-mystical group border border-border/30 hover:border-primary/30"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                        {question.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-mystical font-medium text-foreground group-hover:text-primary transition-colors block">
                          {question.question}
                        </span>
                        <span className="font-mystical text-xs text-muted-foreground">
                          Tap for detailed information
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
                
                <div className="text-center pt-6 border-t border-border/30">
                  <p className="font-mystical text-xs text-muted-foreground mb-3">
                    Professional numerology guidance available 24/7
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => window.open('https://wa.me/918369981540', '_blank')}
                  >
                    <Mail className="w-3 h-3 mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            ) : (
              /* Professional Answer Display */
              <div className="p-5 h-full flex flex-col">
                <button
                  onClick={goBack}
                  className="flex items-center space-x-2 text-primary hover:text-accent transition-colors mb-6 text-sm font-mystical font-medium"
                >
                  <span>← Back to topics</span>
                </button>
                
                <div className="bg-card rounded-xl p-5 flex-1 border border-border/30">
                  <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-border/20">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
                      {selectedMessage.icon}
                    </div>
                    <h3 className="font-cosmic font-semibold text-foreground text-lg">
                      {selectedMessage.question}
                    </h3>
                  </div>
                  
                  <div className="font-mystical text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedMessage.answer}
                  </div>
                </div>
                
                <div className="mt-5 flex gap-3">
                  {selectedMessage.id === "reviews" ? (
                    <Button 
                      variant="cosmic" 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => window.open('https://www.google.co.in/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6uLVLCOZTV_OzuDqOzQJPcrLZYX3T6l1cRJ9aaBxdMrj57ze-QgEI10pK2mV52ladLbcEDiZcbLK-pQu2Yqc-KFELdo&q=Mysttic+Flame+Reviews', '_blank')}
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      View Reviews & Leave Feedback
                    </Button>
                  ) : (
                    <Button 
                      variant="cosmic" 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => window.open('https://wa.me/918369981540', '_blank')}
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      Get Personal Reading
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={handleShare}
                  >
                    <Share2 className="w-3 h-3 mr-1" />
                    Share
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