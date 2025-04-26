
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogList from "@/components/blog/BlogList";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";

const Blog = () => {
  return (
    <>
      <SEOHead 
        title="Blog" 
        description="Explore expert articles and guides on insurance topics including auto, health, life, property insurance and more."
        keywords="insurance blog, insurance articles, insurance guides, insurance tips, auto insurance, health insurance, life insurance"
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Blog</h1>
              <p className="text-lg text-gray-600">
                Expert articles and guides to help you navigate the complex world of insurance
              </p>
            </div>
            
            <BlogList />
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
