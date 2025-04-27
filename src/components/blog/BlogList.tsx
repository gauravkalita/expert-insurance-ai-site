
import React, { useState } from "react";
import BlogCard from "./BlogCard";

interface BlogListProps {
  category?: string;
}

const categories = [
  "All",
  "Auto",
  "Health",
  "Life",
  "Property",
  "Business",
  "Guides",
  "Tips"
];

const blogPosts = [
  {
    id: 1,
    title: "How Health Insurance Works in the U.S.: A Complete Guide",
    excerpt: "Understand the basics of health insurance in America, from premiums and deductibles to networks and coverage options.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=870",
    category: "Health",
    date: "Apr 15, 2025",
    readTime: "8 min read",
    slug: "how-health-insurance-works",
    relatedSlugs: ["medicare-vs-medicaid-differences", "best-health-insurance-families-texas-2025"]
  },
  {
    id: 2,
    title: "The Best Auto Insurance Companies for 2025",
    excerpt: "We've compared prices, coverage options, and customer satisfaction to find the top auto insurers this year.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=870",
    category: "Auto",
    date: "Apr 10, 2025",
    readTime: "6 min read",
    slug: "best-auto-insurance-companies-2025",
    relatedSlugs: ["save-money-car-insurance-tips"]
  },
  {
    id: 3,
    title: "Filing an Insurance Claim: Step-by-Step Guide",
    excerpt: "Learn how to properly file and track your insurance claims to maximize your chances of approval.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=870",
    category: "Guides",
    date: "Apr 5, 2025",
    readTime: "7 min read",
    slug: "insurance-claim-filing-guide",
    relatedSlugs: ["save-money-car-insurance-tips", "homeowners-insurance-coverage"]
  },
  {
    id: 4,
    title: "Understanding Life Insurance Policies and Options",
    excerpt: "Term vs. whole life, policy features, riders, and how to determine the right coverage amount for your needs.",
    image: "https://images.unsplash.com/photo-1621951753015-740c699ab390?q=80&w=870",
    category: "Life",
    date: "Mar 30, 2025",
    readTime: "9 min read",
    slug: "understanding-life-insurance",
    relatedSlugs: ["business-insurance-essentials"]
  },
  {
    id: 5,
    title: "Homeowners Insurance: What It Covers and What It Doesn't",
    excerpt: "A detailed look at standard coverage, exclusions, and additional policies you might need to protect your home.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=870",
    category: "Property",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    slug: "homeowners-insurance-coverage",
    relatedSlugs: ["insurance-claim-filing-guide"]
  },
  {
    id: 6,
    title: "Business Insurance Essentials for Small Companies",
    excerpt: "The key insurance policies every small business owner should consider to protect their venture.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=870",
    category: "Business",
    date: "Mar 20, 2025",
    readTime: "8 min read",
    slug: "business-insurance-essentials",
    relatedSlugs: ["understanding-life-insurance"]
  },
  {
    id: 7,
    title: "How to Save Money on Car Insurance: 10 Proven Tips",
    excerpt: "Strategic ways to lower your premiums without sacrificing important coverage.",
    image: "https://images.unsplash.com/photo-1560574188-6a6774965120?q=80&w=870",
    category: "Tips",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    slug: "save-money-car-insurance-tips",
    relatedSlugs: ["best-auto-insurance-companies-2025", "insurance-claim-filing-guide"]
  },
  {
    id: 8,
    title: "Medicare vs. Medicaid: Understanding the Differences",
    excerpt: "A clear breakdown of these two important government health insurance programs and who qualifies for each.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870",
    category: "Health",
    date: "Mar 10, 2025",
    readTime: "7 min read",
    slug: "medicare-vs-medicaid-differences",
    relatedSlugs: ["how-health-insurance-works", "best-health-insurance-families-texas-2025"]
  },
  {
    id: 9,
    title: "Best Health Insurance for Families in Texas (2025)",
    excerpt: "We compare the top health insurance providers in Texas based on coverage, networks, and affordability for families.",
    image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=870",
    category: "Health",
    date: "Mar 5, 2025",
    readTime: "8 min read",
    slug: "best-health-insurance-families-texas-2025",
    relatedSlugs: ["how-health-insurance-works", "medicare-vs-medicaid-differences"]
  }
];

const BlogList: React.FC<BlogListProps> = ({ category = "All" }) => {
  const [activeCategory, setActiveCategory] = useState(category);
  const [searchTerm, setSearchTerm] = useState("");

  // Update activeCategory when the category prop changes
  React.useEffect(() => {
    setActiveCategory(category);
  }, [category]);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || activeCategory.toLowerCase() === "all" || 
                           post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 rounded-full focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchTerm("");
            }}
            className="mt-4 text-primary font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
      
      {/* Ad space for Google AdSense */}
      {filteredPosts.length > 0 && (
        <div className="mt-12 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center">
          <div className="flex items-center justify-center h-16">
            <p className="text-gray-500 font-medium">Advertisement Space</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            This space is reserved for advertisements. 
            Content is clearly labeled for transparency.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
