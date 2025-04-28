import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
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
import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { toast } from "@/hooks/use-toast";
import { Info, Save, Mail, LineChart, BarChart4, Send } from "lucide-react";

// Insurance types
const INSURANCE_TYPES = [
  { value: "auto", label: "Auto Insurance" },
  { value: "home", label: "Home Insurance" },
  { value: "life", label: "Life Insurance" },
  { value: "health", label: "Health Insurance" }
];

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
}

type InsuranceType = "auto" | "home" | "life" | "health";

const InsuranceCalculator = () => {
  // Main form state
  const [step, setStep] = useState(1);
  const [insuranceType, setInsuranceType] = useState<InsuranceType>("auto");
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
    // Advanced options
    riskTolerance: "moderate",
  });

  const [results, setResults] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Calculate total number of steps based on insurance type
  const getTotalSteps = () => {
    switch (insuranceType) {
      case "auto":
        return 3;
      case "home":
        return 3;
      case "life":
        return 4;
      case "health":
        return 4;
      default:
        return 3;
    }
  };

  const totalSteps = getTotalSteps();
  const progressPercentage = (step / totalSteps) * 100;

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
    setStep(1);
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
      ]
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
      ]
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
        { name: "Income Replacement", value: Math.round((incomeReplacement / totalNeeds) * 100), label: "Income" },
        { name: "Debt Coverage", value: Math.round((debtAmount / totalNeeds) * 100), label: "Debt" },
        { name: "Final Expenses", value: Math.round((income * 0.1 / totalNeeds) * 100), label: "Final Expenses" },
        { name: "Education/Other", value: Math.round((income * 0.2 / totalNeeds) * 100), label: "Education" }
      ]
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
      ]
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
    setStep(step - 1);
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
      riskTolerance: "moderate",
    });
    setResults(null);
    setStep(1);
    setInsuranceType("auto");
    toast({
      title: "Calculator Reset",
      description: "All inputs have been cleared.",
      variant: "default",
    });
  };

  const handleSaveResults = () => {
    toast({
      title: "Results Saved",
      description: "Your insurance needs assessment has been saved.",
      variant: "default",
    });
  };

  const handleEmailResults = () => {
    toast({
      title: "Email Feature",
      description: "This feature will be available soon. Please check back later.",
      variant: "default",
    });
  };

  // Chart configuration
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Render chart with insurance needs breakdown
  const renderPieChart = () => {
    if (!results) return null;

    return (
      <ChartContainer className="h-52 w-full" config={{}}>
        <PieChart>
          <Pie
            data={results.breakdown}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
            label={({ name, value }) => `${name}: ${value}%`}
            labelLine={false}
          >
            {results.breakdown.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                stroke="#fff"
              />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
    );
  };

  // Render the form steps based on insurance type and current step
  const renderFormStep = () => {
    switch (insuranceType) {
      case "auto":
        return renderAutoForm();
      case "home":
        return renderHomeForm();
      case "life":
        return renderLifeForm();
      case "health":
        return renderHealthForm();
      default:
        return renderAutoForm();
    }
  };

  // Auto insurance form steps
  const renderAutoForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Slider
                  label="Vehicle Value ($)"
                  tooltipText="The current market value of your vehicle"
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
                  tooltipText="The age of your vehicle in years"
                  min={0}
                  max={20}
                  step={1}
                  value={[formData.carAge]}
                  valueDisplay={`${formData.carAge} ${formData.carAge === 1 ? 'year' : 'years'}`}
                  onValueChange={(value) => handleSliderChange("carAge", value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Your Zip Code
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
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Slider
                  label="Annual Miles Driven"
                  tooltipText="Estimated miles driven per year"
                  min={1000}
                  max={30000}
                  step={1000}
                  value={[formData.milesDriven]}
                  valueDisplay={`${formData.milesDriven.toLocaleString()}`}
                  onValueChange={(value) => handleSliderChange("milesDriven", value)}
                />
              </div>

              <div>
                <label htmlFor="drivingRecord" className="block text-sm font-medium text-gray-700 mb-1">
                  Driving Record
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
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-1">
                  Risk Tolerance
                  <span className="ml-1 inline-block">
                    <Popover>
                      <PopoverTrigger>
                        <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <p className="text-sm text-gray-600">
                          Your risk tolerance affects deductible amount and coverage limits. Higher risk tolerance means you're 
                          comfortable with higher deductibles in exchange for lower premiums.
                        </p>
                      </PopoverContent>
                    </Popover>
                  </span>
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
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Privacy & Data Usage
                </h4>
                <p className="text-sm text-amber-700">
                  Your information is used only to generate recommendations and is never stored or shared with third parties.
                  This calculator provides estimates and should not replace professional insurance advice.
                </p>
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
    switch (step) {
      case 1:
        return (
          <>
            <div>
              <Slider
                label="Home Value ($)"
                tooltipText="The current market value of your home"
                min={50000}
                max={1000000}
                step={10000}
                value={[formData.homeValue]}
                valueDisplay={`$${formData.homeValue.toLocaleString()}`}
                onValueChange={(value) => handleSliderChange("homeValue", value)}
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Your Zip Code
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
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Property is in a flood zone or high-risk area
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
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Home has security system installed
                </label>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-1">
                  Coverage Level Preference
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
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Coverage Information
                </h4>
                <p className="text-sm text-amber-700">
                  Home insurance typically covers your dwelling, personal property, liability, and additional living expenses.
                  Consider additional coverage for valuable items, flood insurance, or earthquake protection if needed.
                </p>
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
    switch (step) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Slider
                  label="Your Age"
                  min={18}
                  max={75}
                  value={[formData.age]}
                  valueDisplay={formData.age}
                  onValueChange={(value) => handleSliderChange("age", value)}
                />
              </div>
              <div>
                <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Dependents
                  <span className="ml-1 inline-block">
                    <Popover>
                      <PopoverTrigger>
                        <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <p className="text-sm text-gray-600">
                          Include spouse, children, or others who depend on your income
                        </p>
                      </PopoverContent>
                    </Popover>
                  </span>
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
            <div>
              <Slider
                label="Annual Income ($)"
                tooltipText="Your gross annual income before taxes"
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
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Slider
                  label="Total Debt ($)"
                  tooltipText="Include mortgage, auto loans, student loans, credit cards, etc."
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
                  tooltipText="Current savings, investments, and retirement accounts"
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
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Life Insurance Types
                </h4>
                <p className="text-sm text-amber-700">
                  Term life insurance provides coverage for a specific period (10-30 years), while permanent insurance (whole life, universal life) 
                  provides lifelong coverage and builds cash value.
                </p>
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
    switch (step) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Slider
                  label="Your Age"
                  min={18}
                  max={75}
                  value={[formData.age]}
                  valueDisplay={formData.age}
                  onValueChange={(value) => handleSliderChange("age", value)}
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Zip Code
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
          </>
        );
      case 3:
        return (
          <>
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
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Do you have any pre-existing medical conditions?
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
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-1">
                  Health Insurance Plan Preference
                  <span className="ml-1 inline-block">
                    <Popover>
                      <PopoverTrigger>
                        <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <p className="text-sm text-gray-600">
                          Different plans balance monthly premiums against out-of-pocket costs
                        </p>
                      </PopoverContent>
                    </Popover>
                  </span>
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

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 flex items-center mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  Health Plan Information
                </h4>
                <p className="text-sm text-amber-700">
                  Health insurance plans vary in network size, coverage, copays, and deductibles. Lower premium plans typically have higher out-of-pocket costs.
                  Consider your healthcare needs and budget when selecting a plan.
                </p>
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

      {/* Insurance Type Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Insurance Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {INSURANCE_TYPES.map((type) => (
            <button
              key={type.value}
              className={`p-3 border-2 rounded-lg flex flex-col items-center justify-center transition-colors ${
                insuranceType === type.value
                  ? "border-primary bg-primary-50 text-primary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handleInsuranceTypeChange(type.value)}
              type="button"
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {results ? (
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Your Insurance Recommendation</h3>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={handleSaveResults}
              >
                <Save className="w-4 h-4" />
                Save
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={handleEmailResults}
              >
                <Mail className="w-4 h-4" />
                Email
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
            
            <div className="space-y-6">
              {/* Coverage Breakdown Chart */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Coverage Breakdown</h4>
                <div className="flex items-center justify-center">
                  {renderPieChart()}
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {results.breakdown.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-sm" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="text-sm">{item.label}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recommendations */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Expert Recommendations</h4>
                <ul className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{rec}</span>
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
            
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <Button onClick={handleReset} variant="outline" className="border-2 border-primary hover:bg-primary-50">
                Start Over
              </Button>
              <Button className="bg-primary hover:bg-primary-700">
                Get Insurance Quotes
              </Button>
              <Button variant="outline" className="border-2 border-gray-300">
                Speak to an Expert
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</p>
              <div className="w-32 text-xs text-gray-500">{insuranceType.toUpperCase()} INSURANCE</div>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          {renderFormStep()}
          
          {/* Advanced Options Toggle */}
          {step === totalSteps && !showAdvanced && (
            <div className="mt-2">
              <button
                type="button"
                className="text-sm text-primary flex items-center"
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                <span className="mr-1">Show advanced options</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
          
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4">
            {step > 1 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleBack}
                className="border-2 border-gray-300"
              >
                Back
              </Button>
            )}
            <Button 
              type="submit"
              className="bg-primary hover:bg-primary-700 text-white"
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
              ) : step === totalSteps ? (
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
