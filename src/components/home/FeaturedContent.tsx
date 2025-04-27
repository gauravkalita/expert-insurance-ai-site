
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Heart, 
  Home, 
  Shield, 
  Bookmark, 
  ArrowRight 
} from "lucide-react";

const FeaturedContent = () => {
  // Insurance categories
  const categories = [
    {
      id: 1,
      title: "Auto Insurance",
      icon: <Car className="h-6 w-6 text-primary" />,
      description: "Compare coverage options, find the best rates, and understand what factors affect your premiums.",
      path: "/blog?category=auto"
    },
    {
      id: 2,
      title: "Health Insurance",
      icon: <Heart className="h-6 w-6 text-primary" />,
      description: "Navigate plans, understand benefits, and find the right coverage for you and your family's needs.",
      path: "/blog?category=health"
    },
    {
      id: 3,
      title: "Home Insurance",
      icon: <Home className="h-6 w-6 text-primary" />,
      description: "Protect your biggest investment with the right coverage for your property and belongings.",
      path: "/blog?category=property"
    },
    {
      id: 4,
      title: "Life Insurance",
      icon: <Shield className="h-6 w-6 text-primary" />,
      description: "Secure your family's financial future and get peace of mind with the right life insurance policy.",
      path: "/blog?category=life"
    }
  ];

  // Featured articles with proper categorization
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
        {/* Insurance Categories Section */}
        <div className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Insurance Coverage Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive guides and resources for every type of insurance coverage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={category.path}
                className="group"
              >
                <div className="h-full bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <div className="bg-primary-50 p-3 rounded-xl w-fit mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Featured Articles Section */}
        <div>
          <div className="mb-10 text-center">
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
                    
                    {/* Ad space indicator */}
                    {article.id === 1 && (
                      <div className="absolute top-4 right-4 bg-gray-900/70 text-white text-xs py-1 px-2 rounded">
                        <span className="text-xs">SPONSORED</span>
                      </div>
                    )}
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
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                      <Bookmark className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full border-2 border-primary hover:bg-primary-50">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
