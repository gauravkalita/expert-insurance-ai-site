
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { Info } from "lucide-react"

import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  label?: string
  tooltipText?: string
  valueDisplay?: string | number
  min?: number
  max?: number
  step?: number
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, label, tooltipText, valueDisplay, min, max, step = 1, ...props }, ref) => (
  <div className="space-y-2">
    {label && (
      <div className="flex items-center gap-2 mb-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        {tooltipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger type="button" className="focus:outline-none">
                <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs bg-white p-2 text-sm">
                {tooltipText}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    )}
    <div className="flex items-center gap-4">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        min={min}
        max={max}
        step={step}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
      {valueDisplay !== undefined && (
        <div className="w-16 rounded-md border border-input bg-background px-2 py-1 text-sm text-center">
          {valueDisplay}
        </div>
      )}
    </div>
  </div>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
