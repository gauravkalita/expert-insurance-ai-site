
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, DollarSign } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Insurance company data
const insuranceCompanies = {
  Auto: [
    { name: "Progressive", rating: 4.5, features: ["Accident forgiveness", "Name your price tool", "Snapshot program"], price: "$$" },
    { name: "Geico", rating: 4.3, features: ["Mechanical breakdown coverage", "Accident forgiveness", "Multi-vehicle discount"], price: "$" },
    { name: "State Farm", rating: 4.2, features: ["Drive Safe & Save", "Rideshare coverage", "Student discount"], price: "$$" }
  ],
  Home: [
    { name: "Lemonade", rating: 4.6, features: ["Fast digital claims", "Low monthly premiums", "Charity giveback"], price: "$" },
    { name: "Allstate", rating: 4.1, features: ["Multi-policy discount", "Claim RateGuard", "Identity theft protection"], price: "$$$" },
    { name: "Liberty Mutual", rating: 4.0, features: ["Inflation protection", "Home protector plus", "Personal property replacement"], price: "$$" }
  ],
  Life: [
    { name: "Prudential", rating: 4.4, features: ["No medical exam options", "Multiple term lengths", "Living benefits"], price: "$$" },
    { name: "New York Life", rating: 4.3, features: ["Dividend-paying policies", "Customizable coverage", "Cash value accumulation"], price: "$$$" },
    { name: "Haven Life", rating: 4.7, features: ["100% online process", "Affordable term coverage", "InstantTerm option"], price: "$" }
  ]
};

const InsuranceQuoteComparison = () => {
  const [selectedType, setSelectedType] = useState("Auto");
  const [compareMode, setCompareMode] = useState(false);
  
  const handleGetQuotes = (type: string) => {
    setSelectedType(type);
    setCompareMode(true);
    toast({
      title: `${type} Insurance Quotes Loaded`,
      description: `Comparing top rated ${type.toLowerCase()} insurance providers for you.`,
      variant: "default",
    });
  };

  const renderPriceIndicator = (price: string) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: price.length }).map((_, i) => (
          <DollarSign key={i} className="h-4 w-4 text-green-600" />
        ))}
        {Array.from({ length: 3 - price.length }).map((_, i) => (
          <DollarSign key={i + price.length} className="h-4 w-4 text-gray-300" />
        ))}
      </div>
    );
  };

  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: Math.floor(rating) }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
        {rating % 1 !== 0 && (
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        )}
        {Array.from({ length: Math.floor(5 - rating) }).map((_, i) => (
          <Star key={i + Math.ceil(rating)} className="h-4 w-4 text-gray-300" />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}/5</span>
      </div>
    );
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Compare Insurance Quotes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the best coverage at the most competitive rates from our trusted partners
        </p>
      </div>

      {!compareMode ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Auto", "Home", "Life"].map((type) => (
            <div key={type} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-primary-50 py-4 px-6 border-b border-gray-100">
                <h3 className="font-semibold">{type} Insurance</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Compare multiple providers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Save up to 40% on premiums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Personalized recommendations</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => handleGetQuotes(type)}>
                  Get {type} Insurance Quotes
                </Button>
              </div>
              <div className="px-6 py-3 bg-gray-50 text-center">
                <p className="text-xs text-gray-500">
                  Powered by trusted partners
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-4 justify-between">
            <h3 className="text-xl font-semibold">{selectedType} Insurance Comparison</h3>
            <div className="flex gap-3">
              {["Auto", "Home", "Life"].map((type) => (
                <Button 
                  key={type} 
                  variant={type === selectedType ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
              <Button variant="outline" size="sm" onClick={() => setCompareMode(false)}>
                Reset
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Provider</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Rating</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Key Features</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Price Range</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600"></th>
                </tr>
              </thead>
              <tbody>
                {insuranceCompanies[selectedType as keyof typeof insuranceCompanies].map((company, index) => (
                  <tr key={company.name} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}>
                    <td className="py-4 px-6 font-medium">{company.name}</td>
                    <td className="py-4 px-6">{renderRatingStars(company.rating)}</td>
                    <td className="py-4 px-6">
                      <ul className="list-disc pl-5 space-y-1">
                        {company.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-600">{feature}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 px-6">{renderPriceIndicator(company.price)}</td>
                    <td className="py-4 px-6">
                      <Button size="sm" onClick={() => toast({
                        title: "Quote Request Sent",
                        description: `We've sent your quote request to ${company.name}. Expect an email shortly.`,
                        variant: "default",
                      })}>
                        Get Quote
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-6">
            <h4 className="font-medium mb-2">How we rate insurance providers</h4>
            <p className="text-sm text-gray-600">Our ratings are based on customer satisfaction, financial strength, policy features, and value for money. We regularly update our comparison data to ensure accuracy and relevance.</p>
          </div>
        </div>
      )}
      
      <p className="text-xs text-gray-500 text-center mt-4">
        *This content contains affiliate links. We may receive commission for purchases made through these links.
      </p>
    </div>
  );
};

export default InsuranceQuoteComparison;
