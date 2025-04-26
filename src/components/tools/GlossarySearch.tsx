
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

interface GlossaryItem {
  term: string;
  definition: string;
  category: string;
}

const GlossarySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const glossaryItems: GlossaryItem[] = [
    {
      term: "Premium",
      definition: "The amount you pay to your insurance company for your policy, typically on a monthly, quarterly, or annual basis.",
      category: "General"
    },
    {
      term: "Deductible",
      definition: "The amount you pay out of pocket before your insurance coverage kicks in. Higher deductibles generally mean lower premiums.",
      category: "General"
    },
    {
      term: "Copay",
      definition: "A fixed amount you pay for a covered healthcare service after you've paid your deductible.",
      category: "Health"
    },
    {
      term: "Coinsurance",
      definition: "The percentage of costs you pay for a covered healthcare service after you've paid your deductible.",
      category: "Health"
    },
    {
      term: "Out-of-Pocket Maximum",
      definition: "The most you have to pay for covered services in a plan year. After you spend this amount on deductibles, copayments, and coinsurance, your health plan pays 100% of the costs of covered benefits.",
      category: "Health"
    },
    {
      term: "Claim",
      definition: "A formal request to an insurance company asking for payment based on the terms of the insurance policy.",
      category: "General"
    },
    {
      term: "Liability Coverage",
      definition: "Insurance that provides protection against claims resulting from injuries and damage to people and/or property.",
      category: "Auto"
    },
    {
      term: "Collision Coverage",
      definition: "Insurance coverage that helps pay to repair or replace your car if it's damaged in an accident with another vehicle or object.",
      category: "Auto"
    },
    {
      term: "Comprehensive Coverage",
      definition: "Insurance coverage that helps pay to replace or repair your vehicle if it's stolen or damaged in an incident that's not a collision.",
      category: "Auto"
    },
    {
      term: "Homeowners Insurance",
      definition: "A form of property insurance that covers losses and damages to an individual's residence, along with furnishings and other assets in the home.",
      category: "Property"
    },
    {
      term: "Dwelling Coverage",
      definition: "The part of a homeowners insurance policy that helps pay to rebuild or repair the physical structure of your home if it's damaged by a covered peril.",
      category: "Property"
    },
    {
      term: "Term Life Insurance",
      definition: "Life insurance that provides coverage at a fixed rate of payments for a limited period of time.",
      category: "Life"
    },
    {
      term: "Whole Life Insurance",
      definition: "A permanent life insurance policy that provides lifelong coverage and includes an investment component that builds cash value over time.",
      category: "Life"
    },
    {
      term: "Beneficiary",
      definition: "The person or entity designated to receive the proceeds from an insurance policy upon the death of the insured.",
      category: "Life"
    },
    {
      term: "Underwriting",
      definition: "The process insurers use to determine the risk level and premium pricing for the coverage being requested.",
      category: "General"
    }
  ];

  const categories = ["All", "General", "Health", "Auto", "Property", "Life"];

  const filteredItems = glossaryItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Insurance Glossary</h2>
        <p className="text-gray-600">
          Find simple explanations for complex insurance terms and concepts.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search insurance terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 rounded-full focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">{item.term}</h3>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-700">{item.definition}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No terms found matching your criteria.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchTerm("");
            }}
            className="mt-4 text-primary font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default GlossarySearch;
