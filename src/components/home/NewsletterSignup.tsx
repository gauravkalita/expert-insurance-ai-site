
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail, CheckCircle, FileText, Bell, Shield } from "lucide-react";

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
        description: "You've been subscribed to our newsletter. Check your email for your free Insurance Checklist!",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full text-primary font-medium text-sm mb-4">
                <Bell size={14} />
                <span>Get Weekly Insurance Updates</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Stay Informed with Insurance Expertise
              </h2>
              
              <p className="text-gray-700 mb-6">
                Join our newsletter for AI-summarized insurance news, expert tips, and exclusive content delivered to your inbox every week.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 py-6 border-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="btn-gradient whitespace-nowrap py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe Now"}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Weekly Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Privacy Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm">Free Insurance Checklist</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-50 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Free Insurance Checklist</h3>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                Subscribe today and receive our comprehensive Insurance Coverage Checklist to ensure you have all the protection you need.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Personalized coverage recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Policy comparison worksheet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Annual review template</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Claim filing guide</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/30 text-center">
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
