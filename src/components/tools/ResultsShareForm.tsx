
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Mail, Copy, Share2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface ResultsShareFormProps {
  resultsData: any;
  insuranceType: string;
}

interface FormValues {
  email: string;
}

export const ResultsShareForm = ({ resultsData, insuranceType }: ResultsShareFormProps) => {
  const [isSending, setIsSending] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
  });

  const handleEmailResults = async (values: FormValues) => {
    setIsSending(true);
    
    // Simulate email sending
    setTimeout(() => {
      setIsSending(false);
      form.reset();
      toast({
        title: "Results Sent",
        description: `Your ${insuranceType} insurance needs assessment has been sent to ${values.email}.`,
      });
    }, 1500);
  };

  const handleCopyLink = () => {
    // In a real app, you'd generate a shareable link here
    // For demo, we'll just simulate copying a link
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link Copied",
          description: "A link to your results has been copied to your clipboard.",
        });
      })
      .catch(() => {
        toast({
          title: "Copy Failed",
          description: "Failed to copy the link. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Share Your Results</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleEmailResults)} className="flex gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Email your results" 
                    className="border-2" 
                    required
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isSending}
            className="flex items-center gap-2"
          >
            {isSending ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                Send
              </>
            )}
          </Button>
        </form>
      </Form>
      
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1 flex items-center justify-center gap-2"
          onClick={handleCopyLink}
        >
          <Copy className="h-4 w-4" />
          Copy Link
        </Button>
        <Button 
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2"
          onClick={() => {
            toast({
              title: "Share Feature",
              description: "Social sharing will be available soon.",
            });
          }}
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>
    </div>
  );
};
