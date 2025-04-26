
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <>
      <SEOHead 
        title="Contact Us" 
        description="Get in touch with our insurance experts for personalized guidance and answers to your questions."
        keywords="insurance contact, insurance help, insurance advice, insurance consultation"
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Have questions or need guidance? Our insurance experts are here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input 
                        id="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your insurance needs..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-700">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@insurancexpertise.com" className="text-primary hover:underline">
                        contact@insurancexpertise.com
                      </a>
                    </div>
                    
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+1-800-555-0123" className="text-primary hover:underline">
                        +1 (800) 555-0123
                      </a>
                    </div>
                    
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 5pm EST
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">Frequently Asked</h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Check out our <a href="/blog" className="text-primary hover:underline">blog</a> for answers to common insurance questions.
                    </p>
                    <p className="text-gray-600">
                      Try our <a href="/tools" className="text-primary hover:underline">AI-powered tools</a> to get quick insurance guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
