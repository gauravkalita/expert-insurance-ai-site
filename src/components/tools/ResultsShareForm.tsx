
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { useToast } from "@/hooks/use-toast"; 
import LoadingSpinner from "@/components/ui/loading-spinner";

interface ResultsShareFormProps {
  type?: string;
  coverage?: number;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const ResultsShareForm = ({ type, coverage, onSuccess, onCancel }: ResultsShareFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Success!",
        description: `Your ${type || "insurance"} calculation results ${coverage ? `(${coverage}% coverage)` : ""} have been sent to ${email}.`,
      });
      onSuccess?.();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">
          Email Address
          <InfoTooltip content="Enter your email to receive the results of your insurance coverage calculation." />
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          className="focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full relative"
        aria-label={isSubmitting ? "Sending results..." : "Send Results"}
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" className="mr-2" />
            <span>Sending...</span>
          </>
        ) : (
          "Send Results"
        )}
      </Button>
      {onCancel && (
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel} 
          className="w-full mt-2"
          aria-label="Cancel"
        >
          Cancel
        </Button>
      )}
    </form>
  );
};

export default ResultsShareForm;
