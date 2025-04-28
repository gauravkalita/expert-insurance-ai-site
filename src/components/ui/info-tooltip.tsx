
import React from "react";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface InfoTooltipProps {
  content: string;
  className?: string;
}

const InfoTooltip = ({ content, className }: InfoTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger type="button" className={cn("focus:outline-none", className)}>
          <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-white p-2 text-sm">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(" ");

export { InfoTooltip };
