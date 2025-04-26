
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Weekly Insurance Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter for AI-summarized insurance news, expert tips, and exclusive content delivered to your inbox every week.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow py-6 px-4 border-2 focus:border-primary focus:ring-primary"
              />
              <Button 
                type="submit" 
                className="btn-gradient whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">10k+</p>
              <p className="text-gray-600">Subscribers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">97%</p>
              <p className="text-gray-600">Open Rate</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">200+</p>
              <p className="text-gray-600">Articles</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">4.9/5</p>
              <p className="text-gray-600">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
