
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const InsuranceQuoteComparison = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Compare Insurance Quotes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the best coverage at the most competitive rates from our trusted partners
        </p>
      </div>

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
              <Button className="w-full">
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
      <p className="text-xs text-gray-500 text-center mt-4">
        *This content contains affiliate links. We may receive commission for purchases made through these links.
      </p>
    </div>
  );
};

export default InsuranceQuoteComparison;
