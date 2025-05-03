
import React from "react";
import { 
  Shield, 
  Heart, 
  HomeIcon, 
  Car, 
  Plane, 
  Briefcase, 
  Building, 
  Banknote, 
  Umbrella 
} from "lucide-react";
import { InsuranceCategory } from "../types/navigation";

export const insuranceCategories: InsuranceCategory[] = [
  {
    name: "Life Insurance",
    path: "/category/life-insurance",
    icon: <Shield size={16} />,
    subcategories: []
  },
  {
    name: "Health Insurance",
    path: "/category/health-insurance",
    icon: <Heart size={16} />,
    subcategories: []
  },
  {
    name: "Property & Casualty (P&C) Insurance",
    path: "/category/property-casualty-insurance",
    icon: <HomeIcon size={16} />,
    subcategories: [
      {
        name: "Personal Lines",
        path: "/category/personal-lines",
        subcategories: [
          { name: "Auto Insurance", path: "/category/auto-insurance", icon: <Car size={16} /> },
          { name: "Homeowners and Renters Insurance", path: "/category/homeowners-renters-insurance", icon: <HomeIcon size={16} /> },
          { name: "Travel Insurance", path: "/category/travel-insurance", icon: <Plane size={16} /> }
        ]
      },
      {
        name: "Commercial Lines",
        path: "/category/commercial-lines",
        subcategories: [
          { name: "Business Insurance", path: "/category/business-insurance", icon: <Briefcase size={16} /> },
          { name: "Commercial Auto Insurance", path: "/category/commercial-auto-insurance", icon: <Car size={16} /> },
          { name: "Workers' Compensation Insurance", path: "/category/workers-compensation-insurance", icon: <Briefcase size={16} /> },
          { name: "Cyber Insurance", path: "/category/cyber-insurance", icon: <Shield size={16} /> }
        ]
      }
    ]
  },
  {
    name: "Specialty Insurance",
    path: "/category/specialty-insurance",
    icon: <Umbrella size={16} />,
    subcategories: [
      { name: "Marine and Aviation Insurance", path: "/category/marine-aviation-insurance", icon: <Plane size={16} /> },
      { name: "Pet Insurance", path: "/category/pet-insurance", icon: <Heart size={16} /> },
      { name: "Credit and Guarantee Insurance", path: "/category/credit-guarantee-insurance", icon: <Banknote size={16} /> }
    ]
  },
  {
    name: "E&S (Excess & Surplus Lines) Insurance",
    path: "/category/excess-surplus-lines",
    icon: <Briefcase size={16} />,
    subcategories: [
      { name: "High-Risk Businesses", path: "/category/high-risk-businesses", icon: <Briefcase size={16} /> },
      { name: "Unique Properties", path: "/category/unique-properties", icon: <Building size={16} /> },
      { name: "Special Events", path: "/category/special-events", icon: <Building size={16} /> },
      { name: "Professional Liabilities", path: "/category/professional-liabilities", icon: <Shield size={16} /> }
    ]
  },
  {
    name: "Reinsurance",
    path: "/category/reinsurance",
    icon: <Umbrella size={16} />,
    subcategories: []
  }
];
