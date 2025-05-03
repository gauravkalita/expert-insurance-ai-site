
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, LogIn } from "lucide-react";
import { NavLink } from "../types/navigation";
import { DesktopNavItem } from "./DesktopNavItem";

interface DesktopMenuProps {
  navLinks: NavLink[];
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ navLinks }) => {
  return (
    <div className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
      {navLinks.map((link) => (
        <DesktopNavItem key={link.name} item={link} />
      ))}
      <Button
        className="ml-4 bg-primary hover:bg-primary-700 text-white"
        asChild
      >
        <Link to="/tools" aria-label="Try our AI Insurance Tools">
          <Calculator size={16} className="mr-2" aria-hidden="true" />
          Try AI Tools
        </Link>
      </Button>
      
      {/* Login Button */}
      <Button
        variant="outline"
        className="ml-2 border-primary text-primary hover:bg-primary/10 transition-colors"
        asChild
      >
        <Link to="/admin/login" aria-label="Login to your account">
          <LogIn size={16} className="mr-2" aria-hidden="true" />
          Login
        </Link>
      </Button>
    </div>
  );
};
