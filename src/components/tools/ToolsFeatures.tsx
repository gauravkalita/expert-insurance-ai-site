
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ToolsFeatures = () => {
  return (
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
              Read Our Insurance Articles
              <ArrowRight className="ml-2 h-4 w-4" />
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
  );
};

export default ToolsFeatures;
