
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturedContent = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "How Health Insurance Works in the U.S.: A Complete Guide",
      excerpt: "Understand the basics of health insurance in America, from premiums and deductibles to networks and coverage options.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=870",
      category: "Health",
      date: "Apr 15, 2025",
      readTime: "8 min read",
      path: "/blog/how-health-insurance-works"
    },
    {
      id: 2,
      title: "The Best Auto Insurance Companies for 2025",
      excerpt: "We've compared prices, coverage options, and customer satisfaction to find the top auto insurers this year.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=870",
      category: "Auto",
      date: "Apr 10, 2025",
      readTime: "6 min read",
      path: "/blog/best-auto-insurance-companies-2025"
    },
    {
      id: 3,
      title: "Filing an Insurance Claim: Step-by-Step Guide",
      excerpt: "Learn how to properly file and track your insurance claims to maximize your chances of approval.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=870",
      category: "Guides",
      date: "Apr 5, 2025",
      readTime: "7 min read",
      path: "/blog/insurance-claim-filing-guide"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Insurance Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert articles and guides to help you navigate the complex world of insurance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link 
              key={article.id}
              to={article.path}
              className="group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold py-1 px-2 rounded">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <span className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-full border-2 border-primary hover:bg-primary-50">
            <Link to="/blog">
              View All Articles
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
