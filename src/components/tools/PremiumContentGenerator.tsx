
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle } from "lucide-react";

const PremiumContentGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("claim");
  const templates = [
    { id: "claim", name: "Claim Letter" },
    { id: "cancel", name: "Cancellation Notice" },
    { id: "appeal", name: "Appeal Letter" },
    { id: "quote", name: "Quote Request" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Content Generator</h2>
        <p className="text-gray-600">
          Create professional templates for claim letters, cancellation notices, and more.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Select a Template Type</h3>
          <div className="space-y-3">
            {templates.map((template) => (
              <div 
                key={template.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedTemplate === template.id 
                    ? "border-primary bg-primary-50" 
                    : "border-gray-200 hover:border-primary/30"
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-medium">{template.name}</span>
                  </div>
                  {selectedTemplate === template.id && (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-primary/5 rounded-lg p-8 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Premium Feature</h3>
          <p className="text-gray-600 mb-6">
            The Content Generator is available to premium subscribers only. Upgrade your account to access this powerful tool.
          </p>
          <Button className="btn-gradient">
            Upgrade to Premium
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PremiumContentGenerator;
