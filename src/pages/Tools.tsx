
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";
import ToolsHeader from "@/components/tools/ToolsHeader";
import ToolsTabs from "@/components/tools/ToolsTabs";
import InsuranceQuoteComparison from "@/components/tools/InsuranceQuoteComparison";
import ToolsFeatures from "@/components/tools/ToolsFeatures";

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
            <ToolsHeader />
            <ToolsTabs />
            <InsuranceQuoteComparison />
            <ToolsFeatures />
          </div>
        </section>
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
};

export default Tools;
