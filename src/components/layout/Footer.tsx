
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Insurance Expertise</h3>
            <p className="text-sm mb-4">
              Providing expert insurance knowledge, tools, and resources to help you make informed decisions about your insurance needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Tools</span>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Resources</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance Topics */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Explore Insurance Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/life-insurance" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Life Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/category/health-insurance" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Health Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/category/property-casualty-insurance" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Property & Casualty Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/category/auto-insurance" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Auto Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/category/specialty-insurance" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Specialty Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/category/reinsurance" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight size={14} />
                  <span>Reinsurance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p className="text-sm mb-4">
              Have questions or need assistance? We're here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-primary-300 hover:text-primary-200 transition-colors"
            >
              <Mail size={16} className="mr-2" />
              <span>Contact our team</span>
            </Link>
            <div className="mt-4">
              <p className="text-sm">Sign up for our newsletter to get the latest insurance tips and advice.</p>
              <Link
                to="/#newsletter"
                className="mt-2 inline-block bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 Insurance Expertise. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
