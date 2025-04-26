
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface ResultType {
  autoInsurance: string;
  homeInsurance: string;
  lifeInsurance: string;
  healthInsurance: string;
  recommendations: string[];
}

const InsuranceCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    homeValue: "",
    carValue: "",
    healthStatus: "excellent",
    dependents: "0",
    location: "",
  });
  const [results, setResults] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateInsuranceNeeds = () => {
    setLoading(true);
    
    // Simulate API call or complex calculation
    setTimeout(() => {
      // This would normally be calculated based on the form inputs
      const calculatedResults: ResultType = {
        autoInsurance: `$${parseInt(formData.carValue) > 30000 ? "1,500" : "800"} - $${parseInt(formData.carValue) > 30000 ? "2,200" : "1,200"} annually`,
        homeInsurance: formData.homeValue ? `$${Math.round(parseInt(formData.homeValue) * 0.003)} - $${Math.round(parseInt(formData.homeValue) * 0.005)} annually` : "N/A",
        lifeInsurance: parseInt(formData.dependents) > 0 ? `$${parseInt(formData.income) * 10} - $${parseInt(formData.income) * 12} coverage` : "May not be necessary",
        healthInsurance: formData.healthStatus === "excellent" ? "High-deductible plan with HSA" : "Comprehensive coverage plan",
        recommendations: [
          "Consider bundling home and auto insurance for discounts",
          "Review coverage limits annually as your assets change",
          "Compare quotes from at least three different insurers",
        ]
      };
      
      setResults(calculatedResults);
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      calculateInsuranceNeeds();
    }
  };

  const handleReset = () => {
    setFormData({
      age: "",
      income: "",
      homeValue: "",
      carValue: "",
      healthStatus: "excellent",
      dependents: "0",
      location: "",
    });
    setResults(null);
    setStep(1);
    toast({
      title: "Calculator Reset",
      description: "All inputs have been cleared.",
      variant: "default",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Insurance Needs Calculator</h2>
        <p className="text-gray-600">
          Get personalized insurance coverage recommendations based on your specific situation.
        </p>
      </div>

      {results ? (
        <div className="animate-fade-in">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Your Insurance Recommendations</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-700">Auto Insurance</h4>
                <p className="text-lg font-semibold text-primary">{results.autoInsurance}</p>
              </div>
              
              {formData.homeValue && (
                <div>
                  <h4 className="font-medium text-gray-700">Home Insurance</h4>
                  <p className="text-lg font-semibold text-primary">{results.homeInsurance}</p>
                </div>
              )}
              
              <div>
                <h4 className="font-medium text-gray-700">Life Insurance</h4>
                <p className="text-lg font-semibold text-primary">{results.lifeInsurance}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700">Health Insurance</h4>
                <p className="text-lg font-semibold text-primary">{results.healthInsurance}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Additional Recommendations</h3>
            <ul className="space-y-3">
              {results.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleReset} variant="outline" className="border-2 border-primary hover:bg-primary-50">
              Start Over
            </Button>
            <Button asChild className="bg-primary hover:bg-primary-700">
              <a href="/contact">
                Talk to an Expert
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Step {step} of 3</p>
              <div className="w-2/3 bg-gray-200 rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{ width: `${(step / 3) * 100}%` }}></div>
              </div>
            </div>
          </div>
          
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Age
                  </label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Income ($)
                  </label>
                  <Input
                    id="income"
                    name="income"
                    type="number"
                    placeholder="Enter your annual income"
                    value={formData.income}
                    onChange={handleChange}
                    required
                    className="border-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Your State
                </label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Enter your state (e.g., California)"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="border-2"
                />
              </div>
            </>
          )}
          
          {step === 2 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="homeValue" className="block text-sm font-medium text-gray-700 mb-1">
                    Home Value ($) <span className="text-gray-400">(if applicable)</span>
                  </label>
                  <Input
                    id="homeValue"
                    name="homeValue"
                    type="number"
                    placeholder="Enter home value"
                    value={formData.homeValue}
                    onChange={handleChange}
                    className="border-2"
                  />
                </div>
                <div>
                  <label htmlFor="carValue" className="block text-sm font-medium text-gray-700 mb-1">
                    Car Value ($)
                  </label>
                  <Input
                    id="carValue"
                    name="carValue"
                    type="number"
                    placeholder="Enter car value"
                    value={formData.carValue}
                    onChange={handleChange}
                    required
                    className="border-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Dependents
                </label>
                <Select 
                  value={formData.dependents} 
                  onValueChange={(value) => handleSelectChange("dependents", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select number of dependents" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5+">5 or more</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          
          {step === 3 && (
            <>
              <div>
                <label htmlFor="healthStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  Overall Health Status
                </label>
                <Select 
                  value={formData.healthStatus} 
                  onValueChange={(value) => handleSelectChange("healthStatus", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select health status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  Privacy Note
                </h4>
                <p className="text-sm text-amber-700 mt-1">
                  Your information is used only to generate recommendations and is never stored or shared with third parties.
                </p>
              </div>
            </>
          )}
          
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4">
            {step > 1 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setStep(step - 1)}
                className="border-2 border-gray-300"
              >
                Back
              </Button>
            )}
            <Button 
              type="submit"
              className={`${step === 3 ? "bg-primary" : "bg-primary"} hover:bg-primary-700 text-white`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculating...
                </>
              ) : step === 3 ? (
                "Get Recommendations"
              ) : (
                "Next"
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default InsuranceCalculator;
