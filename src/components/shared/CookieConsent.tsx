
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowBanner(false);
  };
  
  if (!showBanner) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg px-4 py-3 md:py-4">
      <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0 pr-8">
          <h3 className="text-sm font-semibold mb-2">Cookie Consent</h3>
          <p className="text-sm text-gray-600">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
            By clicking "Accept All", you consent to our use of cookies. To learn more, visit our{' '}
            <Link to="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={declineCookies}
            className="text-gray-600 hover:text-gray-800"
          >
            Decline
          </Button>
          
          <Button 
            size="sm" 
            onClick={acceptCookies}
            className="bg-primary hover:bg-primary-700"
          >
            Accept All
          </Button>
          
          <button 
            onClick={declineCookies} 
            className="p-1 text-gray-400 hover:text-gray-600"
            aria-label="Close cookie banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
