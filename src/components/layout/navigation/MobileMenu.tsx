
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, X, Menu, LogIn, ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "../types/navigation";
import { insuranceCategories } from "../data/insuranceCategories";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// SECTION: ASTRA MOBILE MENU
interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, navLinks }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    if (openCategory === categoryName) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryName);
    }
  };
  
  return (
    <div className="md:hidden flex items-center" id="astra-mobile-menu">
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
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[85%] max-w-sm p-0">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-medium">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-2 px-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <Collapsible key={link.name} className="mb-2 astra-submenu-section">
                      <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-gray-100">
                        <div className="flex items-center gap-2">
                          {link.icon && <span aria-hidden="true">{link.icon}</span>}
                          {link.name}
                        </div>
                        <ChevronDown size={16} aria-hidden="true" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-5 mt-1 space-y-1">
                        {insuranceCategories.map((category) => (
                          <Collapsible key={category.name} className="mb-1 astra-submenu-item">
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
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary mb-1 astra-menu-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      {link.icon && <span aria-hidden="true">{link.icon}</span>}
                      {link.name}
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="border-t p-4 astra-cta-button">
              <Button
                className="w-full bg-primary hover:bg-primary-700 text-white"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link to="/tools" aria-label="Try our AI Insurance Tools">
                  <Calculator size={16} className="mr-2" aria-hidden="true" />
                  Try AI Tools
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
