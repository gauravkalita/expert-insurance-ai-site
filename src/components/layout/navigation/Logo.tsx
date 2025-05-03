
import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center" aria-label="Insurance Expertise Home">
      <img 
        src="/lovable-uploads/348fe80e-dd24-4312-a82d-f761294c0b95.png" 
        alt="Insurance Expertise Logo" 
        className="h-10 md:h-12" 
      />
    </Link>
  );
};
