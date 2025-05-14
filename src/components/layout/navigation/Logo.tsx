
import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center" aria-label="Insurance Expertise Home">
      <img 
        src="/lovable-uploads/logo.png" 
        alt="Insurance Expertise Logo" 
        className="h-10 md:h-12" 
        width="180"
        height="40"
      />
    </Link>
  );
};
