
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/shared/SEOHead";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy" 
        description="Learn about how Insurance Expertise collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, personal information, cookies, GDPR, insurance website"
      />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">Last Updated: May 14, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                At Insurance Expertise ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website insuranceexpertise.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
              </p>
              
              <h2>2. Information We Collect</h2>
              
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Register for an account</li>
                <li>Sign up for our newsletter</li>
                <li>Request information or assistance</li>
                <li>Participate in activities on the Site</li>
                <li>Submit comments or questions</li>
              </ul>
              <p>
                The personal information we may collect includes your name, email address, phone number, and any other information you choose to provide.
              </p>
              
              <h3>Automatically Collected Information</h3>
              <p>
                When you access our Site, we automatically collect certain information about your device and usage of the Site, including:
              </p>
              <ul>
                <li>Device type and operating system</li>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referral sources</li>
                <li>Interactions with site elements</li>
                <li>Location information (with your consent)</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>Providing, maintaining, and improving our Site</li>
                <li>Processing transactions and sending related information</li>
                <li>Sending administrative information, updates, and security alerts</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Delivering personalized content and recommendations</li>
                <li>Monitoring and analyzing usage trends</li>
                <li>Preventing fraudulent transactions and monitoring against errors</li>
                <li>Sending marketing communications (with your consent)</li>
              </ul>
              
              <h2>4. Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our Site and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <p>
                The types of cookies we use include:
              </p>
              <ul>
                <li>Essential cookies: Necessary for the website to function properly</li>
                <li>Preference cookies: Remember your preferences and settings</li>
                <li>Analytics cookies: Help us understand how visitors interact with our Site</li>
                <li>Marketing cookies: Track visitors across websites to display relevant advertisements</li>
              </ul>
              
              <h2>5. Disclosure of Your Information</h2>
              <p>
                We may share your information in the following situations:
              </p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
                <li>With business partners, with your consent</li>
              </ul>
              
              <h2>6. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
              
              <h2>7. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to:
              </p>
              <ul>
                <li>Access the personal information we have about you</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to our processing of your personal information</li>
                <li>Request restriction of processing of your personal information</li>
                <li>Request transfer of your personal information</li>
                <li>Opt-out of certain data sharing scenarios</li>
              </ul>
              
              <h2>8. Children's Privacy</h2>
              <p>
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
              
              <h2>9. Changes to this Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@insuranceexpertise.com<br />
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

export default PrivacyPolicy;
