
import React from "react";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface InfoTooltipProps {
  content: string;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

const InfoTooltip = ({ content, className, id, ariaLabel }: InfoTooltipProps) => {
  const tooltipId = id || `tooltip-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger 
          type="button" 
          className={cn("focus:outline-none focus-visible:ring-2 focus-visible:ring-primary", className)}
          aria-label={ariaLabel || "Information"}
          aria-describedby={tooltipId}
        >
          <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" aria-hidden="true" />
        </TooltipTrigger>
        <TooltipContent 
          id={tooltipId}
          className="max-w-xs bg-white p-2 text-sm shadow-lg"
          role="tooltip"
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(" ");

export { InfoTooltip };
