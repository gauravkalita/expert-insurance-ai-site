
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Search, FileText } from "lucide-react";
import InsuranceCalculator from "@/components/tools/InsuranceCalculator";
import GlossarySearch from "@/components/tools/GlossarySearch";
import PremiumContentGenerator from "@/components/tools/PremiumContentGenerator";

const ToolsTabs = () => {
  return (
    <div className="mb-16">
      <Tabs defaultValue="calculator">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-gray-100 p-1">
            <TabsTrigger value="calculator">
              <Calculator className="w-4 h-4 mr-2" />
              Insurance Calculator
            </TabsTrigger>
            <TabsTrigger value="glossary">
              <Search className="w-4 h-4 mr-2" />
              Insurance Glossary
            </TabsTrigger>
            <TabsTrigger value="premium">
              <FileText className="w-4 h-4 mr-2" />
              Content Generator
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="calculator" id="calculator">
          <InsuranceCalculator />
        </TabsContent>
        
        <TabsContent value="glossary" id="glossary">
          <GlossarySearch />
        </TabsContent>
        
        <TabsContent value="premium" id="premium">
          <PremiumContentGenerator />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ToolsTabs;
