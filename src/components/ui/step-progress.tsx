
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  label?: boolean;
  className?: string;
}

export const StepProgress = ({ 
  currentStep, 
  totalSteps, 
  label = true,
  className
}: StepProgressProps) => {
  const progressPercentage = Math.min(Math.max((currentStep / totalSteps) * 100, 0), 100);
  
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</p>
          <span className="text-xs text-gray-500">{Math.round(progressPercentage)}% Complete</span>
        </div>
      )}
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
};
