
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, LogIn, ChevronDown } from "lucide-react";
import { NavLink } from "../types/navigation";
import { DesktopNavItem } from "./DesktopNavItem";

interface DesktopMenuProps {
  navLinks: NavLink[];
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ navLinks }) => {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {navLinks.map((link) => (
        <DesktopNavItem key={link.name} item={link} />
      ))}
      <Button
        className="ml-4 bg-primary hover:bg-primary-700 text-white"
        asChild
      >
        <Link to="/tools">
          <Calculator size={16} className="mr-2" />
          Try AI Tools
        </Link>
      </Button>
      
      {/* Login Button */}
      <Button
        variant="outline"
        className="ml-2 border-primary text-primary hover:bg-primary/10 transition-colors"
        asChild
      >
        <Link to="/admin/login">
          <LogIn size={16} className="mr-2" />
          Login
        </Link>
      </Button>
    </div>
  );
};
