
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedContent from "@/components/home/FeaturedContent";
import ToolsOverview from "@/components/home/ToolsOverview";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Home" 
        description="Insurance Expertise is your AI-powered hub for insurance insights, tools, and expert guidance to make better decisions for your future."
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
