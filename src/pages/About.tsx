
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <SEOHead 
        title="About Us" 
        description="Learn about Insurance Expertise, our mission to simplify insurance decisions with AI technology, and meet our team of experts."
        keywords="insurance expertise, about us, insurance experts, insurance technology, AI insurance"
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Insurance Expertise</h1>
              <p className="text-lg text-gray-600">
                We're on a mission to simplify insurance decisions with AI-powered guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Insurance Expertise, we believe that insurance shouldn't be complicated. Our mission is to make insurance more accessible, transparent, and easy to understand for everyone.
                </p>
                <p className="text-gray-600 mb-4">
                  Through innovative AI-powered tools and expert guidance, we're transforming how people learn about, compare, and choose insurance products that best fit their unique needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're buying your first policy or looking to optimize your existing coverage, our platform provides the insights and support you need to make confident insurance decisions.
                </p>
                <Button asChild className="bg-primary hover:bg-primary-700">
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=871" 
                  alt="Team meeting around a table discussing insurance solutions" 
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Insurance Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trusted Expertise</h3>
                  <p className="text-gray-600">
                    Our content and tools are developed by seasoned insurance professionals with decades of industry experience.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Simplicity</h3>
                  <p className="text-gray-600">
                    Our advanced AI technology translates complex insurance concepts into clear, actionable guidance.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unbiased Information</h3>
                  <p className="text-gray-600">
                    We provide objective information to help you make the best decisions for your unique situation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Explore our tools, read our expert articles, or reach out with your insurance questions. We're here to help you navigate the world of insurance with confidence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-primary hover:bg-primary-700">
                  <Link to="/tools">
                    Try Our Tools
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/blog">
                    Read Our Articles
                  </Link>
                </Button>
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

export default About;
