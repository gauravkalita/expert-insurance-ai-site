
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Clock, Award, BookOpen } from "lucide-react";

// SECTION: ASTRA HERO BANNER
const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-32 pb-14 lg:pb-24 overflow-hidden" id="astra-hero-section">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ASTRA HERO CONTENT */}
          <div className="space-y-6" id="astra-hero-content">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-100 rounded-full text-sm text-primary mb-4" aria-label="Content update notification">
              <Clock size={16} aria-hidden="true" />
              <span>Updated for 2025</span>
            </div>
            
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
              Master Insurance Knowledge with <span className="text-primary">AI-Driven</span> Guides, Tools, and Resources!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Navigate the complex world of insurance with expert guidance, powerful AI tools, and actionable advice tailored to your needs.
            </p>
            
            {/* ASTRA CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4" id="astra-hero-cta">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary-700 font-medium text-base transition-all duration-300" aria-label="Explore insurance guides">
                <Link to="/blog">
                  <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
                  Explore Insurance Guides
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary hover:bg-primary-50 font-medium text-base transition-all duration-300" aria-label="Get expert advice">
                <Link to="/tools">
                  Get Expert Advice
                </Link>
              </Button>
            </div>
            
            {/* ASTRA TRUST BADGES */}
            <div className="pt-6 border-t border-gray-200 mt-6" id="astra-trust-badges">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium">Expert-Reviewed Content</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full" aria-hidden="true"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium">Updated for 2025</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full" aria-hidden="true"></div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium">Reliable Insurance Resource</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ASTRA HERO IMAGE - Now with optimized loading */}
          <div className="hidden lg:block relative" id="astra-hero-image">
            <div className="relative aspect-[5/4] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000" 
                alt="Insurance expert providing consultation to client over documents" 
                className="w-full h-full object-cover"
                loading="eager"
                width="600"
                height="480"
                fetchPriority="high"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2" aria-hidden="true">
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
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-2" aria-hidden="true">
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
