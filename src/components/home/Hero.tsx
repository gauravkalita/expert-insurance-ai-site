
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-32 pb-14 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-100 rounded-full text-sm text-primary mb-4">
              <Clock size={16} />
              <span>Updated for 2025</span>
            </div>
            
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
              Your Trusted Guide to <span className="text-primary">Insurance</span> Knowledge, Tools, and Tips
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Helping you navigate the complex world of insurance with expert guidance, AI-powered tools, and actionable advice.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="btn-gradient">
                <Link to="/blog">
                  Explore Guides
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary hover:bg-primary-50">
                <Link to="/tools">
                  Get Insurance Advice
                </Link>
              </Button>
            </div>
            
            <div className="pt-6 border-t border-gray-200 mt-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Expert-backed Content</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Updated for 2025</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium ml-1">4.9/5 from 800+ users</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-in">
            <div className="relative aspect-[5/4] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000" 
                alt="Insurance experts discussing policy" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg animate-slide-up">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">AI-Powered Analysis</p>
                  <p className="text-sm text-gray-600">Smart insurance recommendations</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fast & Easy</p>
                  <p className="text-sm text-gray-600">Get answers in seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
