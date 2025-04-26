
import React from "react";
import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords = "insurance, expertise, insurance guide, AI tools, insurance calculator",
  ogImage = "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=870"
}) => {
  const siteTitle = "Insurance Expertise | AI-Powered Insurance Content Hub";
  const fullTitle = title === "Home" ? siteTitle : `${title} | Insurance Expertise`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://insurancexpertise.com" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://insurancexpertise.com" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Insurance Expertise" />
      <link rel="canonical" href="https://insurancexpertise.com" />
    </Helmet>
  );
};

export default SEOHead;
