
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Search, ArrowRight } from "lucide-react";

const ToolsOverview = () => {
  const tools = [
    {
      id: 1,
      icon: <Calculator className="w-10 h-10 text-primary" />,
      title: "Insurance Needs Calculator",
      description: "Get personalized insurance coverage recommendations based on your specific situation.",
      link: "/tools#calculator",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Premium Content Generator",
      description: "Create professional templates for claim letters, cancellation notices, and more.",
      link: "/tools#premium",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "AI Insurance Glossary",
      description: "Instantly explain complex insurance terms in simple, easy-to-understand language.",
      link: "/tools#glossary",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Insurance Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Smart tools to help you make better insurance decisions and simplify insurance-related tasks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="group h-full">
              <Link to={tool.link} className="h-full block">
                <div className="bg-white h-full rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className={`mb-6 p-4 ${tool.bgColor} rounded-xl inline-block`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {tool.description}
                  </p>
                  <div className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                    Try This Tool
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get Expert Insurance Guidance
              </h3>
              <p className="mb-6 text-white/90">
                Our AI-powered tools provide personalized insurance recommendations, comparison insights, and expert advice tailored to your specific needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/90">Compare quotes from multiple insurance providers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/90">Generate personalized coverage recommendations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/90">Understand complex insurance terms in simple language</p>
                </div>
              </div>
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/tools">
                  Explore All Tools
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="hidden md:block h-full">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870" 
                alt="Insurance expert using digital tools" 
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Ad section with affiliate links */}
        <div className="mt-16 border border-gray-200 rounded-xl p-8 bg-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Compare Insurance Quotes</h3>
              <p className="text-gray-600">Find the best coverage at the most competitive rates</p>
            </div>
            <Button className="btn-gradient">
              Compare Quotes Now
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex items-center justify-center h-24">
              <span className="font-semibold text-lg text-gray-800">PolicyGenius</span>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex items-center justify-center h-24">
              <span className="font-semibold text-lg text-gray-800">Lemonade</span>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex items-center justify-center h-24">
              <span className="font-semibold text-lg text-gray-800">Gabi</span>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex items-center justify-center h-24">
              <span className="font-semibold text-lg text-gray-800">Insurify</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            *This content contains affiliate links. We may receive commission for purchases made through these links.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsOverview;
