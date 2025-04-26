
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ToolsOverview = () => {
  const tools = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Insurance Needs Calculator",
      description: "Get personalized insurance coverage recommendations based on your specific situation.",
      link: "/tools/calculator"
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Premium Content Generator",
      description: "Create professional templates for claim letters, cancellation notices, and more.",
      link: "/tools/content-generator"
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "AI Insurance Glossary",
      description: "Instantly explain complex insurance terms in simple, easy-to-understand language.",
      link: "/tools/glossary"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Insurance Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Smart tools to help you make better insurance decisions and simplify insurance-related tasks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-5 p-3 bg-primary-50 rounded-full inline-block">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{tool.title}</h3>
              <p className="text-gray-600 mb-6">{tool.description}</p>
              <Button asChild variant="outline" className="rounded-full border-2 border-primary hover:bg-primary-50">
                <Link to={tool.link}>
                  Try This Tool
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get Expert Insurance Guidance
              </h3>
              <p className="mb-6 text-white/90">
                Our AI-powered tools provide personalized insurance recommendations, comparison insights, and expert advice tailored to your specific needs.
              </p>
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/tools">
                  Explore All Tools
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870" 
                alt="Insurance expert using digital tools" 
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsOverview;
