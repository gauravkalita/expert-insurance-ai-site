
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Heart, HomeIcon, Shield, Plane, Briefcase, Building, Banknote, Umbrella } from 'lucide-react';

const CategorySidebar = () => {
  const categories = [
    {
      name: "Life Insurance",
      path: "/category/life-insurance",
      icon: <Shield size={16} className="mr-2" />,
      subcategories: []
    },
    {
      name: "Health Insurance",
      path: "/category/health-insurance",
      icon: <Heart size={16} className="mr-2" />,
      subcategories: []
    },
    {
      name: "Property & Casualty Insurance",
      path: "/category/property-casualty-insurance",
      icon: <HomeIcon size={16} className="mr-2" />,
      subcategories: [
        {
          name: "Personal Lines",
          path: "/category/personal-lines",
          subcategories: [
            { name: "Auto Insurance", path: "/category/auto-insurance", icon: <Car size={16} className="mr-2" /> },
            { name: "Homeowners Insurance", path: "/category/homeowners-renters-insurance", icon: <HomeIcon size={16} className="mr-2" /> },
            { name: "Travel Insurance", path: "/category/travel-insurance", icon: <Plane size={16} className="mr-2" /> }
          ]
        },
        {
          name: "Commercial Lines",
          path: "/category/commercial-lines",
          subcategories: [
            { name: "Business Insurance", path: "/category/business-insurance", icon: <Briefcase size={16} className="mr-2" /> },
            { name: "Commercial Auto Insurance", path: "/category/commercial-auto-insurance", icon: <Car size={16} className="mr-2" /> },
            { name: "Workers' Compensation", path: "/category/workers-compensation-insurance", icon: <Briefcase size={16} className="mr-2" /> }
          ]
        }
      ]
    },
    {
      name: "Specialty Insurance",
      path: "/category/specialty-insurance",
      icon: <Umbrella size={16} className="mr-2" />,
      subcategories: [
        { name: "Marine and Aviation", path: "/category/marine-aviation-insurance", icon: <Plane size={16} className="mr-2" /> },
        { name: "Pet Insurance", path: "/category/pet-insurance", icon: <Heart size={16} className="mr-2" /> }
      ]
    },
    {
      name: "Reinsurance",
      path: "/category/reinsurance",
      icon: <Umbrella size={16} className="mr-2" />,
      subcategories: []
    }
  ];

  const renderSubcategories = (subcategories: any[]) => {
    if (!subcategories || subcategories.length === 0) return null;
    
    return (
      <ul className="pl-4 mt-1 space-y-1">
        {subcategories.map((subcat) => (
          <li key={subcat.name}>
            <Link 
              to={subcat.path}
              className="text-sm text-gray-600 hover:text-primary flex items-center py-1"
            >
              {subcat.icon && subcat.icon}
              {subcat.name}
            </Link>
            {subcat.subcategories && subcat.subcategories.length > 0 && (
              renderSubcategories(subcat.subcategories)
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Browse by Insurance Type</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <Link 
              to={category.path}
              className="text-gray-800 hover:text-primary font-medium flex items-center"
            >
              {category.icon && category.icon}
              {category.name}
            </Link>
            {renderSubcategories(category.subcategories)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
