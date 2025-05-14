
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/shared/SEOHead";

const TermsOfService = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service" 
        description="Please read these terms of service carefully before using the Insurance Expertise website."
        keywords="terms of service, terms and conditions, user agreement, legal terms, disclaimer"
      />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">Last Updated: May 14, 2025</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Insurance Expertise ("we," "us," or "our"), concerning your access to and use of the insuranceexpertise.com website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p>
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are prohibited from using the Site and must discontinue use immediately.
              </p>
              
              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p>
                Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
              </p>
              
              <h2>3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that:
              </p>
              <ul>
                <li>You have the legal capacity and agree to comply with these Terms of Service</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>
              
              <h2>4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p>
                As a user of the Site, you agree not to:
              </p>
              <ul>
                <li>Systematically retrieve data or content to create a collection or database</li>
                <li>Trick, defraud, or mislead us and other users</li>
                <li>Circumvent, disable, or otherwise interfere with security features of the Site</li>
                <li>Engage in unauthorized framing or linking to the Site</li>
                <li>Make improper use of our support services</li>
                <li>Attempt to impersonate another user or person</li>
                <li>Use any information obtained from the Site to harass, abuse, or harm another person</li>
                <li>Upload or transmit viruses, Trojan horses, or other malicious code</li>
              </ul>
              
              <h2>5. User Generated Contributions</h2>
              <p>
                The Site may invite you to chat, contribute to, or participate in blogs, message boards, forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
              </p>
              <p>
                Any Contributions you transmit to the Site will be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that you own all rights to your Contributions.
              </p>
              
              <h2>6. Disclaimer</h2>
              <p>
                The information provided on the Site is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
              </p>
              <p>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
              </p>
              
              <h2>7. Insurance Information Disclaimer</h2>
              <p>
                The insurance information provided on this Site is for educational purposes only and does not constitute insurance advice. The content should not be used as a substitute for professional insurance, financial, or legal advice.
              </p>
              <p>
                Before making any insurance decisions, we recommend consulting with qualified insurance professionals or licensed agents who can evaluate your specific circumstances and provide personalized recommendations.
              </p>
              
              <h2>8. Term and Termination</h2>
              <p>
                These Terms of Service shall remain in full force and effect while you use the Site. We may terminate your access to the Site, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account.
              </p>
              
              <h2>9. Modifications and Interruptions</h2>
              <p>
                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
              </p>
              <p>
                We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Site.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of the United States. Insurance Expertise and yourself irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
              
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                Email: legal@insuranceexpertise.com<br />
                Phone: (800) 555-0123<br />
                Address: 123 Insurance Ave, Suite 100, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
