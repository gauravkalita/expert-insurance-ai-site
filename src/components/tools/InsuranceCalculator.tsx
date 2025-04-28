
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { StepProgress } from "@/components/ui/step-progress";
import { InsuranceResultsChart } from "@/components/tools/InsuranceResultsChart";
import { ResultsShareForm } from "@/components/tools/ResultsShareForm";
import { 
  INSURANCE_TYPES, 
  INSURANCE_DESCRIPTIONS,
  INSURANCE_TOOLTIPS,
  INSURANCE_EDUCATION,
  type InsuranceType 
} from "@/components/tools/insuranceTypes";

import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

import { toast } from "@/hooks/use-toast";
import { 
  Info, 
  Save, 
  Mail, 
  LineChart, 
  ArrowRight,
  Check,
  CheckCircle,
  BarChart4,
  Send
} from "lucide-react";

interface Result {
  coverageOptions: {
    basic: string;
    recommended: string;
    premium: string;
  };
  monthlyPremiumRange: {
    low: string;
    high: string;
  };
  recommendations: string[];
  riskFactors: string[];
  breakdown: {
    name: string;
    value: number;
    label?: string;
  }[];
  summary: string;
}

const InsuranceCalculator = () => {
  // Main form state
  const [step, setStep] = useState(0); // Start at step 0 for insurance type selection
  const [insuranceType, setInsuranceType] = useState<InsuranceType | "">("");
  const [formData, setFormData] = useState({
    // Personal info
    age: 30,
    income: 60000,
    location: "",
    dependents: "0",
    // Property info
    homeValue: 300000,
    carValue: 25000,
    carAge: 3,
    // Health info
    healthStatus: "excellent",
    preExistingConditions: false,
    smoker: false,
    // Life insurance
    debtAmount: 150000,
    savingsAmount: 50000,
    // Auto insurance
    milesDriven: 12000,
    drivingRecord: "clean",
    // Business insurance
    businessType: "retail",
    revenue: 500000,
    employees: "1-10",
    businessProperty: 200000,
    // Advanced options
    riskTolerance: "moderate",
  });

  const [results, setResults] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Calculate total number of steps based on insurance type
  const getTotalSteps = () => {
    // Add 1 to include the insurance type selection step
    switch (insuranceType) {
      case "auto":
        return 4;
      case "home":
        return 4;
      case "life":
        return 5;
      case "health":
        return 5;
      case "business":
        return 4;
      default:
        return 1; // Just the insurance type selection step
    }
  };

  const totalSteps = getTotalSteps();

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsuranceTypeChange = (value: string) => {
    setInsuranceType(value as InsuranceType);
    setStep(1); // Move to first question step after selecting insurance type
    setResults(null);
  };

  const handleSliderChange = (name: string, value: number[]) => {
    setFormData((prev) => ({ ...prev, [name]: value[0] }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  // Generate the results based on the insurance type and form data
  const calculateInsuranceNeeds = () => {
    setLoading(true);
    
    // Simulate API call or complex calculation
    setTimeout(() => {
      let calculatedResult: Result;

      switch (insuranceType) {
        case "auto":
          calculatedResult = calculateAutoInsurance();
          break;
        case "home":
          calculatedResult = calculateHomeInsurance();
          break;
        case "life":
          calculatedResult = calculateLifeInsurance();
          break;
        case "health":
          calculatedResult = calculateHealthInsurance();
          break;
        case "business":
          calculatedResult = calculateBusinessInsurance();
          break;
        default:
          calculatedResult = calculateAutoInsurance();
      }
      
      setResults(calculatedResult);
      setLoading(false);
    }, 1200);
  };

  // Auto insurance calculation
  const calculateAutoInsurance = (): Result => {
    const { carValue, carAge, milesDriven, drivingRecord } = formData;
    
    // Base calculation factors (simplified for demo)
    let baseMultiplier = 0.03; // 3% of car value annually as base premium
    
    // Adjust for car age
    baseMultiplier += carAge > 5 ? 0.01 : 0;
    
    // Adjust for miles driven
    baseMultiplier += milesDriven > 15000 ? 0.01 : 0;
    
    // Adjust for driving record
    baseMultiplier += drivingRecord === "violations" ? 0.02 : 0;
    
    const basicCoverage = Math.round(carValue * 0.7);
    const recommendedCoverage = Math.round(carValue * 1);
    const premiumCoverage = Math.round(carValue * 1.5);
    
    const lowMonthly = Math.round((carValue * (baseMultiplier - 0.005)) / 12);
    const highMonthly = Math.round((carValue * (baseMultiplier + 0.01)) / 12);
    
    return {
      coverageOptions: {
        basic: `$${basicCoverage.toLocaleString()}`,
        recommended: `$${recommendedCoverage.toLocaleString()}`,
        premium: `$${premiumCoverage.toLocaleString()}`
      },
      monthlyPremiumRange: {
        low: `$${lowMonthly}`,
        high: `$${highMonthly}`
      },
      recommendations: [
        "Consider comprehensive coverage for vehicles less than 5 years old",
        "Bundling auto with home insurance can save up to 20%",
        "Higher deductibles can lower your monthly premium"
      ],
      riskFactors: [
        drivingRecord !== "clean" ? "Traffic violations increase premiums" : "Clean driving record qualifies for discounts",
        milesDriven > 15000 ? "High annual mileage" : "Low annual mileage may qualify for discounts",
        carAge > 5 ? "Older vehicle may need mechanical breakdown coverage" : "Newer vehicle with higher replacement cost"
      ],
      breakdown: [
        { name: "Liability", value: 40, label: "Liability" },
        { name: "Collision", value: 30, label: "Collision" },
        { name: "Comprehensive", value: 20, label: "Comprehensive" },
        { name: "Personal Injury", value: 10, label: "Personal Injury" }
      ],
      summary: `Based on your ${carAge}-year-old vehicle valued at $${carValue.toLocaleString()}, we recommend auto insurance coverage of approximately $${recommendedCoverage.toLocaleString()}, with an estimated monthly premium range of $${lowMonthly}-$${highMonthly}.`
    };
  };

  // Home insurance calculation
  const calculateHomeInsurance = (): Result => {
    const { homeValue } = formData;
    
    // Base calculation (simplified for demo)
    const basicCoverage = Math.round(homeValue * 0.8);
    const recommendedCoverage = Math.round(homeValue * 1);
    const premiumCoverage = Math.round(homeValue * 1.2);
    
    const baseRate = 0.003; // 0.3% of home value annually
    const lowMonthly = Math.round((homeValue * baseRate) / 12);
    const highMonthly = Math.round((homeValue * (baseRate + 0.001)) / 12);
    
    return {
      coverageOptions: {
        basic: `$${basicCoverage.toLocaleString()}`,
        recommended: `$${recommendedCoverage.toLocaleString()}`,
        premium: `$${premiumCoverage.toLocaleString()}`
      },
      monthlyPremiumRange: {
        low: `$${lowMonthly}`,
        high: `$${highMonthly}`
      },
      recommendations: [
        "Consider additional flood insurance if you're in a high-risk area",
        "Install security systems to potentially lower premiums",
        "Take inventory of valuable possessions for personal property coverage"
      ],
      riskFactors: [
        "Home age and construction materials affect premiums",
        "Location-based risks like natural disasters",
        "Security features can reduce premium costs"
      ],
      breakdown: [
        { name: "Dwelling", value: 60, label: "Dwelling" },
        { name: "Personal Property", value: 20, label: "Personal Property" },
        { name: "Liability", value: 15, label: "Liability" },
        { name: "Additional Living", value: 5, label: "Additional Living" }
      ],
      summary: `For your home valued at $${homeValue.toLocaleString()}, we recommend coverage of $${recommendedCoverage.toLocaleString()}, with an estimated monthly premium between $${lowMonthly}-$${highMonthly}. This provides protection for both your dwelling and personal property.`
    };
  };

  // Life insurance calculation
  const calculateLifeInsurance = (): Result => {
    const { income, age, dependents, debtAmount, savingsAmount } = formData;
    
    // Standard calculation using income multiple method
    const incomeYears = parseInt(dependents) > 0 ? 10 : 5;
    const incomeReplacement = income * incomeYears;
    
    // Add debt, subtract savings
    const totalNeeds = incomeReplacement + debtAmount - savingsAmount;
    
    // Add buffer based on age (younger gets more coverage)
    const ageMultiplier = age < 40 ? 1.2 : age < 60 ? 1 : 0.8;
    
    const recommendedCoverage = Math.round(totalNeeds * ageMultiplier);
    const basicCoverage = Math.round(recommendedCoverage * 0.7);
    const premiumCoverage = Math.round(recommendedCoverage * 1.5);
    
    // Simple premium calculation
    const baseRate = (age / 1000); // Age-based rate
    const lowMonthly = Math.round((recommendedCoverage * baseRate) / 12);
    const highMonthly = Math.round((recommendedCoverage * (baseRate * 1.5)) / 12);
    
    // Calculate percentages for breakdown
    const incomePercent = Math.round((incomeReplacement / totalNeeds) * 100);
    const debtPercent = Math.round((debtAmount / totalNeeds) * 100);
    const finalExpensesPercent = Math.round((income * 0.1 / totalNeeds) * 100);
    const educationPercent = 100 - incomePercent - debtPercent - finalExpensesPercent;
    
    return {
      coverageOptions: {
        basic: `$${basicCoverage.toLocaleString()}`,
        recommended: `$${recommendedCoverage.toLocaleString()}`,
        premium: `$${premiumCoverage.toLocaleString()}`
      },
      monthlyPremiumRange: {
        low: `$${lowMonthly}`,
        high: `$${highMonthly}`
      },
      recommendations: [
        "Term life insurance is more affordable for younger individuals",
        "Consider riders for critical illness or disability",
        parseInt(dependents) > 0 ? "Higher coverage recommended with dependents" : "Lower coverage may be sufficient without dependents"
      ],
      riskFactors: [
        age > 50 ? "Age increases premium costs" : "Younger age provides better rates",
        "Health status and family medical history",
        "Occupation and lifestyle activities"
      ],
      breakdown: [
        { name: "Income Replacement", value: incomePercent, label: "Income" },
        { name: "Debt Coverage", value: debtPercent, label: "Debt" },
        { name: "Final Expenses", value: finalExpensesPercent, label: "Final Expenses" },
        { name: "Education/Other", value: educationPercent, label: "Education" }
      ],
      summary: `Based on your annual income of $${income.toLocaleString()}, debt of $${debtAmount.toLocaleString()}, and ${dependents} dependents, we recommend life insurance coverage of $${recommendedCoverage.toLocaleString()}, with premiums estimated at $${lowMonthly}-$${highMonthly} per month.`
    };
  };

  // Health insurance calculation
  const calculateHealthInsurance = (): Result => {
    const { age, healthStatus, preExistingConditions, smoker } = formData;
    
    // Base calculation factors
    let baseMonthly = 350; // Starting point for monthly premium
    
    // Adjust for age
    if (age < 30) baseMonthly -= 50;
    else if (age > 50) baseMonthly += 100;
    
    // Adjust for health status
    if (healthStatus === "excellent") baseMonthly -= 30;
    else if (healthStatus === "poor") baseMonthly += 100;
    
    // Adjust for pre-existing conditions and smoking
    if (preExistingConditions) baseMonthly += 150;
    if (smoker) baseMonthly += 200;
    
    // Coverage tiers
    const basicDeductible = 2000;
    const recommendedDeductible = 1000;
    const premiumDeductible = 500;
    
    return {
      coverageOptions: {
        basic: `$${basicDeductible} deductible / 80% coverage`,
        recommended: `$${recommendedDeductible} deductible / 90% coverage`,
        premium: `$${premiumDeductible} deductible / 100% coverage`
      },
      monthlyPremiumRange: {
        low: `$${Math.round(baseMonthly * 0.9)}`,
        high: `$${Math.round(baseMonthly * 1.2)}`
      },
      recommendations: [
        "Consider Health Savings Account (HSA) for tax advantages",
        "Review network providers to ensure your doctors are covered",
        smoker ? "Quitting smoking could significantly reduce your premiums" : "Maintaining healthy habits keeps premiums lower"
      ],
      riskFactors: [
        preExistingConditions ? "Pre-existing conditions impact coverage options" : "No pre-existing conditions noted",
        healthStatus !== "excellent" ? "Health status affects premium costs" : "Excellent health qualifies for best rates",
        age > 50 ? "Age increases premium costs for health insurance" : "Younger age provides better health insurance rates"
      ],
      breakdown: [
        { name: "Doctor Visits", value: 25, label: "Doctor Visits" },
        { name: "Hospital Care", value: 40, label: "Hospital" },
        { name: "Medications", value: 20, label: "Medications" },
        { name: "Preventive Care", value: 15, label: "Preventive" }
      ],
      summary: `Based on your age (${age}), health status (${healthStatus}), and risk factors, we recommend a health insurance plan with a $${recommendedDeductible} deductible and 90% coverage. Estimated monthly premium: $${Math.round(baseMonthly * 0.9)}-$${Math.round(baseMonthly * 1.2)}.`
    };
  };
  
  // Business insurance calculation
  const calculateBusinessInsurance = (): Result => {
    const { businessType, revenue, employees, businessProperty } = formData;
    
    // Base calculation factors (simplified for demo)
    let baseAnnualRate = revenue * 0.01; // 1% of revenue
    
    // Adjust for business type
    if (businessType === "construction" || businessType === "restaurant") 
      baseAnnualRate *= 1.3; // Higher risk businesses
    
    // Adjust for number of employees
    if (employees === "11-50") baseAnnualRate *= 1.2;
    else if (employees === "51+") baseAnnualRate *= 1.5;
    
    // Add property coverage
    baseAnnualRate += businessProperty * 0.003;
    
    const lowMonthly = Math.round(baseAnnualRate / 12 * 0.9);
    const highMonthly = Math.round(baseAnnualRate / 12 * 1.1);
    
    const recommendedCoverage = Math.round(Math.max(revenue, businessProperty * 2));
    const basicCoverage = Math.round(recommendedCoverage * 0.7);
    const premiumCoverage = Math.round(recommendedCoverage * 1.3);
    
    return {
      coverageOptions: {
        basic: `$${basicCoverage.toLocaleString()}`,
        recommended: `$${recommendedCoverage.toLocaleString()}`,
        premium: `$${premiumCoverage.toLocaleString()}`
      },
      monthlyPremiumRange: {
        low: `$${lowMonthly}`,
        high: `$${highMonthly}`
      },
      recommendations: [
        "Consider bundling multiple business insurance policies for a discount",
        `Additional liability coverage is recommended for ${businessType} businesses`,
        employees !== "0" ? "Workers' compensation insurance is required for businesses with employees" : "Consider disability insurance for yourself as a business owner"
      ],
      riskFactors: [
        businessType === "construction" || businessType === "restaurant" ? "High-risk industry increases premium costs" : "Lower-risk industry qualifies for better rates",
        employees === "51+" ? "Larger workforce increases liability exposure" : "Smaller workforce reduces some liability risks",
        businessProperty > 500000 ? "Significant property assets require comprehensive coverage" : "Property coverage needs are moderate"
      ],
      breakdown: [
        { name: "General Liability", value: 35, label: "General Liability" },
        { name: "Property", value: 25, label: "Property" },
        { name: "Workers' Comp", value: 20, label: "Workers' Comp" },
        { name: "Business Interruption", value: 15, label: "Business Interruption" },
        { name: "Professional Liability", value: 5, label: "Professional Liability" }
      ],
      summary: `For your ${businessType} business with $${revenue.toLocaleString()} in annual revenue, we recommend comprehensive coverage of $${recommendedCoverage.toLocaleString()}, with monthly premiums estimated at $${lowMonthly}-$${highMonthly}.`
    };
  };

  // Navigate through steps
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      calculateInsuranceNeeds();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setFormData({
      age: 30,
      income: 60000,
      location: "",
      dependents: "0",
      homeValue: 300000,
      carValue: 25000,
      carAge: 3,
      healthStatus: "excellent",
      preExistingConditions: false,
      smoker: false,
      debtAmount: 150000,
      savingsAmount: 50000,
      milesDriven: 12000,
      drivingRecord: "clean",
      businessType: "retail",
      revenue: 500000,
      employees: "1-10",
      businessProperty: 200000,
      riskTolerance: "moderate",
    });
    setResults(null);
    setStep(0);
    setInsuranceType("");
    toast({
      title: "Calculator Reset",
      description: "All inputs have been cleared.",
    });
  };

  // Render the form steps based on insurance type and current step
  const renderFormStep = () => {
    // Step 0 is insurance type selection
    if (step === 0) {
      return renderInsuranceTypeSelection();
    }
    
    switch (insuranceType) {
      case "auto":
        return renderAutoForm();
      case "home":
        return renderHomeForm();
      case "life":
        return renderLifeForm();
      case "health":
        return renderHealthForm();
      case "business":
        return renderBusinessForm();
      default:
        return renderInsuranceTypeSelection();
    }
  };
  
  // Insurance type selection step
  const renderInsuranceTypeSelection = () => {
    return (
      <>
        <h3 className="text-xl font-semibold mb-4">Which type of insurance do you need help with?</h3>
        <p className="text-gray-600 mb-6">
          Select the insurance type to get personalized coverage recommendations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {INSURANCE_TYPES.map((type) => (
            <div 
              key={type.value}
              className={`p-6 border-2 rounded-lg cursor-pointer transition-colors flex flex-col items-center text-center ${
                insuranceType === type.value 
                  ? "border-primary bg-primary-50 text-primary" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handleInsuranceTypeChange(type.value)}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-3">
                {type.value === "life" && <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                {type.value === "health" && <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                {type.value === "auto" && <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
                {type.value === "home" && <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                {type.value === "business" && <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
              </div>
              <h3 className="font-semibold">{type.label}</h3>
              {insuranceType === type.value && (
                <p className="text-sm mt-2">{INSURANCE_DESCRIPTIONS[type.value as InsuranceType]}</p>
              )}
            </div>
          ))}
        </div>
      </>
    );
  };

  // Auto insurance form steps
  const renderAutoForm = () => {
    const tooltips = INSURANCE_TOOLTIPS.auto;
  
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Vehicle Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Slider
                  label="Vehicle Value ($)"
                  tooltipText={tooltips.carValue}
                  min={1000}
                  max={100000}
                  step={1000}
                  value={[formData.carValue]}
                  valueDisplay={`$${formData.carValue.toLocaleString()}`}
                  onValueChange={(value) => handleSliderChange("carValue", value)}
                />
              </div>
              <div>
                <Slider
                  label="Vehicle Age (years)"
                  tooltipText={tooltips.carAge}
                  min={0}
                  max={20}
                  step={1}
                  value={[formData.carAge]}
                  valueDisplay={`${formData.carAge} ${formData.carAge === 1 ? 'year' : 'years'}`}
                  onValueChange={(value) => handleSliderChange("carAge", value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                Your ZIP Code
                <InfoTooltip content="Your location affects insurance rates based on local risk factors like accident rates and theft statistics." className="ml-1" />
              </label>
              <Input
                id="location"
                name="location"
                placeholder="Enter your zip code"
                value={formData.location}
                onChange={handleChange}
                className="border-2"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Driving Habits</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Slider
                  label="Annual Miles Driven"
                  tooltipText={tooltips.milesDriven}
                  min={1000}
                  max={30000}
                  step={1000}
                  value={[formData.milesDriven]}
                  valueDisplay={`${formData.milesDriven.toLocaleString()}`}
                  onValueChange={(value) => handleSliderChange("milesDriven", value)}
                />
              </div>

              <div>
                <label htmlFor="drivingRecord" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  Driving Record
                  <InfoTooltip content={tooltips.drivingRecord} className="ml-1" />
                </label>
                <Select 
                  value={formData.drivingRecord} 
                  onValueChange={(value) => handleSelectChange("drivingRecord", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select driving record" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clean">Clean (No violations in 3+ years)</SelectItem>
                    <SelectItem value="minor">Minor Violations (1-2 tickets)</SelectItem>
                    <SelectItem value="violations">Major Violations/Accidents</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Coverage Preferences</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  Risk Tolerance
                  <InfoTooltip content="Your risk tolerance affects deductible amount and coverage limits. Higher risk tolerance means you're comfortable with higher deductibles in exchange for lower premiums." className="ml-1" />
                </label>
                <Select 
                  value={formData.riskTolerance} 
                  onValueChange={(value) => handleSelectChange("riskTolerance", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select risk tolerance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (Lower deductibles, higher premium)</SelectItem>
                    <SelectItem value="moderate">Moderate (Balanced approach)</SelectItem>
                    <SelectItem value="high">High (Higher deductibles, lower premium)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                <h4 className="font-medium text-primary-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Auto Insurance Coverage Types
                </h4>
                <div className="text-sm text-primary-700 space-y-2">
                  <p><strong>Liability:</strong> Covers damage you cause to others' vehicles or property</p>
                  <p><strong>Collision:</strong> Covers damage to your vehicle from an accident</p>
                  <p><strong>Comprehensive:</strong> Covers damage from theft, weather, or other non-collision events</p>
                  <p><strong>Personal Injury Protection:</strong> Covers medical expenses regardless of fault</p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // Home insurance form steps
  const renderHomeForm = () => {
    const tooltips = INSURANCE_TOOLTIPS.home;
    
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Property Information</h3>
            <div>
              <Slider
                label="Home Value ($)"
                tooltipText={tooltips.homeValue}
                min={50000}
                max={1000000}
                step={10000}
                value={[formData.homeValue]}
                valueDisplay={`$${formData.homeValue.toLocaleString()}`}
                onValueChange={(value) => handleSliderChange("homeValue", value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                Your ZIP Code
                <InfoTooltip content={tooltips.location} className="ml-1" />
              </label>
              <Input
                id="location"
                name="location"
                placeholder="Enter your zip code"
                value={formData.location}
                onChange={handleChange}
                className="border-2"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Property Risk Factors</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="floodZone" 
                  checked={formData.preExistingConditions} 
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("preExistingConditions", checked === true)
                  }
                />
                <label
                  htmlFor="floodZone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  Property is in a flood zone or high-risk area
                  <InfoTooltip content={tooltips.floodZone} className="ml-1" />
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="securitySystem" 
                  checked={formData.smoker} 
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("smoker", checked === true)
                  }
                />
                <label
                  htmlFor="securitySystem"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  Home has security system installed
                  <InfoTooltip content={tooltips.securitySystem} className="ml-1" />
                </label>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Coverage Preferences</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-1">
                  Coverage Level Preference
                  <InfoTooltip content="Your coverage preference determines the level of protection for your home and belongings. Higher coverage means more comprehensive protection at a higher cost." className="ml-1" />
                </label>
                <Select 
                  value={formData.riskTolerance} 
                  onValueChange={(value) => handleSelectChange("riskTolerance", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select coverage preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Basic (Minimum required coverage)</SelectItem>
                    <SelectItem value="moderate">Standard (Recommended coverage)</SelectItem>
                    <SelectItem value="high">Premium (Maximum protection)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                <h4 className="font-medium text-primary-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Home Insurance Coverage Types
                </h4>
                <div className="text-sm text-primary-700 space-y-2">
                  <p><strong>Dwelling:</strong> Covers your home's structure</p>
                  <p><strong>Personal Property:</strong> Covers belongings inside your home</p>
                  <p><strong>Liability:</strong> Covers legal costs if someone is injured on your property</p>
                  <p><strong>Additional Living Expenses:</strong> Covers costs if you can't live in your home temporarily</p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // Life insurance form steps
  const renderLifeForm = () => {
    const tooltips = INSURANCE_TOOLTIPS.life;
    
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Slider
                  label="Your Age"
                  tooltipText={tooltips.age}
                  min={18}
                  max={75}
                  value={[formData.age]}
                  valueDisplay={formData.age}
                  onValueChange={(value) => handleSliderChange("age", value)}
                />
              </div>
              <div>
                <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  Number of Dependents
                  <InfoTooltip content={tooltips.dependents} className="ml-1" />
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
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Financial Information</h3>
            <div>
              <Slider
                label="Annual Income ($)"
                tooltipText={tooltips.income}
                min={20000}
                max={500000}
                step={5000}
                value={[formData.income]}
                valueDisplay={`$${formData.income.toLocaleString()}`}
                onValueChange={(value) => handleSliderChange("income", value)}
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Financial Obligations</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Slider
                  label="Total Debt ($)"
                  tooltipText={tooltips.debtAmount}
                  min={0}
                  max={1000000}
                  step={10000}
                  value={[formData.debtAmount]}
                  valueDisplay={`$${formData.debtAmount.toLocaleString()}`}
                  onValueChange={(value) => handleSliderChange("debtAmount", value)}
                />
              </div>
              <div>
                <Slider
                  label="Savings & Investments ($)"
                  tooltipText={tooltips.savingsAmount}
                  min={0}
                  max={1000000}
                  step={10000}
                  value={[formData.savingsAmount]}
                  valueDisplay={`$${formData.savingsAmount.toLocaleString()}`}
                  onValueChange={(value) => handleSliderChange("savingsAmount", value)}
                />
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Health Information</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="healthIssues" 
                  checked={formData.preExistingConditions} 
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("preExistingConditions", checked === true)
                  }
                />
                <label
                  htmlFor="healthIssues"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Do you have any significant health conditions?
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="smoker" 
                  checked={formData.smoker} 
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("smoker", checked === true)
                  }
                />
                <label
                  htmlFor="smoker"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Are you a smoker or tobacco user?
                </label>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                <h4 className="font-medium text-primary-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Life Insurance Types
                </h4>
                <div className="text-sm text-primary-700 space-y-2">
                  <p><strong>Term Life:</strong> Coverage for a specific period (10-30 years)</p>
                  <p><strong>Whole Life:</strong> Lifelong coverage that builds cash value</p>
                  <p><strong>Universal Life:</strong> Flexible premium payments and death benefits</p>
                  <p><strong>Variable Life:</strong> Cash value component can be invested</p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // Health insurance form steps
  const renderHealthForm = () => {
    const tooltips = INSURANCE_TOOLTIPS.health;
    
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Slider
                  label="Your Age"
                  tooltipText={tooltips.age}
                  min={18}
                  max={75}
                  value={[formData.age]}
                  valueDisplay={formData.age}
                  onValueChange={(value) => handleSliderChange("age", value)}
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Your ZIP Code
                </label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Enter your zip code"
                  value={formData.location}
                  onChange={handleChange}
                  className="border-2"
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Health Status</h3>
            <div>
              <label htmlFor="healthStatus" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                Overall Health Status
                <InfoTooltip content={tooltips.healthStatus} className="ml-1" />
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
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Health Risk Factors</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="preExistingConditions" 
                  checked={formData.preExistingConditions} 
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("preExistingConditions", checked === true)
                  }
                />
                <label
                  htmlFor="preExistingConditions"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  Do you have any pre-existing medical conditions?
                  <InfoTooltip content={tooltips.preExistingConditions} className="ml-1" />
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="smoker" 
                  checked={formData.smoker} 
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("smoker", checked === true)
                  }
                />
                <label
                  htmlFor="smoker"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  Are you a smoker or tobacco user?
                  <InfoTooltip content={tooltips.smoker} className="ml-1" />
                </label>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Coverage Preferences</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  Health Plan Preference
                  <InfoTooltip content="Different plans balance monthly premiums against out-of-pocket costs" className="ml-1" />
                </label>
                <Select 
                  value={formData.riskTolerance} 
                  onValueChange={(value) => handleSelectChange("riskTolerance", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select plan preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">High premium, low deductible</SelectItem>
                    <SelectItem value="moderate">Balanced premium and deductible</SelectItem>
                    <SelectItem value="high">Low premium, high deductible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                <h4 className="font-medium text-primary-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Health Insurance Coverage Types
                </h4>
                <div className="text-sm text-primary-700 space-y-2">
                  <p><strong>HMO Plans:</strong> Limited network, lower costs, PCP required</p>
                  <p><strong>PPO Plans:</strong> Larger network, higher costs, no referrals needed</p>
                  <p><strong>EPO Plans:</strong> Blend of HMO and PPO features</p>
                  <p><strong>HDHP:</strong> High deductible plans with HSA compatibility</p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  
  // Business insurance form steps
  const renderBusinessForm = () => {
    const tooltips = INSURANCE_TOOLTIPS.business;
    
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Business Information</h3>
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  Business Type
                  <InfoTooltip content={tooltips.businessType} className="ml-1" />
                </label>
                <Select 
                  value={formData.businessType} 
                  onValueChange={(value) => handleSelectChange("businessType", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="office">Professional Office</SelectItem>
                    <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="tech">Technology/IT</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  Number of Employees
                  <InfoTooltip content={tooltips.employees} className="ml-1" />
                </label>
                <Select 
                  value={formData.employees} 
                  onValueChange={(value) => handleSelectChange("employees", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select employee count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Self-employed only</SelectItem>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51+">51+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Financial Information</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Slider
                  label="Annual Revenue ($)"
                  tooltipText={tooltips.revenue}
                  min={0}
                  max={5000000}
                  step={50000}
                  value={[formData.revenue]}
                  valueDisplay={`$${formData.revenue.toLocaleString()}`}
                  onValueChange={(value) => handleSliderChange("revenue", value)}
                />
              </div>
              
              <div>
                <Slider
                  label="Property & Equipment Value ($)"
                  tooltipText={tooltips.businessProperty}
                  min={0}
                  max={2000000}
                  step={25000}
                  value={[formData.businessProperty]}
                  valueDisplay={`$${formData.businessProperty.toLocaleString()}`}
                  onValueChange={(value) => handleSliderChange("businessProperty", value)}
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Coverage Preferences</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  Risk Management Approach
                  <InfoTooltip content="Your approach to risk affects deductible amounts and coverage limits." className="ml-1" />
                </label>
                <Select 
                  value={formData.riskTolerance} 
                  onValueChange={(value) => handleSelectChange("riskTolerance", value)}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select risk approach" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Conservative (Higher coverage, higher premium)</SelectItem>
                    <SelectItem value="moderate">Balanced (Moderate coverage and premium)</SelectItem>
                    <SelectItem value="high">Aggressive (Lower coverage, lower premium)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                <h4 className="font-medium text-primary-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Business Insurance Types
                </h4>
                <div className="text-sm text-primary-700 space-y-2">
                  <p><strong>General Liability:</strong> Protection from third-party claims</p>
                  <p><strong>Property Insurance:</strong> Covers damage to business property</p>
                  <p><strong>Workers' Comp:</strong> Covers employee injuries and illnesses</p>
                  <p><strong>Business Interruption:</strong> Covers lost income during disruptions</p>
                  <p><strong>Professional Liability:</strong> Protection from professional negligence claims</p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
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
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">{insuranceType ? `Your ${INSURANCE_TYPES.find(t => t.value === insuranceType)?.label} Recommendation` : 'Your Insurance Recommendation'}</h3>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={handleReset}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Coverage Options */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Recommended Coverage Options</h4>
                
                <div className="space-y-4">
                  <div className="p-3 border-l-4 border-yellow-400 bg-yellow-50 rounded-r-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Basic</span>
                      <span className="font-semibold">{results.coverageOptions.basic}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border-l-4 border-primary bg-primary-50 rounded-r-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Recommended</span>
                      <span className="font-semibold">{results.coverageOptions.recommended}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border-l-4 border-purple-400 bg-purple-50 rounded-r-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Premium</span>
                      <span className="font-semibold">{results.coverageOptions.premium}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Estimated Premium */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2">Estimated Monthly Premium</h4>
                <p className="text-sm text-gray-500 mb-4">Based on your inputs and typical rates in your area</p>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      {results.monthlyPremiumRange.low} - {results.monthlyPremiumRange.high}
                    </span>
                    <span className="text-sm text-gray-500">per month</span>
                  </div>
                </div>
              </div>
              
              {/* Results summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Summary</h4>
                <p className="text-gray-700">{results.summary}</p>
              </div>
              
              {/* Email/Share Results */}
              <div className="bg-gray-50 rounded-lg p-6">
                <ResultsShareForm resultsData={results} insuranceType={insuranceType || 'insurance'} />
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Coverage Breakdown Chart */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Coverage Breakdown</h4>
                <InsuranceResultsChart data={results.breakdown} />
              </div>
              
              {/* Recommendations */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Expert Recommendations</h4>
                <ul className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Risk Factors */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Key Risk Factors</h4>
                <ul className="space-y-2">
                  {results.riskFactors.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary/20">
            <h4 className="text-lg font-semibold mb-2">Ready to Get Covered?</h4>
            <p className="text-sm mb-4">Get quotes from top insurers and find the best coverage for your needs.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button onClick={handleReset} variant="outline" className="border-2 border-primary hover:bg-primary-50">
                Start Over
              </Button>
              <Button className="bg-primary hover:bg-primary-700 flex items-center justify-center gap-2">
                <BarChart4 className="w-4 h-4" />
                Get Insurance Quotes
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Speak to an Expert
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          {step > 0 && insuranceType && (
            <>
              <div className="mb-6">
                <StepProgress currentStep={step} totalSteps={totalSteps} />
              </div>
              
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {INSURANCE_TYPES.find(t => t.value === insuranceType)?.label}
                </h3>
                <button 
                  type="button" 
                  className="text-sm text-primary flex items-center" 
                  onClick={() => setStep(0)}
                >
                  Change Insurance Type
                </button>
              </div>
            </>
          )}
          
          {renderFormStep()}
          
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4 pt-4">
            {step > 0 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleBack}
                className="border-2 border-gray-300"
              >
                Back
              </Button>
            )}
            
            {(step > 0 || insuranceType) && (
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary-700 text-white"
                disabled={loading || (step === 0 && !insuranceType)}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calculating...
                  </>
                ) : step === 0 ? (
                  "Continue"
                ) : step === totalSteps ? (
                  <>
                    <span>Get Recommendations</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  "Next"
                )}
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default InsuranceCalculator;
