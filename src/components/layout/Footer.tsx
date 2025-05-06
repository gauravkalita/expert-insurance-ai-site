
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

// SECTION: ASTRA FOOTER
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" id="astra-footer">
      <div className="container-custom">
        {/* ASTRA FOOTER WIDGETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8" id="astra-footer-widgets">
          {/* Company Info Widget */}
          <div className="astra-footer-widget astra-widget-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Insurance Expertise" 
                className="h-10 mr-2" 
                width="180"
                height="40"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted source for insurance expertise and guidance. We make insurance simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Widget */}
          <div className="astra-footer-widget astra-widget-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Insurance Categories Widget */}
          <div className="astra-footer-widget astra-widget-3">
            <h3 className="text-lg font-semibold mb-4">Insurance Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/life-insurance" className="text-gray-400 hover:text-white transition-colors">Life Insurance</Link>
              </li>
              <li>
                <Link to="/category/health-insurance" className="text-gray-400 hover:text-white transition-colors">Health Insurance</Link>
              </li>
              <li>
                <Link to="/category/property-casualty-insurance" className="text-gray-400 hover:text-white transition-colors">Property Insurance</Link>
              </li>
              <li>
                <Link to="/category/auto-insurance" className="text-gray-400 hover:text-white transition-colors">Auto Insurance</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Widget */}
          <div className="astra-footer-widget astra-widget-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <a href="mailto:contact@insuranceexpertise.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@insuranceexpertise.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <a href="tel:+18005550123" className="text-gray-400 hover:text-white transition-colors">
                  +1 (800) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ASTRA FOOTER COPYRIGHT */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center" id="astra-footer-copyright">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Insurance Expertise. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
