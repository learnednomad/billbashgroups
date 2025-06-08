import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Terms of Service</h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg prose max-w-none">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Agreement to Terms</h2>
            <p>By accessing or using the Bill Bash Group website (the "Site") and any services provided by us (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site or Services.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-2">2. Changes to Terms or Services</h2>
            <p>We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications. It’s important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site, you are indicating to us that you agree to be bound by the modified Terms.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Who May Use the Services</h2>
            <p>You may use the Services only if you are 18 years or older and capable of forming a binding contract with Bill Bash Group and are not barred from using the Services under applicable law.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Privacy Policy</h2>
            <p>Please refer to our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for information on how we collect, use, and disclose information from our users.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Content and Content Rights</h2>
            <p>For purposes of these Terms: (i) "Content" means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided or otherwise made available through the Services; and (ii) "User Content" means any Content that Account holders (including you) provide to be made available through the Services. Content includes without limitation User Content.</p>
            <p>Bill Bash Group does not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your User Content. Subject to the foregoing, Bill Bash Group and its licensors exclusively own all right, title and interest in and to the Services and Content, including all associated intellectual property rights.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. General Prohibitions</h2>
            <p>You agree not to do any of the following:</p>
            <ul className="list-disc pl-6">
              <li>Use, display, mirror or frame the Services or any individual element within the Services, Bill Bash Group’s name, any Bill Bash Group trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without Bill Bash Group’s express written consent;</li>
              <li>Access, tamper with, or use non-public areas of the Services, Bill Bash Group’s computer systems, or the technical delivery systems of Bill Bash Group’s providers;</li>
              <li>Attempt to probe, scan or test the vulnerability of any Bill Bash Group system or network or breach any security or authentication measures;</li>
              <li>Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by Bill Bash Group or any of Bill Bash Group’s providers or any other third party (including another user) to protect the Services or Content;</li>
              <li>Violate any applicable law or regulation; or</li>
              <li>Encourage or enable any other individual to do any of the foregoing.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Links to Third Party Websites or Resources</h2>
            <p>The Services may contain links to third-party websites or resources. We provide these links only as a convenience and are not responsible for the content, products or services on or available from those websites or resources or links displayed on such websites.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Termination</h2>
            <p>We may terminate your access to and use of the Services, at our sole discretion, at any time and without notice to you.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">9. Warranty Disclaimers</h2>
            <p>THE SERVICES AND CONTENT ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">10. Limitation of Liability</h2>
            <p>NEITHER BILL BASH GROUP NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES OR CONTENT WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">11. Governing Law</h2>
            <p>These Terms and any action related thereto will be governed by the laws of [Your Jurisdiction] without regard to its conflict of laws provisions.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">12. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at info@billbashgroup.com.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;