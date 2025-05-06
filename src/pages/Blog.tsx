
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogList from "@/components/blog/BlogList";
import CategorySidebar from "@/components/blog/CategorySidebar";
import { AdSpace } from "@/components/shared/AdSpace";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { Search, Car, Heart, Home, Shield, BookOpen, TrendingUp } from "lucide-react";
import { TrustBadges } from "@/components/shared/TrustBadges";

// SECTION: ASTRA BLOG ARCHIVE
const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Ensure that the category is correctly set when coming from different parts of the site
  useEffect(() => {
    const categoryFromParams = searchParams.get('category');
    if (categoryFromParams) {
      setActiveCategory(categoryFromParams.toLowerCase());
    }
  }, [searchParams]);

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter results based on the search query
    console.log("Searching for:", searchQuery);
  };

  const popularTopics = [
    "Health Insurance", "Auto Insurance", "Life Insurance", 
    "Homeowners Insurance", "Claims Processing", "Medicare", 
    "Insurance Discounts", "Coverage Options"
  ];

  return (
    <>
      <SEOHead 
        title="Insurance Blog | Expert Guides, Tips & Articles | Insurance Expertise" 
        description="Explore expert articles and guides on insurance topics including auto, health, life, property insurance and more. Updated for 2025."
        keywords="insurance blog, insurance articles, insurance guides, insurance tips, auto insurance, health insurance, life insurance, property insurance"
      />
      <Navbar />
      <main>
        {/* ASTRA BLOG HEADER */}
        <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white" id="astra-blog-header">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <TrustBadges />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Blog</h1>
              <p className="text-lg text-gray-600">
                Expert articles and guides to help you navigate the complex world of insurance
              </p>
              
              {/* ASTRA SEARCH FORM */}
              <form onSubmit={handleSearch} className="mt-8 max-w-xl mx-auto" id="astra-blog-search">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 py-6 border-2 border-gray-200 focus:border-primary"
                  />
                  <Button 
                    type="submit"
                    className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90"
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
            
            {/* ASTRA TOPIC TAGS */}
            <div className="mb-8" id="astra-popular-topics">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold">Popular Topics</h2>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {popularTopics.map((topic, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* ASTRA BLOG SIDEBAR */}
              <div className="lg:col-span-1 order-2 lg:order-1" id="astra-blog-sidebar">
                <div className="sticky top-28 space-y-6">
                  <CategorySidebar />
                  <AdSpace location="sidebar" />
                </div>
              </div>

              {/* ASTRA BLOG CONTENT */}
              <div className="lg:col-span-3 order-1 lg:order-2" id="astra-blog-content">
                {/* ASTRA BLOG CATEGORIES */}
                <div className="mb-8 overflow-hidden" id="astra-blog-categories">
                  <Tabs 
                    defaultValue={activeCategory} 
                    value={activeCategory} 
                    onValueChange={handleCategoryChange}
                    className="w-full"
                  >
                    <div className="flex justify-center mb-6 overflow-x-auto md:overflow-visible">
                      <TabsList className="bg-gray-100 p-1">
                        <TabsTrigger value="all" className="data-[state=active]:bg-white">
                          <BookOpen className="w-4 h-4 mr-2" />
                          All
                        </TabsTrigger>
                        <TabsTrigger value="auto" className="data-[state=active]:bg-white">
                          <Car className="w-4 h-4 mr-2" />
                          Auto
                        </TabsTrigger>
                        <TabsTrigger value="health" className="data-[state=active]:bg-white">
                          <Heart className="w-4 h-4 mr-2" />
                          Health
                        </TabsTrigger>
                        <TabsTrigger value="property" className="data-[state=active]:bg-white">
                          <Home className="w-4 h-4 mr-2" />
                          Property
                        </TabsTrigger>
                        <TabsTrigger value="life" className="data-[state=active]:bg-white">
                          <Shield className="w-4 h-4 mr-2" />
                          Life
                        </TabsTrigger>
                        <TabsTrigger value="trending" className="data-[state=active]:bg-white">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Trending
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    {/* ASTRA BLOG POSTS */}
                    <TabsContent value="all" id="astra-blog-posts">
                      <BlogList category="all" />
                    </TabsContent>
                    <TabsContent value="auto">
                      <BlogList category="auto" />
                    </TabsContent>
                    <TabsContent value="health">
                      <BlogList category="health" />
                    </TabsContent>
                    <TabsContent value="property">
                      <BlogList category="property" />
                    </TabsContent>
                    <TabsContent value="life">
                      <BlogList category="life" />
                    </TabsContent>
                    <TabsContent value="trending">
                      <BlogList category="trending" />
                    </TabsContent>
                  </Tabs>
                </div>
                
                {/* ASTRA ADVERTISEMENT */}
                <div id="astra-blog-ad">
                  <AdSpace location="in-content" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* ASTRA NEWSLETTER SECTION */}
        <section id="astra-blog-newsletter">
          <NewsletterSignup />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
