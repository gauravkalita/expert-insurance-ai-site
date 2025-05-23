
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Logo } from "./navigation/Logo";
import { DesktopMenu } from "./navigation/DesktopMenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { navLinks } from "./data/navLinks";

// SECTION: ASTRA HEADER
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
      role="navigation"
      aria-label="Main Navigation"
      id="astra-main-header"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopMenu navLinks={navLinks} />
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
