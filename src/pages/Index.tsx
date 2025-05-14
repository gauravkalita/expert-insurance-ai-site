
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedContent from "@/components/home/FeaturedContent";
import ToolsOverview from "@/components/home/ToolsOverview";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";

const Index = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Insurance Expertise",
    "url": "https://insurancexpertise.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://insurancexpertise.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Insurance Expertise is your AI-powered hub for insurance insights, tools, and expert guidance to make better decisions for your future.",
    "publisher": {
      "@type": "Organization",
      "name": "Insurance Expertise",
      "logo": {
        "@type": "ImageObject",
        "url": "https://insurancexpertise.com/logo.png"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Home" 
        description="Insurance Expertise is your AI-powered hub for insurance insights, tools, and expert guidance to make better decisions for your future."
        structuredData={structuredData}
      />
      
      {/* ASTRA THEME - HEADER SECTION */}
      <Navbar />
      
      <main>
        {/* ASTRA THEME - HERO SECTION */}
        <section id="astra-hero-section" className="astra-section">
          <Hero />
        </section>
        
        {/* ASTRA THEME - FEATURED CONTENT SECTION */}
        <section id="astra-featured-content-section" className="astra-section">
          <FeaturedContent />
        </section>
        
        {/* ASTRA THEME - TOOLS OVERVIEW SECTION */}
        <section id="astra-tools-section" className="astra-section">
          <ToolsOverview />
        </section>
        
        {/* ASTRA THEME - NEWSLETTER SECTION */}
        <section id="astra-newsletter-section" className="astra-section">
          <NewsletterSignup />
        </section>
      </main>
      
      {/* ASTRA THEME - FOOTER SECTION */}
      <Footer />
    </>
  );
};

export default Index;
