
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import SEOHead from "@/components/shared/SEOHead";

const Sitemap = () => {
  const categories = [
    { name: "Life Insurance", path: "/category/life-insurance" },
    { name: "Health Insurance", path: "/category/health-insurance" },
    { name: "Property & Casualty Insurance", path: "/category/property-casualty-insurance" },
    { name: "Specialty Insurance", path: "/category/specialty-insurance" },
    { name: "E&S (Excess & Surplus Lines) Insurance", path: "/category/excess-surplus-lines" },
    { name: "Reinsurance", path: "/category/reinsurance" },
  ];

  const mainPages = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Tools", path: "/tools" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <SEOHead
        title="Sitemap | Insurance Expertise"
        description="Complete sitemap of Insurance Expertise website with links to all pages and resources."
      />
      <Navbar />
      <main className="container-custom py-16">
        <h1 className="text-4xl font-bold mb-10 text-primary">Sitemap</h1>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-5 text-primary">Main Pages</h2>
            <ul className="space-y-3">
              {mainPages.map((page) => (
                <li key={page.path} className="hover:text-primary transition-colors">
                  <Link to={page.path} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-5 text-primary">Insurance Categories</h2>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.path} className="hover:text-primary transition-colors">
                  <Link to={category.path} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-5 text-primary">Admin</h2>
          <ul className="space-y-3">
            <li className="hover:text-primary transition-colors">
              <Link to="/admin/login" className="flex items-center gap-2">
                <span className="text-primary">•</span>
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;
