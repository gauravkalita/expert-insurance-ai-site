
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
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
  BookmarkCheck,
  Heart,
  Home as HomeIcon,
  Car,
  Shield,
  Briefcase,
  Plane,
  Building,
  Banknote,
  Umbrella,
  ChevronDown
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
    { name: "Home", path: "/", icon: <HomeIcon size={16} /> },
    {
      name: "Insurance",
      path: "#",
      icon: <Shield size={16} />,
      hasDropdown: true,
    },
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

  // Insurance categories structure
  const insuranceCategories = [
    {
      name: "Life Insurance",
      path: "/category/life-insurance",
      icon: <Shield size={16} />,
      subcategories: []
    },
    {
      name: "Health Insurance",
      path: "/category/health-insurance",
      icon: <Heart size={16} />,
      subcategories: []
    },
    {
      name: "Property & Casualty (P&C) Insurance",
      path: "/category/property-casualty-insurance",
      icon: <HomeIcon size={16} />,
      subcategories: [
        {
          name: "Personal Lines",
          path: "/category/personal-lines",
          subcategories: [
            { name: "Auto Insurance", path: "/category/auto-insurance", icon: <Car size={16} /> },
            { name: "Homeowners and Renters Insurance", path: "/category/homeowners-renters-insurance", icon: <HomeIcon size={16} /> },
            { name: "Travel Insurance", path: "/category/travel-insurance", icon: <Plane size={16} /> }
          ]
        },
        {
          name: "Commercial Lines",
          path: "/category/commercial-lines",
          subcategories: [
            { name: "Business Insurance", path: "/category/business-insurance", icon: <Briefcase size={16} /> },
            { name: "Commercial Auto Insurance", path: "/category/commercial-auto-insurance", icon: <Car size={16} /> },
            { name: "Workers' Compensation Insurance", path: "/category/workers-compensation-insurance", icon: <Briefcase size={16} /> },
            { name: "Cyber Insurance", path: "/category/cyber-insurance", icon: <Shield size={16} /> }
          ]
        }
      ]
    },
    {
      name: "Specialty Insurance",
      path: "/category/specialty-insurance",
      icon: <Umbrella size={16} />,
      subcategories: [
        { name: "Marine and Aviation Insurance", path: "/category/marine-aviation-insurance", icon: <Plane size={16} /> },
        { name: "Pet Insurance", path: "/category/pet-insurance", icon: <Heart size={16} /> },
        { name: "Credit and Guarantee Insurance", path: "/category/credit-guarantee-insurance", icon: <Banknote size={16} /> }
      ]
    },
    {
      name: "E&S (Excess & Surplus Lines) Insurance",
      path: "/category/excess-surplus-lines",
      icon: <Briefcase size={16} />,
      subcategories: [
        { name: "High-Risk Businesses", path: "/category/high-risk-businesses", icon: <Briefcase size={16} /> },
        { name: "Unique Properties", path: "/category/unique-properties", icon: <Building size={16} /> },
        { name: "Special Events", path: "/category/special-events", icon: <Building size={16} /> },
        { name: "Professional Liabilities", path: "/category/professional-liabilities", icon: <Shield size={16} /> }
      ]
    },
    {
      name: "Reinsurance",
      path: "/category/reinsurance",
      icon: <Umbrella size={16} />,
      subcategories: []
    }
  ];

  const renderDropdownNavItem = (item: any) => {
    if (item.hasDropdown) {
      return (
        <DropdownMenu key={item.name}>
          <DropdownMenuTrigger asChild className="inline-flex items-center cursor-pointer">
            <div className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 flex items-center gap-1.5`}>
              {item.icon}
              {item.name}
              <ChevronDown size={14} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80">
            {insuranceCategories.map((category) => {
              if (category.subcategories && category.subcategories.length > 0) {
                return (
                  <DropdownMenuSub key={category.name}>
                    <DropdownMenuSubTrigger className="cursor-pointer">
                      {category.icon} 
                      <span className="ml-2">{category.name}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="min-w-[220px]">
                      <DropdownMenuItem asChild>
                        <Link to={category.path} className="w-full">View All {category.name}</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {category.subcategories.map((subcat: any) => {
                        if (subcat.subcategories && subcat.subcategories.length > 0) {
                          return (
                            <DropdownMenuSub key={subcat.name}>
                              <DropdownMenuSubTrigger className="cursor-pointer">
                                <span>{subcat.name}</span>
                              </DropdownMenuSubTrigger>
                              <DropdownMenuSubContent className="min-w-[220px]">
                                <DropdownMenuItem asChild>
                                  <Link to={subcat.path} className="w-full">View All {subcat.name}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {subcat.subcategories.map((thirdLevel: any) => (
                                  <DropdownMenuItem key={thirdLevel.name} asChild>
                                    <Link to={thirdLevel.path} className="flex items-center">
                                      {thirdLevel.icon && <span className="mr-2">{thirdLevel.icon}</span>}
                                      {thirdLevel.name}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          );
                        } else {
                          return (
                            <DropdownMenuItem key={subcat.name} asChild>
                              <Link to={subcat.path}>{subcat.name}</Link>
                            </DropdownMenuItem>
                          );
                        }
                      })}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                );
              } else {
                return (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link to={category.path} className="flex items-center">
                      {category.icon && <span className="mr-2">{category.icon}</span>}
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                );
              }
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    } else {
      const isActive = location.pathname === item.path;
      
      return (
        <Link
          key={item.name}
          to={item.path}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive 
              ? "bg-primary/10 text-primary" 
              : "hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center gap-1.5">
            {item.icon}
            {item.name}
          </div>
        </Link>
      );
    }
  };

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
            {navLinks.map((link) => renderDropdownNavItem(link))}
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
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="block px-3 py-2 rounded-md text-base font-medium">
                    <div className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </div>
                    <div className="pl-5 mt-2 space-y-1">
                      {insuranceCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="block px-3 py-1 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {category.icon && <span className="mr-2">{category.icon}</span>}
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
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
