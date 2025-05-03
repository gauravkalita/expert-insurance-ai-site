
import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/logo.png" 
        alt="Insurance Expertise" 
        className="h-10 md:h-12 mr-2" 
      />
    </Link>
  );
};
