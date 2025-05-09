import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { useToast } from "@/hooks/use-toast"; 

interface ResultsShareFormProps {
  onSuccess?: () => void;
}

const ResultsShareForm = ({ onSuccess }: ResultsShareFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      useToast().toast({
        title: "Success!",
        description: "Your calculation results have been sent to your email.",
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
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Results"}
      </Button>
    </form>
  );
};

export default ResultsShareForm;
