import React from 'react';
import { 
  MessageCircle, 
  BookOpen, 
  Target, 
  BarChart3, 
  Users, 
  Brain, 
  Award, 
  DollarSign, 
  TrendingUp, 
  Heart, 
  HelpCircle,
  CheckCircle,
  Zap,
  ChevronRight
} from 'lucide-react';

function App() {
  const features = [
    {
      category: "Smart Learning Tools",
      icon: <Brain className="w-8 h-8" />,
      items: [
        {
          title: "Jargon Translator",
          description: "Break down complex financial terms into simple language with our comprehensive word bank",
          icon: <BookOpen className="w-6 h-6" />
        },
        {
          title: "AI Investment Chatbot",
          description: "Explain what you're thinking and get matched to the right terms with deeper explanations",
          icon: <MessageCircle className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Anxiety-Free Investing",
      icon: <Heart className="w-8 h-8" />,
      items: [
        {
          title: "Common Concerns Addressed",
          description: "Get reassurance about typical investor worries and learn why they're normal",
          icon: <HelpCircle className="w-6 h-6" />
        },
        {
          title: "Small Budget Solutions",
          description: "Start with just $5 - learn that every amount counts and builds good habits",
          icon: <DollarSign className="w-6 h-6" />
        },
        {
          title: "Market Volatility Education",
          description: "Understand that stock fluctuations are normal and part of long-term growth",
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Gamified Missions",
      icon: <Target className="w-8 h-8" />,
      items: [
        {
          title: "Weekly Challenges",
          description: "Complete investing actions like making your first stock purchase",
          icon: <Award className="w-6 h-6" />
        },
        {
          title: "Educational Quests",
          description: "Read articles, take quizzes, and test your knowledge on market fundamentals",
          icon: <CheckCircle className="w-6 h-6" />
        },
        {
          title: "Social Engagement",
          description: "Comment on posts, share your accomplishments, and learn from others",
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Personalized Strategy",
      icon: <BarChart3 className="w-8 h-8" />,
      items: [
        {
          title: "Investment Compatibility Score",
          description: "Take a questionnaire about your goals, timeline, and values to get personalized recommendations",
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: "Goal-Based Planning",
          description: "Set 5-year and 10-year targets with monthly investment capacity assessment",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "ESG Alignment",
          description: "Match investments with causes you support and avoid those you don't",
          icon: <Heart className="w-6 h-6" />
        },
        {
          title: "Portfolio Visualization",
          description: "See simulated growth projections and understand potential outcomes",
          icon: <BarChart3 className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Social Learning Hub",
      icon: <Users className="w-8 h-8" />,
      items: [
        {
          title: "Public Achievement Feed",
          description: "Share your investing milestones and celebrate others' successes",
          icon: <Award className="w-6 h-6" />
        },
        {
          title: "Q&A Community",
          description: "Ask questions, get answers, and learn from experienced investors",
          icon: <MessageCircle className="w-6 h-6" />
        },
        {
          title: "Safe Environment",
          description: "All interactions are public and moderated - no private messaging for security",
          icon: <CheckCircle className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investing Simplified
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A social learning platform that makes investing accessible, anxiety-free, and engaging for everyone
            </p>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {features.map((category, categoryIndex) => (
            <section key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 text-blue-600">
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {category.category}
                </h2>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
                  >
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-24 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are building wealth confidently with our supportive community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300">
                Get Started Free
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 rounded-xl mb-4">
            <TrendingUp className="w-6 h-6 text-blue-400" />
          </div>
          <p className="text-lg">
            Making investing accessible to everyone, one feature at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;