
import * as React from "react";
import { cn } from "@/lib/utils";

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  label?: boolean;
  className?: string;
}

export function StepProgress({
  currentStep,
  totalSteps,
  label = true,
  className,
}: StepProgressProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-center">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
      {label && (
        <div className="text-xs text-gray-500 text-center mt-2">
          Step {currentStep} of {totalSteps}
        </div>
      )}
    </div>
  );
}
