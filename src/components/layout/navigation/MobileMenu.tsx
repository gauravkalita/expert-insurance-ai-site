
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, X, Menu, LogIn, ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "../types/navigation";
import { insuranceCategories } from "../data/insuranceCategories";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, navLinks }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  if (!isOpen) {
    return (
      <div className="md:hidden flex items-center">
        <Button
          variant="outline"
          className="mr-2 border-primary text-primary hover:bg-primary/10"
          size="sm"
          asChild
        >
          <Link to="/admin/login" aria-label="Login">
            <LogIn size={16} aria-hidden="true" />
          </Link>
        </Button>
        
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded="false"
          aria-controls="mobile-menu"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    );
  }

  const toggleCategory = (categoryName: string) => {
    if (openCategory === categoryName) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryName);
    }
  };

  return (
    <>
      <div className="md:hidden flex items-center">
        <Button
          variant="outline"
          className="mr-2 border-primary text-primary hover:bg-primary/10"
          size="sm"
          asChild
        >
          <Link to="/admin/login" aria-label="Login">
            <LogIn size={16} aria-hidden="true" />
          </Link>
        </Button>
        
        <button
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded="true"
          aria-controls="mobile-menu"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu"
        className="md:hidden absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md px-4 py-2 z-50 max-h-[80vh] overflow-y-auto"
        role="navigation" 
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => {
          if (link.hasDropdown) {
            return (
              <Collapsible key={link.name}>
                <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <div className="flex items-center gap-2">
                    {link.icon && <span aria-hidden="true">{link.icon}</span>}
                    {link.name}
                  </div>
                  {openCategory === link.name ? 
                    <ChevronDown size={16} aria-hidden="true" /> : 
                    <ChevronRight size={16} aria-hidden="true" />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-5 mt-1 space-y-1">
                  {insuranceCategories.map((category) => (
                    <Collapsible key={category.name}>
                      <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-1.5 rounded-md text-sm hover:bg-gray-100 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <div className="flex items-center gap-2">
                          {category.icon && <span aria-hidden="true">{category.icon}</span>}
                          {category.name}
                        </div>
                        {category.subcategories && category.subcategories.length > 0 && (
                          <ChevronRight size={14} aria-hidden="true" />
                        )}
                      </CollapsibleTrigger>
                      {category.subcategories && category.subcategories.length > 0 && (
                        <CollapsibleContent className="pl-5 space-y-1">
                          {category.subcategories.map((subcat) => (
                            <Link
                              key={subcat.name}
                              to={subcat.path}
                              className="block px-3 py-1 rounded-md text-sm hover:bg-gray-100 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {subcat.name}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            );
          }
          
          return (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2">
                {link.icon && <span aria-hidden="true">{link.icon}</span>}
                {link.name}
              </div>
            </Link>
          );
        })}
        <Button
          className="w-full mt-3 bg-primary hover:bg-primary-700 text-white"
          onClick={() => setIsOpen(false)}
          asChild
        >
          <Link to="/tools" aria-label="Try our AI Insurance Tools">
            <Calculator size={16} className="mr-2" aria-hidden="true" />
            Try AI Tools
          </Link>
        </Button>
      </div>
    </>
  );
};
