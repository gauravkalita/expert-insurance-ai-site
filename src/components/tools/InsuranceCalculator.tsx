import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Calculator,
  SlidersHorizontal,
  Mail,
  Link as LinkIcon,
  Copy,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InfoTooltip } from '@/components/ui/info-tooltip';
import ResultsShareForm from './ResultsShareForm';
import { useToast } from '@/hooks/use-toast';

const InsuranceCalculator = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('');
  const [recommendedCoverage, setRecommendedCoverage] = useState<number | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setRecommendedCoverage(null); // Reset coverage on type change
  };

  const calculateCoverage = () => {
    let coverage = 0;
    switch (selectedType) {
      case 'renters':
        coverage = 30000;
        break;
      case 'homeowners':
        coverage = 200000;
        break;
      case 'auto':
        coverage = 50000;
        break;
      default:
        coverage = 0;
    }
    setRecommendedCoverage(coverage);
  };

  const handleShare = () => {
    // Check if calculation is performed
    if (!selectedType || !recommendedCoverage) {
      useToast().toast({
        title: "No calculation to share",
        description: "Please calculate your recommended coverage first.",
        variant: "destructive",
      });
      return;
    }

    setIsShareModalOpen(true);
  };

  const handleCopy = () => {
    if (recommendedCoverage) {
      const url = `${window.location.origin}/tools?type=${selectedType}&coverage=${recommendedCoverage}`;
      navigator.clipboard.writeText(url)
        .then(() => {
          setCopySuccess(true);
          useToast().toast({
            title: "Link copied!",
            description: "Share this link to show your recommended coverage.",
          });
          setTimeout(() => setCopySuccess(false), 3000);
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
          useToast().toast({
            title: "Copy failed",
            description: "Failed to copy the link. Please try again.",
            variant: "destructive",
          });
        });
    }
  };

  const handleShareSuccess = () => {
    setIsShareModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Insurance Coverage Calculator - Get Instant Recommendations</title>
        <meta name="description" content="Calculate your ideal insurance coverage with our free tool. Get instant recommendations for renters, homeowners, and auto insurance." />
        <meta property="og:title" content="Insurance Coverage Calculator - Get Instant Recommendations" />
        <meta property="og:description" content="Calculate your ideal insurance coverage with our free tool. Get instant recommendations for renters, homeowners, and auto insurance." />
        <meta property="og:url" content="https://yourwebsite.com/tools/insurance-calculator" />
        {/* Add more meta tags for SEO as needed */}
      </Helmet>

      <section className="section-padding pt-24">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Insurance Coverage Calculator</h1>
          </div>

          <p className="mb-8">
            Use our free insurance calculator to estimate your ideal coverage amounts. Simply select the type of insurance you're interested in, and we'll provide a recommendation based on industry standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Calculator */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-gray-100">
                <div className="space-y-2">
                  <Label htmlFor="insuranceType">
                    Type of Insurance
                    <InfoTooltip content="Select the type of insurance you want to calculate coverage for." />
                  </Label>
                  <Select onValueChange={handleTypeChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="renters">Renters Insurance</SelectItem>
                      <SelectItem value="homeowners">Homeowners Insurance</SelectItem>
                      <SelectItem value="auto">Auto Insurance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateCoverage} disabled={!selectedType} className="w-full">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Calculate Recommended Coverage
                </Button>
              </div>

              {recommendedCoverage !== null && (
                <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold mb-4">Recommended Coverage</h2>
                  <p className="text-gray-600">Based on your selection, we recommend a coverage amount of:</p>
                  <div className="text-2xl font-bold text-primary mt-2">${recommendedCoverage.toLocaleString()}</div>

                  <div className="flex justify-between gap-3 mt-6">
                    <Button variant="outline" onClick={handleShare}>
                      <Mail className="h-4 w-4 mr-2" />
                      Share Results
                    </Button>
                    <Button variant="outline" onClick={handleCopy} disabled={copySuccess}>
                      {copySuccess ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Link
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Informational Content */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Why is Insurance Coverage Important?</h2>
                <p className="text-gray-700 mb-4">
                  Adequate insurance coverage protects you from financial losses due to unexpected events. Whether it's damage to your property, liability for injuries, or losses from accidents, having the right coverage can provide peace of mind and financial security.
                </p>

                <h3 className="text-lg font-semibold mb-2">Understanding Coverage Types</h3>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li><strong>Renters Insurance:</strong> Covers your personal property in a rented apartment or home.</li>
                  <li><strong>Homeowners Insurance:</strong> Protects your home and personal property from various risks, including fire, theft, and natural disasters.</li>
                  <li><strong>Auto Insurance:</strong> Provides financial protection in the event of a car accident, covering damages and injuries.</li>
                </ul>

                <p className="text-gray-700">
                  Consult with an insurance professional to determine the specific coverage amounts and types that are right for your individual needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Results Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Share Your Results</h2>
            <ResultsShareForm
              type={selectedType}
              coverage={recommendedCoverage || 0}
              onSuccess={handleShareSuccess}
              onCancel={() => setIsShareModalOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InsuranceCalculator;
