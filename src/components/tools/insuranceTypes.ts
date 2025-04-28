
// Insurance types data
export const INSURANCE_TYPES = [
  { value: "life", label: "Life Insurance" },
  { value: "health", label: "Health Insurance" },
  { value: "auto", label: "Auto Insurance" },
  { value: "home", label: "Home or Renters Insurance" },
  { value: "business", label: "Business Insurance" }
];

export type InsuranceType = "life" | "health" | "auto" | "home" | "business";

// Insurance description data
export const INSURANCE_DESCRIPTIONS = {
  life: "Provides financial protection for your loved ones in the event of your death.",
  health: "Covers medical expenses for illness, injury, and preventive care.",
  auto: "Protects against financial loss due to auto accidents or theft.",
  home: "Safeguards your home and personal property from damage or loss.",
  business: "Protects your business from various risks and liabilities."
};

// Insurance-specific tooltips data
export const INSURANCE_TOOLTIPS = {
  life: {
    age: "Your current age affects premium costs and coverage recommendations.",
    income: "Annual income is used to calculate income replacement needs for dependents.",
    debtAmount: "Include mortgage, auto loans, student loans, credit cards, and other debts.",
    savingsAmount: "Current savings and investments that could offset insurance needs.",
    dependents: "People who rely on your income, including spouse, children, or other family members."
  },
  health: {
    age: "Your age affects premium costs and coverage recommendations.",
    healthStatus: "Your general health condition helps determine premium costs.",
    preExistingConditions: "Medical conditions diagnosed before applying for insurance.",
    smoker: "Tobacco use significantly impacts health insurance premiums."
  },
  auto: {
    carValue: "The current market value of your vehicle.",
    carAge: "The age of your vehicle in years.",
    milesDriven: "Estimated miles driven per year affects your premium.",
    drivingRecord: "Your history of accidents, tickets, and violations."
  },
  home: {
    homeValue: "The current market value of your home, excluding land value.",
    location: "Your ZIP code helps determine local risks and rates.",
    floodZone: "Whether your property is located in a designated flood zone.",
    securitySystem: "Security features can reduce insurance premiums."
  },
  business: {
    businessType: "The type of business you operate affects coverage needs.",
    revenue: "Annual business revenue helps determine coverage amounts.",
    employees: "Number of employees impacts workers' compensation needs.",
    businessProperty: "Value of business property, equipment, and inventory."
  }
};

// Educational content for each insurance type
export const INSURANCE_EDUCATION = {
  life: {
    title: "Understanding Life Insurance",
    content: "Life insurance provides financial protection to your beneficiaries after your death. The coverage amount typically depends on your income, debts, and the future financial needs of your dependents.",
    keyTerms: [
      { term: "Term Life", definition: "Provides coverage for a specific period (10-30 years)." },
      { term: "Whole Life", definition: "Provides lifetime coverage and builds cash value." },
      { term: "Premium", definition: "The amount you pay for your insurance policy." },
      { term: "Beneficiary", definition: "The person(s) who receives the death benefit." }
    ]
  },
  health: {
    title: "Understanding Health Insurance",
    content: "Health insurance helps cover the cost of medical care. Plans vary in coverage levels, networks, and out-of-pocket costs like deductibles, copayments, and coinsurance.",
    keyTerms: [
      { term: "Premium", definition: "Monthly payment for your insurance coverage." },
      { term: "Deductible", definition: "Amount you pay before insurance begins covering costs." },
      { term: "Copayment", definition: "Fixed amount you pay for covered services." },
      { term: "Network", definition: "Healthcare providers who contract with your insurance plan." }
    ]
  },
  auto: {
    title: "Understanding Auto Insurance",
    content: "Auto insurance protects you financially in case of a car accident, theft, or damage. Coverage types include liability, collision, comprehensive, and personal injury protection.",
    keyTerms: [
      { term: "Liability", definition: "Covers damage you cause to others." },
      { term: "Collision", definition: "Covers damage to your car from an accident." },
      { term: "Comprehensive", definition: "Covers damage not caused by a collision (theft, weather)." },
      { term: "Deductible", definition: "Amount you pay before insurance covers a claim." }
    ]
  },
  home: {
    title: "Understanding Home Insurance",
    content: "Home insurance protects your dwelling, personal belongings, and provides liability coverage. It typically covers damage from fire, theft, and certain natural disasters.",
    keyTerms: [
      { term: "Dwelling Coverage", definition: "Protects the structure of your home." },
      { term: "Personal Property", definition: "Covers your belongings inside the home." },
      { term: "Liability Protection", definition: "Covers legal costs if someone is injured at your home." },
      { term: "Replacement Cost", definition: "Pays to replace items without depreciation." }
    ]
  },
  business: {
    title: "Understanding Business Insurance",
    content: "Business insurance protects companies from losses due to events that may occur during normal operations. Coverage types include liability, property, workers' compensation, and business interruption.",
    keyTerms: [
      { term: "General Liability", definition: "Covers claims of bodily injury or property damage." },
      { term: "Professional Liability", definition: "Protects against claims of negligence or malpractice." },
      { term: "Workers' Compensation", definition: "Covers employees injured on the job." },
      { term: "Business Interruption", definition: "Replaces income lost when business operations are halted." }
    ]
  }
};
