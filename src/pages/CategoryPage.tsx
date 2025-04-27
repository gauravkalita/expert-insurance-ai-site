
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogList from "@/components/blog/BlogList";
import CategorySidebar from "@/components/blog/CategorySidebar";
import { AdSpace } from "@/components/shared/AdSpace";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";
import { TrustBadges } from "@/components/shared/TrustBadges";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Map slug to display name and description
  const categoryInfo: { [key: string]: { title: string; description: string } } = {
    'life-insurance': {
      title: 'Life Insurance',
      description: 'Explore comprehensive guides on life insurance policies, including term life, whole life, universal life, and variable life insurance. Learn about coverage options, policy features, beneficiary designations, and how to select the right life insurance plan for your financial goals and family protection needs.'
    },
    'health-insurance': {
      title: 'Health Insurance',
      description: 'Discover everything you need to know about health insurance plans, from marketplace options to employer-sponsored coverage. Our expert articles cover essential topics like premiums, deductibles, copayments, networks, and how to navigate the complex healthcare system to get the best coverage for your needs.'
    },
    'property-casualty-insurance': {
      title: 'Property & Casualty Insurance',
      description: 'Learn about property and casualty insurance that protects your assets from damage, theft, and liability risks. Our guides cover homeowners, auto, renters, and business insurance policies, helping you understand coverage options, claims processes, and how to adequately protect your valuable possessions.'
    },
    'specialty-insurance': {
      title: 'Specialty Insurance',
      description: 'Explore niche insurance products designed for specific risks and situations, including pet insurance, travel protection, wedding insurance, and more. Our articles help you understand these specialized coverage options and determine if they're right for your unique insurance needs.'
    },
    'reinsurance': {
      title: 'Reinsurance',
      description: 'Understand the complex world of reinsurance, where insurance companies transfer portions of risk portfolios to other parties. Our expert content explains how reinsurance works, its importance in the global insurance market, and how it enables insurers to provide coverage for large or catastrophic events.'
    },
    'auto-insurance': {
      title: 'Auto Insurance',
      description: 'Get expert insights on auto insurance coverage options, including liability, comprehensive, collision, and specialized policies. Learn about factors affecting premiums, discounts, and how to choose the right coverage to protect your vehicle and financial well-being.'
    },
    'homeowners-renters-insurance': {
      title: 'Homeowners and Renters Insurance',
      description: 'Discover comprehensive information about protecting your home, belongings, and liability with the right insurance policies. Our expert guides cover coverage types, policy exclusions, claims processes, and tips for getting affordable protection for homeowners and renters.'
    },
    'business-insurance': {
      title: 'Business Insurance',
      description: 'Learn about essential insurance coverage for businesses of all sizes, from startups to established enterprises. Our resources cover commercial property, liability, workers' compensation, business interruption, and specialized policies to help protect your company against various risks.'
    },
    // Additional categories with descriptions
    'personal-lines': {
      title: 'Personal Lines Insurance',
      description: 'Explore insurance products designed for individuals and families, including auto, home, renters, and personal umbrella policies. Our guides help you understand how these coverages work together to create a comprehensive protection plan for your personal assets and liability risks.'
    },
    'commercial-lines': {
      title: 'Commercial Lines Insurance',
      description: 'Discover business-focused insurance solutions that protect companies from property damage, liability claims, employee injuries, and other risks. Our expert content covers the essential commercial coverages every business should consider based on industry, size, and specific risk exposures.'
    },
    'travel-insurance': {
      title: 'Travel Insurance',
      description: 'Learn about travel protection plans that cover trip cancellations, medical emergencies abroad, lost luggage, and other travel-related risks. Our guides help you understand when travel insurance makes sense and how to select the right coverage for different types of trips.'
    },
    'commercial-auto-insurance': {
      title: 'Commercial Auto Insurance',
      description: 'Explore specialized auto coverage for business vehicles, fleets, and employees who drive for work purposes. Our expert articles explain the differences between personal and commercial auto policies, coverage requirements, and risk management strategies for business vehicle operations.'
    },
    'workers-compensation-insurance': {
      title: 'Workers' Compensation Insurance',
      description: 'Understand this essential coverage that protects both employers and employees when workplace injuries occur. Our guides cover legal requirements, benefits provided, cost factors, and strategies for managing workers' compensation programs effectively.'
    },
    'cyber-insurance': {
      title: 'Cyber Insurance',
      description: 'Learn about this increasingly important coverage that protects businesses from data breaches, ransomware attacks, and other cyber threats. Our resources explain cyber insurance components, exclusions, and how to evaluate your organization's digital risk exposure.'
    },
    'marine-aviation-insurance': {
      title: 'Marine and Aviation Insurance',
      description: 'Discover specialized coverage options for watercraft, aircraft, and related transportation risks. Our expert content explains unique aspects of marine and aviation policies, international considerations, and how these policies differ from standard property coverage.'
    },
    'pet-insurance': {
      title: 'Pet Insurance',
      description: 'Explore health coverage options for your furry family members, including accident and illness plans, wellness coverage, and hybrid policies. Our guides help pet owners understand policy terms, exclusions, reimbursement options, and how to choose the right protection for your pet.'
    },
    'credit-guarantee-insurance': {
      title: 'Credit and Guarantee Insurance',
      description: 'Learn about financial protection products that safeguard businesses against customer default, contractual failures, and credit risks. Our expert resources explain how these specialized policies help companies manage financial uncertainty and expand their operations with confidence.'
    },
    'excess-surplus-lines': {
      title: 'E&S (Excess & Surplus Lines) Insurance',
      description: 'Understand this specialized market that covers risks standard insurers typically won't accept. Our guides explain when E&S coverage is necessary, how it differs from admitted insurance, and the process for obtaining coverage for hard-to-place or unusual risks.'
    },
    'high-risk-businesses': {
      title: 'High-Risk Businesses Insurance',
      description: 'Discover insurance solutions for industries and operations that face elevated risk exposures or challenging insurance markets. Our expert content explores coverage options, risk management strategies, and specialized markets for businesses that standard insurers may decline.'
    },
    'unique-properties': {
      title: 'Unique Properties Insurance',
      description: 'Learn about insurance options for unusual, historic, or high-value properties that don't fit standard underwriting guidelines. Our resources help property owners understand specialized markets, coverage considerations, and risk management approaches for non-standard real estate.'
    },
    'special-events': {
      title: 'Special Events Insurance',
      description: 'Explore temporary coverage designed for weddings, festivals, concerts, sporting events, and other gatherings. Our guides explain liability protection, cancellation coverage, and other specialized insurance options that protect event organizers, venues, and participants.'
    },
    'professional-liabilities': {
      title: 'Professional Liabilities Insurance',
      description: 'Understand errors and omissions, malpractice, and other specialty liability coverages designed for professionals and service providers. Our expert articles explain how these policies protect against claims of negligence, mistakes, or inadequate work in various professional fields.'
    }
  };

  // Default values if category not found
  const categoryTitle = categoryInfo[slug || '']?.title || 'Insurance Category';
  const categoryDescription = categoryInfo[slug || '']?.description || 'Explore our collection of expert-written articles on this insurance topic. Our content provides valuable insights, tips, and guidance to help you make informed insurance decisions.';

  return (
    <>
      <SEOHead 
        title={`${categoryTitle} | Insurance Guides & Articles | Insurance Expertise`}
        description={`Learn about ${categoryTitle.toLowerCase()} with expert guides and articles. Find coverage options, policy details, and money-saving tips. Updated for 2025.`}
        keywords={`${categoryTitle.toLowerCase()}, insurance guides, insurance articles, insurance tips, coverage options`}
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <TrustBadges />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryTitle}</h1>
              <p className="text-lg text-gray-600 mb-6">
                {categoryDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-28 space-y-6">
                  <CategorySidebar />
                  <AdSpace location="sidebar" />
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <BlogList category={slug || 'all'} />
                <AdSpace location="in-content" className="mt-12" />
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

export default CategoryPage;
