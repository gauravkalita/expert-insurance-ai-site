
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, X, Menu, LogIn } from "lucide-react";
import { NavLink } from "../types/navigation";
import { insuranceCategories } from "../data/insuranceCategories";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, navLinks }) => {
  if (!isOpen) {
    return (
      <div className="md:hidden flex items-center">
        <Button
          variant="outline"
          className="mr-2 border-primary text-primary hover:bg-primary/10"
          size="sm"
          asChild
        >
          <Link to="/admin/login">
            <LogIn size={16} />
          </Link>
        </Button>
        
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="md:hidden flex items-center">
        <Button
          variant="outline"
          className="mr-2 border-primary text-primary hover:bg-primary/10"
          size="sm"
          asChild
        >
          <Link to="/admin/login">
            <LogIn size={16} />
          </Link>
        </Button>
        
        <button
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
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
          
          return (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700"
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
    </>
  );
};
