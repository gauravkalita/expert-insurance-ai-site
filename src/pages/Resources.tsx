
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/shared/SEOHead";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Calculator, FileText, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const recommendedTools = [
    {
      name: "Insurance Needs Calculator",
      description: "Calculate your insurance coverage needs across different types of policies.",
      icon: Calculator,
      status: "Coming Soon",
    },
    {
      name: "Premium Content Generator",
      description: "Generate professional templates for insurance-related documents and letters.",
      icon: FileText,
      status: "Coming Soon",
    },
    {
      name: "Insurance Glossary AI",
      description: "Instantly search and understand complex insurance terms and concepts.",
      icon: Search,
      status: "Coming Soon",
    },
  ];

  return (
    <>
      <SEOHead 
        title="Insurance Resources & Recommended Tools" 
        description="Discover our curated collection of insurance tools, calculators, and resources to help you make informed insurance decisions."
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <TrustBadges />
              <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4">
                Insurance Resources & Tools
              </h1>
              <p className="text-lg text-gray-600">
                Discover our collection of AI-powered tools and resources designed to help you make better insurance decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {recommendedTools.map((tool) => (
                <div key={tool.name} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {tool.status}
                    </span>
                    <Button variant="outline">
                      Get Notified
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner Resources Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Recommended Insurance Partners</h2>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <p className="text-center text-gray-600 mb-4">
                  We're carefully selecting trusted insurance partners to bring you the best coverage options.
                </p>
                <div className="flex justify-center">
                  <Button>
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
