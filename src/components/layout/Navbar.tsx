
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X,
  BookOpen,
  Wrench,
  Users,
  Mail,
  Calculator,
  FileText,
  Search,
  BookmarkCheck
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <BookOpen size={16} /> },
    { name: "Blog", path: "/blog", icon: <BookOpen size={16} /> },
    { name: "Tools", path: "/tools", icon: <Wrench size={16} /> },
    { name: "Resources", path: "/resources", icon: <BookmarkCheck size={16} /> },
    { name: "About", path: "/about", icon: <Users size={16} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={16} /> },
  ];

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-primary font-montserrat font-bold text-xl md:text-2xl">
              Insurance<span className="text-secondary">Expertise</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {link.icon}
                    {link.name}
                  </div>
                </Link>
              );
            })}
            <Button
              className="ml-4 bg-primary hover:bg-primary-700 text-white"
              asChild
            >
              <Link to="/tools">
                <Calculator size={16} className="mr-2" />
                Try AI Tools
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-2 pb-3 space-y-1 absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md px-4 py-2 z-50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    {link.icon}
                    {link.name}
                  </div>
                </Link>
              );
            })}
            <Button
              className="w-full mt-2 bg-primary hover:bg-primary-700 text-white"
              onClick={() => setIsOpen(false)}
              asChild
            >
              <Link to="/tools">
                <Calculator size={16} className="mr-2" />
                Try AI Tools
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
