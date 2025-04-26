
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InsuranceCalculator from "@/components/tools/InsuranceCalculator";
import GlossarySearch from "@/components/tools/GlossarySearch";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <>
      <SEOHead 
        title="AI Insurance Tools" 
        description="Access our suite of AI-powered insurance tools designed to help you make better insurance decisions, simplify complex terms, and get personalized guidance."
        keywords="insurance tools, insurance calculator, insurance glossary, insurance AI tools, insurance needs calculator"
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Insurance Tools</h1>
              <p className="text-lg text-gray-600">
                Smart tools to help you make better insurance decisions and simplify insurance-related tasks
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              <div id="calculator">
                <InsuranceCalculator />
              </div>
              
              <div id="glossary">
                <GlossarySearch />
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Content Generator</h2>
                  <p className="text-gray-600">
                    Create professional templates for claim letters, cancellation notices, and more.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Feature</h3>
                  <p className="text-gray-600 mb-6">
                    The Content Generator is available to premium subscribers only. Upgrade your account to access this powerful tool.
                  </p>
                  <Button className="btn-gradient">
                    Upgrade to Premium
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Use Our AI Insurance Tools?</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Save Time and Money</h3>
                      <p className="text-gray-600">
                        Our tools analyze complex insurance information quickly to help you make better decisions and potentially save thousands on premiums.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personalized Recommendations</h3>
                      <p className="text-gray-600">
                        Get insurance guidance tailored to your specific situation, not generic advice that might not apply to you.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Simplified Complexity</h3>
                      <p className="text-gray-600">
                        Insurance jargon can be overwhelming. Our tools break down complex concepts into easy-to-understand explanations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Privacy Focused</h3>
                      <p className="text-gray-600">
                        Use our tools with confidence. We don't store your personal information or share it with insurance companies.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild className="btn-gradient">
                    <Link to="/blog">
                      Explore Our Insurance Articles
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870" 
                  alt="Person using insurance tools on laptop" 
                  className="rounded-xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
};

export default Tools;
